const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const catalogGoods = new Schema({
    love: String,
    reduction: String,
    image: String,
    background: String,
    description: String,
    priceOld: String,
    priceNew1: String,
    priceNew2: String,
    sold: String,
    voucher: String,
    voucherRed1: String,
    voucherRed2: String,
    convince: String
});

module.exports = mongoose.model('catalog_goods', catalogGoods);