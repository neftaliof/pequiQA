# Documentação — Pequi QA

Documentação das funcionalidades, configurações e alterações do site Pequi QA.

---

## Índice

1. [Resumo do que foi feito](#1-resumo-do-que-foi-feito)
2. [Header e navegação](#2-header-e-navegação)
3. [Footer](#3-footer)
4. [Hero e efeitos visuais](#4-hero-e-efeitos-visuais)
5. [Open Graph e redes sociais](#5-open-graph-e-redes-sociais)
6. [Analytics](#6-analytics)
7. [Formulário de contato](#7-formulário-de-contato)
8. [SEO por página](#8-seo-por-página)
9. [Variáveis de ambiente](#9-variáveis-de-ambiente)
10. [Scripts e deploy](#10-scripts-e-deploy)

---

## 1. Resumo do que foi feito

### Navegação e CTA
- Nav reduzida a **3 links**: Serviços, Manifesto, Blog (removidos Sobre e Cases).
- **Dropdown em Serviços** com sublinks para cada serviço + "Todos os serviços".
- **CTA do header**: botão **"Plantar qualidade"** com ícone de semente, link direto para WhatsApp (`https://wa.me/5548988526644`).
- **Indicador de página ativa** no menu (link atual destacado com cor e underline).
- **Hover** nos links com underline sutil.
- **Header no scroll**: altura menor e fundo mais sólido após rolar a página.
- **Layout em telas largas**: logo à esquerda, nav centralizada, CTA à direita (`justify-between` + `flex-1` no nav).

### Footer
- Remoção de **Sobre** e **Cases** da lista de navegação.
- Navegação: Serviços · Manifesto · Blog · contato@pequiqa.com.br.
- E-mail de contato: **contato@pequiqa.com.br**.

### Hero (primeira dobra)
- **Animação de entrada**: "Pequi", "QA" e tagline com fade-in (keyframes no `globals.css`).
- **Canvas de partículas** (PequiCanvas) atrás do texto com `z-index` garantido.
- Ajuste das keyframes para usar `opacity` além de `color`, para melhor compatibilidade.

### Infra e SEO
- **Imagem Open Graph** 1200×630 gerada em tempo de build (`app/opengraph-image.tsx`).
- **Analytics**: suporte a Google Analytics 4 e Plausible via variáveis de ambiente.
- **Formulário de contato** com Formspree (já existia; variável documentada no `.env.example`).
- **SEO por página**: `title`, `description`, `keywords` e `openGraph` em todas as rotas principais e subpáginas de serviços e posts do blog.

---

## 2. Header e navegação

**Arquivo:** `components/Header.tsx`

### Links exibidos
| Link       | Destino | Observação              |
|-----------|---------|--------------------------|
| Serviços  | /servicos | Dropdown com 5 serviços |
| Manifesto | /manifesto | —                      |
| Blog      | /blog   | —                        |

### Dropdown "Serviços"
- **Desktop:** hover abre o menu com "Todos os serviços" + 5 links (Implantação, Alocação, Consultoria, Treinamento, Suporte → QA).
- **Mobile:** toque expande/colapsa o submenu (acordeão).

### CTA "Plantar qualidade"
- **Texto:** "Plantar qualidade".
- **Ícone:** semente (SVG inline, componente `SeedIcon`).
- **Link:** `https://wa.me/5548988526644` (abre em nova aba).
- **Estilo:** fundo dourado (accent), texto escuro, sombra e leve scale no hover.

### Comportamento no scroll
- Após rolar mais de 24px: header com altura menor (`h-14` / `h-16`) e fundo mais opaco (`rgba(17,29,9,0.92)`).
- No topo: altura maior e fundo mais transparente.

### Página ativa
- Uso de `usePathname()` e função `isActive()` para destacar o link da rota atual (incluindo subpáginas de /servicos).
- `aria-current="page"` no link ativo para acessibilidade.

---

## 3. Footer

**Arquivo:** `components/Footer.tsx`

### Navegação
- Serviços  
- Manifesto  
- Blog  
- contato@pequiqa.com.br (mailto)

### Contato
- E-mail exibido e usado no mailto: **contato@pequiqa.com.br**.

---

## 4. Hero e efeitos visuais

### HeroFold (primeira dobra — home)
**Arquivo:** `components/hero/HeroFold.tsx`

- **Fundo:** gradiente radial + linear (tons escuros).
- **Canvas:** `PequiCanvas` em tela cheia atrás do texto (`z-index: 1`).
- **Texto central:** "Pequi QA" + tagline "Qualidade que nasce do processo".
- **Animações (globals.css):**
  - `heroLogoReveal`: fade-in do "Pequi" (opacity + cor).
  - `heroGoldReveal`: fade-in do "QA" (dourado).
  - `heroTaglineFadeIn`: fade-in da tagline.

### PequiCanvas
**Arquivo:** `components/hero/PequiCanvas.tsx`

- Partículas em movimento, paleta inspirada no pequi.
- Silhueta do pequi no centro (`drawPequiShell`).
- Reage ao scroll e ao mouse (repulsão suave).
- Carregado com `dynamic(..., { ssr: false })`.

---

## 5. Open Graph e redes sociais

### Imagem OG (1200×630)
**Arquivo:** `app/opengraph-image.tsx`

- Geração via **Next.js ImageResponse** (`next/og`).
- Conteúdo: fundo escuro, logo "Pequi QA", tagline e linha de apoio.
- **Tamanho:** 1200×630 px, PNG.
- **Uso:** o Next usa essa rota como `og:image` da home; em produção a URL será algo como `https://pequiqa.com.br/opengraph-image`.

### Metadata no layout
**Arquivo:** `app/layout.tsx`

- `openGraph.url`: `https://pequiqa.com.br` (ajustar no Vercel se usar domínio customizado).
- `openGraph.images`: pode apontar para a OG gerada ou para um PNG estático em `/public`.

---

## 6. Analytics

**Arquivo:** `components/Analytics.tsx`

- **Google Analytics 4:** carrega `gtag.js` se existir `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- **Plausible:** carrega o script se existir `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.
- Scripts com `strategy="afterInteractive"` (Next.js).
- Se nenhuma variável estiver definida, nada é injetado.

### Como ativar
- **GA4:** criar propriedade em [analytics.google.com](https://analytics.google.com), copiar o ID (ex.: `G-XXXXXXXXXX`) e definir em `.env.local`.
- **Plausible:** cadastrar o site em [plausible.io](https://plausible.io) e definir o domínio em `.env.local`.

---

## 7. Formulário de contato

**Arquivo:** `components/ContactForm.tsx`  
**Página:** `app/contato/page.tsx`

- **Campos:** Nome, E-mail, Telefone/WhatsApp (opcional), Mensagem.
- **Envio:** POST para Formspree (`https://formspree.io/f/{FORM_ID}`).
- **Variável:** `NEXT_PUBLIC_FORMSPREE_FORM_ID` — ID do form criado em [formspree.io](https://formspree.io).
- Se a variável não estiver definida, o componente exibe uma mensagem pedindo a configuração.
- Estados: idle, sending, success, error (com mensagens em português).

---

## 8. SEO por página

Todas as páginas possuem `metadata` export com `title` e `description`. Onde aplicável: `keywords` e `openGraph` (title, description, url, siteName, locale, type).

### Resumo por rota

| Rota | Title / Descrição | openGraph | keywords |
|------|-------------------|-----------|----------|
| / (layout) | Padrão do site | Sim | Sim |
| /manifesto | Manifesto - Pequi QA | Sim | Sim |
| /servicos | Serviços - Pequi QA | Sim | Sim |
| /servicos/implantacao-de-qualidade | Implantação... | Sim | Sim |
| /servicos/alocacao-de-qas | Alocação... | Sim | Sim |
| /servicos/consultoria-e-auditoria | Consultoria... | Sim | Sim |
| /servicos/treinamento | Treinamento... | Sim | Sim |
| /servicos/suporte-para-qa | Suporte → QA | Sim | Sim |
| /blog | Blog - Pequi QA | Sim | — |
| /blog/[slug] | Título do post | Sim (article) | — |
| /cases | Cases - Pequi QA | Sim | — |
| /sobre | Sobre - Pequi QA | Sim | — |
| /contato | Contato - Pequi QA | Sim | Sim |

**Blog posts:** `generateMetadata` em `app/blog/[slug]/page.tsx` usa `post.title` e `post.excerpt` para title e description; openGraph com `type: "article"` e URL dinâmica.

---

## 9. Variáveis de ambiente

Arquivo de referência: **`.env.example`**. Copiar para **`.env.local`** e preencher os valores. O `.env.local` não é commitado.

| Variável | Uso | Exemplo |
|----------|-----|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible | `pequiqa.com.br` |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formulário de contato | `xyzabcde` (ID do form no Formspree) |

Todas são opcionais: o site funciona sem elas; analytics e formulário só ativam quando configurados.

---

## 10. Scripts e deploy

### Desenvolvimento
```bash
npm run dev
```
Abre em `http://localhost:3000` (ou outra porta se 3000 estiver em uso).

### Build (export estático)
```bash
npm run build
```
Gera a pasta `out/` com HTML estático. O projeto usa `output: 'export'` no `next.config.ts`.

### Deploy
- **Vercel:** push na branch `main` dispara o deploy. Configurar domínio customizado (ex.: pequiqa.com.br) no painel da Vercel.
- **URL do site:** ajustar `metadata.openGraph.url` e `baseUrl` nas páginas se o domínio final for diferente de `pequiqa.com.br`.

### Sitemap
- `next-sitemap` roda no `postbuild`; gera `sitemap.xml` e `robots.txt` em `public/` (ou conforme configurado).

---

## Estrutura de arquivos relevante

```
app/
├── layout.tsx              # Metadata global, Analytics, fonts
├── page.tsx                 # Home
├── opengraph-image.tsx      # Geração da imagem OG 1200x630
├── manifesto/page.tsx
├── servicos/page.tsx
├── servicos/implantacao-de-qualidade/page.tsx
├── servicos/alocacao-de-qas/page.tsx
├── servicos/consultoria-e-auditoria/page.tsx
├── servicos/treinamento/page.tsx
├── servicos/suporte-para-qa/page.tsx
├── blog/page.tsx
├── blog/[slug]/page.tsx     # generateMetadata para posts
├── cases/page.tsx
├── sobre/page.tsx
└── contato/page.tsx

components/
├── Header.tsx               # Nav, dropdown Serviços, CTA Plantar qualidade
├── Footer.tsx
├── Analytics.tsx            # GA4 e Plausible
├── ContactForm.tsx          # Formulário Formspree
└── hero/
    ├── HeroFold.tsx         # Primeira dobra + PequiCanvas
    └── PequiCanvas.tsx      # Partículas e silhueta pequi

app/globals.css              # Keyframes heroLogoReveal, heroGoldReveal, heroTaglineFadeIn
.env.example                 # Variáveis documentadas
```

---

© Pequi QA — by Jenafree Labs. Documentação atualizada conforme as alterações do projeto.
