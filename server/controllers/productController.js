const Product = require('../models/Product')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ kw: 1 })

        res.json(products)
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)

        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: 'Create Product Failed',
        })
    }
}

module.exports = {
    getProducts,
    createProduct,
}


