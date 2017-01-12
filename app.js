'use strict'

// Obtengo el modulo de http para crear el servidor...
const http = require('http');
// Obtengo el modulo de express...
const express = require('express');
// Obtengo el modulo de body-parser , permite obtener los datos del header en formato json...
const bodyParser = require('body-parser');
// Puerto de la app donde levanta, si no existe la variable de entorno , por default levanta en 3000...
const port = process.env.PORT || 3000;
// Hago una instancia de express...
const app = express();
// Obtengo el modulo propio del api de proyecto
const proyectoAPI = require('./services/api/proyecto');
// Creo el servidor de node
const server = http.createServer(app);
// Obtengo un modulo propio de utilidades , funciones de utilidad, por ejemplo la conexion en MongoDB
const utils = require('./utils/utils');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware para el API de proyecto
//app.use('/API', proyectoAPI);

//se cambio el url a proyecto
app.use('/proyecto', proyectoAPI)

// Llama la funcion de utils para crear la conexion con mongoDB...
utils.crearConexionConMongoDB().then(()=>{
  console.log("Se establecio correctamente la conexion con MongoDB");
}).catch(err=>{
  console.log("Error al establecer la conexion con MongoDB");
});

server.listen(port);
