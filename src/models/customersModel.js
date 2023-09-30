const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    code: Number,
    name: String,
    email: String,
    phone: Number,
    adress: String,
})

const Model = mongoose.model('customer', schema)

module.exports = Model
