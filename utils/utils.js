// Obtengo el modulo de mongoose , permite hacer un orm..
const mongoose = require('mongoose');
// Constante para la url de la conexion , proyectoSalud es la base...
const urlMongoDB = 'mongodb://localhost/proyectoSalud';

module.exports = {

   // Permite obtener la conexion con MongoDB;
   crearConexionConMongoDB : ()=> {
    return new Promise((resolve,reject)=>{
      mongoose.connect(urlMongoDB,(err)=>{
        if(err){
          reject(err);
        }
        resolve();
      });
    });
  }

}
