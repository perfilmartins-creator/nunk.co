import Loader from "./components/Loader";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

/* Uma foto por ensaio — diversidade de pessoas e estilos */
const GALLERY = [
  "1hEptcjLKcmy-_eyGrwzABcav7ljFRsoX", // BIANCA 2025
  "1ATIF6r2pMW44zS8sJr1L4a5Pyus_0hg-", // GALVÃO preto studio
  "1nFTteO7ZYMLOUo7lJAGxv5QyIfuH-LCd", // LIVIA & JÚLIA
  "1j9YeeM-au-ErouyC88zpfKdeVdWmwmOY", // REVELATION STUDIO
  "1r6oR0nl7E_RWGGWuir8lbobCJeKN4fQF", // ALICE SANT'ANNA
  "1xINUgZcIj8OhHSBPIdsau8NvLb2wFfVY", // EURICO branco
  "1bnlQIdFvqDw135zak1K1D-fW6AR6aW6_", // RIVH STUDIO
  "1DNB3K8ox5JmS5KD-Jk_m2RTvNU8wBM41", // REVELATION 02
  "1F9SSYZYO_yZ0g1vAPAL4s_XBnS1AOGa-", // BIANCA editorial
  "1fzUzSSymdT4eaR24vDcu0SwT8Kkut1-E", // LIVIA & JÚLIA 2
  "1mfQnvsXj-Fez4-0Lv6KeRM2Ze9X9Ah_x", // ALICE SANT'ANNA 2
  "1z7z_0mCQxpodaR04I5G8panxCZiz7oVr", // REVELATION 68
];

export default function Home() {
  return (
    <>
      <Loader />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 md:px-16 py-7"
        style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 100%)" }}>
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <a href="#galeria" className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity">Galeria</a>
            <a href="#sessoes" className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity">Sessões</a>
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-[13px] tracking-[0.6em] uppercase font-bold">NUNK</span>
          <div className="flex gap-10">
            <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#contato"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-40 hover:opacity-100 transition-opacity border border-white/20 px-5 py-2.5 hover:border-white/60 hover:opacity-100">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO — texto no centro absoluto da tela ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={G("1pAgVVU0Xdv2dArfXkdZg9bdT7r9p6UXv")}
          alt="NUNK"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 35%" }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.6) 100%)"
        }} />
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-[clamp(56px,9vw,130px)] font-bold leading-[0.9] tracking-tight text-center">
            fotografia<br />
            <span className="font-extralight opacity-50">humanizada</span>
          </h1>
          <p className="mt-10 text-[11px] tracking-[0.5em] uppercase font-medium opacity-30">
            NUNK · Recife, PE
          </p>
        </div>
      </section>

      {/* ── STATEMENT — centro ── */}
      <section className="py-48 px-6 flex justify-center">
        <Reveal className="text-center">
          <p className="text-[clamp(26px,4vw,54px)] font-semibold leading-tight tracking-tight max-w-4xl mx-auto">
            Num mundo onde qualquer imagem<br className="hidden md:block" /> pode ser gerada por IA,
          </p>
          <p className="text-[clamp(26px,4vw,54px)] font-extralight opacity-25 leading-tight tracking-tight max-w-4xl mx-auto">
            a sua presença real é o diferencial.
          </p>
          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-16 bg-white/10" />
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-25 font-medium">NUNK entrega isso</span>
            <div className="h-px w-16 bg-white/10" />
          </div>
        </Reveal>
      </section>

      {/* ── PARA QUEM — centro ── */}
      <section className="pb-40 px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto grid grid-cols-3 border-t border-white/08">
            {[
              { t: "Profissionais", d: "Médicos, advogados, coaches. Imagem que transmite credibilidade." },
              { t: "Criadores",     d: "Criadores com identidade própria. Fotos que comunicam de verdade." },
              { t: "Marcas",        d: "Negócios que precisam de visual com propósito e personalidade." },
            ].map((item, i) => (
              <div key={item.t}
                className={`py-12 px-10 text-center ${i < 2 ? "border-r border-white/08" : ""}`}>
                <p className="text-[11px] tracking-[0.35em] uppercase font-bold opacity-50 mb-4">{item.t}</p>
                <p className="text-[12px] font-medium opacity-25 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── GALERIA — full width, masonry ── */}
      <section id="galeria" className="pb-40">
        <Reveal className="text-center mb-16 px-6">
          <span className="text-[10px] tracking-[0.55em] uppercase font-bold opacity-20">Galeria</span>
        </Reveal>

        {/* Masonry columns — full viewport width */}
        <div style={{
          columns: "3",
          columnGap: "4px",
          padding: "0 4px",
        }}>
          {GALLERY.map((id, i) => (
            <div
              key={id}
              className="img-wrap"
              style={{
                breakInside: "avoid",
                marginBottom: "4px",
                display: "block",
              }}
            >
              <img
                src={G(id)}
                alt={`NUNK work ${i + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                  transition: "opacity 0.4s ease",
                }}
              />
            </div>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-14 px-6">
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-20 hover:opacity-70 transition-opacity">
            Ver mais no Instagram ↗
          </a>
        </Reveal>
      </section>

      {/* ── SESSÕES — centro ── */}
      <section id="sessoes" className="pb-40 border-t border-white/06">
        <Reveal className="text-center py-20">
          <span className="text-[10px] tracking-[0.55em] uppercase font-bold opacity-20">Sessões</span>
        </Reveal>

        <div className="max-w-3xl mx-auto px-6">
          {[
            { num: "01", name: "Essencial",  price: "R$ 450",   detail: "40 min · 1 cenário · fotos editadas · direção de poses" },
            { num: "02", name: "Editorial",  price: "R$ 600",   detail: "1h30 · até 3 looks · todas as fotos editadas · direção criativa", featured: true },
            { num: "03", name: "Campanha",   price: "Consulta", detail: "Sessão completa · fotos + 2 vídeos · making of" },
          ].map((pkg, i) => (
            <Reveal key={pkg.num} delay={i * 0.1}>
              <div className="border-t border-white/08 py-9 grid grid-cols-12 items-center gap-4 hover:border-white/25 transition-colors">
                <span className="col-span-1 text-[11px] font-bold opacity-15">{pkg.num}</span>
                <div className="col-span-3 flex items-center gap-3">
                  <span className="text-[17px] font-bold tracking-tight">{pkg.name}</span>
                  {pkg.featured && (
                    <span className="text-[8px] tracking-widest uppercase opacity-30 border border-white/15 px-2 py-0.5">popular</span>
                  )}
                </div>
                <p className="col-span-6 text-[12px] font-medium opacity-30">{pkg.detail}</p>
                <div className="col-span-2 text-right">
                  <span className="text-[17px] font-bold">{pkg.price}</span>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/08" />

          <Reveal delay={0.3} className="text-center mt-16">
            <a href="#contato"
              className="inline-block text-[11px] tracking-[0.45em] uppercase font-bold py-5 px-16 bg-white text-black hover:bg-white/90 transition-colors">
              Solicitar sessão
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── CONTATO — centro ── */}
      <section id="contato" className="pb-40 border-t border-white/06">
        <Reveal className="text-center pt-20 pb-6">
          <span className="text-[10px] tracking-[0.55em] uppercase font-bold opacity-20">Contato</span>
        </Reveal>
        <Reveal delay={0.1} className="text-center mb-20">
          <h2 className="text-[clamp(44px,6vw,88px)] font-bold tracking-tight leading-[0.9]">
            vamos fazer<br />algo real
          </h2>
          <p className="mt-6 text-[12px] font-medium opacity-25 tracking-wide">
            Respondo em até 2h · Recife, PE
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="max-w-sm mx-auto px-6">
            <ContactForm />
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-10 md:px-16 py-8 border-t border-white/06 flex items-center justify-between">
        <span className="text-[11px] tracking-[0.5em] uppercase font-bold opacity-20">NUNK</span>
        <span className="text-[11px] font-medium opacity-15">© 2026 · Recife</span>
      </footer>
    </>
  );
}
