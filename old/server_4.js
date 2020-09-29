// importar express
const express = require('express');

// importar body parser para leer el contenido del request
const bodyParser = require('body-parser');

// importar response personalizado
const response = require('../network/response')

// instanciar router para declarar rutas
const router = express.Router();

// instanciar express
var app = express();

// indicar a express que los body de los request los interprete con body parser como json
app.use(bodyParser.json());

// permitir recibir e interpretar Form URL Encoded
app.use(bodyParser.urlencoded({ extended: true }));

// indicar a express instancia de router
app.use(router);

// definir respuesta get para /message
router.get('/message', function(req, res){
    // imprimir contenido del body
    console.log(app.body)
    // imprimir contenido del query param
    console.log(app.query)
    // regresar respuesta estandarizada
    response.success(req,res,'LIsta de mesnajes, 200')
});

// definir respuesta post para /message
router.post('/message', function(req, res){
    // imprimir contenido del body param
    console.log(req.body);
    // imprimir cabeceras
    console.log(req.headers);
    
    // preguntar si viene el parametro error == ok por query params
    if(req.query.error == "ok"){
        // regresar respuesta simulando un error
        response.error(req,res,'Error simulado', 400, 'Es solo una simulacion')
    } else {
        // regresar respuesta estandarizada
        response.success(req,res,'Se agrego el nombre ' + req.body['name'] + ' correctamente', 201)
    }
});

// definir respuesta delete para /message
router.delete('/message', function(req, res){
    // imprimir contenido del body
    console.log(req.body);
    // imprimir contenido del query param
    console.log(req.query);

    //incluir cabeceras personalizadas en la respuesta
    res.header({
        'cabecera-personalizada': "valor personalizado",
    });

    // regresar respuesta estandarizada
    response.success(res,req,'Se elimino mensaje',200);
});

app.use('/app', express.static('public'));

// escuchar en http://localhost:8000/
app.listen(8000); 

// imprimir en consola
console.log('Escuchando en http://localhost:8000/');

// Nodemon es una libreria de node para monitorear un proyecto node, cuando el proyecto sufre algun cambio, 
// se actualiza la aplicacion, de esta manera ya no tenemos que detener y arrancar el servidor en cada cambio
// se instala con npm install nodemon y de utiliza arrancando el servidor con nodemon server