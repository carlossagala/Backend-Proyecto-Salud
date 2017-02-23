'use strict'
// Obtengo el modelo para guardar en MongoDB...
const ProjectDetail = require('../../models/projectDetail');

module.exports = {

  getByCode: (projectCode)=>{
    return new Promise((resolve, reject) => {
      ProjectDetail.find({code:projectCode}, (err,project)=>{
        if(err){
          reject(err);
        }
        resolve(project)
      })
    })
  },

  getDetailedProject : (idProject)=>{
    return new Promise((resolve,reject)=>{
      ProjectDetail.findById(idProject,(err,project)=>{
        if(err){
          reject(err);
        }
        resolve(project);
      });
    });
  },

  getAll : ()=>{
    return new Promise((resolve,reject)=>{
      ProjectDetail.find({},(err,projects)=>{
        if(err){
          reject(err);
        }
        resolve(projects);
      });
    });
  },

  saveDetailedProject : (obj)=>{
    return new Promise((resolve,reject)=>{
      let project = new ProjectDetail();

      project.code = obj.code;
      project.dateFrom = obj.dateFrom;
      project.dateTo = obj.dateTo;
      project.applications = obj.applications;
      project.clientLeaderName = obj.clientLeaderName;
      project.clientRelation = obj.clientRelation;
      project.assignedPeopleCount = obj.assignedPeopleCount;
      project.notAssignedPeopleCount = obj.notAssignedPeopleCount;
      project.averageRotation = obj.averageRotation;
      project.teamMood = obj.teamMood;
      project.activities = obj.activities;
      project.risks = obj.risks;

      project.save((err,res)=>{
        if(err){
          reject(err);
        }
        console.log("se guardo el proyecto:"+ project.id);
        resolve(project.id);
      });
    });
  },

  deleteDetailedProject : (idProject)=>{
    return new Promise ((resolve,reject)=>{
      ProjectDetail.findById(idProject,(err,project)=>{
        if(err){
          reject(err);
        }
        project.active = 0;
        project.save((err,res)=>{
          if(err){
            reject(err);
          }
          console.log("se dio de baja logica al proyecto "+ project.name)
          resolve(project.id);
        })

      })
    })
  },

  updateDetailedProject : (idProject, updatedProject)=>{
    return new Promise ((resolve,reject)=>{
      ProjectDetail.findByIdAndUpdate(idProject,updatedProject,(err,proyectoActualizado)=>{
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
