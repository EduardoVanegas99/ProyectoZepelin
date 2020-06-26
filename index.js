const express = require('express');
const routes = require('./rutas');
const path = require('path');
const app = express(); 
const bodyParser = require('body-parser');
const {body} = require('express-validators');
const flash = require('connect-flash');
app.use(express.json());


const port = process.env.PORT || 3000;




//Exportar 
const db = require('./config/db');

//Importamos los modelos
require('./models/crearCLubModel');

require('./models/crearPartidoModel');

require('./models/estadosModel');

require('./models/crearAdministradorModel');

db.sync()
        .then(() => console.log('Conexion al servidor'))
        .catch(error => error);



//Habilitar bodyParser

app.use(bodyParser.urlencoded({extended:true}));





app.set('view engine', 'pug');

app.set('views', path.join(__dirname, './views'));


//agregar flash messages

app.use(flash());


app.use(express.static('public'));
app.use(express.static('files'));
app.use('/public', express.static('public'));
app.use('/', routes());

app.listen(port, ()=>{
  
        console.log('conexion') 

});

