// Clase Hola mundo con node js

// importar libreria de express
const express = require('express');

//instanciar express
var app = express();

// indicar que retorne Hello al llamar a localhost:8000/
var response = app.use('/', function(req, res){
    return res.send("Hello")
});

// escuchar en puerto 8000
app.listen(8000);

// escribir en consola
console.log('Servidor escuchando en http://localhost:8000/');