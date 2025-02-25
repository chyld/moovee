#! /bin/bash

rm -rf build
rm -rf node_modules
rm -rf package-lock.json

npm install
mkdir -p build/{static,templates}
cp src/assets/* build/static/
cp src/*.js build/static/
cp src/home.html build/templates/

npx @tailwindcss/cli -i ./src/style.css -o ./build/static/style.css
