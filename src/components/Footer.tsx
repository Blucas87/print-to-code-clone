import { 
  MessageCircle, 
  Mail, 
  Linkedin, 
  Instagram, 
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/5511999999999",
      color: "hover:text-green-500"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:contato@exemplo.com",
      color: "hover:text-blue-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/profile",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/profile",
      color: "hover:text-pink-500"
    }
  ];

  const quickLinks = [
    { name: "Início", id: "home" },
    { name: "Sobre", id: "about" },
    { name: "Serviços", id: "services" },
    { name: "Contato", id: "contact" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Profissional de Qualidade
            </h3>
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 max-w-md">
              Transformo desafios em oportunidades através de soluções estratégicas 
              e personalizadas. Seu sucesso é minha missão.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-primary-foreground/20`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground font-body transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Contato
            </h4>
            <div className="space-y-3 text-primary-foreground/80 font-body">
              <p>São Paulo, SP - Brasil</p>
              <p>
                <a 
                  href="tel:+5511999999999" 
                  className="hover:text-primary-foreground transition-colors duration-300"
                >
                  (11) 99999-9999
                </a>
              </p>
              <p>
                <a 
                  href="mailto:contato@exemplo.com" 
                  className="hover:text-primary-foreground transition-colors duration-300"
                >
                  contato@exemplo.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 font-body text-sm text-center md:text-left">
              © {currentYear} Profissional de Qualidade. Todos os direitos reservados.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 font-body text-sm group"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;