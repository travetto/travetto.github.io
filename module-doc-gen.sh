#!/bin/bash

DOC_ROOT=src/app/documentation

IMPORTS="import { Type } from '@angular/core';"
PAGES=''

PAGE_FILE=$DOC_ROOT/pages.ts

for x in `ls ../ | grep -v 'github.io\|inky\|js-yaml\|test-plugin'`; do   
  if [[ -d "../$x" ]]; then
    HTML="$DOC_ROOT/$x/$x.component.html"
    if [[ ! -f "$HTML" ]]; then
      ng g c documentation/$x
    fi
    TITLE=`cat $HTML | grep '<h1' | head -n1 | sed -e 's|<[^>]*>||g' -e 's|travetto:[ ]*||i'`
    COMP=`cat $DOC_ROOT/$x/$x.component.ts | grep class | awk '{ print $3 }'`
    ./node_modules/.bin/marked ../$x/README.md | sed -e 's|\([{}]\)|{{ "\1" }}|g' > $HTML
    IMPORTS="$IMPORTS"$'\n'"import { $COMP } from './$x/$x.component';"
    PAGES="$PAGES"$'\n'"  { path: '$x', title: '$TITLE', component: $COMP },"
  fi
done


echo "$IMPORTS" > $PAGE_FILE
echo >> $PAGE_FILE
echo -n 'export const PAGES = [' >> $PAGE_FILE
echo "$PAGES" >> $PAGE_FILE
echo "];" >> $PAGE_FILE