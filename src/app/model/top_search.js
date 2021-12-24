const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Search = new Schema({
    title: String,
    image: String,
    sold: String,
},{ collection: 'top_search' });

module.exports = mongoose.model('top_search', Search);