#! /bin/bash

rm -rf build
rm -rf node_modules
rm -rf package-lock.json

npm install
mkdir -p build/{static,templates}
