const Sequelize = require('sequelize');

const db = require('../config/db');

const slug = require('slug');

const shortid = require('shortid');

const crearCLubs = db.define('crearClubs',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
         type: Sequelize.STRING

    },
    sexo:{
        type: Sequelize.STRING
    },

    url:{
            type: Sequelize.STRING
    },

    imagen: {
        type: Sequelize.STRING
    }

}, {
    hooks:{
        beforeCreate(proyecto){
           const url = slug(proyecto.nombre).toLowerCase();

           proyecto.url = `${url}-${shortid.generate()}`;


        }
    }
});

module.exports = crearCLubs;


