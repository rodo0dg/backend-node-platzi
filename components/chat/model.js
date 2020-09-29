const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myScehma = new Schema({
    users: [
        type: Schema.ObjectId,
        ref: 'User',
    ],
});

const model = mongoose.model('Chat',myScehma);
module.exports = model; 