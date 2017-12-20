#!/usr/bin/env bash

cd dist
git init
git add .
git commit -m 'deploy'
git push git@github.com:fpass/fpass.github.io.git master -f
