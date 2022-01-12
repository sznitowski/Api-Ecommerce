# evTecnica-FullStack
api-crud

primero creamos la carpeta App, luego ejecutamos npm init para crear nuestro packjson
ejecutamos el comando npm install --save sequelize, luego npx sequelize-cli init
que nos va a crear las carpetas models, migrations, config, seeders.

Creating the first Model (and Migration)
creamos el modelo user.js ejecutando el siguiente comando y ponemos los atributos que nosotros queremos
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,age:string,password:string

con el siguiente comando hacemos las migraciones hacia la base de datos, pero antes instalamos mysql
npm install mysql2
npx sequelize-cli db:migrate