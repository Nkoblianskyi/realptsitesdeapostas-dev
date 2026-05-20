import Link from "next/link"
import { Shield } from "lucide-react"

const footerNav = [
  { label: "Política de Privacidade", href: "/privacy-policy" },
  { label: "Política de Cookies", href: "/cookie-policy" },
  { label: "Sobre Nós", href: "/about" },
  { label: "Jogo Responsável", href: "/responsible-gambling" },
]

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group mb-3" aria-label="Real PT Sites de Apostas — início">
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="hsl(142,72%,32%)" />
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" />
        <circle cx="20" cy="22" r="9" fill="white" stroke="hsl(142,72%,22%)" strokeWidth="0.8" />
        <polygon points="20,17.5 23,19.5 22,23 18,23 17,19.5" fill="hsl(142,72%,22%)" />
        <line x1="20" y1="17.5" x2="20" y2="13" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
        <line x1="23" y1="19.5" x2="27" y2="18" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
        <line x1="22" y1="23" x2="24" y2="27" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
        <line x1="18" y1="23" x2="16" y2="27" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
        <line x1="17" y1="19.5" x2="13" y2="18" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
        <rect x="17" y="5" width="6" height="5" rx="0.8" fill="hsl(28,95%,52%)" />
        <text x="20" y="9.5" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="white" fontFamily="system-ui">PT</text>
      </svg>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-0.5">
          <span className="font-heading font-extrabold text-[15px] tracking-tight text-primary">Real PT</span>
          <span className="font-heading font-extrabold text-[15px] tracking-tight text-white ml-1">Sites de</span>
        </div>
        <div className="flex items-baseline">
          <span className="font-heading font-extrabold text-[15px] tracking-tight text-white">Apostas</span>
          <span className="font-heading font-bold text-[10px] tracking-tight text-highlight ml-1 mb-0.5">.com</span>
        </div>
      </div>
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="w-full bg-navy text-navy-foreground" aria-label="Rodapé do site">

      {/* ── Main footer body ── */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand column */}
          <div className="flex-shrink-0 max-w-xs">
            <FooterLogo />
            <p className="text-[12px] text-white/55 leading-relaxed mt-1">
              Comparação independente de sites de apostas licenciados pelo SRIJ em Portugal. Não operamos uma casa de apostas. Todas as classificações são baseadas em avaliação editorial independente.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-[11px] text-white/50 tracking-wide">Operadores Licenciados pelo SRIJ</span>
            </div>
          </div>

          {/* Nav + Contact columns */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/40 mb-4">Páginas</p>
              <nav className="flex flex-col gap-2.5" aria-label="Navegação do rodapé">
                {footerNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/40 mb-4">Contacto</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:info@realptsitesdeapostas.com" className="text-[13px] text-white/65 hover:text-white transition-colors">
                  info@realptsitesdeapostas.com
                </a>
                <span className="text-[12px] text-white/35">realptsitesdeapostas.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Portuguese regulatory / responsible gambling logos ── */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4">Jogo Responsável &amp; Regulação</p>
          <div className="flex flex-row flex-wrap items-center gap-3">
            {[
              { src: "/srij-new.svg", alt: "SRIJ — Serviço de Regulação e Inspeção de Jogos", href: "https://www.srij.turismodeportugal.pt/", whiteBg: false },
              { src: "/jogo-responsavel-new.png", alt: "Jogo Responsável", href: "https://www.jogoresponsavel.pt/", whiteBg: false },
              { src: "/gamble.webp", alt: "Gamble Ware", href: "https://www.gambleaware.org/", whiteBg: false },
              { src: "/icad.png", alt: "ICAD — Instituto da Droga e Dependências", href: "https://www.sicad.pt/", whiteBg: true },
              { src: "/gamecare.svg", alt: "GameCare", href: "https://www.gamcare.org", whiteBg: true },
            ].map(({ src, alt, href, whiteBg }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`border px-3 py-2 rounded-lg transition-colors ${whiteBg ? "bg-white hover:bg-white/90 border-white/40" : "bg-white/10 hover:bg-white/18 border-white/10"}`}
                aria-label={alt}
              >
                <img src={src} alt={alt} className="h-6 w-auto object-contain opacity-90" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div className="border-b border-white/10 bg-black/15">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[11px] text-white/40 leading-relaxed">
            <span className="text-destructive font-semibold">18+</span> · realptsitesdeapostas.com é um site de comparação independente. Podemos receber comissão quando utilizadores visitam operadores através dos nossos links. Isso não influencia as nossas classificações editoriais. Todos os operadores listados detêm uma licença SRIJ válida. Por favor jogue com responsabilidade. Se estiver preocupado com o seu jogo, visite{" "}
            <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
              jogoresponsavel.pt
            </a>.
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/30 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} realptsitesdeapostas.com. Todos os direitos reservados.</span>
        <span className="text-destructive font-heading font-bold border border-destructive/50 px-2 py-0.5 bg-destructive/10 rounded">18+</span>
      </div>
    </footer>
  )
}
