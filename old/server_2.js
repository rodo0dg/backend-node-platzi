// importar express
const express = require('express');

// instanciar router para crear rutas
const router = express.Router();

// instanciar express
var app = express();

// indicar router a aplicacion
app.use(router);

// establecer respuesta para get sobre /message
router.get('/message', function(req,res){
    return res.send('Obtener mensajes')
});

// establecer respuesta para post sobre /message
router.post('/message', function(req, res){
    return res.send('Agregar mensaje')
});

// establecer respuesta para delete sobre /message
router.delete('/message', function(req, res){
    return res.send('Borrar mensaje')
})

// escuchar en http://localhost:8000/
app.listen(8000);

// escribir en consola
console.log('Escuchando en puerto 8000');