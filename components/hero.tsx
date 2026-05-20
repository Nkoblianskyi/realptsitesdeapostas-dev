import Image from "next/image"
import { ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react"

const trustBadges = [
  { icon: ShieldCheck,   title: "Licenciado SRIJ" },
  { icon: CheckCircle2,  title: "Análises Independentes" },
  { icon: TrendingUp,    title: "Odds Verificadas" },
]

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Hero — Melhores Sites de Apostas em Portugal">

      {/* Background stadium image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/soccer-team-celebrating-championship-victory-with-.jpg"
          alt="Estádio de futebol português"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Black overlay 60% */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle sport pattern */}
        <div className="absolute inset-0 hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 py-10 md:py-14 max-w-4xl mx-auto w-full gap-4">

        {/* Year tag */}
        <div className="inline-flex items-center gap-1.5 bg-white/12 border border-white/22 rounded-full px-3.5 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse flex-shrink-0" />
          <span className="font-heading font-semibold text-[10px] uppercase tracking-widest text-white/90">
            Rankings {new Date().getFullYear()} — Atualizado Mensalmente
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight text-white tracking-tight text-balance">
          Melhores <span className="text-highlight">Sites de Apostas</span>{" "}
          <br className="hidden sm:block" />
          Desportivas em Portugal
        </h1>

        {/* Subline */}
        <p className="text-white text-sm sm:text-base leading-relaxed max-w-lg text-balance drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          Classificações independentes dos melhores operadores licenciados pelo SRIJ, analisados por especialistas e atualizados mensalmente.
        </p>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-1">
          {trustBadges.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-1.5 bg-white/10 border border-white/18 rounded-lg px-3 py-2"
            >
              <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-heading font-semibold text-[11px] text-white whitespace-nowrap">{title}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
