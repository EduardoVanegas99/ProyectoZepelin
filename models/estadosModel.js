const Sequelize = require('sequelize');
const db = require('../config/db');



const estados = db.define('estados', {
        estados:{
            type: Sequelize.STRING
        }

});


module.exports = estados;