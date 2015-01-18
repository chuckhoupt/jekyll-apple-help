#!/bin/bash

set -eux

BASE=$(dirname "$0")
SITE=$(basename "$BASE")
URL=http://0.0.0.0:4000/
SITEROOT=_site

cd "$BASE"

# Title the window
echo -n -e "\033]0;$SITE Jekyll Server\007"

# Auto-refresh using fswatch, if available...
if which fswatch
then
	fswatch -o _site | xargs -n1 -I{} osascript -e "tell application \"Safari\" to do JavaScript \"location.reload(true)\" in documents whose URL starts with \"$URL\"" > /dev/null &
else
	echo "NOTE: Install fswatch (e.g. brew install fswatch) to allow auto-refresh"
fi

# Open the page after a delay
sleep 10 ; open -a Safari.app "$URL" &

jekyll serve --watch
