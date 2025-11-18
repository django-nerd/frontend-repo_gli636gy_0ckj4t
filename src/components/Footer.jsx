export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-lime-200 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-slate-700">
        <div>
          <h4 className="font-bold text-slate-900">Pet Pantry</h4>
          <p className="text-sm mt-2">Nutritious food for dogs and cats, delivered to your door.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Support</h4>
          <ul className="text-sm mt-2 space-y-2">
            <li><a className="hover:text-lime-700" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-lime-700" href="#">FAQ</a></li>
            <li><a className="hover:text-lime-700" href="#">Contact us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Newsletter</h4>
          <form className="mt-2 flex gap-2">
            <input placeholder="Your email" className="flex-1 rounded-xl border border-lime-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500" />
            <button className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-xl">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Pet Pantry. All rights reserved.</div>
    </footer>
  )
}
