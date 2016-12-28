//Obtengo el modulo de mongoose para crear un modelo de proyecto
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema
const ProyectoSchema = new Schema({ title: String ,estado: String,tipo: String },{ collection:'proyecto' });

module.exports = mongoose.model('Proyecto', ProyectoSchema);
