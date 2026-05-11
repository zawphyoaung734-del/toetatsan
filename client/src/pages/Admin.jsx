import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'

export default function Admin() {

    const [open, setOpen] = useState(false)
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const res = await axios.get('http://localhost:5000/api/products')
        setProducts(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`)
        fetchData()
    }

    return (
        <div style={{ padding: 20, background: '#111', color: 'white', minHeight: '100vh' }}>

            <h1>Admin Dashboard</h1>

            <button
                onClick={() => setOpen(true)}
                style={{ padding: 10, background: 'gold' }}
            >
                ➕ Add Product
            </button>

            {open && (
                <ProductForm
                    onAdd={() => {
                        fetchData()
                        setOpen(false)
                    }}
                />
            )}

            <hr />

            <h2>Products</h2>

            {products.map(p => (
                <div key={p._id} style={{ margin: 10, padding: 10, background: '#222' }}>
                    <p>{p.brand} - {p.model} - {p.kw}kW</p>

                    <button
                        onClick={() => deleteProduct(p._id)}
                        style={{ background: 'red', color: 'white' }}
                    >
                        Delete
                    </button>
                </div>
            ))}

        </div>
    )
}