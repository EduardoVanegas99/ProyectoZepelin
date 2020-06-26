const Sequelize = require('sequelize');
const db = require('../config/db');

const crearPartido = db.define('crearPartido',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },

    fkcrearClub:{
        type: Sequelize.STRING
    },

    sexo:{
            type: Sequelize.STRING
    },

    equipos:{
        type: Sequelize.STRING
    },

    fecha:{
        type: Sequelize.DATE
    },

    hora: {
        type: Sequelize.STRING
    }

});


module.exports = crearPartido;