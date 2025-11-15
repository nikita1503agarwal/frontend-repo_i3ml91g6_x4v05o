import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

export default function App() {
  const projects = [
    {
      title: 'Fintech Dashboard',
      description: 'Real-time analytics, authentication, and role-based access built on MERN.',
      tags: ['MongoDB','Express','React','Node','JWT','Charts'],
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Headless storefront with payments, search, and admin suite.',
      tags: ['Next.js','MongoDB','Stripe','Tailwind'],
      link: '#'
    },
    {
      title: 'SaaS Starter',
      description: 'Subscription billing, teams, and feature flags, deployable in minutes.',
      tags: ['TypeScript','React','Node','Prisma'],
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0A0B0F]">
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/80 leading-relaxed">
            I’m a full‑stack engineer specializing in building modern web apps with the MERN stack. I care about clean architecture, great UX, and performance budgets. I ship production features end‑to‑end: from database schema and APIs to pixel‑perfect interfaces.
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white/80 leading-relaxed">
            My current focus: scalable backend services, type‑safe APIs, CI/CD, and observability. I’m also exploring 3D experiences on the web using Spline for delightful hero sections.
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['MongoDB','Express.js','React','Node.js','TypeScript','Next.js','GraphQL','Tailwind','Jest','Docker','AWS','CI/CD'].map(s => (
            <div key={s} className="rounded-xl p-4 bg-white/5 border border-white/10 text-white/80 text-sm">
              {s}
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <form className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Your name" />
              <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Your email" />
            </div>
            <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Tell me about your project" />
            <button type="button" className="justify-self-start inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
