import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0B0F] text-white">
      {/* Gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-white/70 bg-white/10 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            MERN Full‑Stack Engineer
          </h1>
          <p className="text-white/70 max-w-xl">
            I design and build performant, secure, and scalable web apps with MongoDB, Express, React, and Node — with a keen eye for UX and modern DevOps.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors">
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white">
              Contact Me
            </a>
          </div>
          <div className="flex gap-3 pt-2 text-xs">
            {['MongoDB','Express','React','Node','TypeScript','GraphQL','Docker','AWS'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] md:h-[560px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
