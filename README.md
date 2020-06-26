# synchronized-video

## Pasos para correr la aplicación localmente desde la consola

$ docker run --rm -it -p 3100:3100 -v `pwd`:/app node /bin/bash
$ cd /app
$ npm install
$ node server.js

Ingresar a http://localhost:3100/ en cualquier navegador