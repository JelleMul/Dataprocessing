#!/usr/bin/env python
# Name: Jelle Mul
# Student number: 11402148

'''
This script scrapes IMDB and outputs a CSV file with highest rated tv series.
'''
from __future__ import print_function

import csv, codecs, cStringIO

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

class UnicodeWriter:
    """
    A CSV writer which will write rows to CSV file "f",
    which is encoded in the given encoding.
    """

    def __init__(self, f, dialect=csv.excel, encoding="utf-8", **kwds):
        # Redirect output to a queue
        self.queue = cStringIO.StringIO()
        self.writer = csv.writer(self.queue, dialect=dialect, **kwds)
        self.stream = f
        self.encoder = codecs.getincrementalencoder(encoding)()

    def writerow(self, row):
        self.writer.writerow([s.encode("utf-8") for s in row])
        # Fetch UTF-8 output from the queue ...
        data = self.queue.getvalue()
        data = data.decode("utf-8")
        # ... and reencode it into the target encoding
        data = self.encoder.encode(data)
        # write to the target stream
        self.stream.write(data)
        # empty queue
        self.queue.truncate(0)

    def writerows(self, rows):
        for row in rows:
            self.writerow(row)

def extract_tvseries(dom):
    '''
    Extract a list of highest rated TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Rating
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''

    # create an array to save the output from the complete html
    array_1= []
    # look into the div lister-item-content
    for i in dom.by_tag("div.lister-item-content")[:50]: # Top 50 imbd Series
        # create array for only one serie
        array_2 = []
        # extract title
        for j in i.by_tag("a")[:1]:
            array_2.append(j.content)
        # extract score
        for k in i.by_tag("strong"):
            array_2.append(k.content)
        # extract genre
        for l in i.by_tag("span.genre"):
            array_2.append(l.content[1:])
        # save actors and actresses in array_3 seperated by comma
        array_3 = []
        for m in i.by_tag("p"):
            for n in m.by_tag("a"):
                array_3.append(n.content)
        # put array_3 in array_2
        Actors = ", ".join(array_3)
        array_2.append(Actors)
        # extract runtime from html
        for o in i.by_tag("span.runtime"):
            # delete last 3 characters (min)
            runtime = str(o.content)[:-3]
            array_2.append(runtime)
        # add array_2 to array_1
        array_1.append(array_2)
    return array_1


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest rated TV-series.
    '''
    # use UnicodeWriter to csv file
    writer = UnicodeWriter(f)
    # write headers in csv file
    writer.writerow(['Title', 'Rating', 'Genre', 'Actors', 'Runtime'])
    # iterate through the array tvseries write in csv file
    for row in tvseries:
        writer.writerow(row)

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
