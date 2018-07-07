#!/bin/bash

SELF=`realpath $(dirname $0)`
GHP_ROOT=`dirname $SELF`
MOD_ROOT=`realpath $1`

DOC_ROOT=$GHP_ROOT/src/app/documentation
PAGE_FILE=$DOC_ROOT/pages.ts

pushd $GHP_ROOT 2>&1 > /dev/null

function get_md() {
  (find $GHP_ROOT/src -name '*.md'; find $MOD_ROOT -name '*.md') | grep -v node_modules
}

function run() {
  local CREATED=$1
  local IMPORTS="import { Type } from '@angular/core';"
  local PAGES=''

  # Handle components markdown
  for MARKDOWN in `find $MOD_ROOT -name README.md | grep -v 'github.io\|inky\|js-yaml\|test-plugin\|starter\|node_modules' | sort`; do  

    MODULE=`echo "$MARKDOWN" | sed -e 's|^.*/travetto/||g' | sed -e 's|/.*$||g'`

    local HTML="$DOC_ROOT/$MODULE/$MODULE.component.html"

    if [[ ! -f "$HTML" ]]; then
      ng g c documentation/$MODULE
      CREATED=1
    fi

    # Compile html
    if [ "$HTML" -ot "$MARKDOWN" ]; then
      ./bin/process-markdown.js $MARKDOWN $MODULE > $HTML
      CHANGE=1
    fi

    local COMP=`cat $DOC_ROOT/$MODULE/$MODULE.component.ts | grep class | awk '{ print $3 }'`
    local TITLE=`cat $HTML | grep '<h1' | head -n1 | sed -e 's|<[^>]*>||g'`
    local IMPORTS="$IMPORTS"$'\n'"import { $COMP } from './$MODULE/$MODULE.component';"
    local PAGES="$PAGES"$'\n'"  { path: '$MODULE', title: '$TITLE', component: $COMP },"
  done

  # Update component listing
  if [[ -n "$CREATED" ]]; then
    echo "$IMPORTS" > $PAGE_FILE
    echo >> $PAGE_FILE
    echo -n 'export const PAGES = [' >> $PAGE_FILE
    echo "$PAGES" >> $PAGE_FILE
    echo "];" >> $PAGE_FILE
  fi

  #Handle Markdown in website app
  for MARKDOWN in `get_md`; do
    local HTML=`echo "$MARKDOWN" | sed -e 's/[.]md$/.html/'`

    if [ "$HTML" -ot "$MARKDOWN" ]; then
      ./bin/process-markdown.js $MARKDOWN 'none' > $HTML
      CHANGE=1
    fi
  done
}

if [[ "$2" == "watch" ]]; then
  function block_for_change {
    local FILES=`get_md`
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