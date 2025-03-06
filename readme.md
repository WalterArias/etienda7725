# NOTAS DEL PROYECTO

- Tener en cuenta si no corre el node js habilitar ejecucion de scripts en win 11
- ejecutamos en la consola en modo administrador : Set-ExecutionPolicy Unrestricted
- Otra opcion es : Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

====================================================

- Usaremos 2 arquitecturas : Orientada a Servicios (API REST) para el backend
- Internamente usaremos MVC (Tenga en cuenta que las vistas se reemplazan por rutas)
  - creamos las carpetas para el MVC (CONTROLLERS, MODEL,ROUTES)
  - Instalamos los paquetes base : npm i nodemon express cors mongoose bcryptjs jsonwebtoken multer

jwt
https://www.npmjs.com/package/jsonwebtoken

## DOCUMENTACION DE MONGO

- mongodb : https://www.mongodb.com/docs/manual/reference/method/
- mongoose(libreria que interactua entre node js y mongodb):https://mongoosejs.com/docs/guide.html#methods

# notas para desarrolladores linux

-iniciar el service de mongo en linux:
sudo systemctl start mongod
-recarga
sudo systemctl daemon-reload
-ver el estado
sudo systemctl status mongod
-parar el servicio
sudo systemctl stop mongod
