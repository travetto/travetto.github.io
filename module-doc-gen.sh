#!/bin/bash

DOC_ROOT=src/app/documentation

echo 'export const PAGES = [' > $DOC_ROOT/pages.ts

for x in `ls ../ | grep -v 'github.io\|inky\|js-yaml\|test-plugin'`; do   
  if [[ -d "../$x" ]]; then
    HTML="$DOC_ROOT/$x/$x.component.html"
    if [[ ! -f "$HTML" ]]; then
      ng g c documentation/$x
    fi
    ./node_modules/.bin/marked ../$x/README.md > $HTML
    TITLE=`cat $HTML | grep '<h1' | head -n1 | sed -e 's|<[^>]*>||g' -e 's|travetto:[ ]*||i'`
    echo "  ['$x', '$TITLE']," >> $DOC_ROOT/pages.ts
  fi
done

echo "];" >> $DOC_ROOT/pages.ts