'use strict'

//Obtengo el modulo de mongoose para crear un modelo de proyecto
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectDetailSchema = new Schema({
    active: { type: Number, default: 1 },
    name: String,
    dateFrom: Date,
    dateTo: Date,
    applications: [{ name: String,
                    technologies: [String]
                  }],
    clientLeaderName: String,
    clientRelation : Number,
    assignedPeopleCount: Number,
    notAssignedPeopleCount: Number,
    averageRotation: Number,
    teamMood: Number,
    activities: [{ description: String,
                  creationDate: Date
                }],
    risks: [{ description: String,
             action: String,
             expirationDate: Date,
             gdm: String
           }],
  });

module.exports = mongoose.model('ProjectDetail', ProjectDetailSchema);
