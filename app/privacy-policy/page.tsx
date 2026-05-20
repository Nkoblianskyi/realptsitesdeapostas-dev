import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { Header } from "@/components/header"

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <h2 className="font-heading font-bold text-base text-foreground">{title}</h2>
      </div>
      <div className="px-5 py-4 text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
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
              <Lock className="w-4 h-4 text-white" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">Política de Privacidade</h1>
          </div>
          <p className="text-white/50 text-xs mt-1 ml-11">Última atualização: {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        <PolicySection title="Introdução">
          <p>
            realptsitesdeapostas.com está comprometido com a proteção da privacidade dos nossos visitantes. Esta política explica como recolhemos, utilizamos e protegemos as suas informações pessoais em conformidade com o RGPD e a Lei de Proteção de Dados portuguesa.
          </p>
          <p>
            Ao utilizar o nosso site, aceita as práticas descritas nesta política de privacidade. Se não concordar com os termos, por favor deixe de utilizar o site.
          </p>
        </PolicySection>

        <PolicySection title="Informações que Recolhemos">
          <List items={[
            "Endereço IP e localização aproximada (país/região)",
            "Tipo de navegador e sistema operativo",
            "Páginas visitadas e tempo passado no site",
            "Preferências de cookies",
            "Informações fornecidas voluntariamente através de formulários de contacto",
          ]} />
        </PolicySection>

        <PolicySection title="Como Utilizamos os Seus Dados">
          <List items={[
            "Para personalizar o conteúdo e recomendações com base no seu interesse",
            "Para analisar padrões de navegação e melhorar o site",
            "Para responder a pedidos de contacto",
            "Para cumprir obrigações legais",
            "Para melhorar os nossos sistemas de segurança",
          ]} />
        </PolicySection>

        <PolicySection title="Base Legal para o Tratamento">
          <p>
            Tratamos os seus dados com base nos seguintes fundamentos legais ao abrigo do RGPD: o seu consentimento (para cookies opcionais), os nossos interesses legítimos em melhorar o nosso serviço, e o cumprimento de obrigações legais.
          </p>
        </PolicySection>

        <PolicySection title="Proteção de Dados">
          <p>
            Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda ou alteração, incluindo encriptação SSL/TLS e firewalls. Limitamos o acesso aos dados pessoais apenas ao pessoal autorizado.
          </p>
        </PolicySection>

        <PolicySection title="Partilha de Dados">
          <p>
            Não vendemos os seus dados pessoais a terceiros. Podemos partilhar dados agregados e anonimizados com parceiros de análise. As ligações de afiliados para casas de apostas parceiras são identificadas como tal, e as informações partilhadas são limitadas ao contexto da campanha.
          </p>
        </PolicySection>

        <PolicySection title="Os Seus Direitos">
          <p>
            Ao abrigo do RGPD tem o direito de: aceder aos seus dados, solicitar retificação, eliminação ou portabilidade, opor-se ao tratamento, e restringir o tratamento. Para exercer qualquer direito, contacte-nos no endereço abaixo. Tem também o direito de apresentar uma reclamação à Comissão Nacional de Proteção de Dados (CNPD).
          </p>
        </PolicySection>

        <PolicySection title="Cookies">
          <p>
            Utilizamos cookies para melhorar a sua experiência. Para informações completas, consulte a nossa{" "}
            <Link href="/cookie-policy" className="text-primary hover:underline underline-offset-2 font-medium">
              Política de Cookies
            </Link>
            . Pode gerir as suas preferências através do banner de cookies ou nas definições do seu navegador.
          </p>
        </PolicySection>

        <PolicySection title="Retenção de Dados">
          <p>
            Conservamos os dados pessoais apenas pelo tempo necessário para os fins descritos nesta política, ou conforme exigido por lei. Os dados analíticos são tipicamente conservados durante 14 meses. Após este período, os dados são eliminados ou anonimizados.
          </p>
        </PolicySection>

        <PolicySection title="Contacto">
          <p>
            Para questões de privacidade:{" "}
            <a href="mailto:privacidade@realptsitesdeapostas.com" className="text-primary hover:underline underline-offset-2 font-medium">
              privacidade@realptsitesdeapostas.com
            </a>
          </p>
          <p>
            Responsável pelo tratamento de dados: Real PT Sites de Apostas, realptsitesdeapostas.com
          </p>
        </PolicySection>

      </div>
    </div>
  )
}
