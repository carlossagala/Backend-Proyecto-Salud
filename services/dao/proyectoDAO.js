'use strict'


// Obtengo el modelo para guardar en MongoDB...
const Proyecto = require('../../models/proyecto');

module.exports = {

  obtenerProyecto : (codeProject)=>{
    return new Promise((resolve,reject)=>{
      //Proyecto.findById(idProject,(err,proyecto)=>{
      Proyecto.find({code:codeProject}, (err,proyecto)=>{
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
        resolve(proyecto.id);
      });
    });
  },

  borrarProyecto : (idProyect)=>{
    return new Promise ((resolve,reject)=>{
      Proyecto.findById(idProyect,(err,proyecto)=>{
        if(err){
          reject(err);
        }

        proyecto.activo = 0;
        proyecto.save((err,res)=>{
          if(err){
            reject(err);
          }
          console.log("se dio de baja logica al proyecto "+ proyecto.name)
          resolve(proyecto.id);
        })

      })
    })
  },

  actualizarProyecto : (idProject, updatedProject)=>{
    return new Promise ((resolve,reject)=>{
      Proyecto.findByIdAndUpdate(idProject,updatedProject,(err,proyectoActualizado)=>{
        if(err){
          reject(err);
        }
        //coloco el nombre para probar cual se actualizo
        //cambiar campo en caso de que tambien se pueda actualizar el nombre
        console.log("se actualizo el proyecto" + updatedProject.name)
        resolve(updatedProject.id);
      })
    })
  }

}
