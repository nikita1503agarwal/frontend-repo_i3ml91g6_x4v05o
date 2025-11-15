export default function ProjectCard({ title, description, tags = [], link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">{t}</span>
        ))}
      </div>
    </a>
  )
}
