const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Flash = new Schema({
    background: String,
    image: String,
    price: String,
    sold: {"type": ["integer", "string"]},
    reduction: Number,
});

module.exports = mongoose.model('flashes', Flash);