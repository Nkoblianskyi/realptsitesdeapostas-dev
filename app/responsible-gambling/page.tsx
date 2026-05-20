import Link from "next/link"
import { ArrowLeft, ShieldAlert, CheckCircle, AlertTriangle, HeartHandshake, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"

function Section({ title, icon: Icon, iconClass, children }: {
  title: string
  icon: React.ElementType
  iconClass: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${iconClass}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <h2 className="font-heading font-bold text-base text-foreground">{title}</h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}

const principles = [
  { num: "1", title: "Aposte Apenas o Que Pode Perder",        desc: "Nunca utilize dinheiro reservado para contas, renda ou despesas essenciais." },
  { num: "2", title: "Defina Limites Antes de Começar",        desc: "Decida o seu orçamento e limites de tempo antecipadamente, e cumpra-os." },
  { num: "3", title: "Nunca Persiga Perdas",                   desc: "Aceitar uma perda faz parte das apostas. Perseguir perdas leva a perdas maiores." },
  { num: "4", title: "Não Aposte Sob Influência",              desc: "Evite apostar quando está emocionalmente instável, cansado ou sob influência de álcool." },
]

const safePractices = [
  "Defina um orçamento mensal rigoroso para apostas",
  "Utilize limites de depósito na sua conta",
  "Mantenha outras atividades de lazer na sua vida",
  "Faça pausas regulares das apostas",
  "Utilize ferramentas de auto-exclusão se necessário",
]

const warningSigns = [
  "Apostar mais do que pode perder",
  "Esconder o jogo da família ou amigos",
  "Pedir dinheiro emprestado para apostar",
  "Negligenciar o trabalho ou responsabilidades",
  "Sentir ansiedade quando não pode apostar",
]

const supportOrgs = [
  { name: "Jogo Responsável",  url: "https://www.jogoresponsavel.pt",     display: "jogoresponsavel.pt",     desc: "Portal oficial do SRIJ para jogo responsável" },
  { name: "SICAD",             url: "https://www.sicad.pt",                display: "sicad.pt",                desc: "Serviço de Intervenção nos Comportamentos Aditivos" },
  { name: "SRIJ",              url: "https://www.srij.turismodeportugal.pt", display: "srij.turismodeportugal.pt", desc: "Serviço de Regulação e Inspeção de Jogos" },
  { name: "Gambling Therapy",  url: "https://www.gamblingtherapy.org",     display: "gamblingtherapy.org",     desc: "Apoio internacional gratuito online" },
]

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-navy px-4 py-8 border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors mb-4 tracking-wide">
            <ArrowLeft className="w-3 h-3" />
            Voltar às Classificações
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">Jogo Responsável</h1>
                <p className="text-white/55 text-sm mt-0.5">As apostas devem ser sempre entretenimento</p>
              </div>
            </div>
            <span className="text-destructive font-heading font-bold text-sm border border-destructive/60 px-2.5 py-1 bg-destructive/10 rounded flex-shrink-0">18+</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        {/* Warning banner */}
        <div className="border-2 border-destructive/30 bg-destructive/5 rounded-xl px-5 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground font-semibold mb-1">Aviso Importante</p>
              <p className="text-sm text-foreground/75 leading-relaxed">
                As apostas desportivas podem ser viciantes e causar danos financeiros e pessoais graves. Nunca aposte dinheiro que não pode perder. Se o jogo estiver a afetar a sua vida, procure ajuda imediatamente.
              </p>
              <p className="text-destructive font-heading font-bold text-sm mt-2 uppercase tracking-wide">Estritamente Maiores de 18 Anos</p>
            </div>
          </div>
        </div>

        <Section icon={HeartHandshake} iconClass="bg-primary/10 text-primary" title="O Que É o Jogo Responsável?">
          <p className="text-muted-foreground text-sm leading-relaxed">
            O jogo responsável significa apostar de forma consciente, controlada e segura, mantendo um equilíbrio saudável entre o entretenimento e a responsabilidade pessoal e financeira. As apostas devem ser uma forma de entretenimento, não uma fonte de rendimento ou uma forma de resolver problemas financeiros.
          </p>
        </Section>

        {/* Key principles */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-heading font-bold text-base text-foreground">Princípios Fundamentais</h2>
          </div>
          <div className="divide-y divide-border">
            {principles.map((item) => (
              <div key={item.num} className="flex gap-4 px-5 py-4">
                <div className="w-7 h-7 bg-primary text-white flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 rounded-lg">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safe / Warning grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-5 py-4">
              <CheckCircle className="w-4 h-4 text-primary" />
              <h2 className="font-heading font-bold text-sm text-foreground">Práticas Seguras</h2>
            </div>
            <ul className="px-5 py-4 space-y-2.5">
              {safePractices.map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold text-base leading-none mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-destructive/20 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-destructive/20 px-5 py-4 bg-destructive/5">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <h2 className="font-heading font-bold text-sm text-destructive">Sinais de Alerta</h2>
            </div>
            <ul className="px-5 py-4 space-y-2.5">
              {warningSigns.map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive font-bold text-base leading-none mt-0.5">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Support services */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-heading font-bold text-base text-foreground">Serviços de Apoio em Portugal</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {supportOrgs.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-4 hover:bg-surface transition-colors group"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-heading font-bold text-foreground text-sm">{org.name}</div>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-primary text-xs font-medium">{org.display}</div>
                <div className="text-muted-foreground text-[10px] mt-0.5">{org.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer warning */}
        <div className="bg-navy text-white text-center py-4 rounded-xl">
          <span className="font-heading font-extrabold text-sm uppercase tracking-widest">Proibido Menores de 18 Anos</span>
        </div>

      </div>
    </div>
  )
}
