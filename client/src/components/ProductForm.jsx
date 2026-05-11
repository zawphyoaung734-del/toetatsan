import { useState } from 'react'
import axios from 'axios'

export default function ProductForm({ onAdd }) {

    const [form, setForm] = useState({
        brand: '',
        model: '',
        kw: '',
        type: '',
        price: '',
        image: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:5000/api/products', form)

        alert('Product Added!')

        onAdd()   // 🔥 refresh admin list
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: 20, display: 'grid', gap: 10 }}>

            <input name="brand" placeholder="Brand" onChange={handleChange} />
            <input name="model" placeholder="Model" onChange={handleChange} />
            <input name="kw" placeholder="kW" onChange={handleChange} />
            <input name="type" placeholder="Type" onChange={handleChange} />
            <input name="price" placeholder="Price" onChange={handleChange} />
            <input name="image" placeholder="Image URL" onChange={handleChange} />

            <button type="submit" style={{ background: 'green', color: 'white', padding: 10 }}>
                Save
            </button>

        </form>
    )
}