const express = require('express');
const router = express.Router();

//importamos express validators

//const { body }  = require('express-validators/check');

//importamos el controlador
const proyectosController = require('../controller/controller');


//controlador de usuario

const proyectosControllerUsuario = require('../controller/controller-usuario');


module.exports = function(){
    router.get('/' , proyectosController.proyectosHome);

    //Rutas de usuario

    router.get('/quienes-somos', proyectosController.quienesSomos);
 
   router.get('/galeria', proyectosController.galeria);
   
   router.get('/partidos', proyectosController.partidos);

   router.get("/formulario-agregar-club", proyectosController.formularioCrearClub);
    
   router.get("/agregar-usuario", proyectosControllerUsuario.agregarUsuario);


    //Rutas de administrador

    router.get('/inicio-administrador', proyectosController.inicioAdministrador);

    router.get('/crear-club', proyectosController.crearClub);
    
    router.get('/galeria-administrador', proyectosController.galeriaAdministrador);

    router.get('/mostrar-club', proyectosController.mostrarClub);

    router.get('/crear-partidos', proyectosController.crearPartido);

    router.get('/crear-Administrador', proyectosController.Administrador);
    
    
    //Insertar Datos

    router.post('/crear-club'
    ,proyectosController.nuevoClub);


    //Insertar Datos "Crear-Partido"

    router.post('/crear-partidos',
    proyectosController.registrarPartido
    );

    //Insertar datos del Administrador

    router.post('/crear-Administrador', 
    proyectosController.crearAdministrador
    )

    //Ingresar a un solo club

    router.get('/club/:url', proyectosController.clubPorUrl);

    return router;
    };

   
