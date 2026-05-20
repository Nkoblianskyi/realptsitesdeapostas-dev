"use client"

import Image from "next/image"
import { Star, ExternalLink } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

function Stars({ count, size = "sm" }: { count: number; size?: "sm" | "md" }) {
  const cls = size === "md" ? "w-4 h-4" : "w-3.5 h-3.5"
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < count ? "fill-highlight text-highlight" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function Badge({ site }: { site: BettingSite }) {
  if (site.isTopRating)
    return (
      <span className="inline-flex items-center gap-1 bg-highlight text-white text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        Melhor Escolha
      </span>
    )
  if (site.isTopLine)
    return (
      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/30 text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        Melhor Valor
      </span>
    )
  if (site.isPopular)
    return (
      <span className="inline-flex items-center gap-1 bg-surface text-foreground border border-border text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        Popular
      </span>
    )
  if (site.isTrending)
    return (
      <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 border border-orange-200 text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        Em Tendência
      </span>
    )
  return null
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const isFirst = rank === 1

  return (
    <article
      className={`
        group relative overflow-hidden bg-white border rounded-xl card-hover
        ${isFirst ? "border-highlight rank-1-glow" : "border-border hover:border-primary/40"}
      `}
      aria-label={`${site.name} — Posição ${rank}`}
    >
      {/* Left rank accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${isFirst ? "bg-highlight" : "bg-transparent group-hover:bg-primary/40"} transition-colors`}
        aria-hidden="true"
      />

      {/* Badge row */}
      <div className="flex items-center gap-2 px-4 pt-3 md:px-5">
        <Badge site={site} />
        {isFirst && (
          <span className="text-[10px] text-muted-foreground tracking-wide">
            Escolha dos Editores, {new Date().toLocaleString("pt-PT", { month: "long", year: "numeric" })}
          </span>
        )}
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:grid md:grid-cols-[56px_156px_1fr_148px_164px] md:items-center md:gap-0 px-5 py-4">

        {/* Rank number */}
        <div className="flex items-center justify-center">
          <div
            className={`w-10 h-10 flex items-center justify-center font-heading font-extrabold text-xl leading-none rounded-lg ${isFirst ? "bg-highlight text-white" : "bg-surface text-muted-foreground"}`}
          >
            {rank}
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center px-3">
          <div className="w-36 h-14 bg-black rounded-lg flex items-center justify-center p-2">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logótipo`}
              width={120}
              height={48}
              className="max-h-10 w-full object-contain"
            />
          </div>
        </div>

        {/* Offer */}
        <div className="px-5 border-l border-border flex flex-col items-center text-center">
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
            Oferta de Boas-Vindas
          </div>
          <p className="text-foreground font-heading font-bold text-base leading-snug">{site.welcomeOffer}</p>
          <p className="text-[12px] text-muted-foreground mt-1">{site.bonus}</p>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center justify-center border-l border-border px-4 text-center gap-1">
          <div className="font-heading font-extrabold text-4xl text-primary leading-none tabular-nums">
            {site.rating.toFixed(1)}
          </div>
          <div className="text-[10px] text-muted-foreground">/10 score</div>
          <Stars count={site.stars} size="md" />
          <div className="text-[10px] text-muted-foreground">{site.reviews.toLocaleString("pt-PT")} avaliações</div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center border-l border-border pl-5 gap-2">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className={`w-full text-white font-heading font-bold uppercase tracking-wide text-sm h-11 flex items-center justify-center gap-2 transition-colors rounded-lg ${isFirst ? "bg-highlight hover:bg-highlight/90" : "bg-primary hover:bg-primary/90"}`}
            aria-label={`Visitar ${site.name}`}
          >
            Visitar Site
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-[10px] text-muted-foreground tracking-wide">Aplicam-se T&amp;Cs</span>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden px-4 pb-4 pt-3">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-8 h-8 flex items-center justify-center font-heading font-extrabold text-base flex-shrink-0 rounded-md ${isFirst ? "bg-highlight text-white" : "bg-surface text-muted-foreground"}`}
          >
            {rank}
          </div>
          <div className="flex-1 flex items-center justify-center bg-black h-12 px-3 py-1 rounded-lg">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logótipo`}
              width={100}
              height={36}
              className="max-h-8 w-full object-contain"
            />
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-heading font-extrabold text-2xl text-primary leading-none tabular-nums">
              {site.rating.toFixed(1)}
            </div>
            <Stars count={site.stars} />
          </div>
        </div>

        <div
          className={`px-3 py-2.5 mb-3 border-l-[3px] rounded-r-lg ${isFirst ? "border-highlight bg-highlight/6" : "border-primary/40 bg-secondary"}`}
        >
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
            Oferta de Boas-Vindas
          </div>
          <div className="text-foreground font-heading font-bold text-sm">{site.welcomeOffer}</div>
          <div className="text-[11px] text-muted-foreground">{site.bonus}</div>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className={`block w-full text-white font-heading font-bold uppercase tracking-wide text-sm h-11 flex items-center justify-center gap-2 transition-colors rounded-lg ${isFirst ? "bg-highlight hover:bg-highlight/90" : "bg-primary hover:bg-primary/90"}`}
          aria-label={`Visitar ${site.name}`}
        >
          Visitar Site
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Disclaimer strip */}
      <div className="border-t border-border px-4 md:px-5 py-2 bg-surface/60 rounded-b-xl">
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          <span className="text-destructive font-semibold">18+</span> · Apenas novos clientes · Licenciado SRIJ · Aplicam-se T&amp;Cs · jogoresponsavel.pt
        </p>
      </div>
    </article>
  )
}
