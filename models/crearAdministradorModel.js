

const Sequelize = require('sequelize');
const db = require('../config/db');
//importamos bcript

const bcript = require('bcrypt');


const crearAdministrador = db.define('administrador', {

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    email: {
        type: Sequelize.STRING(60), 
        //Que no sea vacio
        allowNull : false
    },
    password: {
        type: Sequelize.STRING(60),
        allownull: false
    }

},{
    hooks: {
        beforeCreate(usuario){
            console.log('Creando Nuevo Usuario');
            console.log(usuario);
            
            usuario.password = bcript.hashSync(usuario.password, bcript.genSaltSync(10) );
        }
    }
});

module.exports = crearAdministrador;