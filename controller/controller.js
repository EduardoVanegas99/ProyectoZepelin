//Exportamos el modelo

const crearClubModel = require('../models/crearCLubModel');

const crearPastidoModel = require('../models/crearPartidoModel');

const estados = require('../models/estadosModel');

const administradorModel = require('../models/crearAdministradorModel');

//Importamos slug

const slug = require('slug');



//Rutas Administrador


exports.inicioAdministrador = (req, res)=>{
    
    res.render('inicio-administrador',
         
    
    );
}

exports.crearClub = async(req, res)=>{
    const mostrarCl = await crearClubModel.findAll();
    var nombrePagina = 'Crear club';
    res.render('crear-club',{
        nombrePagina,
        mostrarCl
    });
}

exports.mostrarClub = (req, res)=>{


    res.render('mostrar-club')
};

exports.galeriaAdministrador = (req, res)=>{
    res.render('galeria-administrador')
};


exports.crearPartido = async(req, res)=>{
    
    const proyectos = await crearClubModel.findAll()
    
    res.render('crear-partidos', {
       
        proyectos
      
    })
};

//Metodo para mostrar la pagina del Administrador

exports.Administrador = (req, res)=>{
    res.render('crear-administrador');
}


exports.crearAdministrador = async(req, res)=>{
    console.log(req.body);
    const  {email, password} = req.body;
   

    const registrarAdministrador = await administradorModel.create({
        email,
        password
    });

    res.redirect('/inicio-administrador');

}







//Inserttar datos crear partido

exports.registrarPartido = async(req, res) =>{
    console.log(req.body);
    
    res.render('crear-partidos',{
           
    })
}



exports.nuevoClub = async(req, res)=>{
    //Mostrar club
     
    const mostrarCl = await crearClubModel.findAll();


    //Enviar a la consola lo que el usuario escriba
    console.log(req.body);
    const { nombre } = req.body;


      /*console.log(slug(nombre));
      const url = slug(nombre).toLowerCase();*/
    const nuevoClub = await crearClubModel.create ({  nombre })
    res.redirect('/crear-club');

};

//LIstar Club por Uno

exports.clubPorUrl = async(req, res, next)=>{
    const soloUnClub = await crearClubModel.findOne({
            where:{
                url: req.params.url
            }
    })

    if(!soloUnClub) return next();

    console.log(soloUnClub);

    res.render('informacionClub');
}




/*---------------------------Usuario------------------------------*/
//Rutas de usuario
exports.proyectosHome =  (req, res)=>{
    res.render('index');
}



exports.quienesSomos = (req, res)=>{
    res.render('quienes-somos');

}


exports.galeria = (req, res)=>{
    res.render('galeria');
}

exports.partidos= (req, res) =>{
    res.render('partidos');
};

exports.galeria = (req, res)=>{
    res.render('galeria')
};

exports.formularioCrearClub = async(req, res)=>{
   
    const esta = await estados.findAll();
    res.render('formulario-agregar-club', {
           
    });
}
