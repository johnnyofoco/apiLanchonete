const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    customerCode: Number,
    productCode: Number,
    orderCreateDate: Date,
    orderStatus: String,
})

const Model = mongoose.model('order', schema)

module.exports = Model
