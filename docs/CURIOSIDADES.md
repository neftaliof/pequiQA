# Curiosidades: automação de posts e site mundial com tradução

Respostas em nível de “curiosidade” — o que é possível e como poderia ser feito no futuro.

---

## 1. Um post por semana, publicado automaticamente?

**Sim, dá para preparar o fluxo.** Algumas opções:

### Opção A: Você escreve, o site publica na data

- Os posts continuam em `content/blog/*.md` com `date` no front matter.
- **Publicar “automaticamente”** = publicar na data certa sem clicar em “deploy” na hora:
  - **Vercel/Netlify:** cada `git push` gera um deploy. Você pode agendar o commit: deixar o post pronto com `date: "2026-04-07"` e fazer o push na segunda-feira (ou usar um agendador de commits).
  - **GitHub Actions:** um workflow que roda, por exemplo, toda segunda às 8h: verifica se existe um novo `.md` em `content/blog/` (ou em uma pasta `content/blog/scheduled/`) e move para `content/blog/` e faz commit + push. O deploy acontece em seguida.

### Opção B: Rascunho automático por semana

- Um **script** (ex.: `scripts/criar-rascunho-post.mjs`) que:
  - Roda toda semana (cron no seu PC ou GitHub Actions).
  - Cria um arquivo `content/blog/rascunho-YYYY-MM-DD.md` com front matter e título placeholder.
- Você edita o rascunho durante a semana e, quando quiser “publicar”, renomeia (ex.: `meu-titulo.md`) e ajusta a `date`. O deploy pode ser manual (push) ou automatizado como na opção A.

### Opção C: CMS com agendamento

- Usar um **headless CMS** (Strapi, Decap CMS, Sanity, etc.) com “agendar publicação”.
- O site consome a API do CMS; no horário agendado o CMS marca o post como publicado e o site (em rebuild agendado ou on-demand) já mostra o post.

**Resumo:** o site já está preparado para “um post por semana” no sentido de conteúdo (um `.md` por semana). A parte “automática” é escolher como disparar o deploy ou o movimento do arquivo (script + cron/GitHub Actions ou CMS).

---

## 2. Site visto mundialmente e traduzido automaticamente?

**Sim, as duas coisas são possíveis.**

### Ser visto no mundo todo

- **Hospedagem:** Vercel, Netlify, Cloudflare Pages etc. já servem o site globalmente (CDN).
- **Domínio:** manter o que você tem (ex.: pequiqa.com.br) ou usar um genérico (.com) se quiser foco internacional.
- **SEO:** metadados (title, description, Open Graph) já ajudam; dá para evoluir com sitemap, hreflang quando tiver múltiplos idiomas.

### Tradução “automática”

Dá para ir por níveis:

1. **Tradução automática na hora (cliente):**  
   Inserir o **Google Translate** (widget) ou similar no layout. O visitante escolhe o idioma e a página é traduzida no navegador. Não exige duplicar conteúdo; a qualidade varia.

2. **Site em vários idiomas (estrutura):**  
   Usar **i18n** no Next.js (ex.: `next-intl` ou App Router i18n) com rotas como `/en/blog`, `/es/blog`. Aí você tem duas abordagens:
   - **Tradução manual ou por tradutor:** manter versões em PT, EN, ES etc. em arquivos ou CMS.
   - **Tradução automática na build:** script ou serviço que, a partir dos `.md` em português, gera versões em outros idiomas (API de tradução) e o site passa a ter essas rotas. Você “publica” em PT e o pipeline gera EN (e outros) antes do build.

3. **Híbrido:**  
   Site estruturado em 2–3 idiomas principais (ex.: PT, EN) com i18n, e um widget de tradução para outros idiomas.

**Resumo:** “visto mundialmente” já é o comportamento normal com hospedagem moderna. “Traduzido automaticamente” pode ser widget no cliente (rápido) ou i18n + tradução na build (mais trabalho, resultado mais controlado).

---

## 3. Site Trunk

O **Site Trunk** (`components/SiteTrunk.tsx`) está no layout global e **permanece** como está — sem alterações. Ele continua sendo exibido em desktop como elemento fixo da identidade visual do site.
