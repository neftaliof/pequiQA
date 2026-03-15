# Pequi QA — Contexto e Conhecimento do Agente

## Sobre a Pequi QA

A Pequi QA é uma consultoria de qualidade de software de Anápolis, GO, com 15 anos de experiência no mercado. Oferece serviços de QA como consultoria, alocação de profissionais, implantação de processos, treinamentos e transformação de suporte em QA.

- **Site:** pequiqa.com.br
- **Stack do site:** Next.js 15, TypeScript, Tailwind CSS, Canvas API
- **Identidade visual:** tons dourados/âmbar (#F0A500, #FDD96A), fundo escuro (#0c0a06), fontes Syne (display) e Cormorant (body)

## Ferramentas QA que dominamos

### Automação de Testes Web
- **Selenium** — Open source, padrão da indústria, suporta Java/Python/C#/JS/Ruby. S-curve logo verde.
- **Cypress** — JS/TS, roda dentro do browser, ótimo DX. Limitado a frontend.
- **Playwright** — Microsoft, multi-browser, auto-wait inteligente. Logo: duas máscaras teatrais verdes.
- **TestComplete** (SmartBear) — Comercial, reconhecimento de objetos robusto, desktop/web/mobile.
- **Katalon** — Plataforma unificada, sem código, web/mobile/API. Logo: K verde em hexágono.

### Automação de Testes de API
- **Postman** — Mais popular para REST/GraphQL. Interface visual intuitiva. Logo: foguete laranja.
- **SoapUI** — Especialista em SOAP e REST, testes funcionais/carga/segurança.

### Testes de Performance & Carga
- **k6** (Grafana) — Moderno, JS, developer-friendly. Logo: hexágono roxo com "k6".
- **JMeter** (Apache) — Padrão da indústria, Java, suporta múltiplos protocolos. Logo: gráfico de carga vermelho.
- **LoadRunner** (Micro Focus) — Enterprise, simula milhares de usuários. Logo: velocímetro azul.

### Testes de Segurança
- **OWASP ZAP** — Open source, encontra XSS/SQLi/CSRF automaticamente. Logo: raio azul em círculo.
- **OWASP** (framework) — Referência em segurança de aplicações. Logo: escudo amarelo com vespa.

### Gerenciamento de Testes & Bugs
- **Jira** (Atlassian) — Padrão do mercado para gerenciamento ágil. Logo: J azul gradiente.
- **Bugzilla** — Open source desde 1998, rastreamento de defeitos. Logo: joaninha vermelha.

### Frameworks de Automação
- **Robot Framework** — Python, keyword-driven, acessível a não-programadores. Logo: cabeça de robô azul.

## Serviços oferecidos

1. **Implantação de Processo de QA** — Do zero ao processo completo com metodologia comprovada.
2. **Alocação de QAs Especializados** — QAs seniores integrados ao time do cliente, com equipamento e suporte.
3. **Consultoria Pontual & Auditoria** — Diagnóstico completo e plano de ação.
4. **Treinamento de Times Internos** — Capacitação em melhores práticas de QA e automação.
5. **Transformação: Suporte → QA** — Programa estruturado de transição de carreira.

## Diferenciais

- Transparência total de precificação (sem body shopping)
- QAs com equipamento e suporte adequado
- Resultado mensurável com métricas reais (KPIs de qualidade)
- Identidade goiana, entrega nacional

## Canvas do Hero (PequiCanvas)

A animação principal do site é um pé de pequi feito de partículas douradas:
- Copa com ~300 partículas (desktop) / ~150 (mobile) em formato elíptico
- Tronco e galhos com curvas bezier douradas
- Frutos que caem da copa a cada ~3.2s e abrem revelando ícones das ferramentas QA
- 15 ferramentas no ciclo: Cypress, Playwright, Postman, Robot, Selenium, k6, Jira, OWASP, JMeter, ZAP, Katalon, TestComplete, SoapUI, LoadRunner, Bugzilla
- Poeira dourada ambiental flutuando
- Arquivo: `components/hero/PequiCanvas.tsx`

## Paleta de cores CSS

```css
--hero-cream: 250, 243, 224
--hero-gold: 240, 165, 0
--hero-dark-green: #0e1a07
--hero-green: #4a7c28
```

## Estrutura do blog

- Posts em markdown em `content/blog/`
- Categorias: Processos, Automação, Carreira, Mercado, Ferramentas
- Cada post precisa de frontmatter: title, date, excerpt, category

## WhatsApp CTA

Número: +55 48 98852-6644
Mensagem padrão: "Olá! Quero prevenir bugs em produção. Como a Pequi QA pode ajudar?"
