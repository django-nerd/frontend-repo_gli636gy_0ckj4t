import { useEffect, useState } from 'react'
import { Star, PlusCircle, Check } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductGrid({ onAddToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center text-slate-500">Loading products...</div>
    )
  }

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Bestsellers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <article key={p.id} className="group bg-white/80 border border-lime-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="relative">
              <img src={p.image_url} alt={p.title} className="h-56 w-full object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 text-lime-700 text-xs font-semibold px-2 py-1 rounded-full border border-lime-200">{p.category}</div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-lime-700">{p.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-2 mt-1">{p.description}</p>
              <div className="flex items-center gap-1 text-amber-500 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(p.rating || 4.5) ? '' : 'opacity-30'}`} fill="currentColor" />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-slate-900">
                  ${p.price.toFixed(2)}
                </div>
                <button onClick={() => onAddToCart(p)} className="inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-xl">
                  <PlusCircle className="w-5 h-5" /> Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
