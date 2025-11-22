# 📚 Base de Conhecimento - Deploy

> Uma plataforma interativa de busca para descobrir e explorar serviços de deployment e hospedagem em nuvem.

[![GitHub Stars](https://img.shields.io/github/stars/robsonamendonca/imersao-dev?style=social)](https://github.com/robsonamendonca/imersao-dev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🌟 Sobre o Projeto

A **Base de Conhecimento - Deploy** é uma aplicação web moderna e responsiva que centraliza informações sobre mais de 80 plataformas de deployment, hospedagem e serviços em nuvem. Desenvolvida com foco em experiência do usuário, a aplicação oferece uma interface elegante em dark mode com busca inteligente e design premium.

### ✨ Características Principais

- 🔍 **Busca Inteligente**: Sistema de busca em tempo real que filtra por nome e descrição
- 🎨 **Design Moderno**: Interface dark mode com glassmorphism e animações suaves
- 📱 **Totalmente Responsivo**: Experiência otimizada para desktop, tablet e mobile
- 🏷️ **Sistema de Tags**: Categorização por tecnologias e tipos de serviço
- 🚀 **Performance**: Carregamento rápido com arquitetura otimizada
- ♿ **Acessível**: Seguindo boas práticas de acessibilidade web
- 🔔 **Notificações**: Sistema de toast notifications para feedback ao usuário
- ⭐ **GitHub Integration**: Contador de estrelas em tempo real via GitHub API

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Estilização avançada com:
  - CSS Variables para temas
  - Flexbox e Grid Layout
  - Animações e transições suaves
  - Media queries para responsividade
- **JavaScript (ES6+)**: Lógica da aplicação com:
  - Async/Await para requisições
  - Fetch API
  - Manipulação do DOM
  - Event Listeners

### Design System
- **Fonte**: Quicksand (Google Fonts)
- **Paleta de Cores**: Dark mode com cores vibrantes
  - Primary: `#5d9cec` (Azul vibrante)
  - Secondary: `#f1f3f4` (Branco suave)
  - Accent: `#fbbc04` (Amarelo destaque)
  - Background: `#202124` (Cinza escuro)
  - Surface: `#2c2f33` (Cinza médio)

### Dados
- **JSON Database**: Base de dados estruturada com 80+ plataformas
- **GitHub API**: Integração para estatísticas do repositório

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/robsonamendonca/imersao-dev.git
cd imersao-dev
```

2. **Abra o projeto**

   **Opção 1: Diretamente no navegador**
   ```bash
   # Abra o arquivo index.html no seu navegador
   ```

   **Opção 2: Com servidor local (recomendado)**
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Ou usando Node.js
   npx serve
   
   # Ou usando PHP
   php -S localhost:8000
   ```

3. **Acesse a aplicação**
   ```
   http://localhost:8000
   ```

### Como Buscar

1. Digite o nome da tecnologia ou plataforma no campo de busca (ex: "JavaScript", "Python", "Docker")
2. Pressione **Enter** ou clique no botão **Buscar**
3. Os resultados serão filtrados em tempo real
4. Clique em "Saiba mais" nos cards para acessar a documentação oficial

## 📂 Estrutura do Projeto

```
imersao-dev/
│
├── index.html          # Página principal da aplicação
├── style.css           # Estilos e design system
├── script.js           # Lógica e interatividade
├── data.json           # Base de dados com plataformas
└── README.md           # Documentação do projeto
```

### Arquivos Principais

#### `index.html`
- Estrutura HTML semântica
- Meta tags para SEO
- Header com busca sticky
- Container de cards dinâmico
- Sistema de notificações
- Footer com links sociais

#### `style.css`
- Reset CSS e variáveis de tema
- Componentes reutilizáveis:
  - Header e busca
  - Cards e tags
  - Notificações toast
  - Footer
- Media queries responsivas
- Animações e transições

#### `script.js`
- Carregamento assíncrono de dados
- Sistema de busca e filtros
- Renderização dinâmica de cards
- Gerenciamento de notificações
- Integração com GitHub API

#### `data.json`
- 80+ plataformas catalogadas
- Estrutura de dados:
  ```json
  {
    "nome": "Nome da Plataforma",
    "descricao": "Descrição detalhada",
    "data_criacao": "Ano",
    "link": "URL oficial",
    "tags": ["tag1", "tag2", "tag3"]
  }
  ```

## 🎯 Funcionalidades Detalhadas

### Sistema de Busca
- Busca case-insensitive
- Filtragem por nome e descrição
- Resultados em tempo real
- Suporte para tecla Enter
- Feedback visual quando não há resultados

### Cards Informativos
- Design elevado com hover effects
- Informações estruturadas:
  - Nome da plataforma
  - Ano de criação
  - Tags de categorização
  - Descrição detalhada
  - Link para documentação oficial
- Animações suaves de entrada/saída

### Sistema de Notificações
- Toast notifications animadas
- Auto-dismiss após 4 segundos
- Botão de fechar manual
- Mensagens customizáveis
- Animações de slide

### Responsividade
- **Desktop** (>1024px): Grid de múltiplas colunas
- **Tablet** (768px-1024px): Grid adaptativo
- **Mobile** (<768px): Layout em coluna única
- Touch-friendly em dispositivos móveis

## 🌐 Plataformas Catalogadas

O projeto inclui informações sobre diversas categorias de serviços:

- **PaaS**: Vercel, Netlify, Heroku, Railway, etc.
- **Serverless**: AWS Lambda, Google Cloud Functions, Azure Functions
- **Containers**: Docker, Kubernetes, Google Cloud Run
- **Static Hosting**: GitHub Pages, Cloudflare Pages, Surge.sh
- **Backend Services**: Supabase, Appwrite, Firebase
- **Cloud Providers**: AWS, Azure, Google Cloud, Oracle Cloud
- **Self-Hosted**: Dokku, Coolify, Caprover
- **IDEs Online**: Replit, Glitch, CodeSandbox, StackBlitz

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Para contribuir:

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-plataforma
   ```
3. **Adicione suas mudanças**
   - Para adicionar uma nova plataforma, edite `data.json`
   - Siga a estrutura de dados existente
   - Inclua todas as informações necessárias
4. **Commit suas mudanças**
   ```bash
   git commit -m 'feat: adiciona plataforma XYZ'
   ```
5. **Push para a branch**
   ```bash
   git push origin feature/nova-plataforma
   ```
6. **Abra um Pull Request**

### Diretrizes para Contribuição

- Mantenha a consistência com o código existente
- Teste suas mudanças em diferentes navegadores
- Verifique a responsividade em mobile
- Adicione descrições claras e objetivas
- Inclua links oficiais e verificados

## 📝 Roadmap

- [ ] Implementar filtros por tags
- [ ] Adicionar modo claro/escuro toggle
- [ ] Sistema de favoritos com localStorage
- [ ] Comparação entre plataformas
- [ ] Gráficos de popularidade
- [ ] Versão PWA (Progressive Web App)
- [ ] Suporte a múltiplos idiomas
- [ ] API REST para acesso aos dados

## 👨‍💻 Autor

**Robson Mendonça**

- GitHub: [@robsonamendonca](https://github.com/robsonamendonca)
- LinkedIn: [robsonamendonca](https://www.linkedin.com/in/robsonamendonca/)

## 🙏 Agradecimentos

- [Alura](https://www.alura.com.br/) - Pela imersão em desenvolvimento
- Comunidade open source - Pelas ferramentas e inspiração
- Todos os contribuidores - Por tornarem este projeto melhor

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ por Robson Mendonça</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
