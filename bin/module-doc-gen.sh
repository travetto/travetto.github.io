#!/bin/bash

SELF=`realpath $(dirname $0)`
GHP_ROOT=`dirname $SELF`
ROOT=`dirname $GHP_ROOT`

DOC_ROOT=$GHP_ROOT/src/app/documentation
PAGE_FILE=$DOC_ROOT/pages.ts

pushd $GHP_ROOT 2>&1 > /dev/null

function run() {
  local CREATED=$1
  local IMPORTS="import { Type } from '@angular/core';"
  local PAGES=''

  for x in `ls $ROOT | grep -v 'github.io\|inky\|js-yaml\|test-plugin\|starter'`; do   
    if [[ -d "$ROOT/$x" ]]; then
      local HTML="$DOC_ROOT/$x/$x.component.html"
      local README="$ROOT/$x/README.md"

      if [[ ! -f "$HTML" ]]; then
        ng g c documentation/$x
        CREATED=1
      fi

      # Compile html
      if [ "$HTML" -ot "$README" ]; then
        ./bin/process-markdown.js $README $x > $HTML
        CHANGE=1
      fi

      local COMP=`cat $DOC_ROOT/$x/$x.component.ts | grep class | awk '{ print $3 }'`
      local TITLE=`cat $HTML | grep '<h1' | head -n1 | sed -e 's|<[^>]*>||g'`
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
  FILES=`find $ROOT -name 'README.md' | grep -v 'node_modules' | grep -v 'js-yaml\|inky\|github\|plugin'`

  function block_for_change {
    inotifywait -e attrib,modify,move,create,delete $FILES
  }
  
  run 1

  while block_for_change; do
    run
  done
else
  run 1
fi


popd 2>&1 > /dev/null