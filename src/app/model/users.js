const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: {type: String, required: true},
    email: {type: String},
    password: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('users', user)