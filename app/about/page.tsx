import Link from "next/link"
import { ArrowLeft, Target, ClipboardList, Heart, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

function PageHeader({ title, subtitle, badge }: { title: string; subtitle: string; badge?: string }) {
  return (
    <div className="bg-navy px-4 py-8 border-b border-white/10">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors mb-4 tracking-wide"
        >
          <ArrowLeft className="w-3 h-3" />
          Voltar às Classificações
        </Link>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white leading-tight">{title}</h1>
            <p className="text-white/55 text-sm mt-1.5">{subtitle}</p>
          </div>
          {badge && (
            <span className="text-destructive font-heading font-bold text-sm border border-destructive/60 px-2.5 py-1 bg-destructive/10 rounded flex-shrink-0">
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-3.5 h-3.5 text-primary" />
        </div>
        <h2 className="font-heading font-bold text-base text-foreground">{title}</h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader
        title="Sobre Nós"
        subtitle="Comparação independente de sites de apostas — realptsitesdeapostas.com"
      />

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        <Section icon={Target} title="A Nossa Missão">
          <p className="text-muted-foreground text-sm leading-relaxed">
            realptsitesdeapostas.com foi criado para ajudar os apostadores portugueses a tomar decisões informadas sobre casas de apostas licenciadas. Fornecemos comparações transparentes e independentemente investigadas, sem viés comercial. Todos os sites na nossa lista detêm uma licença SRIJ atual — a sua segurança é a única coisa inegociável.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            Somos uma equipa de entusiastas de desporto e apostas portugueses com vasta experiência no setor. Testamos pessoalmente cada plataforma, avaliamos os bónus com olhar crítico e só recomendamos o que consideramos genuinamente valioso para o apostador português moderno.
          </p>
        </Section>

        <Section icon={ClipboardList} title="O Que Fazemos">
          <div className="space-y-3">
            {[
              { title: "Análises Aprofundadas",      desc: "Testamos cada casa de apostas com critérios rigorosos antes de publicar qualquer avaliação." },
              { title: "Classificações Transparentes", desc: "As nossas classificações são atualizadas mensalmente e baseadas numa metodologia mensurável e publicada." },
              { title: "Jogo Responsável",            desc: "Promovemos hábitos de jogo seguros e indicamos serviços de apoio em todas as páginas." },
              { title: "Foco no Mercado Português",  desc: "Especializamo-nos exclusivamente em operadores licenciados pelo SRIJ para o mercado português." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 border-b border-border last:border-b-0 pb-3 last:pb-0">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={Heart} title="Os Nossos Valores">
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Transparência",    desc: "Critérios objetivos, claramente publicados." },
              { title: "Independência",    desc: "Nenhum operador influencia as nossas classificações." },
              { title: "Responsabilidade", desc: "Jogo responsável em todas as páginas." },
              { title: "Rigor",            desc: "Atualizações mensais para manter as classificações atuais." },
            ].map((item, i) => (
              <div key={i} className="bg-surface rounded-xl p-3 border border-border">
                <h3 className="font-heading font-bold text-primary text-xs mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="bg-secondary border border-primary/12 rounded-xl px-5 py-4">
          <p className="text-sm text-foreground/70 leading-relaxed">
            <strong className="text-foreground">Aviso Legal:</strong> realptsitesdeapostas.com é um site de comparação informativo. Não somos uma casa de apostas. Todos os operadores que recomendamos detêm uma licença SRIJ atual. Por favor, jogue com responsabilidade.{" "}
            <span className="text-destructive font-semibold">18+</span> apenas.
          </p>
        </div>

      </div>
    </div>
  )
}
