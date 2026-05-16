import Loader from "./components/Loader";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const HERO = "1pAgVVU0Xdv2dArfXkdZg9bdT7r9p6UXv"; // Revelation Studio 45

const WORKS = [
  { id: "1ATIF6r2pMW44zS8sJr1L4a5Pyus_0hg-" }, // PRETO GALVAO-27
  { id: "1j9YeeM-au-ErouyC88zpfKdeVdWmwmOY" }, // Revelation 53
  { id: "1vwWxe-cRST2bafcMH7Rjsy4PindcwnPQ" }, // PRETO GALVAO-32
  { id: "1z7z_0mCQxpodaR04I5G8panxCZiz7oVr" }, // Revelation 68
  { id: "1nFTteO7ZYMLOUo7lJAGxv5QyIfuH-LCd" }, // Livia _DSC7452
  { id: "1ToGja1HwvLOEZ6gr0BWXzYnQVJUKy9Yf" }, // PRETO GALVAO-29
  { id: "1hEptcjLKcmy-_eyGrwzABcav7ljFRsoX" }, // BIANCA-94
  { id: "1DNB3K8ox5JmS5KD-Jk_m2RTvNU8wBM41" }, // Revelation 02
];

export default function Home() {
  return (
    <>
      <Loader />

      {/* ─────────────────────── NAV ─────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-14 py-8">
        <div className="flex items-center justify-between">
          {/* Left links */}
          <div className="flex items-center gap-8">
            <a href="#portfolio"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity duration-300">
              Trabalhos
            </a>
            <a href="#sessoes"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity duration-300">
              Sessões
            </a>
          </div>

          {/* Logo — center */}
          <span className="text-[13px] tracking-[0.65em] uppercase font-bold absolute left-1/2 -translate-x-1/2">
            NUNK
          </span>

          {/* Right links */}
          <div className="flex items-center gap-8">
            <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity duration-300">
              Instagram
            </a>
            <a href="#contato"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity duration-300 border border-white/20 px-5 py-2.5 hover:border-white/60">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Photo */}
        <img
          src={G(HERO)}
          alt="NUNK fotografia"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 40%" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(5,5,5,0.45) 0%, rgba(5,5,5,0.55) 100%)"
        }} />

        {/* Hero copy — center screen */}
        <div className="relative z-10 text-center px-6">
          <p className="text-[10px] tracking-[0.55em] uppercase font-medium opacity-40 mb-8">
            NUNK · Recife
          </p>
          <h1 className="text-[clamp(48px,8vw,110px)] font-bold leading-[0.9] tracking-tighter">
            fotografia
            <br />
            <span className="font-light opacity-50">humanizada</span>
          </h1>
          <p className="mt-10 text-[11px] tracking-[0.35em] uppercase font-medium opacity-30">
            ↓ ver trabalhos
          </p>
        </div>
      </section>

      {/* ─────────────────────── STATEMENT ─────────────────────── */}
      <section className="py-40 md:py-56 px-6 flex justify-center">
        <Reveal className="text-center max-w-3xl">
          <p className="text-[clamp(22px,3.5vw,44px)] font-semibold leading-snug tracking-tight">
            Num mundo onde qualquer imagem<br className="hidden md:block" /> pode ser gerada por IA,
          </p>
          <p className="text-[clamp(22px,3.5vw,44px)] font-light opacity-30 leading-snug tracking-tight">
            a presença real é o diferencial.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/15" />
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-30">NUNK entrega isso.</span>
            <div className="h-px w-12 bg-white/15" />
          </div>
        </Reveal>
      </section>

      {/* ─────────────────────── PARA QUEM ─────────────────────── */}
      <section className="pb-40 px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto border-t border-white/06">
            <div className="grid grid-cols-3 divide-x divide-white/06">
              {[
                { t: "Profissionais",  d: "Médicos, advogados, coaches. Imagem que transmite credibilidade." },
                { t: "Criadores",      d: "Criadores de conteúdo com identidade. Fotos que comunicam." },
                { t: "Marcas",         d: "Negócios que precisam de visual com propósito e personalidade." },
              ].map((item) => (
                <div key={item.t} className="py-10 px-8 text-center">
                  <p className="text-[10px] tracking-[0.35em] uppercase font-semibold opacity-40 mb-3">{item.t}</p>
                  <p className="text-[11px] font-medium opacity-25 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─────────────────────── PORTFOLIO ─────────────────────── */}
      <section id="portfolio" className="pb-40 px-4 md:px-6">
        <Reveal className="text-center mb-16">
          <span className="text-[10px] tracking-[0.55em] uppercase font-medium opacity-20">Trabalhos</span>
        </Reveal>

        {/* Asymmetric editorial grid — centered max-width */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-1.5">
          {/* Row 1: big + small */}
          <Reveal delay={0}    className="md:col-span-7">
            <div className="img-wrap" style={{ aspectRatio: "4/5" }}>
              <img src={G(WORKS[0].id)} alt="" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}  className="md:col-span-5 flex flex-col gap-1.5">
            <div className="img-wrap" style={{ aspectRatio: "1/1" }}>
              <img src={G(WORKS[1].id)} alt="" loading="lazy" />
            </div>
            <div className="img-wrap flex-1" style={{ aspectRatio: "1/1" }}>
              <img src={G(WORKS[2].id)} alt="" loading="lazy" />
            </div>
          </Reveal>
          {/* Row 2: small + big */}
          <Reveal delay={0.05} className="md:col-span-5 flex flex-col gap-1.5">
            <div className="img-wrap" style={{ aspectRatio: "1/1" }}>
              <img src={G(WORKS[3].id)} alt="" loading="lazy" />
            </div>
            <div className="img-wrap flex-1" style={{ aspectRatio: "1/1" }}>
              <img src={G(WORKS[4].id)} alt="" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}  className="md:col-span-7">
            <div className="img-wrap" style={{ aspectRatio: "4/5" }}>
              <img src={G(WORKS[5].id)} alt="" loading="lazy" />
            </div>
          </Reveal>
          {/* Row 3: full width */}
          <Reveal delay={0.05} className="col-span-2 md:col-span-12">
            <div className="img-wrap" style={{ aspectRatio: "21/9" }}>
              <img src={G(WORKS[6].id)} alt="" loading="lazy" style={{ objectPosition: "50% 30%" }} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="text-center mt-12">
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-[0.45em] uppercase font-medium opacity-25 hover:opacity-70 transition-opacity">
            Mais em @nunk.co ↗
          </a>
        </Reveal>
      </section>

      {/* ─────────────────────── SESSÕES ─────────────────────── */}
      <section id="sessoes" className="pb-40 px-6 border-t border-white/06">
        <Reveal className="text-center py-16">
          <span className="text-[10px] tracking-[0.55em] uppercase font-medium opacity-20">Sessões</span>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          {[
            { num: "01", name: "Essencial",  price: "R$ 450",    detail: "40 min · 1 cenário · fotos editadas · direção de poses" },
            { num: "02", name: "Editorial",  price: "R$ 600",    detail: "1h30 · até 3 looks · todas as fotos editadas · direção criativa",  featured: true },
            { num: "03", name: "Campanha",   price: "Consulta",  detail: "Sessão completa · fotos + 2 vídeos · making of" },
          ].map((pkg, i) => (
            <Reveal key={pkg.num} delay={i * 0.1}>
              <div className="border-t border-white/06 py-8 flex items-start md:items-center gap-6 md:gap-0 flex-col md:flex-row hover:border-white/20 transition-colors group">
                <span className="text-[10px] font-medium opacity-15 w-8 shrink-0">{pkg.num}</span>
                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
                  <div className="md:w-48 flex items-center gap-3">
                    <span className="text-base font-bold tracking-tight">{pkg.name}</span>
                    {pkg.featured && <span className="text-[8px] tracking-widest uppercase opacity-25 border border-white/10 px-2 py-0.5">popular</span>}
                  </div>
                  <p className="text-[11px] font-medium opacity-30 flex-1">{pkg.detail}</p>
                </div>
                <span className="text-lg font-bold tracking-tight">{pkg.price}</span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/06" />

          <Reveal delay={0.3} className="text-center mt-14">
            <a href="#contato"
              className="inline-block text-[10px] tracking-[0.4em] uppercase font-bold py-4 px-12 bg-white text-black hover:bg-white/90 transition-colors">
              Solicitar sessão
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────── CONTATO ─────────────────────── */}
      <section id="contato" className="pb-40 px-6 border-t border-white/06">
        <Reveal className="text-center py-16 mb-6">
          <span className="text-[10px] tracking-[0.55em] uppercase font-medium opacity-20">Contato</span>
        </Reveal>
        <Reveal delay={0.1} className="text-center mb-16">
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold tracking-tight leading-none">
            vamos fazer<br />algo real
          </h2>
          <p className="mt-5 text-[11px] font-medium opacity-25 tracking-wide">
            Respondo em até 2h · Recife, PE
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </Reveal>
      </section>

      {/* ─────────────────────── FOOTER ─────────────────────── */}
      <footer className="px-8 md:px-14 py-8 border-t border-white/06 flex items-center justify-between">
        <span className="text-[11px] tracking-[0.5em] uppercase font-bold opacity-20">NUNK</span>
        <span className="text-[10px] font-medium opacity-15">© 2026</span>
      </footer>
    </>
  );
}
