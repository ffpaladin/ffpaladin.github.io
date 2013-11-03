#!/bin/sh

name="./stories_ans/story$(date +%Y_%m_%d_%s)" 

grep presentation answerset.txt | sed 's/\(.*\)\([0-9]\)\(.*\)/\1 \2 \3;/' | sort -n -k 2 > $name.txt

cat storyspec.txt > $name.spec
