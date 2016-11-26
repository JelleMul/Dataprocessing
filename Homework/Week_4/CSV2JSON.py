# Name: Jelle Mul
# Student number: 11402148

import csv, codecs, cStringIO
import json

from pattern.web import URL, DOM

# open input and output file
csvfile = open('Dataprocessing\Homework\Week_4\maanddata.csv', 'r')
jsonfile = open('Dataprocessing\Homework\Week_4\data.json', 'w')

# make two fieldnames
fieldnames = ("month","temp")

# iterate through csv file
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    # write csv into json
    json.dump(row, jsonfile)
    # give right format
    jsonfile.write(',\n')
