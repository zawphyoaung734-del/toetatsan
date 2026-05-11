import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import axios from 'axios'



export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:5000/api/products')
            setProducts(res.data)
        }

        fetchData()
    }, [])
    const filteredProducts = products
        .filter((item) => {
            const keyword = search.toLowerCase()

            return (
                item.brand.toLowerCase().includes(keyword) ||
                item.model.toLowerCase().includes(keyword) ||
                `${item.kw}kw`.includes(keyword.replace(/\s/g, '')) ||
                item.type.toLowerCase().includes(keyword)
            )
        })
        .sort((a, b) => a.kw - b.kw)
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar setMenuOpen={setMenuOpen} />

            <Sidebar menuOpen={menuOpen} />

            <main className="mx-auto max-w-7xl px-4 py-8">
                <SearchBar search={search} setSearch={setSearch} />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </main>
        </div>
    )
}

