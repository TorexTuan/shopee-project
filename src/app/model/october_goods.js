const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const OctoberGoods = new Schema({
    description: String,
    image: String,
    background: String,
    price: String,
    sold: String,
    love: String,
    reduction: String,
    voucher: String,
    slug: { type: String, slug: "description", unique: true }
});

module.exports = mongoose.model('october_goods', OctoberGoods);