# Pequi QA - Site Institucional

Site institucional da Pequi QA, consultoria em qualidade de software.

## 🚀 Tecnologias

- **Next.js 15** com App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion**

## 🎨 Identidade Visual

- **Primary:** #2D5016 (Verde Cerrado)
- **Secondary:** #C8860A (Dourado Pequi)
- **Accent:** #F0A500 (Dourado Claro)
- **Background:** #FBF5E6 (Creme)

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Build

```bash
npm run build
```

O site será exportado como HTML estático na pasta `out/`.

## 🚀 Deploy

O site é automaticamente deployado no GitHub Pages quando há push na branch `main`.

## 📝 Estrutura

```
pequiqa/
├── app/                    # Páginas Next.js
│   ├── page.tsx           # Home
│   ├── sobre/             # Sobre
│   ├── manifesto/         # Manifesto
│   ├── servicos/          # Serviços (5 páginas)
│   ├── cases/             # Cases
│   ├── blog/              # Blog
│   └── contato/           # Contato
├── components/            # Componentes React
├── content/blog/          # Posts em Markdown
├── lib/                   # Utilitários
└── public/                # Arquivos estáticos
```

## 📄 Licença

© 2024 Pequi QA - by Jenafree Labs. Todos os direitos reservados.
