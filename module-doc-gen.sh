#!/bin/bash

DOC_ROOT=src/app/documentation
PAGE_FILE=$DOC_ROOT/pages.ts

function run() {
  local CREATED=
  local IMPORTS="import { Type } from '@angular/core';"
  local PAGES=''

  for x in `ls ../ | grep -v 'github.io\|inky\|js-yaml\|test-plugin'`; do   
    if [[ -d "../$x" ]]; then
      local HTML="$DOC_ROOT/$x/$x.component.html"
      local README="../$x/README.md"

      if [[ ! -f "$HTML" ]]; then
        ng g c documentation/$x
        CREATED=1
      fi

      # Compile html
      if [ "$HTML" -ot "$README" ]; then
        ./node_modules/.bin/markdown $README |\
          sed -e 's|Travetto:\s*||gi' |\
          ./highlight.js |\
          sed -e 's|\([{}]\)|{{ "\1" }}|g' |\
          sed -e 's|href="http[s]*://github[.]com/travetto/|routerLink="/docs/|g' |\
          sed -e 's|#readme||g' > $HTML
        CHANGE=1
      fi

      local COMP=`cat $DOC_ROOT/$x/$x.component.ts | grep class | awk '{ print $3 }'`
      local TITLE=`cat $HTML | grep '<h1' | head -n1 | sed -e 's|<[^>]*>||g' -e 's|travetto:[ ]*||i'`
      local IMPORTS="$IMPORTS"$'\n'"import { $COMP } from './$x/$x.component';"
      local PAGES="$PAGES"$'\n'"  { path: '$x', title: '$TITLE', component: $COMP },"
    fi
  done

  if [[ -n "$CREATED" ]]; then
    echo "$IMPORTS" > $PAGE_FILE
    echo >> $PAGE_FILE
    echo -n 'export const PAGES = [' >> $PAGE_FILE
    echo "$PAGES" >> $PAGE_FILE
    echo "];" >> $PAGE_FILE
  fi
}

if [[ "$1" == "watch" ]]; then
  FILES=`find ../ -name 'README.md' | grep -v 'node_modules' | grep -v 'js-yaml\|inky\|github\|plugin'`

  function block_for_change {
    inotifywait -e modify,move,create,delete $FILES
  }

  while block_for_change; do
    run
  done
else
  run
fi