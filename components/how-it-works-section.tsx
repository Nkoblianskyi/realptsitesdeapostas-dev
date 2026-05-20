const steps = [
  {
    number: "01",
    title: "Investigamos Cada Operador",
    body: "A nossa equipa editorial analisa cada casa de apostas portuguesa de raiz. Examinamos a documentação de licença do SRIJ, testamos a plataforma na prática, verificamos os termos dos bónus linha a linha e avaliamos a velocidade dos pagamentos através de contas reais. Nenhum operador pode pagar para ser incluído ou ter uma classificação mais elevada.",
  },
  {
    number: "02",
    title: "Segurança e Licenciamento em Primeiro",
    body: "Todos os sites nesta lista detêm uma licença ativa emitida pelo SRIJ. Verificamos o estado da licença antes da publicação e removemos qualquer operador cuja licença expire. Os sites licenciados são legalmente obrigados a proteger os fundos dos jogadores, garantir jogos justos e fornecer ferramentas de jogo responsável.",
  },
  {
    number: "03",
    title: "Classificamos e Atualizamos",
    body: "Cada operador recebe uma pontuação composta em seis categorias: licenciamento, valor da oferta de boas-vindas, promoções contínuas, qualidade das odds, usabilidade e apoio ao cliente. As classificações são revistas mensalmente. Quando os operadores melhoram ou pioram, a sua posição muda em conformidade.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-surface py-10 md:py-14 px-4" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-primary mb-1.5">
            O Nosso Processo
          </p>
          <h2
            id="how-it-works-heading"
            className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight"
          >
            Como Funciona Esta Lista
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl leading-relaxed">
            Cada classificação nesta página é o resultado de uma investigação estruturada e independente. Aqui está exatamente como avaliamos os sites de apostas portugueses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map(({ number, title, body }) => (
            <div
              key={number}
              className="bg-white border border-border rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-extrabold text-3xl text-primary/20 select-none">
                  {number}
                </span>
                <div className="w-8 h-8 rounded-full bg-primary/8 border border-primary/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-xs text-primary">{number}</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-primary/6 border border-primary/18 rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="font-heading font-bold text-sm text-foreground mb-0.5">Independência Editorial</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Podemos ganhar receitas de afiliados quando visita um operador através dos nossos links. Esta relação comercial não influencia as nossas classificações ou pontuação editorial. As classificações baseiam-se exclusivamente nos nossos critérios de avaliação.
            </p>
          </div>
          <div className="flex-shrink-0 text-[11px] font-heading font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-lg px-3 py-2 bg-white whitespace-nowrap">
            18+ Jogue com Responsabilidade
          </div>
        </div>

      </div>
    </section>
  )
}
