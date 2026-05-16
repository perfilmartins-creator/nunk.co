import Image from "next/image";
import ContactForm from "./components/ContactForm";

function gdrive(id: string) {
  return `https://lh3.googleusercontent.com/d/${id}`;
}

const PORTFOLIO = [
  { id: "1hEptcjLKcmy-_eyGrwzABcav7ljFRsoX", label: "Bianca" },
  { id: "1bnlQIdFvqDw135zak1K1D-fW6AR6aW6_", label: "RIVH Studio" },
  { id: "1lPUleiIBCaN5rzX4Uv0HxVmfyoACbM1z", label: "Alice Sant'Anna" },
  { id: "1V78zAZK9hgHsSV_gyggmqpUX5bMrkuDy", label: "Bianca" },
  { id: "1MBnVVO5PvO-mWVO7BX8Av00xWjAYfTRC", label: "RIVH Studio" },
  { id: "1mfQnvsXj-Fez4-0Lv6KeRM2Ze9X9Ah_x", label: "Alice Sant'Anna" },
  { id: "1F9SSYZYO_yZ0g1vAPAL4s_XBnS1AOGa-", label: "Bianca" },
  { id: "1s7_iL4vNfrEXocuN3gZ7FpDisEog3yb6", label: "RIVH Studio" },
  { id: "1r6oR0nl7E_RWGGWuir8lbobCJeKN4fQF", label: "Alice Sant'Anna" },
  { id: "1iBgn05m2uoPWqlYybeUOyDn8xO7QfVfP", label: "Bianca" },
  { id: "1ABM78wosXywIMz9cyex_HBX_Lyk_ozpD", label: "RIVH Studio" },
  { id: "1CBCeoVvc_u9YbgyosNwQbM85T7h-5POC", label: "RIVH Studio" },
];

const HERO_ID = "1JUyC7xTbJwKaHmfRN4bSfSh7Ci6LBx3I";

const PACKAGES = [
  {
    name: "Essencial",
    price: "R$ 450",
    duration: "40 minutos",
    items: ["1 fundo / cenário", "Fotos editadas selecionadas", "Direção de poses inclusa", "Material para posicionamento"],
  },
  {
    name: "Editorial",
    price: "R$ 600",
    duration: "1h30",
    featured: true,
    items: ["Até 3 looks", "Todas as fotos editadas", "Múltiplos cenários", "Direção criativa inclusa", "Ideal para branding nas redes"],
  },
  {
    name: "Campanha",
    price: "Sob consulta",
    duration: "Sessão completa",
    items: ["Tudo do Editorial", "+ 2 vídeos curtos", "Making of incluso", "Conteúdo para reels / stories", "Para lançamentos e marcas"],
  },
];

const STEPS = [
  { num: "01", title: "Solicite o orçamento", desc: "Preencha o formulário ou entre em contato via WhatsApp. Respondemos em até 2h." },
  { num: "02", title: "Briefing da sessão", desc: "Enviamos um formulário rápido para entender seu estilo, objetivo e referências." },
  { num: "03", title: "Sessão & entrega", desc: "A sessão acontece com direção criativa. As fotos chegam editadas e prontas para usar." },
];

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e8e8] font-[var(--font-poppins)]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-[#0a0a0a]/60 border-b border-white/[0.05]">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase">NUNK</span>
        <a
          href="#contato"
          className="text-xs font-medium tracking-widest uppercase border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-200"
        >
          Solicitar orçamento
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={gdrive(HERO_ID)}
            alt="Sessão fotográfica NUNK"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Recife — Estúdio Fotográfico</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
            fotografia<br />humanizada
          </h1>
          <p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-10 max-w-md">
            Num mundo onde qualquer imagem pode ser gerada por IA, a sua presença real é o diferencial. A NUNK entrega isso em foto.
          </p>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Ver trabalhos
            <span className="text-white/20">↓</span>
          </a>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/25 mb-12">o que fazemos</p>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-semibold mb-3">Para profissionais</h3>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Advogados, médicos, coaches, consultores. Quem precisa de imagem profissional que transmite credibilidade e personalidade — não só um rosto num fundo branco.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Para criadores</h3>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Criadores de conteúdo que querem elevar o nível do material. Fotos com identidade, não fotos de estúdio genéricas. A diferença está na direção criativa.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Para marcas</h3>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Pequenas marcas e negócios que precisam de material visual com personalidade. Fotos que vendem sem parecer publicidade barata.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-6 md:px-12 py-8">
        <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-white/25">trabalhos recentes</p>
          <a
            href="https://www.instagram.com/nunk.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-wider"
          >
            @nunk.co ↗
          </a>
        </div>

        <div className="portfolio-grid max-w-7xl mx-auto">
          {PORTFOLIO.map((photo) => (
            <img
              key={photo.id}
              src={gdrive(photo.id)}
              alt={photo.label}
              loading="lazy"
              className="w-full block mb-2 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="px-6 md:px-12 py-24 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-white/25 mb-12">pacotes</p>
        <div className="grid md:grid-cols-3 gap-4">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`border rounded-xl p-8 flex flex-col gap-6 ${
                pkg.featured
                  ? "border-white/20 bg-white/[0.04]"
                  : "border-white/[0.07] bg-transparent"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold tracking-wide uppercase">{pkg.name}</h3>
                  {pkg.featured && (
                    <span className="text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                      mais vendido
                    </span>
                  )}
                </div>
                <p className="text-white/30 text-xs">{pkg.duration}</p>
              </div>

              <div>
                <span className="text-3xl font-bold">{pkg.price}</span>
              </div>

              <ul className="space-y-2 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="text-sm text-white/40 font-light flex items-start gap-2">
                    <span className="text-white/20 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`text-center text-sm font-medium py-3 rounded-lg transition-colors ${
                  pkg.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 hover:border-white/30 text-white/70 hover:text-white"
                }`}
              >
                Solicitar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 md:px-12 py-16 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-white/25 mb-12">como funciona</p>
          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((step) => (
              <div key={step.num}>
                <span className="text-xs font-semibold text-white/15 tracking-widest">{step.num}</span>
                <h3 className="text-sm font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-6 md:px-12 py-24 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/25 mb-6">orçamento</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-4">
              vamos fazer<br />algo real
            </h2>
            <p className="text-sm text-white/40 font-light leading-relaxed mb-8">
              Respondo em até 2h. Você sai com datas, preço e briefing — sem enrolação.
            </p>
            <div className="space-y-3 text-sm text-white/30">
              <p>Recife, PE</p>
              <a
                href="https://www.instagram.com/nunk.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white/60 transition-colors"
              >
                @nunk.co no Instagram ↗
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-8 border-t border-white/[0.05] flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">NUNK</span>
        <p className="text-xs text-white/20">© 2026</p>
      </footer>

    </div>
  );
}
