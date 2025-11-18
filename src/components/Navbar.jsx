import { ShoppingBag, PawPrint, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-lime-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-slate-900 font-extrabold text-xl">
          <PawPrint className="text-lime-600" /> Pet Pantry
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#products" className="hover:text-lime-700">Products</a>
          <a href="#about" className="hover:text-lime-700">About</a>
          <a href="#contact" className="hover:text-lime-700">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#cart" className="relative inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-xl transition">
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-slate-900 text-white w-5 h-5 rounded-full grid place-items-center">
                {cartCount}
              </span>
            )}
          </a>
          <button className="md:hidden p-2 rounded-lg border border-slate-300" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-white/80">
          <a href="#products" className="py-2 border-b">Products</a>
          <a href="#about" className="py-2 border-b">About</a>
          <a href="#contact" className="py-2">Contact</a>
        </div>
      )}
    </header>
  )
}
