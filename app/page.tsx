"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;
// Hero uses local file from public/

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
  {
    n: "01",
    name: "Essencial",
    price: "R$ 450",
    tagline: "Para quem quer uma imagem profissional, rápida e objetiva.",
    items: ["40 minutos de sessão", "1 cenário de sua escolha", "Direção completa de poses", "Fotos editadas em até 7 dias"],
    ideal: "LinkedIn · headshot · perfil profissional",
  },
  {
    n: "02",
    name: "Editorial",
    price: "R$ 600",
    tagline: "Para quem quer construir uma identidade visual sólida e autêntica.",
    items: ["1h30 de sessão", "Looks ilimitados", "Todas as fotos editadas", "Direção criativa e de estilo", "Entrega em até 10 dias"],
    ideal: "feed · branding pessoal · conteúdo digital",
    pop: true,
  },
  {
    n: "03",
    name: "Campanha",
    price: "Consulta",
    tagline: "Para marcas e projetos que precisam de visual com propósito.",
    items: ["Sessão editorial completa", "2 vídeos verticais editados", "Making of", "Planejamento criativo", "Entrega em até 14 dias"],
    ideal: "lançamentos · marcas · campanhas digitais",
  },
];

const PROCESS = [
  { n: "01", title: "Contato", body: "Preencha o formulário ou mande mensagem. Respondemos em até 2 horas." },
  { n: "02", title: "Briefing", body: "Uma conversa para entender o seu objetivo e definir o look e a atmosfera da sessão." },
  { n: "03", title: "Sessão", body: "O dia da foto. Com direção, referências e um ambiente criativo do início ao fim." },
  { n: "04", title: "Entrega", body: "Suas fotos editadas e prontas para usar onde mais importa para você." },
];

const MARQUEE_WORDS = ["Fotografia Humanizada", "Recife, PE", "Profissionais", "Marcas", "Criadores", "Editorial", "Campanha", "Identidade Visual"];

const label: React.CSSProperties = { fontSize: 13, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2 };
const navLink: React.CSSProperties = { fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500, opacity: 0.35, transition: "opacity 0.2s", textDecoration: "none", color: "#f0f0f0" };
const divider: React.CSSProperties = { borderTop: "1px solid rgba(255,255,255,0.08)" };

export default function Home() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", pacote: "", msg: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const txt = `Olá! Vim pelo site da NUNK.\n\nNome: ${form.nome}\nPacote: ${form.pacote}${form.msg ? `\n\n${form.msg}` : ""}`;
    window.open(`https://wa.me/558199999999?text=${encodeURIComponent(txt)}`, "_blank");
  }

  const hover = (op: string) => (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.opacity = op; };

  return (
    <>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "28px 72px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(to bottom, rgba(5,5,5,0.85) 0%, transparent 100%)" }}>
        <div style={{ display: "flex", gap: 40 }}>
          <a href="#trabalhos" style={navLink} onMouseEnter={hover("1")} onMouseLeave={hover("0.35")}>Trabalhos</a>
          <a href="#sessoes"   style={navLink} onMouseEnter={hover("1")} onMouseLeave={hover("0.35")}>Sessões</a>
          <a href="#processo"  style={navLink} onMouseEnter={hover("1")} onMouseLeave={hover("0.35")}>Como funciona</a>
        </div>
        <img src="/logo-nome.png" alt="NUNK" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", height: 28, width: "auto", objectFit: "contain" }} />
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer" style={navLink} onMouseEnter={hover("1")} onMouseLeave={hover("0.35")}>Instagram</a>
          <a href="#contato" style={{ ...navLink, border: "1px solid rgba(255,255,255,0.2)", padding: "11px 24px" }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "0.35"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}>
            Contato
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src="/hero.jpg" alt="NUNK" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 15%", filter: "grayscale(100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,5,0.05) 0%, rgba(5,5,5,0.25) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 32px" }}>
          <h1 style={{ fontSize: "clamp(64px, 10vw, 148px)", fontWeight: 700, lineHeight: 0.88, letterSpacing: "-0.02em", margin: 0 }}>
            fotografia<br />
            <span style={{ fontWeight: 200, opacity: 0.45 }}>humanizada</span>
          </h1>
          <p style={{ marginTop: 48, fontSize: 14, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 500, opacity: 0.3 }}>
            NUNK · Recife, PE
          </p>
          <a href="#contato"
            style={{ display: "inline-block", marginTop: 56, padding: "18px 48px", background: "#f0f0f0", color: "#050505", fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(240,240,240,0.85)")}
            onMouseLeave={e => (e.currentTarget.style.background = "#f0f0f0")}>
            Quero agendar meu ensaio
          </a>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ padding: "140px 72px", maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 32 }}>
          Num mundo saturado de imagens artificiais,<br />a sua presença real é o diferencial.
        </p>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 300, opacity: 0.35, lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
          A NUNK é uma marca de fotografia humanizada, baseada em Recife. Trabalhamos com profissionais, criadores e marcas que entendem que autenticidade não se fabrica — se captura.
        </p>
      </section>

      {/* MARQUEE */}
      <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 0", marginBottom: 0 }}>
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 26, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: 72, whiteSpace: "nowrap", width: "max-content" }}>
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 72 }}>
              <span style={label}>{w}</span>
              <span style={{ opacity: 0.12, fontSize: 7 }}>◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* GALERIA */}
      <section id="trabalhos" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "0 72px", marginBottom: 48 }}>
          <span style={label}>Trabalhos recentes</span>
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
            style={{ ...label, textDecoration: "none", color: "#f0f0f0", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.2")}>
            Ver tudo no Instagram ↗
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 3, padding: "0 3px" }}>
          {GALLERY.map((id, i) => (
            <div key={id} style={{ aspectRatio: "2/3", overflow: "hidden" }}>
              <img src={G(id)} alt={`NUNK ${i + 1}`} loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            </div>
          ))}
        </div>
      </section>

      {/* SESSÕES */}
      <section id="sessoes" style={{ padding: "120px 72px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 80 }}>
          <span style={label}>Sessões</span>
          <span style={{ fontSize: 14, opacity: 0.2, fontWeight: 400 }}>Recife, PE · Estúdio ou locação</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.n} style={{ padding: "48px 40px", border: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
              {pkg.pop && (
                <span style={{ position: "absolute", top: 24, right: 24, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.15)", padding: "3px 10px", opacity: 0.35 }}>
                  popular
                </span>
              )}
              <span style={{ fontSize: 12, fontWeight: 700, opacity: 0.18, marginBottom: 20, letterSpacing: "0.1em" }}>{pkg.n}</span>
              <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 8 }}>{pkg.name}</h3>
              <p style={{ fontSize: 14, opacity: 0.3, lineHeight: 1.6, marginBottom: 36, fontWeight: 400 }}>{pkg.tagline}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {pkg.items.map(item => (
                  <li key={item} style={{ fontSize: 14, opacity: 0.5, display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <p style={{ fontSize: 12, opacity: 0.2, letterSpacing: "0.1em", marginBottom: 40 }}>
                Ideal para: {pkg.ideal}
              </p>

              <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>{pkg.price}</span>
                <a href="#contato"
                  style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 700, color: "#f0f0f0", opacity: 0.4, textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.4")}>
                  Solicitar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" style={{ padding: "120px 72px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 80 }}>
          <span style={label}>Como funciona</span>
          <span style={{ fontSize: 14, opacity: 0.2 }}>Do primeiro contato à entrega</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {PROCESS.map((step) => (
            <div key={step.n} style={{ padding: "40px 32px", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ fontSize: 11, fontWeight: 700, opacity: 0.18, letterSpacing: "0.15em", display: "block", marginBottom: 24 }}>{step.n}</span>
              <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, letterSpacing: "-0.01em" }}>{step.title}</h4>
              <p style={{ fontSize: 14, opacity: 0.35, lineHeight: 1.7, fontWeight: 400 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: "120px 72px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>

          {/* Left */}
          <div>
            <span style={{ ...label, display: "block", marginBottom: 32 }}>Contato</span>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 32 }}>
              Vamos fazer<br />algo real.
            </h2>
            <p style={{ fontSize: 16, opacity: 0.3, lineHeight: 1.8, maxWidth: 380, marginBottom: 48 }}>
              Conta pra gente o que você precisa. Respondemos em até 2 horas e montamos juntos a sessão ideal para o seu objetivo.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "→", text: "Recife, PE · Estúdio ou locação" },
                { icon: "→", text: "Resposta em até 2 horas" },
                { icon: "→", text: "@nunk.co no Instagram" },
              ].map(item => (
                <p key={item.text} style={{ fontSize: 14, opacity: 0.25, display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ opacity: 0.5 }}>{item.icon}</span> {item.text}
                </p>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { name: "nome",     placeholder: "Nome",     type: "text" },
              { name: "whatsapp", placeholder: "WhatsApp", type: "tel"  },
            ].map(f => (
              <input key={f.name} required type={f.type} placeholder={f.placeholder}
                value={(form as Record<string, string>)[f.name]}
                onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 0", fontSize: 15, fontWeight: 400, letterSpacing: "0.02em", color: "rgba(240,240,240,0.65)", outline: "none", fontFamily: "inherit", transition: "border-color 0.2s", width: "100%" }}
                onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.35)")}
                onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")} />
            ))}
            <select required value={form.pacote} onChange={e => setForm(p => ({ ...p, pacote: e.target.value }))}
              style={{ background: "#050505", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 0", fontSize: 15, color: form.pacote ? "rgba(240,240,240,0.65)" : "rgba(240,240,240,0.2)", outline: "none", fontFamily: "inherit", appearance: "none", width: "100%", transition: "border-color 0.2s" }}
              onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.35)")}
              onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")}>
              <option value="" disabled>Pacote de interesse</option>
              <option value="Essencial — R$ 450">Essencial — R$ 450</option>
              <option value="Editorial — R$ 600">Editorial — R$ 600</option>
              <option value="Campanha">Campanha</option>
              <option value="Ainda não sei">Ainda não sei</option>
            </select>
            <textarea placeholder="Mensagem (opcional)" rows={3} value={form.msg}
              onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
              style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "16px 0", fontSize: 15, color: "rgba(240,240,240,0.65)", outline: "none", resize: "none", fontFamily: "inherit", width: "100%", transition: "border-color 0.2s" }}
              onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.35)")}
              onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")} />
            <button type="submit"
              style={{ width: "100%", padding: "20px", background: "#f0f0f0", color: "#050505", fontSize: 12, letterSpacing: "0.45em", textTransform: "uppercase", fontWeight: 700, border: "none", fontFamily: "inherit", transition: "background 0.2s", marginTop: 8, cursor: "pointer" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(240,240,240,0.85)")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f0f0f0")}>
              Solicitar via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "36px 72px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <img src="/logo-nome.png" alt="NUNK" style={{ height: 20, width: "auto", objectFit: "contain", opacity: 0.3 }} />
        <span style={{ fontSize: 13, opacity: 0.15, fontWeight: 400 }}>Fotografia humanizada · Recife, PE</span>
        <span style={{ fontSize: 13, fontWeight: 400, opacity: 0.15 }}>© 2026</span>
      </footer>
    </>
  );
}
