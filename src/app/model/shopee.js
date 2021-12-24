const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AdvertItems = new Schema({
    title: String,
    image: String,
});

module.exports = mongoose.model('advert_items', AdvertItems);