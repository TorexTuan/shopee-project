const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Catalogs = new Schema({
    title: String,
    image: String,
});

module.exports = mongoose.model('catalogs', Catalogs);