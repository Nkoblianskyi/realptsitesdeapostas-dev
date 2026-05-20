"use client"

import Link from "next/link"

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Background circle — vibrant green */}
      <circle cx="20" cy="20" r="18" fill="hsl(142,72%,32%)" />
      {/* Shine ring */}
      <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.2" strokeOpacity="0.15" />

      {/* Football */}
      <circle cx="20" cy="22" r="9" fill="white" stroke="hsl(142,72%,22%)" strokeWidth="0.8" />
      {/* Pentagon centre */}
      <polygon points="20,17.5 23,19.5 22,23 18,23 17,19.5" fill="hsl(142,72%,22%)" />
      {/* Stitch lines */}
      <line x1="20" y1="17.5" x2="20" y2="13" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
      <line x1="23" y1="19.5" x2="27" y2="18" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
      <line x1="22" y1="23" x2="24" y2="27" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
      <line x1="18" y1="23" x2="16" y2="27" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />
      <line x1="17" y1="19.5" x2="13" y2="18" stroke="hsl(142,72%,22%)" strokeWidth="0.7" />

      {/* PT flag pin on top */}
      <rect x="17" y="5" width="6" height="5" rx="0.8" fill="hsl(28,95%,52%)" />
      <text x="20" y="9.5" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="white" fontFamily="system-ui">PT</text>
    </svg>
  )
}

function WordMark() {
  return (
    <div className="flex flex-col leading-none select-none">
      <div className="flex items-baseline gap-0.5">
        <span className="font-heading font-extrabold text-[16px] md:text-[18px] tracking-tight text-primary">Real PT</span>
        <span className="font-heading font-extrabold text-[16px] md:text-[18px] tracking-tight text-foreground ml-1">Sites de</span>
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="font-heading font-extrabold text-[16px] md:text-[18px] tracking-tight text-foreground">Apostas</span>
        <span className="font-heading font-bold text-[11px] tracking-tight text-highlight ml-1 mb-0.5">.com</span>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      {/* Thin green accent line */}
      <div className="h-0.5 w-full bg-primary" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="Real PT Sites de Apostas — início"
          >
            <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <LogoMark />
            </div>
            <WordMark />
          </Link>

          {/* Right side: SRIJ badge + 18+ */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex items-center gap-1 text-[10px] font-heading font-semibold text-muted-foreground border border-border rounded px-2 py-1 bg-surface">
              Licenciado SRIJ
            </span>
            <span
              className="text-[11px] font-heading font-bold text-destructive border border-destructive/50 px-2 py-1 bg-destructive/8 uppercase tracking-widest rounded"
              aria-label="18 mais apenas"
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
