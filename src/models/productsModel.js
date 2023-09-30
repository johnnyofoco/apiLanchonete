const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    code: Number,
    name: String,    
    price: Number,
})

const Model = mongoose.model('product', schema)

module.exports = Model
