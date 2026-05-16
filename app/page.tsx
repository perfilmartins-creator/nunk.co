import Loader from "./components/Loader";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";
import Marquee from "./components/Marquee";
import Cursor from "./components/Cursor";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const GALLERY = [
  "1hEptcjLKcmy-_eyGrwzABcav7ljFRsoX",
  "1ATIF6r2pMW44zS8sJr1L4a5Pyus_0hg-",
  "1nFTteO7ZYMLOUo7lJAGxv5QyIfuH-LCd",
  "1j9YeeM-au-ErouyC88zpfKdeVdWmwmOY",
  "1r6oR0nl7E_RWGGWuir8lbobCJeKN4fQF",
  "1xINUgZcIj8OhHSBPIdsau8NvLb2wFfVY",
  "1bnlQIdFvqDw135zak1K1D-fW6AR6aW6_",
  "1DNB3K8ox5JmS5KD-Jk_m2RTvNU8wBM41",
  "1F9SSYZYO_yZ0g1vAPAL4s_XBnS1AOGa-",
  "1fzUzSSymdT4eaR24vDcu0SwT8Kkut1-E",
  "1mfQnvsXj-Fez4-0Lv6KeRM2Ze9X9Ah_x",
  "1z7z_0mCQxpodaR04I5G8panxCZiz7oVr",
];

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-10 md:px-16 py-7"
        style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.75) 0%, transparent 100%)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <a href="#trabalhos" className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-35 hover:opacity-100 transition-opacity">
              Trabalhos
            </a>
            <a href="#sessoes" className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-35 hover:opacity-100 transition-opacity">
              Sessões
            </a>
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-[13px] tracking-[0.6em] uppercase font-bold">
            NUNK
          </span>
          <div className="flex gap-10">
            <a
              href="https://instagram.com/nunk.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-35 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="#contato"
              className="text-[11px] tracking-[0.3em] uppercase font-medium opacity-35 hover:opacity-100 transition-opacity border border-white/20 px-5 py-2.5 hover:border-white/50"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={G("1pAgVVU0Xdv2dArfXkdZg9bdT7r9p6UXv")}
          alt="NUNK"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 35%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.55) 100%)" }}
        />
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-[clamp(56px,9vw,130px)] font-bold leading-[0.9] tracking-tight">
            fotografia<br />
            <span className="font-extralight opacity-50">humanizada</span>
          </h1>
          <p className="mt-10 text-[11px] tracking-[0.5em] uppercase font-medium opacity-30">
            NUNK · Recife, PE
          </p>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section id="trabalhos" className="pt-32 pb-6">
        <Reveal className="text-center mb-14 px-6">
          <span className="text-[10px] tracking-[0.55em] uppercase font-bold opacity-20">Trabalhos</span>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
            padding: "0 2px",
          }}
        >
          {GALLERY.map((id, i) => (
            <div
              key={id}
              className="img-wrap"
              style={{ aspectRatio: "2 / 3" }}
            >
              <img
                src={G(id)}
                alt={`NUNK ${i + 1}`}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>

        <Reveal delay={0.15} className="text-center mt-12 px-6">
          <a
            href="https://instagram.com/nunk.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-20 hover:opacity-60 transition-opacity"
          >
            Ver mais no Instagram ↗
          </a>
        </Reveal>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee className="mt-24" />

      {/* ── SESSÕES ── */}
      <section id="sessoes" className="py-40">
        <Reveal className="text-center mb-16 px-6">
          <span className="text-[10px] tracking-[0.55em] uppercase font-bold opacity-20">Sessões</span>
        </Reveal>

        <div className="max-w-2xl mx-auto px-6">
          {[
            {
              num: "01",
              name: "Essencial",
              detail: "40 min · 1 cenário · direção de poses",
              price: "R$ 450",
            },
            {
              num: "02",
              name: "Editorial",
              detail: "1h30 · looks ilimitados · todas as fotos editadas · direção criativa",
              price: "R$ 600",
              featured: true,
            },
            {
              num: "03",
              name: "Campanha",
              detail: "Editorial completo + 2 vídeos + making of",
              price: "Consulta",
            },
          ].map((pkg, i) => (
            <Reveal key={pkg.num} delay={i * 0.08}>
              <div className="border-t border-white/08 py-8 flex items-center justify-between gap-6 hover:border-white/20 transition-colors">
                <div className="flex items-baseline gap-5 min-w-0">
                  <span className="text-[11px] font-bold opacity-15 shrink-0">{pkg.num}</span>
                  <div className="min-w-0">
                    <span className="text-[16px] font-bold tracking-tight">
                      {pkg.name}
                    </span>
                    {pkg.featured && (
                      <span className="ml-3 text-[8px] tracking-widest uppercase opacity-25 border border-white/15 px-2 py-0.5 align-middle">
                        popular
                      </span>
                    )}
                    <p className="text-[11px] font-medium opacity-25 mt-1 leading-relaxed">{pkg.detail}</p>
                  </div>
                </div>
                <span className="text-[16px] font-bold shrink-0">{pkg.price}</span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/08" />

          <Reveal delay={0.28} className="text-center mt-14">
            <a
              href="#contato"
              className="inline-block text-[11px] tracking-[0.45em] uppercase font-bold py-5 px-16 bg-white text-black hover:bg-white/85 transition-colors"
            >
              Solicitar sessão
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-40 border-t border-white/06">
        <Reveal className="text-center mb-4 px-6">
          <span className="text-[10px] tracking-[0.55em] uppercase font-bold opacity-20">Contato</span>
        </Reveal>
        <Reveal delay={0.08} className="text-center mb-16 px-6">
          <h2 className="text-[clamp(40px,6vw,84px)] font-bold tracking-tight leading-[0.92]">
            vamos fazer<br />algo real
          </h2>
          <p className="mt-5 text-[11px] font-medium opacity-20 tracking-wide">
            Respondo em até 2h · Recife, PE
          </p>
        </Reveal>
        <Reveal delay={0.16}>
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
