#! /bin/bash

cp src/assets/* build/static/
cp src/*.js build/static/
cp src/home.html build/templates/
npx @tailwindcss/cli -i ./src/style.css -o ./build/static/style.css
