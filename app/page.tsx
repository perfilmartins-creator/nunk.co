import Loader from "./components/Loader";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

/* Hero — mais impactante */
const HERO = "1nFTteO7ZYMLOUo7lJAGxv5QyIfuH-LCd";

/* Portfolio — fotos mais artísticas e dramáticas */
const WORKS = [
  { id: "1MVmalhEKqwghOtirT7dikUmomllSfgUE", label: "Studio" },
  { id: "1fzUzSSymdT4eaR24vDcu0SwT8Kkut1-E", label: "Estúdio" },
  { id: "1coJf6IOI7VnbQ-b2ioTpBnQlKyECvB4c", label: "Preto" },
  { id: "1JK5GsAoESJKY7kdrsu0VbIPHiHMM4oPY", label: "Estúdio" },
  { id: "1hEptcjLKcmy-_eyGrwzABcav7ljFRsoX", label: "Bianca" },
  { id: "1zDJu9AoTbNiBT4UNSs9DqQPkSTCVv421", label: "Preto" },
];

const PACKAGES = [
  { num: "01", name: "Essencial",  price: "R$ 450", detail: "40 min — 1 cenário" },
  { num: "02", name: "Editorial",  price: "R$ 600", detail: "1h30 — até 3 looks — todas as fotos editadas", featured: true },
  { num: "03", name: "Campanha",   price: "Consulta", detail: "Sessão completa — fotos + 2 vídeos" },
];

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Loader />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-7"
        style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.7) 0%, transparent 100%)" }}>
        <span className="text-[10px] tracking-[0.5em] uppercase font-medium opacity-40">
          Recife
        </span>
        <span className="text-[11px] tracking-[0.55em] uppercase font-semibold">
          NUNK
        </span>
        <a href="#contato"
          className="text-[10px] tracking-[0.4em] uppercase font-medium opacity-40 hover:opacity-90 transition-opacity duration-300">
          Orçamento
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <img
          src={G(HERO)}
          alt="NUNK"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
        {/* gradients */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.3) 55%, rgba(5,5,5,0.15) 100%)"
        }} />

        <div className="relative z-10 w-full px-8 md:px-12 pb-16 md:pb-20 flex flex-col items-center text-center gap-4">
          <h1 className="text-5xl md:text-[clamp(52px,7vw,96px)] font-bold leading-[0.95] tracking-tight">
            fotografia<br />
            <span className="font-light opacity-60">humanizada</span>
          </h1>
          <p className="text-[10px] tracking-[0.45em] uppercase opacity-30 mt-2">
            Estúdio · Recife, PE
          </p>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-12 bg-white/40" style={{ animation: "pulse 2s ease infinite" }} />
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section className="px-6 md:px-12 py-32 md:py-48 flex justify-center">
        <Reveal className="max-w-3xl text-center">
          <p className="text-3xl md:text-[clamp(28px,4vw,52px)] font-medium leading-tight tracking-tight">
            Num mundo onde qualquer imagem<br className="hidden md:block" /> pode ser gerada por IA,
          </p>
          <p className="text-3xl md:text-[clamp(28px,4vw,52px)] font-light opacity-35 leading-tight tracking-tight mt-2">
            a sua presença real é o diferencial.
          </p>
        </Reveal>
      </section>

      {/* ── QUEM ATENDEMOS ── */}
      <section className="px-6 md:px-12 py-4 pb-32">
        <Reveal delay={0.1} className="max-w-2xl mx-auto">
          <div className="h-px bg-white/06 mb-12" />
          <div className="grid grid-cols-3 gap-px bg-white/06">
            {[
              { t: "Profissionais", d: "Médicos, advogados, coaches e consultores que precisam de imagem que transmite credibilidade real." },
              { t: "Criadores",     d: "Criadores de conteúdo que querem elevar o padrão visual. Fotos com identidade, não produção genérica." },
              { t: "Marcas",        d: "Pequenas marcas e negócios que precisam de material visual com personalidade e propósito." },
            ].map((item) => (
              <div key={item.t} className="bg-[#050505] p-8 flex flex-col gap-3">
                <span className="text-[10px] tracking-[0.35em] uppercase font-semibold opacity-50">{item.t}</span>
                <p className="text-xs font-medium opacity-30 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="px-4 md:px-8 pb-32">
        <Reveal className="text-center mb-10">
          <span className="text-[10px] tracking-[0.45em] uppercase font-medium opacity-20">Trabalhos</span>
        </Reveal>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1">
          {WORKS.map((w, i) => (
            <Reveal key={w.id} delay={i * 0.06} className={i === 0 || i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <div className="img-wrap" style={{ aspectRatio: "3/4" }}>
                <img src={G(w.id)} alt={w.label} loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-10">
          <a href="https://www.instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-[0.45em] uppercase font-medium opacity-20 hover:opacity-60 transition-opacity">
            Ver mais @nunk.co ↗
          </a>
        </Reveal>
      </section>

      {/* ── SESSÕES ── */}
      <section id="sessoes" className="px-6 md:px-12 pb-32">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="text-[10px] tracking-[0.45em] uppercase font-medium opacity-20">Sessões</span>
          </Reveal>

          <div className="flex flex-col">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.num} delay={i * 0.1}>
                <div className="group border-t border-white/06 py-8 grid grid-cols-12 items-center gap-4 hover:border-white/20 transition-colors">
                  <span className="col-span-1 text-[10px] font-medium opacity-20">{pkg.num}</span>
                  <div className="col-span-4">
                    <span className="text-sm font-semibold tracking-wide">
                      {pkg.name}
                      {pkg.featured && <span className="ml-2 text-[8px] tracking-widest uppercase opacity-30">popular</span>}
                    </span>
                  </div>
                  <p className="col-span-5 text-[11px] font-medium opacity-30 leading-relaxed">{pkg.detail}</p>
                  <div className="col-span-2 text-right">
                    <span className="text-sm font-semibold">{pkg.price}</span>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-white/06" />
          </div>

          <Reveal delay={0.3} className="text-center mt-10">
            <a href="#contato"
              className="inline-block text-[10px] tracking-[0.4em] uppercase font-semibold py-4 px-10 border border-white/15 hover:bg-white hover:text-black transition-all duration-300">
              Solicitar sessão
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="px-6 md:px-12 py-32 border-t border-white/06">
        <div className="max-w-lg mx-auto text-center">
          <Reveal>
            <span className="text-[10px] tracking-[0.45em] uppercase font-medium opacity-20 block mb-6">Orçamento</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              vamos fazer<br />algo real
            </h2>
            <p className="text-xs font-medium opacity-30 mb-14">
              Respondo em até 2h · Recife, PE
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-12 py-8 border-t border-white/06 flex items-center justify-between">
        <span className="text-[10px] tracking-[0.5em] uppercase font-semibold opacity-20">NUNK</span>
        <span className="text-[10px] font-medium opacity-15">© 2026</span>
      </footer>
    </>
  );
}
