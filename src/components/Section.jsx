export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-20 bg-[#0A0B0F] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight">{title}</h2>
        <div className="grid gap-6">
          {children}
        </div>
      </div>
    </section>
  )
}
