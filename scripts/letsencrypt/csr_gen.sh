#!/usr/bin/env bash

mkdir /tmp/crt/
cd /tmp/crt/
rm /tmp/crt/*

DEV=""
#DEV="Dev"


#keygen
openssl genrsa -des3 -out cryptobrawl.online.key -passout pass:1029384756 2048


#fotoimplant.ru
openssl req \
  -passin pass:1029384756 \
  -subj '/C=RU/ST=Moscow/L=Russian/CN=cryptobrawl.online' \
  -new -key cryptobrawl.online.key -out cryptobrawl.online.csr






#convert des3 key to rsa
cp cryptobrawl.online.key cryptobrawl.online.key.org
openssl rsa -passin pass:1029384756 -in cryptobrawl.online..key.org -out cryptobrawl.online.key



sudo mkdir /etc/nginx/crt/
sudo openssl dhparam -out /etc/nginx/crt/dhparam.pem 2048