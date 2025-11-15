import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide text-white/90">MERN Engineer</a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors">
            Hire Me
          </a>
        </div>
        <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-block mt-2 text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white">
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
