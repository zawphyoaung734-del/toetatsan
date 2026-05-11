const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const helmet = require('helmet')

const connectDB = require('./config/db')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(cors())

app.use(helmet())

app.use('/api/products', require('./routes/productRoutes'))

app.get('/seed', async (req, res) => {
    const Product = require('./models/Product')

    await Product.deleteMany() // 🔥 old data clear

    await Product.insertMany([
        { brand: 'Jelist', model: '1500D', kw: 1.1, type: 'Open Type', price: '820,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Jelist', model: '2500 (စတပ်ပါ)', kw: 2.0, type: 'Open Type', price: '1,220,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Jelist', model: '2500 (စတပ်မပါ)', kw: 2.0, type: 'Open Type', price: '1,050,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'KEMAGE', model: 'KM2200io', kw: 2.2, type: 'Inverter', price: '850,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Jelist', model: '3800 (စတပ်ပါ)', kw: 2.8, type: 'Open Type', price: '1,250,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Jelist', model: '3800 (ဘီးပါ)', kw: 2.8, type: 'Open Type', price: '1,450,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Roman', model: '3500E', kw: 3.0, type: 'Open Type', price: '1,570,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Pro Lions', model: '3500EW', kw: 3.0, type: 'Open Type', price: '1,450,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Worksite', model: '3500', kw: 3.5, type: 'Open Type', price: '1,300,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Yamabisi', model: 'EC4800DXE', kw: 3.8, type: 'Open Type', price: '1,800,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Yamma', model: 'YM5500iS', kw: 3.8, type: 'Inverter', price: '2,350,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Robot', model: 'RB4000iSER', kw: 4.0, type: 'Inverter', price: '2,950,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Max QMX', model: 'Engine', kw: 4.8, type: 'Engine', price: '300,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Jelist', model: '6500D', kw: 5.5, type: 'Open Type', price: '2,500,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Shineray', model: 'SRGE7000E', kw: 5.5, type: 'Open Type', price: '2,800,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Roman', model: '6500E', kw: 5.5, type: 'Open Type', price: '2,840,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Roman', model: 'RM8800iER', kw: 6.0, type: 'Inverter', price: '3,250,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Jelist', model: '8000D', kw: 6.5, type: 'Open Type', price: '2,800,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Yamma', model: 'YM8000E', kw: 6.5, type: 'Open Type', price: '2,900,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Robot', model: 'RB7000iSER', kw: 6.5, type: 'Inverter', price: '3,500,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Yamabisi', model: 'EC8000DXE', kw: 7.0, type: 'Open Type', price: '3,300,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Roman', model: '10000E', kw: 7.5, type: 'Open Type', price: '3,220,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Yamabisi', model: 'EC9500DXE', kw: 7.5, type: 'Open Type', price: '3,400,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Okyama', model: 'YM8000EN', kw: 8.0, type: 'Open Type', price: '2,490,000 MMK', image: 'https://via.placeholder.com/300' },
        { brand: 'Roman', model: '12000E', kw: 8.5, type: 'Open Type', price: '3,570,000 MMK', image: 'https://via.placeholder.com/300' },
    ])

    res.send('Seed Done (26 Products)')
})

app.get('/', (req, res) => {
    res.send('API Running...')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

