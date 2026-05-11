const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    brand: String,
    model: String,
    kw: String,
    type: String,
    price: String,
    image: String
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)