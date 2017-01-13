'use strict'


// Obtengo el modelo para guardar en MongoDB...
const Proyecto = require('../../models/proyecto');

module.exports = {

  obtenerProyecto : (idProject)=>{
    return new Promise((resolve,reject)=>{
      Proyecto.findById(idProject,(err,proyecto)=>{
        if(err){
          reject(err);
        }
        resolve(proyecto);
      });
    });
  },



  // Hace un find para buscar todos los proyectos {} , si no especificas nada trae todo...
  // Devuelve un promise
  obtenerTodosLosProyectos : ()=>{
    return new Promise((resolve,reject)=>{
      Proyecto.find({},(err,proyectos)=>{
        if(err){
          reject(err);
        }
        resolve(proyectos);
      });
    });
  },

  // Guarda el proyecto
  // Devuelve un promise
  guardarProyecto : (obj)=>{
    return new Promise((resolve,reject)=>{
      let proyecto = new Proyecto();
      
      proyecto.name = obj.name;
      proyecto.code = obj.code;
      proyecto.type = obj.type;
      proyecto.leader = obj.leader;

      proyecto.save((err,res)=>{
        if(err){
          reject(err);
        }
        console.log("se guardo el proyecto:"+ proyecto);
        resolve();
      });
    });
  }

}
