import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { Info } from "lucide-react"

export function RatingSection() {
  return (
    <section className="w-full bg-background py-10 md:py-14" id="sites" aria-label="Classificação de Sites de Apostas em Portugal">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Section heading */}
        <div className="mb-6">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-primary mb-1.5">
            Classificações {new Date().getFullYear()}
          </p>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
            Melhores Sites de Apostas em Portugal
          </h2>
          <p className="text-muted-foreground text-sm mt-1.5 max-w-xl leading-relaxed">
            Todos os operadores abaixo são licenciados pelo SRIJ e testados independentemente pela nossa equipa editorial.
          </p>
        </div>

        {/* Column headers — desktop only */}
        <div className="hidden md:grid md:grid-cols-[56px_156px_1fr_148px_164px] px-5 mb-2 text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground gap-0">
          <div className="text-center">Posição</div>
          <div className="text-center">Operador</div>
          <div className="pl-5">Oferta</div>
          <div className="text-center pl-4">Score</div>
          <div className="text-center pl-5">Ação</div>
        </div>

        {/* Cards list */}
        <div className="space-y-3">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Disclosure note */}
        <div className="mt-6 flex items-start gap-3 bg-white border border-border rounded-xl px-4 py-3">
          <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            As classificações são baseadas em avaliação editorial independente. Podemos receber comissão quando visita um operador através dos nossos links. Isso não afeta as nossas classificações. Todos os operadores listados detêm uma licença SRIJ válida.{" "}
            <span className="text-destructive font-semibold">18+</span> · Jogue com responsabilidade · jogoresponsavel.pt
          </p>
        </div>
      </div>
    </section>
  )
}
