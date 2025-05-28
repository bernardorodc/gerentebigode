# Landing Page Gerente Bigode

Uma landing page moderna, responsiva e atraente para o SaaS "Gerente Bigode", uma plataforma de controle financeiro pessoal e empresarial.

## Características

- Design moderno e responsivo inspirado no Databox
- Tema claro/escuro com persistência via localStorage
- Animações suaves de scroll e interação
- Componentes modulares e reutilizáveis
- Totalmente responsivo para dispositivos móveis, tablets e desktops
- Desenvolvido com React, TypeScript e Tailwind CSS

## Estrutura do Projeto

```
landing-page-gerente-bigode/
├── public/                  # Arquivos públicos estáticos
│   ├── logo com texto.png   # Logo com texto
│   └── logo icone.png       # Logo ícone
├── src/                     # Código-fonte
│   ├── assets/              # Recursos estáticos
│   ├── components/          # Componentes React
│   │   ├── Header.tsx       # Cabeçalho fixo com navegação
│   │   ├── Hero.tsx         # Seção principal
│   │   ├── TrustSection.tsx # Seção de confiança
│   │   ├── FeatureSection.tsx # Recursos e benefícios
│   │   ├── ScreenshotSection.tsx # Prints do sistema
│   │   ├── TestimonialSection.tsx # Depoimentos
│   │   ├── FAQSection.tsx   # Perguntas frequentes
│   │   ├── CTASection.tsx   # Chamada para ação
│   │   └── Footer.tsx       # Rodapé
│   ├── lib/                 # Utilitários e funções
│   │   └── theme.ts         # Configurações de tema
│   ├── App.css              # Estilos específicos do App
│   ├── App.tsx              # Componente principal
│   ├── index.css            # Estilos globais
│   └── main.tsx             # Ponto de entrada
└── dist/                    # Build de produção
```

## Instruções de Uso

### Requisitos

- Node.js 16+ 
- pnpm (recomendado) ou npm

### Instalação

1. Extraia o arquivo zip em um diretório de sua escolha
2. Navegue até o diretório do projeto
3. Instale as dependências:

```bash
pnpm install
# ou
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
# ou
npm run dev
```

Isso iniciará o servidor em `http://localhost:5173/`

### Build de Produção

Para gerar a versão de produção:

```bash
pnpm build
# ou
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### Deploy

Para fazer o deploy da landing page:

1. Faça o upload do conteúdo da pasta `dist/` para seu servidor web
2. Ou utilize serviços como Netlify, Vercel ou GitHub Pages

## Personalização

### Cores e Tema

As cores principais podem ser ajustadas no arquivo `src/lib/theme.ts`:

```typescript
export const theme = {
  colors: {
    primary: {
      blue: '#2563EB',
      purple: '#7C3AED',
    },
    // ...
  },
  // ...
};
```

### Conteúdo

O conteúdo de cada seção pode ser editado nos respectivos arquivos de componentes em `src/components/`.

## Funcionalidades Implementadas

- ✅ Header fixo com navegação e toggle de tema
- ✅ Hero section com mockup do dashboard
- ✅ Seção de confiança com logos
- ✅ Recursos principais com ícones
- ✅ Carrossel de screenshots do sistema
- ✅ Depoimentos de usuários
- ✅ FAQ com acordeão interativo
- ✅ CTA final para conversão
- ✅ Rodapé com links e informações de contato
- ✅ Toggle de tema claro/escuro com persistência
- ✅ Animações de scroll e interação
- ✅ Design responsivo para todos os dispositivos

## Licença

Este projeto é para uso exclusivo do cliente e não deve ser redistribuído sem autorização.
