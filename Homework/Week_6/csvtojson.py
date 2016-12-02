# Name: Jelle Mul
# Student number: 11402148

import csv, codecs, cStringIO
import json

from pattern.web import URL, DOM

# open input and output file
csvfile = open('Dataprocessing\Homework\Week_6\dataweek6.csv', 'r')
jsonfile = open('Dataprocessing\Homework\Week_6\dataweek6.json', 'w')

# make 5 fieldnames
fieldnames = ("location","date","mintemp","maxtemp","avgtemp")

# iterate through csv file
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    # write csv into json
    json.dump(row, jsonfile)
    # give right format
    jsonfile.write(',\n')
