"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"

function Panel({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <h2 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
          {title}
        </h2>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        }
      </button>

      {open && (
        <div className="pb-7 space-y-4 text-muted-foreground text-sm md:text-[15px] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export function InfoSections() {
  return (
    <section className="bg-white py-10 md:py-14 px-4 border-y border-border" aria-label="Guia de Apostas">
      <div className="container mx-auto max-w-6xl">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-foreground leading-none">
              Guia de Apostas
            </h2>
            <p className="text-[12px] text-muted-foreground mt-0.5">Conselhos especializados para apostadores portugueses</p>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-xl px-5 md:px-8">

          <Panel title="Como Avaliamos os Sites de Apostas" defaultOpen>
            <p>
              realptsitesdeapostas.com utiliza uma metodologia independente e estruturada para avaliar cada casa de apostas listada nesta página. A nossa equipa editorial passa várias semanas a testar cada operador na prática antes de publicar qualquer classificação. Nunca aceitamos pagamentos de operadores para influenciar as classificações.
            </p>
            <p>
              <span className="text-foreground font-semibold">Licenciamento e segurança</span> têm o maior peso na nossa pontuação. Verificamos se cada site detém uma licença atual e ativa do SRIJ (Serviço de Regulação e Inspeção de Jogos), verificamos os padrões de encriptação SSL, revemos os níveis de proteção dos fundos dos jogadores e confirmamos que as ferramentas de jogo responsável são fáceis de encontrar e utilizar.
            </p>
            <p>
              <span className="text-foreground font-semibold">Promoções</span> são avaliadas pelo valor genuíno e não pelos valores de manchete. Lemos todos os termos e condições incluindo requisitos de apostas, limites máximos de aposta, limites de tempo e restrições de jogos, e classificamos as ofertas pela sua justiça para jogadores comuns.
            </p>
            <p>
              <span className="text-foreground font-semibold">Qualidade das odds</span> é medida comparando preços numa amostra representativa de jogos da Liga Portugal e principais mercados desportivos. Calculamos as margens dos operadores e avaliamos a amplitude dos mercados.
            </p>
            <p>
              <span className="text-foreground font-semibold">Usabilidade, pagamentos e apoio ao cliente</span> completam o quadro. Testamos o registo tanto em telemóvel como em computador, tentamos depósitos e levantamentos, medimos os tempos de resposta do chat ao vivo e avaliamos a profundidade do centro de ajuda.
            </p>
          </Panel>

          <Panel title="O Que Faz um Bom Site de Apostas em Portugal em 2026">
            <p>
              O mercado de apostas português é um dos mais regulamentados da Europa, o que beneficia os apostadores. Todos os sites que listamos devem deter uma licença SRIJ. Isto significa que o operador é legalmente obrigado a separar os fundos dos jogadores, exibir ferramentas de jogo responsável de forma proeminente e submeter-se a auditorias independentes regulares.
            </p>
            <p>
              Para além da licença, os melhores sites em {new Date().getFullYear()} partilham um conjunto de características consistentes. Oferecem odds competitivas no futebol, especialmente na Liga Portugal, Primeira Liga e competições europeias. Processam levantamentos dentro de 24 horas para contas bancárias portuguesas e MB WAY. As suas aplicações móveis funcionam de forma fiável sem atrasos.
            </p>
            <p>
              As ofertas de boas-vindas são importantes, mas não devem ser o fator decisivo. Um programa sólido de promoções contínuas — incluindo seguros de acumuladas, odds melhoradas e bónus de apostas ao vivo — é um indicador muito melhor de valor a longo prazo.
            </p>
          </Panel>

          <Panel title="Jogo Responsável em Portugal">
            <p>
              As apostas devem ser sempre tratadas como entretenimento, não como uma fonte de rendimento. Todos os operadores licenciados pelo SRIJ são obrigados a fornecer um conjunto completo de ferramentas de jogo responsável, e encorajamos fortemente todos os jogadores a utilizá-las.
            </p>
            <p>
              <span className="text-foreground font-semibold">Limites de depósito</span> permitem limitar o valor que carrega numa conta por dia, semana ou mês. A maioria dos operadores aplica períodos de reflexão antes de aumentar os limites, para que não possam ser aumentados impulsivamente.
            </p>
            <p>
              <span className="text-foreground font-semibold">A auto-exclusão</span> está disponível em todos os sites licenciados portugueses e através do portal do SRIJ, que bloqueia o acesso a todos os operadores licenciados simultaneamente. O Jogo Responsável (<span className="text-primary">jogoresponsavel.pt</span>) e o SICAD (<span className="text-primary">sicad.pt</span>) oferecem apoio gratuito e confidencial 24 horas por dia.
            </p>
            <p className="border-l-[3px] border-destructive pl-4 text-foreground bg-destructive/5 py-3 pr-3 rounded-r-lg">
              <strong>Apenas maiores de 18 anos.</strong> O jogo pode ser viciante. Nunca aposte mais do que pode perder. Se sentir que o jogo está a afetar a sua saúde, relações ou finanças, procure ajuda imediatamente em jogoresponsavel.pt.
            </p>
          </Panel>

          <Panel title="Perguntas Frequentes">
            <div className="space-y-5">
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Todos os sites desta lista têm licença SRIJ?</h3>
                <p>Sim, sem exceção. Todos os operadores que aparecem em realptsitesdeapostas.com detêm uma licença atual emitida pelo SRIJ. Verificamos o estado da licença antes da publicação e atualizamos a nossa lista regularmente.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Como são ordenadas as classificações?</h3>
                <p>As classificações refletem a nossa pontuação composta independente baseada em licenciamento, promoções, qualidade das odds, usabilidade, opções de pagamento e apoio ao cliente. A lista é revista e atualizada ao longo de {new Date().getFullYear()}.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Recebem comissão das casas de apostas?</h3>
                <p>Podemos ganhar receitas de afiliados quando um utilizador clica e se regista num site. Esta relação comercial não afeta as nossas classificações editoriais. Os sites são classificados apenas por mérito.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Posso utilizar vários sites de apostas ao mesmo tempo?</h3>
                <p>Sim. A maioria dos apostadores experientes mantém contas em dois ou três operadores para encontrar as melhores odds e aproveitar diferentes promoções. Isto é legal e comum em Portugal.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Quais os métodos de pagamento aceites nos sites de apostas portugueses?</h3>
                <p>Todos os sites desta lista aceitam cartões de débito Visa e Mastercard, MB WAY, transferência bancária e Multibanco. A maioria também suporta carteiras eletrónicas como PayPal, Skrill e Neteller.</p>
              </div>
            </div>
          </Panel>

        </div>
      </div>
    </section>
  )
}
