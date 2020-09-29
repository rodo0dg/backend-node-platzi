const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myScehma = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        require: true,
    },
    date: Date,
});

const model = mongoose.model('Message',myScehma);
module.exports = model; 