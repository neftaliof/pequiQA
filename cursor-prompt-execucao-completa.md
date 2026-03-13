## Onboarding — Esteira de trabalho Pequi QA

> Este arquivo define o fluxo completo que o Cursor deve seguir **toda vez** que for chamado para trabalhar no projeto Pequi QA.
> Fonte de verdade: `PEQUIQA_MASTER.md` + `cursorrules`.

---

## 1. Sequência obrigatória de leitura

1. **Ler `PEQUIQA_MASTER.md` na raiz do projeto.**
   - Se não existir ou não estiver acessível, pare e avise explicitamente a Neftali.
2. **Ler o arquivo `cursorrules` na raiz do projeto.**
   - Se houver versões com sufixo (ex.: `cursorrules (1)`), use a mais recente.
3. **Ler este arquivo `cursor-prompt-execucao-completa.md`.**

Você **não** deve executar nenhuma mudança de código antes de completar os 3 passos acima.

---

## 2. Regras gerais que o Cursor deve respeitar

- **Fonte de verdade:** `PEQUIQA_MASTER.md` é soberano. Não contradiga decisões fechadas.
- **Identidade visual:** use apenas a paleta e tipografia definidas no master e repetidas em `cursorrules`.
- **Copy:** sempre no singular, sem métricas inventadas, sem cases fictícios.
- **Honestidade:** a Pequi QA está na fase 1, ainda sem clientes próprios — isso é diferencial, não fraqueza.
- **Sem invenção:** se uma informação não estiver no master, em `cursorrules` ou no prompt atual da Neftali, não invente.

---

## 3. Fluxo padrão de execução para tarefas de código

Sempre que receber uma tarefa da Neftali para mexer no código do site:

1. **Confirmar contexto**
   - Releia mentalmente:
     - Identidade da Pequi QA
     - Serviços aprovados
     - Regras de copy
     - Pendências priorizadas
2. **Mapear impacto**
   - Identifique quais partes do site podem ser afetadas:
     - Hero
     - Navegação
     - Seção de serviços
     - Quality Shield
     - Contatos / CTA WhatsApp
3. **Respeitar decisões fechadas**
   - Não altere:
     - Nome, tagline, headline
     - Paleta de cores
     - Estrutura básica da navegação
     - Regras de copy (singular, sem métricas falsas, sem cases inventados)
4. **Executar mudanças mínimas necessárias**
   - Faça apenas o que o prompt pede.
   - Se perceber pendências urgentes já listadas no master (ex.: métricas inventadas, email errado, copy no plural), corrija **no mesmo contexto** da tarefa atual, desde que não fuja muito do escopo.
5. **Verificar consistência**
   - Confirme que:
     - As cores estão dentro da paleta.
     - A tipografia segue Playfair/Syne.
     - A voz está no singular e honesta.
6. **Rodar lints e checagens rápidas (quando aplicável)**
   - Se o projeto tiver lints configurados, rode-os para garantir que não quebrou nada.

---

## 4. Pendências urgentes que o Cursor pode atacar proativamente

Quando estiver trabalhando em qualquer parte relevante do site, aproveite para, se fizer sentido:

1. **Remover métricas inventadas**
   - Buscar termos como: `15+`, `100%`, `90%`, `-60%` e similares.
   - Remover ou substituir por texto honesto sem números inventados.
2. **Remover cases fictícios**
   - Remover menções a "Fintech X", "E-commerce Y", "SaaS B2B Z" como se fossem clientes da Pequi QA.
   - Manter apenas descrições gerais de tipos de sistemas em que a fundadora já atuou.
3. **Corrigir email**
   - Substituir qualquer ocorrência de `jenafreelabs@gmail.com` por `contato@pequiqa.com.br`.
4. **Corrigir copy plural → singular**
   - Substituir frases como "Nós fazemos", "Nossa equipe" por versões no singular alinhadas ao master.
5. **Remover "Quality as a Service" isolado**
   - Não usar essa expressão solta como rótulo principal de nada.

Se alguma dessas mudanças for muito ampla (impactar muitas páginas ou exigir decisão estratégica), pare e deixe uma observação na resposta para a Neftali.

---

## 5. Quando pedir validação da Neftali

Peça validação explícita da Neftali quando:

- A tarefa exigir **nova seção de copy** ainda não prevista no master.
- Houver necessidade de **novos componentes visuais grandes** (ex.: layout totalmente novo, mudança de nav).
- Tiver dúvida se algo entra em conflito com as decisões fechadas listadas em `PEQUIQA_MASTER.md`.

Nesses casos, explique:

1. O que você entendeu do objetivo.
2. O que você fez.
3. O que ainda precisa de decisão da Neftali.

---

## 6. Encerramento de cada tarefa

Ao finalizar qualquer tarefa:

1. **Resuma em 2–4 frases** o que foi feito, em português, com foco no resultado.
2. Destaque se alguma pendência urgente do master foi endereçada junto (métricas, cases, email, copy).
3. Confirme que:
   - Respeitou o `PEQUIQA_MASTER.md`.
   - Respeitou o `cursorrules`.
   - Não inventou dados, métricas ou cases.

Se algo não pôde ser concluído por falta de decisão ou informação, deixe claro **o que** falta para avançar.

