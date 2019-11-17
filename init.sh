#!/bin/bash

find . -name node_modules | xargs rm -rf $1

echo -e "\033[0;44m Npm install Angular \033[0m"
cd ./frontend
npm i
cd ../

echo -e "\033[0;44m Npm install Nest \033[0m"
cd ./server
npm i
cd ../

echo -e "\033[0;42m Completed \033[0m"