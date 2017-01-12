'use strict'


//Obtengo el modulo de mongoose para crear un modelo de proyecto
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema
//const ProyectoSchema = new Schema({ title: String ,estado: String,tipo: String },{ collection:'proyecto' });



const ProyectoSchema = new Schema({ name: String,
									code: String,
									type: String, 
									leader:{ mail: String,
									name: String 
								}});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
