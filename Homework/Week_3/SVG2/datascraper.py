# Name: Jelle Mul
# Student number: 11402148

import csv, codecs, cStringIO
import json

from pattern.web import URL, DOM

# where I retrieved my data, but didn't scrape the site, copied the table to excel instead.
TARGET_URL = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population"

# open input and output file
csvfile = open('Dataprocessing\Homework\Week_3\SVG2\data.csv', 'r')
jsonfile = open('Dataprocessing\Homework\Week_3\SVG2\data.json', 'w')

# make two fieldnames
fieldnames = ("country","data")

# iterate through csv file
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    # write csv into json
    json.dump(row, jsonfile)
    # give right format
    jsonfile.write(',\n')
