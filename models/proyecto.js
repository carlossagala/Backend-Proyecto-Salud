'use strict'


//Obtengo el modulo de mongoose para crear un modelo de proyecto
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema
//const ProyectoSchema = new Schema({ title: String ,estado: String,tipo: String },{ collection:'proyecto' });


//el proyecto todavia esta activo si el campo es 1 y 0 si no lo esta.
const ProyectoSchema = new Schema({ activo: {type: Number, default: 1 },
									name: String,
									code: String,
									type: String,
									leader:{ mail: String,
									name: String
								}});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
