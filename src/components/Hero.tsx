import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Star } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-bg/20 to-secondary/30" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="max-w-container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-background/90 font-body text-sm font-medium">
              +500 clientes satisfeitos
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-background mb-6 leading-tight animate-fade-in delay-200">
            Soluções{" "}
            <span className="text-accent drop-shadow-lg">
              Personalizadas
            </span>{" "}
            para seu Negócio
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-background/90 font-body mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400">
            Transformo desafios em oportunidades com estratégias eficazes e resultados comprovados. 
            Sua empresa merece o melhor.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-600">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-4 rounded-xl shadow-button transition-all duration-300 hover:scale-105 group text-lg"
              onClick={() => scrollToSection("services")}
            >
              Conheça meus Serviços
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-background bg-background/10 hover:bg-background hover:text-primary text-background font-heading font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group text-lg"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale Comigo
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in delay-800">
            {[
              { icon: "✓", text: "Resultados Garantidos" },
              { icon: "⚡", text: "Entrega Rápida" },
              { icon: "🎯", text: "Foco em Qualidade" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-background/90 font-body font-medium">
                <span className="text-2xl">{benefit.icon}</span>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;