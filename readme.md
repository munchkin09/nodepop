# Práctica Devops
El link donde está subida la api es: https://nodepop.carlosdevops.es Todas las rutas de la Referencia de API son válidas en ese dominio.

# Práctica Nodepop

Backend para una tienda de busqueda y venta de productos de 2ª mano. 

## Requisitos

Node 7.10.0

Express 4.15.2

MongoDb 3.4.4

## Instalación

```
git clone https://github.com/munchkin09/nodepop.git

npm install

npm run install_db

```

Completar y renombrar el archivo config.SAMPLE.js a config.js

```
npm start

```
## Referencia de API

### API v1

`GET nodepop.carlosdevops.es/api/v1/anuncios (Listado de anuncios sin filtros)`

`GET nodepop.carlosdevops.es/api/v1/usuarios (Listado de usuarios)`

### API v2

Usa autentificación por JsonWebTokens, el token debe enviarse en cada petición o bien en la query string o en la cabecera x-access-token.

Se recoge el lenguaje de la petición de la cabecera Accept-language, valores válidos en, en-EN, es y es-ES. Por defecto los errores llegan en Inglés.

`POST nodepop.carlosdevops.es/api/v2/user (x-www-formencoded nombre: NOMBRE email: EMAIL clave: CLAVE)`

Devuelve un JSON con success y el usuario recién creado en la db.


`POST nodepop.carlosdevops.es/api/v2/authenticate (x-www-formencoded email: EMAIL clave: CLAVE)`

Devuelve un JSON con success TRUE y el webtoken para este usuario, si el login es correcto.

 O bien un JSON con success FALSE y un objeto vacio, si el login es incorrecto.


`POST nodepop.carlosdevops.es/api/v2/usuarios (x-www-formencoded nombre: NOMBRE email: EMAIL clave: CLAVE)`


Devuelve un JSON con success TRUE y el usuario creado en la BBDD si todo ha ido bien.

O bien un JSON con success FALSE y un objeto vacio si algo ha ido mal en la inserción.

`GET nodepop.carlosdevops.es/api/v2/anuncios?nombre=nombre&precio=valor-valor&tags=valor valor&start=valor&limit=valor`

Devuelve un JSON con success TRUE y un array de anuncios.


`GET nodepop.carlosdevops.es/api/v2/anuncios/tags`

Devuelve un JSON con success TRUE y un array con los tags que se encuentran actualmente en la db.

