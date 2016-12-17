# Name: Jelle Mul
# Student number: 11402148

import csv, codecs, cStringIO
import json

from pattern.web import URL, DOM

# open input and output file
csvfile = open('Dataprocessing\Homework\Week_7\dataweek7.csv', 'r')
jsonfile = open('Dataprocessing\Homework\Week_7\dataweek7.json', 'w')

# make 5 fieldnames
fieldnames = ("rank","country","quality","purchasing","safety", "health", "cost", "property", "traffic", "pollution", "climate")

# iterate through csv file
reader = csv.DictReader(csvfile, fieldnames)
for row in reader:
    # write csv into json
    json.dump(row, jsonfile)
    # give right format
    jsonfile.write(',\n')
