@AGENTS.md

# NUNK — nunk.co

Landing page de captação para estúdio fotográfico em Recife, PE.
Stack: Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion · Vercel (static export)

## Repositório
- GitHub: https://github.com/perfilmartins-creator/nunk.co
- Deploy: Vercel (auto-deploy via push na main)
- Output: `out/` (static export — `next build`)

## Estrutura de arquivos

```
app/
  layout.tsx          ← metadata + Syne font + ClientRoot (Loader + Cursor)
  page.tsx            ← página principal (single page)
  globals.css         ← reset + scroll + base styles

  components/
    ClientRoot.tsx    ← wrapper client: Loader + Cursor (montado no layout)
    Cursor.tsx        ← cursor customizado (dot + ring animado)
    Loader.tsx        ← tela de loading inicial (~2.2s, framer-motion)
    Marquee.tsx       ← ticker infinito (dados em lib/data.ts)
    Reveal.tsx        ← wrapper de animação scroll (whileInView)
    ContactForm.tsx   ← formulário → WhatsApp (número em lib/data.ts)

  lib/
    data.ts           ← ÚNICA fonte de verdade para conteúdo:
                        PORTFOLIO, PACKAGES, PROCESS, MARQUEE_WORDS, WHATSAPP

public/
  hero.jpg            ← imagem do hero (full-bleed, grayscale)
  logo.png            ← símbolo NUNK
  logo-nome.png       ← logo completa (nav + footer)
  portfolio/          ← fotos do portfólio (01.jpg … N.jpg)
                        Adicionar fotos aqui e listar em app/lib/data.ts → PORTFOLIO
```

## Como adicionar fotos ao portfólio
1. Colocar foto em `public/portfolio/` com nome sequencial (`01.jpg`, `02.jpg`…)
2. Adicionar o path em `app/lib/data.ts` → array `PORTFOLIO`
3. Commit + push → deploy automático

## Identidade visual
- Fundo: `#050505` · Texto: `#f0f0f0`
- Fonte: Syne (Google Fonts) · `--font-syne`
- Estética: dark cinematic, grayscale, tipografia grande, baixa opacidade
- Sem cores além de preto/branco

## WhatsApp
Número: `5581986867591` — definido em `app/lib/data.ts → WHATSAPP`
Ao alterar, mudar apenas nesse arquivo.

## Seções da página (ordem)
1. Hero (full-bleed, hero.jpg)
2. Manifesto (2 colunas)
3. Marquee (ticker)
4. Galeria (grid 6 colunas — fotos de public/portfolio/)
5. Sessões/Pacotes (3 colunas)
6. Processo (4 etapas)
7. Contato (formulário WhatsApp)
8. Footer

## Deploy
```bash
npm run build   # gera out/
git push        # Vercel faz deploy automático
```

## Dev
```bash
npm run dev     # http://localhost:3000
```

## Regras de desenvolvimento
- Todo conteúdo editável vai em `app/lib/data.ts` — nunca hardcoded no componente
- Cursor e Loader ficam em ClientRoot (layout-level) — não duplicar na page
- Reveal wraps sections para scroll animations — usar sempre em seções novas
- Imagens do portfolio: sempre em `public/portfolio/`, sempre listar em `data.ts`
- Nunca usar Google Drive como CDN de imagens
