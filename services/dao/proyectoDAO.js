// Obtengo el modelo para guardar en MongoDB...
const Proyecto = require('../../models/proyecto');

module.exports = {

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
      proyecto.title = obj.title;
      proyecto.estado = obj.estado;
      proyecto.tipo = obj.tipo;
      proyecto.save((err,res)=>{
        if(err){
          reject(err);
        }
        resolve();
      });
    });
  }

}
