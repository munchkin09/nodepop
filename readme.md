# Práctica Nodepop

Backend para una tienda de busqueda y venta de productos de 2ª mano.

## Requisitos

Node 7.10.0

Express 4.15.2

MongoDb 3.4.4

## Instalación

git clone https://github.com/munchkin09/nodepop.git

npm install

npm run install_db

Completar y renombrar el archivo config.SAMPLE.js a config.js

npm start

## Referencia de API

### API v1

GET localhost:3000/api/v1/anuncios (Listado de anuncios sin filtros)

GET localhost:3000/api/v1/usuarios (Listado de usuarios)

### API v2

Usa autentificación por JsonWebTokens

POST localhost:3000/api/v2/authenticate (x-www-formencoded email: EMAIL clave: CLAVE)

Devuelve un JSON con success TRUE y el webtoken para este usuario, si el login es correcto.

Devuelve un JSON con success FALSE y un objeto vacio, si el login es incorrecto

GET localhost:3000/api/v2/anuncios?token=(JsonWebToken)

