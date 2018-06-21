#!/bin/bash

for x in `ls ../ | grep -v 'github.io\|inky\|js-yaml\|test-plugin'`; do 
  if [[ -d "../$x" ]]; then
    ng g c documentation/$x
    ./node_modules/.bin/marked ../$x/README.md > src/app/documentation/$x/$x.component.html
  fi
done