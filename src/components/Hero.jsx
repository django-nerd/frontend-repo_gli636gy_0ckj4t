import { ShoppingCart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#bef26433_0%,transparent_40%),radial-gradient(circle_at_80%_20%,#a3e63533_0%,transparent_35%),radial-gradient(circle_at_30%_80%,#84cc1633_0%,transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-lime-800 bg-lime-100 rounded-full px-3 py-1 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-lime-500"></span>
            Fresh & Healthy Pet Nutrition
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Pet Pantry
            <span className="block text-lime-600">Food that fuels happy tails</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Shop premium dog and cat food, curated by vets. Natural ingredients, balanced recipes, delivered fast.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-5 py-3 rounded-xl shadow-lg shadow-lime-600/30 transition-all">
              <ShoppingCart className="w-5 h-5" /> Shop bestsellers
            </a>
            <a href="#about" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-50 px-5 py-3 rounded-xl border border-slate-200">
              Learn more
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-lime-200/50 blur-2xl rounded-full" />
          <img
            className="relative w-full rounded-3xl shadow-2xl border border-lime-200"
            src="https://images.unsplash.com/photo-1558944351-c0a92c12f44e?w=1600&q=80&auto=format&fit=crop"
            alt="Happy dog with food"
          />
        </div>
      </div>
    </section>
  )
}
