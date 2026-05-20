import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { Header } from "@/components/header"

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <h2 className="font-heading font-bold text-base text-foreground">{title}</h2>
      </div>
      <div className="px-5 py-4 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  )
}

const cookieTypes = [
  {
    title:    "Cookies Essenciais",
    tag:      "Obrigatório",
    tagColor: "bg-primary/10 text-primary border border-primary/20",
    desc:     "Necessários para o funcionamento básico do site. Estes não podem ser desativados.",
  },
  {
    title:    "Cookies de Análise",
    tag:      "Opcional",
    tagColor: "bg-surface text-muted-foreground border border-border",
    desc:     "Ajudam-nos a compreender como os visitantes interagem com o site para que possamos melhorar o conteúdo e o layout.",
  },
  {
    title:    "Cookies de Marketing",
    tag:      "Opcional",
    tagColor: "bg-surface text-muted-foreground border border-border",
    desc:     "Utilizados para fornecer conteúdo relevante e acompanhar a eficácia das nossas parcerias de afiliados.",
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-navy px-4 py-8 border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors mb-4 tracking-wide">
            <ArrowLeft className="w-3 h-3" />
            Voltar às Classificações
          </Link>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Cookie className="w-4 h-4 text-white" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">Política de Cookies</h1>
          </div>
          <p className="text-white/50 text-xs mt-1 ml-11">Última atualização:  {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        <PolicySection title="O Que São Cookies?">
          <p>
            Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um site. Permitem que o site reconheça o seu dispositivo e recorde informações sobre a sua visita para melhorar a sua experiência em realptsitesdeapostas.com.
          </p>
        </PolicySection>

        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-heading font-bold text-base text-foreground">Tipos de Cookies que Utilizamos</h2>
          </div>
          <div className="divide-y divide-border">
            {cookieTypes.map((item, i) => (
              <div key={i} className="px-5 py-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <span className={`${item.tagColor} text-[10px] px-2.5 py-0.5 rounded-full font-heading font-bold uppercase tracking-wide`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <PolicySection title="Gerir Cookies">
          <p>
            Pode gerir as preferências de cookies através do banner exibido quando visita o site pela primeira vez, ou ajustando as definições do seu navegador. Note que desativar os cookies essenciais pode afetar a funcionalidade do site.
          </p>
        </PolicySection>

        <PolicySection title="Cookies de Terceiros">
          <p>
            Podemos utilizar serviços de análise de terceiros (como o Google Analytics) que definem os seus próprios cookies para nos ajudar a compreender o tráfego do site. Estes serviços são regidos pelas suas próprias políticas de privacidade. Não vendemos os seus dados pessoais a terceiros.
          </p>
        </PolicySection>

        <PolicySection title="Retenção de Dados">
          <p>
            Os cookies de sessão são eliminados quando fecha o navegador. Os cookies persistentes permanecem no seu dispositivo durante um período definido (geralmente 12 meses) ou até os eliminar manualmente. Pode eliminar todos os cookies a qualquer momento nas definições do navegador.
          </p>
        </PolicySection>

        <div className="bg-secondary border border-primary/12 rounded-xl px-5 py-4">
          <p className="text-sm text-foreground/70">
            Dúvidas? Contacte-nos:{" "}
            <a href="mailto:cookies@realptsitesdeapostas.com" className="text-primary hover:underline underline-offset-2 font-medium">
              cookies@realptsitesdeapostas.com
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
