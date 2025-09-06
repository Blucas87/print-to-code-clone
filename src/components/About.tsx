import { CheckCircle, Target, Heart, Compass } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Minha Missão",
      description: "Transformar negócios através de soluções inovadoras e estratégicas, sempre focando no crescimento sustentável dos meus clientes."
    },
    {
      icon: Heart,
      title: "Minha Visão",
      description: "Ser reconhecido como referência em excelência profissional, criando valor duradouro e relacionamentos de confiança."
    },
    {
      icon: Compass,
      title: "O que me Guia",
      description: "Ética, transparência, qualidade e comprometimento são os pilares que orientam cada projeto e relacionamento profissional."
    }
  ];

  const differentials = [
    "Mais de 5 anos de experiência comprovada",
    "Metodologia exclusiva e personalizada",
    "Acompanhamento contínuo do projeto",
    "Garantia de resultados ou dinheiro de volta",
    "Suporte completo durante todo o processo",
    "Relatórios detalhados de progresso"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-4">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Sou um profissional dedicado com mais de 5 anos de experiência em transformar 
              desafios empresariais em soluções eficazes. Minha abordagem combina expertise 
              técnica com visão estratégica para entregar resultados excepcionais.
            </p>
            
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Acredito que cada negócio é único e merece uma solução personalizada. 
              Por isso, trabalho próximo aos meus clientes para entender suas necessidades 
              específicas e desenvolver estratégias que realmente façam a diferença.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground font-body">Projetos</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground font-body">Satisfação</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground font-body">Anos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-card rounded-2xl shadow-card p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Profissional Qualificado
                </h3>
                <p className="text-muted-foreground font-body">
                  Especialista em soluções empresariais
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Meus Valores
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Os princípios que norteiam meu trabalho e garantem a qualidade dos resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentials Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Meus Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              O que me torna único no mercado e garante o sucesso dos seus projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-card-foreground font-body font-medium">
                  {differential}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;