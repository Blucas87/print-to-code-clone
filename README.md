# Landing Page Profissional

Uma landing page moderna e responsiva desenvolvida com React, TypeScript, Tailwind CSS e componentes shadcn/ui.

## 🚀 Características

- **Responsivo**: Design mobile-first que funciona perfeitamente em todos os dispositivos
- **Performance**: Otimizada para carregamento rápido e SEO
- **Acessibilidade**: Segue as diretrizes WCAG AA
- **Componentes**: Arquitetura modular com componentes reutilizáveis
- **Design System**: Sistema de design consistente com cores, tipografia e animações

## 🎨 Design System

### Cores Principais
```css
--primary: #000000 (Preto principal)
--secondary: #38B6FF (Azul secundário)
--accent: #3ABDFF (Azul accent)
--hero-bg: #37B6FF (Fundo do hero)
--muted-brand: #184F6F (Azul escuro)
```

### Tipografia
- **Headings**: Poppins (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)

### Customização

Para alterar as cores do site, edite o arquivo `src/index.css`:

```css
:root {
  --primary: [nova cor em HSL];
  --secondary: [nova cor em HSL];
  --accent: [nova cor em HSL];
  /* ... outras cores */
}
```

Para alterar as fontes, edite o `index.html` e `src/index.css`:

1. Adicione o link da fonte no `index.html`
2. Atualize as variáveis no `src/index.css`:
```css
--font-heading: 'Nova Fonte', system-ui, sans-serif;
--font-body: 'Nova Fonte Body', system-ui, sans-serif;
```

## 📱 Seções da Landing Page

1. **Header Sticky**: Navegação fixa com logo e menu responsivo
2. **Hero**: Seção principal com CTA e indicadores de confiança
3. **Sobre Mim**: Apresentação profissional com valores e diferenciais
4. **Serviços**: Grid de serviços com preços e descrições
5. **Por que me Escolher**: Razões e benefícios únicos
6. **FAQ**: Perguntas frequentes com accordion
7. **Contato**: Formulários de contato e informações
8. **Footer**: Links e informações finais

## 🛠️ Como usar

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue para o diretório
cd landing-page

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Build para Produção

```bash
npm run build
```

### Personalização de Conteúdo

1. **Textos**: Edite os componentes em `src/components/`
2. **Contatos**: Atualize os links do WhatsApp, email e telefone
3. **Imagens**: Substitua as imagens na pasta `src/assets/`
4. **SEO**: Edite meta tags no `index.html`

### Configuração do WhatsApp

Substitua o número nos componentes:
```javascript
// Procure por: https://wa.me/5511999999999
// Substitua pelo seu número no formato: https://wa.me/55XXXXXXXXXXX
```

## 📋 Checklist de Lançamento

- [ ] Alterar todas as informações de contato
- [ ] Personalizar textos e descrições
- [ ] Adicionar imagens próprias
- [ ] Configurar domínio personalizado
- [ ] Testar em diferentes dispositivos
- [ ] Verificar links e funcionalidades
- [ ] Configurar Google Analytics (opcional)

## 🔧 Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui Components
- Lucide React Icons
- React Router DOM

## 📞 Suporte

Para dúvidas sobre customização ou problemas técnicos, entre em contato através do WhatsApp ou email configurado na landing page.

---

Desenvolvido com ❤️ para profissionais que buscam uma presença digital impactante.