const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myScehma = new Schema({
    name: String,
});

const model = mongoose.model('User',myScehma);
module.exports = model; 