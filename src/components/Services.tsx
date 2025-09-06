import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Cog, 
  BarChart3, 
  Target,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Consultoria Estratégica",
      description: "Desenvolvimento de estratégias personalizadas para alavancar seu negócio com análise completa do mercado e identificação de oportunidades.",
      features: ["Análise de mercado", "Planejamento estratégico", "Identificação de oportunidades"],
      price: "A partir de R$ 2.500"
    },
    {
      icon: TrendingUp,
      title: "Otimização de Processos",
      description: "Melhoria da eficiência operacional através da análise e redesenho de processos, reduzindo custos e aumentando a produtividade.",
      features: ["Mapeamento de processos", "Automação", "Redução de custos"],
      price: "A partir de R$ 1.800"
    },
    {
      icon: Users,
      title: "Gestão de Equipes",
      description: "Desenvolvimento de liderança e otimização do desempenho de equipes através de metodologias comprovadas de gestão de pessoas.",
      features: ["Treinamento de líderes", "Avaliação de desempenho", "Cultura organizacional"],
      price: "A partir de R$ 3.200"
    },
    {
      icon: Cog,
      title: "Implementação de Sistemas",
      description: "Integração e implementação de sistemas eficientes para automatizar processos e melhorar a gestão do seu negócio.",
      features: ["Análise de necessidades", "Configuração", "Treinamento"],
      price: "A partir de R$ 4.500"
    },
    {
      icon: BarChart3,
      title: "Análise de Performance",
      description: "Monitoramento e análise detalhada dos indicadores de performance do seu negócio com relatórios acionáveis.",
      features: ["KPIs personalizados", "Dashboards", "Relatórios mensais"],
      price: "A partir de R$ 1.200"
    },
    {
      icon: Target,
      title: "Planejamento de Crescimento",
      description: "Estratégias estruturadas para expansão sustentável do negócio, incluindo análise de viabilidade e roadmap de crescimento.",
      features: ["Estudo de viabilidade", "Plano de expansão", "Acompanhamento"],
      price: "A partir de R$ 3.800"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Meus Serviços
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Soluções completas e personalizadas para transformar seu negócio. 
            Cada serviço é desenvolvido com foco em resultados mensuráveis e sustentáveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground font-body">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="border-t border-border pt-4">
                <div className="text-lg font-heading font-semibold text-secondary mb-3">
                  {service.price}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-card">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-background mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-lg text-background/90 font-body mb-8 max-w-2xl mx-auto">
            Cada negócio é único. Vamos conversar sobre suas necessidades específicas 
            e desenvolver uma solução personalizada para você.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl shadow-button transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          >
            Fale Comigo Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;