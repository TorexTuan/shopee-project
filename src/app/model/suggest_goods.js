const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const suggestGoods = new Schema({
    sold: String,
    love: String,
    image: String,
    background: String,
    description: String,
    voucher: String,
    reduction: String,
    price: String,
    slug: { type: String, slug: "description", unique: true }
});

module.exports = mongoose.model('suggest_goods', suggestGoods);