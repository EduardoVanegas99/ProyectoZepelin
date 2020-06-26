const Sequelize = require('sequelize');
const baseDatos = require('../config/db'); 

const galeriaModel = Sequelize('galeria',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey,
        autoIncrement

    },
    imagen:{
        type: Sequelize.STRING
    }
});

module.exports = galeriaModel;

