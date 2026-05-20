import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopSitesModal } from "@/components/top-sites-modal"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-outfit" })

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `Real PT Sites de Apostas – Melhores Sites de Apostas em Portugal ${currentYear}`,
  description:
    "Comparação independente dos melhores sites de apostas desportivas licenciados pelo SRIJ em Portugal. Análises de especialistas, bónus de boas-vindas e classificações imparciais — realptsitesdeapostas.com.",
  metadataBase: new URL("https://realptsitesdeapostas.com"),
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#f4faf5",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${outfit.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <Footer />
          <CookieBanner />
          <TopSitesModal />
        </div>
      </body>
    </html>
  )
}
