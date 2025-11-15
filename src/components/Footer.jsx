export default function Footer() {
  return (
    <footer className="bg-[#0A0B0F] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} MERN Engineer — All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70">
          <a className="hover:text-white" href="#">LinkedIn</a>
          <a className="hover:text-white" href="#">GitHub</a>
          <a className="hover:text-white" href="#">Twitter/X</a>
        </div>
      </div>
    </footer>
  )
}
