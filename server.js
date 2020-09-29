const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://root:1234@cluster0.iwm5z.mongodb.net/platzivideos_db?retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);

console.log('Escuchando en http://localhost:3000/');