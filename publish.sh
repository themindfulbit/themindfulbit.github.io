#!/bin/bash

message=$1

git pull origin master
# jekyll build
git add -A

if [[ -n "$message" ]]; then
  git commit -m "$message"
else
  git commit -m "quick-commit"
fi

git push origin master
