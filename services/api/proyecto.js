// Obtengo el modulo de express
const express = require('express');
// Obtengo el router, para crear rutas personalizadas..
const router = express.Router();
// Obtengo el modulo propio que contiene la logica de la busqueda en mongoDB...
const proyectoDAO = require('../dao/proyectoDAO');

// Middleware que se ejecuta cada vez que entran a la API
router.use((req, res, next) => {
  //TODO Restringir el origen al momento de salir a Producción.
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('Se utiliza el API de proyecto');
  next();
});


router.get('/getAll', (req, res) => {
  proyectoDAO.obtenerTodosLosProyectos().then(proyectos=>{
    res.json(proyectos);
  }).catch(err=>{
    res.json({ status:500,mensaje:'Error al obtener todos los proyectos' });
  });
});

router.get('/getById/:id', (req, res) => {
  proyectoDAO.obtenerProyecto(req.params.id).then(proyecto=>{
    res.json(proyecto);
  }).catch(err=>{
    res.json({ status:500,mensaje:'Error al obtener el proyecto' });
  });
});

// La ruta seria '/proyecto/save' --> crea un proyecto nuevo...
router.post('/save', (req, res) => {
  proyectoDAO.guardarProyecto(req.body).then((result)=>{
    res.json({ status: 200 , mensaje : 'Se guardo el proyecto', id: result });
  }).catch(err=>{
    res.json({ status: 500 , mensaje : 'Error al guardar el proyecto' });
  });
});

router.delete('/delete/:id',(req,res)=>{
  proyectoDAO.borrarProyecto(req.params.id).then((result)=>{
    res.json({status: 200 , mensaje: 'Se borro el proyecto', id: result});
  }).catch(err=>{
    res.json({status: 500, mensaje: 'fallo al tratar de borrar el proyecto'})
  });
});


router.put('/update/:id',(req,res)=>{
  proyectoDAO.actualizarProyecto(req.params.id, req.body).then((result)=>{
    res.json({status: 200 , mensaje: 'se actualizo el proyecto', id: result});
  }).catch(err=>{
    res.json({status: 500, mensaje: 'fallo al actualizar el proyecto'})
  });
});




module.exports = router
