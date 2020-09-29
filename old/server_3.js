// importar express
const express = require('express');

//importar body parser para leer el contenido del request
const bodyParser = require('body-parser');

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
    return res.send('Se obtiene mensaje')
});

// definir respuesta post para /message
router.post('/message', function(req, res){
    // imprimir contenido del body param
    console.log(req.body);
    // imprimir cabeceras
    console.log(req.headers);
    //incluir cabeceras personalizadas en la respuesta
    res.header({
        'cabecera-personalizada': "valor personalizado",
    });
    // regresar el parametro nombre recibido por parametro e indicar el codigo de la respuesta, 201 - created
    return res.status(201).send({'error':'','body':'Se agrego el nombre ' + req.body['name'] + ' correctamente'})
});

// definir respuesta delete para /message
router.delete('/message', function(req, res){
    // imprimir contenido del body
    console.log(req.body);
    // imprimir contenido del query param
    console.log(req.query);
    return res.send('Se elimino mensaje')
});

// escuchar en http://localhost:8000/
app.listen(8000);

// imprimir en consola
console.log('Escuchando en http://localhost:8000/');

// Nodemon es una libreria de node para monitorear un proyecto node, cuando el proyecto sufre algun cambio, 
// se actualiza la aplicacion, de esta manera ya no tenemos que detener y arrancar el servidor en cada cambio
// se instala con npm install nodemon y de utiliza arrancando el servidor con nodemon server