import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.quantity, 0), [cart])
  const total = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.quantity, 0), [cart])
  const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const checkout = async () => {
    if (cart.length === 0) return
    try {
      const res = await fetch(`${API_BASE}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart.map(({ id, quantity }) => ({ product_id: id, quantity })))
      })
      const data = await res.json()
      alert(`Order placed! Total: $${data.total}`)
      setCart([])
    } catch (e) {
      alert('Checkout failed. Please try again.')
    }
  }

  useEffect(() => {
    // hydrate from localStorage
    const s = localStorage.getItem('pp_cart')
    if (s) setCart(JSON.parse(s))
  }, [])

  useEffect(() => {
    localStorage.setItem('pp_cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white text-slate-900">
      <Navbar cartCount={cartCount} />
      <Hero />
      <ProductGrid onAddToCart={addToCart} />

      <section id="cart" className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white/80 border border-lime-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Your Cart</h3>
            <button onClick={checkout} disabled={!cart.length} className="disabled:opacity-50 bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-xl">Checkout</button>
          </div>
          {cart.length === 0 ? (
            <p className="text-slate-600 mt-4">Your cart is empty.</p>
          ) : (
            <div className="mt-4 space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between border border-lime-200 rounded-xl p-3 bg-white">
                  <div className="flex items-center gap-3">
                    <img src={item.image_url} alt={item.title} className="w-14 h-14 object-cover rounded-lg border" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-slate-600">Qty {item.quantity}</div>
                    </div>
                  </div>
                  <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="text-slate-600">Subtotal</div>
                <div className="text-lg font-bold">${total.toFixed(2)}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 border border-lime-200 rounded-2xl p-6">
            <div className="text-lime-700 font-semibold">Natural Ingredients</div>
            <p className="text-slate-600 mt-1">We source high-quality proteins and grains for balanced meals.</p>
          </div>
          <div className="bg-white/80 border border-lime-200 rounded-2xl p-6">
            <div className="text-lime-700 font-semibold">Vet Approved</div>
            <p className="text-slate-600 mt-1">Formulated with guidance from veterinary nutritionists.</p>
          </div>
          <div className="bg-white/80 border border-lime-200 rounded-2xl p-6">
            <div className="text-lime-700 font-semibold">Fast Delivery</div>
            <p className="text-slate-600 mt-1">Free shipping on orders over $35 with 2-3 day delivery.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
