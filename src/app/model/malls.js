const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Mall = new Schema({
    titleAbove: String,
    imageAbove: {type: ["string", "bolean"]},
    titleBelow: String,
    imageBelow: {type: ["string", "bolean"]},
});

module.exports = mongoose.model('malls', Mall);