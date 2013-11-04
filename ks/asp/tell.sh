#!/bin/sh

grep presentation answerset.txt | sed 's/\(.*\)\([0-9]\)\(.*\)/\1 \2 \3;/' | sort -n -k 2 | cat

