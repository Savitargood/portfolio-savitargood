export default function Footer() {
  return (
    <footer className="border-t border-ink-border/40 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="flex items-center gap-2 font-serif font-bold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          Silas Victor · Dev Full Stack
        </p>
        <p className="text-slate-600">
          © {new Date().getFullYear()} — Brasília, DF · Aberto a oportunidades remotas
        </p>
        <div className="flex items-center gap-5 text-slate-500">
          <a
            href="https://github.com/Savitargood"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/silas-victor-1578531ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
