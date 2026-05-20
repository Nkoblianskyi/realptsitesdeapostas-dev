import Image from "next/image"
import { bettingSites } from "@/lib/mock-data"
import { Award, Star, ExternalLink } from "lucide-react"

export function OurChoiceSection() {
  const top = bettingSites[0]

  return (
    <section className="w-full bg-surface border-y border-border py-8 md:py-10" aria-label="A Nossa Melhor Escolha">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
          <div>
            <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-primary mb-0.5">
              Destaque do Mês
            </p>
            <h2 className="font-heading font-extrabold text-xl md:text-2xl text-foreground leading-tight">
              A Nossa Melhor Escolha Este Mês
            </h2>
            <p className="text-muted-foreground text-sm mt-0.5">
              O operador com a classificação mais elevada nas nossas classificações atuais licenciadas pelo SRIJ
            </p>
          </div>
        </div>

        {/* Featured card */}
        <a
          href={top.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="group block border border-highlight/50 bg-white hover:border-highlight rounded-2xl transition-all overflow-hidden rank-1-glow card-hover"
          aria-label={`Visitar ${top.name} — ${top.bonus}`}
        >
          {/* Green-to-orange top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary to-highlight rounded-t-2xl" />

          <div className="flex flex-col md:flex-row md:items-stretch">

            {/* Left: logo + rating */}
            <div className="flex flex-row md:flex-col items-center justify-between md:justify-center md:w-56 bg-surface border-b md:border-b-0 md:border-r border-border px-6 py-5 gap-4 rounded-b-none rounded-l-2xl">
              <div className="w-36 md:w-40 h-14 md:h-16 bg-black rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                <Image
                  src={top.logo || "/placeholder.svg"}
                  alt={`${top.name} logótipo`}
                  width={140}
                  height={56}
                  className="max-h-10 w-full object-contain"
                />
              </div>
              <div className="text-center flex-shrink-0">
                <div className="font-heading font-extrabold text-5xl text-primary leading-none tabular-nums">
                  {top.rating.toFixed(1)}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 mb-2">/10 classificação</div>
                <div className="flex items-center justify-center gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < top.stars ? "fill-highlight text-highlight" : "fill-muted text-muted"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1.5">{top.reviews.toLocaleString("pt-PT")} avaliações</div>
              </div>
            </div>

            {/* Right: offer + CTA */}
            <div className="flex-1 px-5 md:px-8 py-6 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-highlight text-white text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Escolha n.º 1
                  </span>
                  <span className="text-[11px] text-muted-foreground tracking-wide">
                    {new Date().toLocaleString("pt-PT", { month: "long", year: "numeric" })}
                  </span>
                </div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                  Oferta de Boas-Vindas
                </div>
                <p className="text-foreground font-heading font-bold text-xl md:text-2xl leading-snug">{top.welcomeOffer}</p>
                <p className="text-muted-foreground text-[13px] mt-1">{top.bonus}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{top.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-full sm:w-52 bg-highlight hover:bg-highlight/90 text-white font-heading font-bold uppercase tracking-wide text-sm h-12 flex items-center justify-center gap-2 transition-colors rounded-xl cursor-pointer">
                  Reivindicar Bónus
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  <span className="text-destructive font-semibold">18+</span> · Apenas novos clientes · Aplicam-se T&amp;Cs · jogoresponsavel.pt
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
