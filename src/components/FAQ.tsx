import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o processo de trabalho?",
      answer: "Meu processo é dividido em 5 etapas: 1) Análise inicial e diagnóstico; 2) Desenvolvimento da estratégia personalizada; 3) Apresentação e aprovação do plano; 4) Implementação com acompanhamento contínuo; 5) Entrega final com relatórios e suporte pós-projeto."
    },
    {
      question: "Qual é o prazo médio dos projetos?",
      answer: "O prazo varia conforme a complexidade do projeto. Consultorias simples: 2-4 semanas. Projetos médios: 1-2 meses. Projetos complexos: 2-4 meses. Sempre estabelecemos prazos realistas e os cumprimos rigorosamente."
    },
    {
      question: "Vocês oferecem garantia nos serviços?",
      answer: "Sim! Todos os meus serviços vêm com garantia de satisfação. Se não ficar completamente satisfeito com o resultado dentro do prazo estabelecido, devolvemos 100% do seu investimento."
    },
    {
      question: "Como é feito o acompanhamento do projeto?",
      answer: "Utilizo ferramentas modernas de gestão de projetos e mantenho comunicação constante via WhatsApp, email e reuniões quinzenais. Você recebe relatórios de progresso e tem acesso a um dashboard exclusivo para acompanhar o desenvolvimento."
    },
    {
      question: "Qual é a forma de pagamento?",
      answer: "Aceito várias formas de pagamento: PIX (com desconto), cartão de crédito (até 12x), boleto bancário e transferência. Para projetos maiores, oferecemos parcelamento personalizado conforme o cronograma de entrega."
    },
    {
      question: "Atendem empresas de que porte?",
      answer: "Trabalho com empresas de todos os portes, desde startups e pequenos negócios até médias empresas. Minha metodologia é adaptável e personalizada para atender às necessidades específicas de cada cliente."
    },
    {
      question: "E se eu precisar de alterações durante o projeto?",
      answer: "Flexibilidade é um dos meus diferenciais. Pequenos ajustes estão inclusos no projeto. Para mudanças maiores de escopo, faremos um aditivo justo e transparente. O importante é entregar exatamente o que você precisa."
    },
    {
      question: "Oferecem suporte após a entrega?",
      answer: "Sim! Todo projeto inclui 30 dias de suporte gratuito após a entrega. Também oferecemos planos de manutenção e acompanhamento contínuo para garantir que os resultados se mantenham a longo prazo."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre nossos serviços, processo de trabalho e condições. 
            Se não encontrar sua resposta aqui, entre em contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-card border border-border/50 px-6 py-2 hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-lg text-primary hover:text-secondary transition-colors duration-300 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-card">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              Estou aqui para esclarecer todas as suas questões. Entre em contato 
              e terei prazer em ajudar você a encontrar a melhor solução.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold px-8 py-3 rounded-lg shadow-button transition-all duration-300 hover:scale-105"
              >
                💬 Falar no WhatsApp
              </button>
              <button 
                onClick={() => window.open("mailto:contato@exemplo.com", "_blank")}
                className="bg-card hover:bg-muted text-card-foreground border border-border font-heading font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                ✉️ Enviar Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;