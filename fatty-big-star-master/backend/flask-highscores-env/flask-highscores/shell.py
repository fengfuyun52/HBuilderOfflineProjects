#!/usr/bin/env python2.7
"""
/shell.py will allow you to get a console and enter commands
within your flask environment.
"""
import os
import sys
import readline
from pprint import pprint

from flask import *

sys.path.insert(0, '/home/lucas/www/fatty-big-star/backend/'
                   'flask-highscores-env/flask-highscores')

from backend import *

os.environ['PYTHONINSPECT'] = 'True'
