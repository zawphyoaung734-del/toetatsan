const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// GET ALL
router.get('/', async (req, res) => {
    const data = await Product.find().sort({ _id: -1 })
    res.json(data)
})

// ADD PRODUCT
router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json(product)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// DELETE PRODUCT
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({ message: 'Deleted' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})




module.exports = router