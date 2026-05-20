"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X, ShieldCheck } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookieConsent")) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem("cookieConsent", value)
      localStorage.setItem("cookieConsentDate", new Date().toISOString())
    } catch { /* silent */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary shadow-[0_-4px_32px_hsl(142_72%_32%/0.14)]"
      role="dialog"
      aria-label="Consentimento de cookies"
    >
      {/* Green top accent */}
      <div className="h-1 w-full bg-primary" />

      <div className="container mx-auto max-w-6xl px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="font-heading font-bold text-sm text-foreground mb-0.5">
                Preferências de Cookies
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar a sua experiência em{" "}
                <span className="font-medium text-foreground/80">realptsitesdeapostas.com</span>{" "}
                e para analisar o tráfego do site. Consulte a nossa{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline underline-offset-2 font-medium">
                  Política de Cookies
                </Link>{" "}
                para mais detalhes.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => choose("rejected")}
              className="h-9 px-4 text-[11px] font-heading font-bold uppercase tracking-wide border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors rounded-lg bg-transparent"
            >
              Apenas Essenciais
            </button>
            <button
              onClick={() => choose("accepted")}
              className="h-9 px-5 text-[11px] font-heading font-bold uppercase tracking-wide bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Aceitar Todos
            </button>
            <button
              onClick={() => choose("rejected")}
              className="h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface transition-colors rounded-lg border border-border"
              aria-label="Fechar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
