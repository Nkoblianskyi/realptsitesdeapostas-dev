"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, Star, ExternalLink, Trophy } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [open, setOpen] = useState(false)
  const top = bettingSites[0]

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 9000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!open || !top) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-navy/85 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="presentation"
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="A nossa melhor escolha"
      >
        {/* Green top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary to-highlight rounded-t-2xl" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-surface border-b border-border">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-highlight flex-shrink-0" aria-hidden="true" />
            <span className="font-heading font-bold text-sm text-foreground">Melhor Escolha do Mês</span>
            <span className="text-[10px] text-muted-foreground hidden sm:inline">
              {new Date().toLocaleString("pt-PT", { month: "long", year: "numeric" })}
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-lg"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Logo */}
        <div className="mx-5 mt-5 bg-black rounded-xl flex items-center justify-center h-16 p-3">
          <Image
            src={top.logo || "/placeholder.svg"}
            alt={`${top.name} logótipo`}
            width={160}
            height={48}
            className="max-h-10 max-w-[150px] object-contain"
          />
        </div>

        {/* Rating */}
        <div className="mx-5 mt-3 flex items-center justify-between border border-border bg-surface rounded-xl px-4 py-3">
          <div className="flex gap-0.5" aria-label={`${top.stars} de 5 estrelas`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < top.stars ? "fill-highlight text-highlight" : "fill-muted text-muted"}`}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="text-right">
            <span className="font-heading font-extrabold text-3xl text-primary tabular-nums leading-none">
              {top.rating.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">/10</span>
          </div>
        </div>

        {/* Offer */}
        <div className="mx-5 mt-3 border-l-[3px] border-highlight bg-highlight/6 px-4 py-3 rounded-r-xl">
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Oferta de Boas-Vindas
          </div>
          <p className="text-foreground font-heading font-bold text-base leading-snug">{top.welcomeOffer}</p>
          <p className="text-[12px] text-muted-foreground mt-0.5">{top.bonus}</p>
        </div>

        {/* Badge */}
        <div className="mx-5 mt-3">
          <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <Trophy className="w-3 h-3" />
            Escolha n.º 1 dos Editores {new Date().getFullYear()}
          </span>
        </div>

        {/* CTA */}
        <div className="p-5 pt-4">
          <a
            href={top.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="flex items-center justify-center gap-2 w-full h-12 bg-highlight hover:bg-highlight/90 text-white font-heading font-bold uppercase tracking-wide text-sm transition-colors rounded-xl"
          >
            Reivindicar Bónus
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-center text-[10px] text-muted-foreground mt-3">
            <span className="text-destructive font-semibold">18+</span> · Apenas novos clientes · Aplicam-se T&amp;Cs · jogoresponsavel.pt
          </p>
        </div>
      </div>
    </div>
  )
}
