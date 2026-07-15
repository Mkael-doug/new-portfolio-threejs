# 🌌 3D Immersive Portfolio | React 19 • Three.js • GSAP & Motion • Tailwind v4

[![React 19](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Linter: Oxlint](https://img.shields.io/badge/Linter-Oxlint-ff4b4b)](https://github.com/oxc-project/oxc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Bem-vindo ao repositório do meu **Portfólio 3D Imersivo**. Este projeto foi desenvolvido com foco em proporcionar uma experiência de usuário (UX) interativa, fluida e visualmente impactante, combinando o poder de renderização 3D do **Three.js** com a suavidade de animações avançadas do **GSAP** e **Motion** (Framer Motion). A arquitetura do projeto foi pensada sob os padrões modernos de engenharia front-end, utilizando o **React 19**, **Vite 8** e o novo **Tailwind CSS v4**.

---

## 🚀 Demonstração

> 💡 **Preview Online:** [Veja Aqui](https://portfolio-rosy-ten-16.vercel.app/)

![Screenshot do Portfólio](https://i.imgur.com/muyk1O8.jpeg)

---

## ✨ Funcionalidades Principais

- **Visualização 3D com Astronauta Interativo**: Modelo 3D (`.glb`) renderizado diretamente no browser com animação interativa baseada na rolagem/interação do mouse, utilizando React Three Fiber e Drei.
- **Globo Terrestre Interativo (Cobe/Canvas)**: Um globo de alta performance, renderizado via Canvas, que adiciona profundidade visual à seção de contatos ou sobre mim sem penalizar a performance.
- **Animações Fluidas & Física Natural**: Combinação estratégica de animações dinâmicas para transições de componentes, efeito parallax no background, e textos dinâmicos (Flip Words).
- **Formulário de Contato Assíncrono**: Integração completa com o **EmailJS** para envio de mensagens direto do site, com feedback de envio por meio de um sistema de alertas customizado.
- **Arquitetura Componentizada & Responsiva**: Todo o layout é projetado de forma modular e totalmente adaptável para dispositivos móveis, tablets e telas widescreen.
- **Otimização Extrema com Oxlint**: Uso do novo e ultrarrápido linter em Rust para garantia de qualidade e eliminação de gargalos em tempo de desenvolvimento.

---

## 🛠️ Tecnologias & Ferramentas Utilizadas

### Core & Build System
*   **React 19** - Utilizando as últimas novidades e otimizações da biblioteca.
*   **Vite 8** - Bundler de última geração com HMR (Hot Module Replacement) instantâneo.
*   **Oxlint** - Linter escrito em Rust, executado em milissegundos para manter a conformidade do código.

### Renderização 3D
*   **Three.js** - Motor gráfico 3D principal para a Web.
*   **React Three Fiber (@react-three/fiber)** - Wrapper declarativo do Three.js para o ecossistema React.
*   **React Three Drei (@react-three/drei)** - Coleção de helpers úteis para renderização 3D (loaders, luzes, controles, shaders).
*   **Cobe** - Biblioteca ultra-leve para renderização de globos interativos no Canvas.

### Estilização & UI
*   **Tailwind CSS v4** - Nova versão com suporte nativo a CSS moderno, performance de build aprimorada e integração direta com o Vite via `@tailwindcss/vite`.
*   **Clsx & Tailwind Merge** - Utilitários para concatenação e resolução dinâmica de conflitos em classes Tailwind.

### Animações
*   **Motion (Framer Motion v12)** - Utilizado para micro-interações físicas e controle fino de transições de componentes baseadas em física de molas (`useSpring`, `useMotionValue`).
*   **GSAP (GreenSock)** - Implementação de timelines e animações de scroll altamente complexas e performáticas.

---

## 📂 Estrutura do Projeto

A organização de diretórios segue o padrão de desenvolvimento escalável no ecossistema React:

```text
src/
├── components/          # Componentes reutilizáveis e modulares (3D, animações, UI)
│   ├── Alert.jsx        # Banner/Popup de feedback visual para o formulário
│   ├── Astronaut.jsx    # Componente 3D que carrega e anima o astronauta
│   ├── globe.jsx        # Componente que encapsula a renderização do Cobe Globe
│   ├── Timeline.jsx     # Linha do tempo animada para experiências
│   └── ... (outros componentes UI como FlipWords, Particles, etc.)
├── sections/            # Seções principais da Single Page Application (SPA)
│   ├── Navbar.jsx       # Menu de navegação dinâmico e responsivo
│   ├── Hero.jsx         # Introdução principal com o modelo 3D
│   ├── About.jsx        # Detalhamento pessoal e técnico
│   ├── Experiences.jsx  # Histórico profissional cronológico
│   ├── Projects.jsx     # Vitrine de projetos com filtros ou detalhes
│   ├── FeatureCards.jsx # Destaque de habilidades e diferenciais
│   ├── Contact.jsx      # Formulário conectado ao EmailJS
│   └── Footer.jsx       # Rodapé institucional e links sociais
├── constants/           # Dados estáticos (textos, links, caminhos de imagens)
├── App.jsx              # Arquivo raiz de componentes
├── index.css            # Estilização global e tokens Tailwind CSS v4
└── main.jsx             # Ponto de entrada do React
```

---

## 🔧 Configuração e Execução Local

Siga as instruções abaixo para obter uma cópia local do projeto e executá-lo em sua máquina de desenvolvimento.

### Pré-requisitos
*   **Node.js** (versão recomendada: LTS v20 ou superior)
*   **NPM** ou **Yarn**

### Passo 1: Clonar o Repositório
```bash
git clone https://github.com/Mkael-doug/new-portfolio-threejs.git
cd new-portfolio-threejs
```

### Passo 2: Instalar as Dependências
```bash
npm install
```

### Passo 3: Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e insira as suas credenciais do **EmailJS**:
```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

### Passo 4: Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
O servidor será iniciado em `http://localhost:5173`. Abra em seu navegador para visualizar.

### Passo 5: Build para Produção
Para criar a build otimizada de produção:
```bash
npm run build
```
Os arquivos estáticos prontos para deploy serão gerados na pasta `/dist`.

---

## ⚡ Decisões Técnicas & Performance

1.  **Carregamento Assíncrono e Otimização 3D**: Modelos 3D podem se tornar pesados rapidamente. O componente `Astronaut.jsx` faz uso de `useGLTF.preload()` para pré-carregar os assets críticos fora do ciclo de renderização direta, reduzindo drasticamente o tempo de carregamento da página e eliminando possíveis congelamentos na interface do usuário (UI blocking).
2.  **Transições Físicas vs. Animações de Timeline**: A escolha por mesclar Framer Motion (Motion) com GSAP permitiu aproveitar o melhor dos dois mundos. O Motion foi priorizado para animações baseadas no comportamento físico de molas (`useSpring`) e gestos do usuário, enquanto o GSAP garante o timing perfeito de sequenciamentos complexos.
3.  **Linter de Alta Velocidade (Oxlint)**: Em vez de sobrecarregar o pipeline de desenvolvimento local com tempos de compilação lentos decorrentes do ESLint tradicional, foi integrado o **Oxlint**. Isso permite feedback de linting instantâneo (escrito em Rust), acelerando o loop de feedback do desenvolvedor.
4.  **Tailwind CSS v4 & Vite**: A adoção do Tailwind CSS v4 trouxe suporte nativo a recursos modernos do CSS, eliminou a necessidade de dependências pesadas de pós-processamento de CSS e simplificou o arquivo de configuração, tornando o build final leve e o pipeline limpo.

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas para melhorar este portfólio! Se você tem alguma ideia de otimização, novo componente 3D ou melhoria na performance:

1.  Faça um **Fork** do projeto.
2.  Crie uma nova Branch para a sua funcionalidade (`git checkout -b feature/MinhaNovaFeature`).
3.  Faça o Commit das suas alterações (`git commit -m 'Add: nova funcionalidade incrível'`).
4.  Dê um Push na sua Branch (`git push origin feature/MinhaNovaFeature`).
5.  Abra um **Pull Request**.

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.

---

## ✉️ Contato

Desenvolvido por **Mikael Douglas** (Mkael-doug)
*   **LinkedIn**: [Aqui](https://linkedin.com/in/michael-oliveira-sr/)
*   **Email**: [Aqui](mailto:micholiveira.md@gmail.com)
*   **Instagram**: [Aqui](https://instagram.com/michdouglas_/)

---
*Gostou deste projeto? Deixe uma ⭐️ no repositório para apoiar o trabalho!*
