#!/usr/bin/env bash

# Генерирует сертификаты для всех доменов проекта и складывает в /etc/nginx/crt
# Генерирует корневой сертификат, которым подписывает все сертификаты доменов. Кладет его в /etc/nginx/crt/rootCA.crt (его необходимо установить в ос чтобы она не ругалась на домены)

if [ ! -d /etc/nginx/crt ]; then
	mkdir -p /etc/nginx/crt
fi

openssl genrsa -des3 -out /etc/nginx/crt/privkey_wp.pem -passout pass:123456789 2048

 #Удаляем пароль из ключа для nginx'a
openssl rsa \
 -passin pass:123456789 \
 -in /etc/nginx/crt/privkey_wp.pem \
 -out /etc/nginx/crt/privkey.pem

if [ ! -f /etc/nginx/crt/dhparam.pem ]; then
	openssl dhparam -out /etc/nginx/crt/dhparam.pem 2048
fi


#create rootCA
if [ ! -f /etc/nginx/crt/rootCA.crt ]; then
	echo "-generate rootCA"
	openssl genrsa -out /etc/nginx/crt/rootCA.key 2048
	openssl req -x509 \
	 -subj '/C=RU/ST=Moscow/L=Russian/CN=ru' \
	 -new -key /etc/nginx/crt/rootCA.key -days 10000 -out /etc/nginx/crt/rootCA.crt
fi
cp /etc/nginx/crt/rootCA.crt /srv/


createCert() {
	DOMAIN=$1

	if [ ! -d "/etc/nginx/crt/$DOMAIN" ]; then
		mkdir "/etc/nginx/crt/$DOMAIN"
	fi

	echo "subjectAltName = @altname" > foo.ext
	echo "[altname]" >> foo.ext
	echo "DNS.1 = $DOMAIN" >> foo.ext

	openssl req \
	 -key "/etc/nginx/crt/privkey_wp.pem" \
	 -new \
	 -passin pass:123456789 \
	 -subj "/C=RU/ST=Moscow/L=Russian/CN=$DOMAIN" \
	 -out "/etc/nginx/crt/$DOMAIN/$DOMAIN.csr"

	openssl x509 -req \
	 -in "/etc/nginx/crt/$DOMAIN/$DOMAIN.csr" \
	 -CA /etc/nginx/crt/rootCA.crt -CAkey /etc/nginx/crt/rootCA.key -CAcreateserial \
	 -out "/etc/nginx/crt/$DOMAIN/$DOMAIN.crt" \
	 -days 5000 \
	 -extfile foo.ext

	openssl x509 \
	 -in "/etc/nginx/crt/$DOMAIN/$DOMAIN.crt" \
	 -out "/etc/nginx/crt/$DOMAIN/fullchain.pem" -outform PEM

	rm foo.ext
}

createCert "redpilule.ru";
