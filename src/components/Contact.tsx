import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida e direta",
      contact: "+55 (11) 99999-9999",
      action: () => window.open("https://wa.me/5511999999999", "_blank"),
      primary: true
    },
    {
      icon: Mail,
      title: "Email",
      description: "Para propostas detalhadas",
      contact: "contato@exemplo.com",
      action: () => window.open("mailto:contato@exemplo.com", "_blank"),
      primary: false
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Atendimento personalizado",
      contact: "(11) 99999-9999",
      action: () => window.open("tel:+5511999999999", "_blank"),
      primary: false
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "09:00 - 18:00" },
    { day: "Sábado", hours: "09:00 - 14:00" },
    { day: "Domingo", hours: "Plantão WhatsApp" }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar seu negócio? Entre em contato agora e vamos 
            conversar sobre como posso ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Formas de Contato
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      method.primary 
                        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
                        : 'bg-card hover:shadow-xl'
                    }`}
                    onClick={method.action}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        method.primary 
                          ? 'bg-background/20' 
                          : 'bg-secondary/10'
                      }`}>
                        <method.icon className={`w-6 h-6 ${
                          method.primary 
                            ? 'text-background' 
                            : 'text-secondary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-heading font-semibold text-lg mb-1 ${
                          method.primary 
                            ? 'text-background' 
                            : 'text-primary'
                        }`}>
                          {method.title}
                        </h4>
                        <p className={`text-sm mb-2 ${
                          method.primary 
                            ? 'text-background/80' 
                            : 'text-muted-foreground'
                        }`}>
                          {method.description}
                        </p>
                        <p className={`font-body font-medium ${
                          method.primary 
                            ? 'text-background' 
                            : 'text-card-foreground'
                        }`}>
                          {method.contact}
                        </p>
                      </div>
                      <ArrowRight className={`w-5 h-5 ${
                        method.primary 
                          ? 'text-background' 
                          : 'text-secondary'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-secondary" />
                <h4 className="font-heading font-semibold text-lg text-primary">
                  Horário de Atendimento
                </h4>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-body text-muted-foreground">
                      {schedule.day}
                    </span>
                    <span className="font-body font-medium text-card-foreground">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
                <h4 className="font-heading font-semibold text-lg text-primary">
                  Localização
                </h4>
              </div>
              <p className="text-muted-foreground font-body mb-2">
                São Paulo, SP - Brasil
              </p>
              <p className="text-sm text-muted-foreground font-body">
                Atendimento presencial e remoto em todo o Brasil
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Main CTA */}
            <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-card">
              <div className="mb-6">
                <div className="w-20 h-20 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-background mb-4">
                  Vamos Conversar!
                </h3>
                <p className="text-lg text-background/90 font-body mb-8">
                  Respondo pessoalmente e rapidamente. Clique no botão abaixo 
                  para iniciar nossa conversa no WhatsApp.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl shadow-button transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp Agora
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Benefits Reminder */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h4 className="font-heading font-semibold text-lg text-primary mb-4">
                Ao entrar em contato, você recebe:
              </h4>
              <ul className="space-y-3">
                {[
                  "Diagnóstico gratuito do seu negócio",
                  "Proposta personalizada sem compromisso",
                  "Orientação estratégica inicial",
                  "Resposta em até 2 horas"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground font-body">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urgency */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <h4 className="font-heading font-semibold text-lg text-destructive mb-2">
                🔥 Oferta Limitada
              </h4>
              <p className="text-sm text-destructive/80 font-body">
                Primeiros 10 clientes do mês ganham <strong>20% de desconto</strong> em 
                qualquer serviço. Não perca essa oportunidade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;