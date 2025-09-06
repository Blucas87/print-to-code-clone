import { 
  Shield, 
  Clock, 
  Award, 
  Headphones, 
  TrendingUp, 
  Users2,
  Zap,
  CheckCircle2
} from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Todos os projetos vêm com garantia de satisfação. Se não ficar satisfeito, devolvemos seu investimento.",
      highlight: "Garantia 100%"
    },
    {
      icon: Clock,
      title: "Entrega no Prazo",
      description: "Cumprimento rigoroso de prazos estabelecidos. Sua urgência é minha prioridade.",
      highlight: "Pontualidade"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 5 anos no mercado com centenas de projetos bem-sucedidos e clientes satisfeitos.",
      highlight: "500+ Projetos"
    },
    {
      icon: Headphones,
      title: "Suporte Completo",
      description: "Acompanhamento contínuo durante todo o projeto e suporte pós-entrega para garantir seu sucesso.",
      highlight: "Suporte 24/7"
    },
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis",
      description: "Metodologia focada em métricas e KPIs. Você acompanha o progresso e os resultados em tempo real.",
      highlight: "ROI Comprovado"
    },
    {
      icon: Users2,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção exclusiva. Não trabalhamos com templates, mas sim com soluções sob medida.",
      highlight: "Exclusividade"
    }
  ];

  const benefits = [
    "Metodologia própria testada e aprovada",
    "Comunicação transparente em todas as etapas",
    "Flexibilidade para ajustes durante o projeto",
    "Preços justos e competitivos",
    "Formação e certificações reconhecidas",
    "Network de parceiros estratégicos"
  ];

  const stats = [
    { number: "98%", label: "Taxa de Satisfação", icon: "😊" },
    { number: "500+", label: "Projetos Entregues", icon: "🚀" },
    { number: "5+", label: "Anos de Experiência", icon: "⭐" },
    { number: "24h", label: "Tempo de Resposta", icon: "⚡" }
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Por que me Escolher?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Descubra os diferenciais que fazem centenas de clientes confiarem em meu trabalho 
            para transformar seus negócios.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-heading font-bold text-secondary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon and Highlight */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-body font-medium">
                  {reason.highlight}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-body leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Benefícios Adicionais
            </h3>
            <p className="text-muted-foreground font-body">
              Vantagens exclusivas que você recebe ao trabalhar comigo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-card-foreground font-body font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground font-body">
              <Zap className="w-5 h-5 text-secondary" />
              <span>Resposta Rápida</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-body">
              <Shield className="w-5 h-5 text-secondary" />
              <span>Trabalho Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-body">
              <Award className="w-5 h-5 text-secondary" />
              <span>Qualidade Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;