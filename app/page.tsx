import Intro from "./components/Intro";
import ContactForm from "./components/ContactForm";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const HERO = "1nFTteO7ZYMLOUo7lJAGxv5QyIfuH-LCd";

/* curated artistic selection */
const PHOTOS = [
  { id: "1MVmalhEKqwghOtirT7dikUmomllSfgUE", span: false },  // EURICO preto
  { id: "1fzUzSSymdT4eaR24vDcu0SwT8Kkut1-E", span: false },  // LIVIA & JULIA
  { id: "1hEptcjLKcmy-_eyGrwzABcav7ljFRsoX", span: true  },  // BIANCA wide
  { id: "1coJf6IOI7VnbQ-b2ioTpBnQlKyECvB4c", span: false },  // EURICO preto
  { id: "1JK5GsAoESJKY7kdrsu0VbIPHiHMM4oPY", span: false },  // LIVIA & JULIA
  { id: "1F9SSYZYO_yZ0g1vAPAL4s_XBnS1AOGa-", span: false },  // BIANCA
  { id: "1bnlQIdFvqDw135zak1K1D-fW6AR6aW6_", span: false },  // RIVH
  { id: "1Iu6G4RAVc248nTY5Kfo1VO5_awCXQn-g", span: true  },  // LIVIA wide
  { id: "1zDJu9AoTbNiBT4UNSs9DqQPkSTCVv421", span: false },  // EURICO preto
  { id: "1MBnVVO5PvO-mWVO7BX8Av00xWjAYfTRC", span: false },  // RIVH
];

const PACKAGES = [
  {
    name: "Essencial",
    price: "R$ 450",
    detail: "40 min · 1 cenário",
    items: ["Fotos editadas selecionadas", "Direção de poses", "Material para posicionamento"],
  },
  {
    name: "Editorial",
    price: "R$ 600",
    detail: "1h30 · até 3 looks",
    featured: true,
    items: ["Todas as fotos editadas", "Múltiplos cenários", "Direção criativa inclusa", "Branding para redes sociais"],
  },
  {
    name: "Campanha",
    price: "Sob consulta",
    detail: "Sessão completa",
    items: ["Tudo do Editorial", "2 vídeos curtos", "Making of", "Conteúdo para reels e stories"],
  },
];

export default function Home() {
  return (
    <>
      <Intro />

      <div className="bg-[#080808] text-[#efefef]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>

        {/* ── NAV ── */}
        <nav className="reveal reveal-1 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-6"
          style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", background: "rgba(8,8,8,0.5)" }}>
          <span className="text-[10px] tracking-[0.4em] uppercase font-light opacity-60">Recife</span>
          <span className="text-[11px] tracking-[0.5em] uppercase font-light">NUNK</span>
          <a href="#contato" className="text-[10px] tracking-[0.3em] uppercase font-light opacity-60 hover:opacity-100 transition-opacity">
            Orçamento
          </a>
        </nav>

        {/* ── HERO ── */}
        <section className="reveal reveal-2 relative h-screen min-h-[600px] flex items-end justify-center overflow-hidden">
          <img
            src={G(HERO)}
            alt="NUNK — Fotografia de Estúdio"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 50%, rgba(8,8,8,0.1) 100%)" }}
          />
          <div className="relative z-10 text-center pb-20 px-6">
            <h1 className="text-5xl md:text-7xl font-light italic leading-none tracking-tight mb-5"
              style={{ fontFamily: "var(--font-cormorant), serif" }}>
              fotografia<br />humanizada
            </h1>
            <p className="text-[10px] tracking-[0.35em] uppercase font-light opacity-40">
              Estúdio · Recife
            </p>
          </div>
        </section>

        {/* ── STATEMENT ── */}
        <section className="reveal reveal-3 py-28 md:py-40 px-6 text-center max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed opacity-80"
            style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Num mundo onde qualquer imagem pode ser<br className="hidden md:block" />
            gerada por IA, a presença real é o diferencial.
          </p>
          <p className="mt-8 text-[10px] tracking-[0.35em] uppercase font-light opacity-30">
            NUNK entrega isso em foto.
          </p>
        </section>

        <div className="rule" />

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="reveal reveal-4 py-16 px-4 md:px-8">
          <p className="text-center text-[9px] tracking-[0.4em] uppercase font-light opacity-25 mb-10">
            Trabalhos
          </p>
          <div className="editorial-grid max-w-5xl mx-auto">
            {PHOTOS.map((p, i) => (
              <div
                key={p.id}
                className={`photo-wrap ${p.span ? "span-full" : ""}`}
                style={{ aspectRatio: p.span ? "16/7" : "3/4" }}
              >
                <img src={G(p.id)} alt={`NUNK work ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/nunk.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.4em] uppercase font-light opacity-30 hover:opacity-70 transition-opacity"
            >
              @nunk.co ↗
            </a>
          </div>
        </section>

        <div className="rule" />

        {/* ── PACOTES ── */}
        <section id="pacotes" className="py-28 md:py-36 px-6">
          <p className="text-center text-[9px] tracking-[0.4em] uppercase font-light opacity-25 mb-16">
            Sessões
          </p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-px bg-white/[0.06]">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-[#080808] p-8 flex flex-col gap-6"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-[10px] tracking-[0.3em] uppercase font-light opacity-60">{pkg.name}</h3>
                    {pkg.featured && (
                      <span className="text-[8px] tracking-widest uppercase opacity-30">popular</span>
                    )}
                  </div>
                  <p className="text-[9px] tracking-wider opacity-25 font-light">{pkg.detail}</p>
                </div>
                <p className="text-3xl font-light" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  {pkg.price}
                </p>
                <ul className="space-y-2 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="text-[10px] font-light opacity-40 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="text-center text-[9px] tracking-[0.3em] uppercase font-light py-3 border border-white/10 hover:border-white/30 transition-colors opacity-60 hover:opacity-100"
                >
                  Solicitar
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="rule" />

        {/* ── PROCESSO ── */}
        <section className="py-28 md:py-36 px-6 text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase font-light opacity-25 mb-16">Processo</p>
          <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "Orçamento", d: "Preenche o formulário. Respondo em até 2h com datas e detalhes." },
              { n: "02", t: "Briefing",  d: "Formulário rápido sobre estilo, objetivo e referências antes da sessão." },
              { n: "03", t: "Entrega",   d: "Fotos editadas e prontas para usar. Nenhum detalhe passa." },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center gap-3">
                <span className="text-[8px] tracking-widest opacity-20 font-light">{s.n}</span>
                <h3 className="text-[10px] tracking-[0.25em] uppercase font-light opacity-70">{s.t}</h3>
                <p className="text-[11px] font-light opacity-35 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rule" />

        {/* ── CONTATO ── */}
        <section id="contato" className="py-28 md:py-36 px-6 text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase font-light opacity-25 mb-6">Orçamento</p>
          <h2 className="text-4xl md:text-5xl font-light italic mb-16 opacity-90"
            style={{ fontFamily: "var(--font-cormorant), serif" }}>
            vamos fazer algo real
          </h2>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-10 px-8 border-t border-white/[0.05] flex items-center justify-between">
          <span className="text-[9px] tracking-[0.4em] uppercase font-light opacity-20">NUNK</span>
          <span className="text-[9px] tracking-[0.2em] font-light opacity-15">© 2026</span>
        </footer>

      </div>
    </>
  );
}
