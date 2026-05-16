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

const PACKAGES = [
  { num: "01", name: "Essencial",  price: "R$ 450",   info: "40 min · 1 cenário · direção de poses" },
  { num: "02", name: "Editorial",  price: "R$ 600",   info: "1h30 · looks ilimitados · todas as fotos editadas", featured: true },
  { num: "03", name: "Campanha",   price: "Consulta", info: "Editorial completo + 2 vídeos + making of" },
];

export default function Home() {
  return (
    <div className="w-full">
      <Loader />
      <Cursor />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 md:px-16 py-7"
        style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 100%)" }}>
        <div className="flex gap-8">
          <a href="#trabalhos" className="nav-link">Trabalhos</a>
          <a href="#sessoes"   className="nav-link">Sessões</a>
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] tracking-[0.6em] uppercase font-bold">NUNK</span>
        <div className="flex gap-8">
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer" className="nav-link">Instagram</a>
          <a href="#contato" className="nav-link border border-white/20 px-5 py-2.5 hover:border-white/50">Contato</a>
        </div>
      </nav>

      {/* HERO — keep exactly */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={G("1pAgVVU0Xdv2dArfXkdZg9bdT7r9p6UXv")}
          alt="NUNK"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 35%" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.55) 100%)" }} />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-[clamp(56px,9vw,130px)] font-bold leading-[0.9] tracking-tight">
            fotografia<br />
            <span className="font-extralight opacity-50">humanizada</span>
          </h1>
          <p className="mt-10 text-[11px] tracking-[0.5em] uppercase font-medium opacity-30">
            NUNK · Recife, PE
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section id="trabalhos" className="w-full pt-28 pb-10">
        <Reveal>
          <p className="text-center text-[10px] tracking-[0.55em] uppercase font-bold opacity-20 mb-12">Trabalhos</p>
        </Reveal>
        <div className="grid grid-cols-4 gap-0.5 px-0.5">
          {GALLERY.map((id, i) => (
            <div key={id} className="img-wrap" style={{ aspectRatio: "2/3" }}>
              <img
                src={G(id)}
                alt={`NUNK ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="text-center mt-10">
            <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
              className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-20 hover:opacity-60 transition-opacity">
              Ver mais no Instagram ↗
            </a>
          </p>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <Marquee className="my-20" />

      {/* SESSÕES */}
      <section id="sessoes" className="w-full py-28 px-6">
        <Reveal>
          <p className="text-center text-[10px] tracking-[0.55em] uppercase font-bold opacity-20 mb-20">Sessões</p>
        </Reveal>
        <div className="max-w-xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.num} delay={i * 0.07}>
              <div className="flex items-start justify-between gap-8 py-7 border-t border-white/08 hover:border-white/20 transition-colors">
                <div className="flex gap-5 items-start">
                  <span className="text-[10px] font-bold opacity-15 mt-1 shrink-0">{pkg.num}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[15px] font-bold tracking-tight">{pkg.name}</span>
                      {pkg.featured && (
                        <span className="text-[8px] tracking-widest uppercase border border-white/15 px-2 py-px opacity-30">
                          popular
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] opacity-25 mt-1 leading-relaxed">{pkg.info}</p>
                  </div>
                </div>
                <span className="text-[15px] font-bold shrink-0 mt-0.5">{pkg.price}</span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/08 mb-14" />
          <Reveal delay={0.25}>
            <div className="text-center">
              <a href="#contato"
                className="inline-block py-4 px-14 bg-white text-black text-[11px] tracking-[0.45em] uppercase font-bold hover:bg-white/85 transition-colors">
                Solicitar sessão
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="w-full py-28 px-6 border-t border-white/06">
        <Reveal>
          <p className="text-center text-[10px] tracking-[0.55em] uppercase font-bold opacity-20 mb-3">Contato</p>
          <p className="text-center text-[11px] font-medium opacity-20 tracking-wide mb-16">
            Recife, PE · Responde em até 2h
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-sm mx-auto">
            <ContactForm />
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-10 md:px-16 py-8 border-t border-white/06 flex items-center justify-between">
        <span className="text-[11px] tracking-[0.5em] uppercase font-bold opacity-20">NUNK</span>
        <span className="text-[11px] font-medium opacity-15">© 2026 · Recife</span>
      </footer>
    </div>
  );
}
