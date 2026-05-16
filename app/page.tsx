"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const GALLERY = [
  "1MBnVVO5PvO-mWVO7BX8Av00xWjAYfTRC",
  "1FpjiUuSrywjMeXMvGm-m7AzuOiskIRlA",
  "1vuOE0NvXYWN4jrvfeBFq4PILLbbQ9Fdo",
  "1lPUleiIBCaN5rzX4Uv0HxVmfyoACbM1z",
  "1Iu6G4RAVc248nTY5Kfo1VO5_awCXXn-g",
  "1vwWxe-cRST2bafcMH7Rjsy4PindcwnPQ",
  "1xINUgZcIj8OhHSBPIdsau8NvLb2wFfVY",
  "1haRvsJ-HDjIbXrHxIGrvuVzqcnYOFpHS",
  "1jm-d1tXHjTE507oL7Gh9sBOykyICTrGq",
  "1j9YeeM-au-ErouyC88zpfKdeVdWmwmOY",
  "1ZuIhExKOqMGf-SvhvjbYsPzds6CJBCRB",
  "1t4ZeHxmP_egEV3z8U2v73x-ybc-Eddmj",
];

const PACKAGES = [
  {
    n: "01", name: "Essencial", price: "R$ 450",
    tagline: "Para quem quer uma imagem profissional, rápida e objetiva.",
    items: ["40 minutos de sessão", "Estúdio fundo branco", "Até 2 roupas", "Direção completa de poses", "30 fotos editadas em até 5 dias"],
    ideal: "LinkedIn · perfil profissional · imagem corporativa",
  },
  {
    n: "02", name: "Editorial", price: "R$ 600",
    tagline: "Para quem quer construir uma identidade visual sólida e autêntica.",
    items: ["1h30 de sessão", "Looks ilimitados", "Todas as fotos editadas", "Direção criativa e de estilo", "Entrega em até 48 horas"],
    ideal: "feed · branding pessoal · conteúdo digital",
    pop: true,
  },
  {
    n: "03", name: "Campanha", price: "Consulta",
    tagline: "Para marcas e projetos que precisam de visual com propósito.",
    items: ["Sessão editorial completa", "Vídeos verticais editados", "Making of", "Planejamento criativo"],
    ideal: "lançamentos · marcas · campanhas digitais",
  },
];

const PROCESS = [
  { n: "01", title: "Contato",  body: "Preencha o formulário ou mande mensagem. Respondemos em até 2 horas." },
  { n: "02", title: "Briefing", body: "Uma conversa para entender o seu objetivo e definir o look e a atmosfera da sessão." },
  { n: "03", title: "Sessão",   body: "O dia da foto. Com direção, referências e um ambiente criativo do início ao fim." },
  { n: "04", title: "Entrega",  body: "Suas fotos editadas e prontas para usar onde mais importa para você." },
];

const MARQUEE_WORDS = ["Fotografia Humanizada", "Recife, PE", "Profissionais", "Marcas", "Criadores", "Editorial", "Campanha", "Identidade Visual"];

export default function Home() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", pacote: "", msg: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const txt = `Olá! Vim pelo site da NUNK.\n\nNome: ${form.nome}\nPacote: ${form.pacote}${form.msg ? `\n\n${form.msg}` : ""}`;
    window.open(`https://wa.me/5581986867591?text=${encodeURIComponent(txt)}`, "_blank");
  }

  return (
    <>
      <style>{`
        :root { --pad-x: 72px; --pad-y: 120px; --pad-y-sm: 96px; }

        /* NAV */
        .nav-links-left, .nav-links-right { display: flex; gap: 40px; align-items: center; }
        .nav-hamburger { display: none; }
        .mobile-menu { display: none; }

        /* GRIDS */
        .manifesto-grid   { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .gallery-grid     { display: grid; grid-template-columns: repeat(6, 1fr); gap: 3px; padding: 0 3px; }
        .sessions-grid    { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .process-grid     { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .contact-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; max-width: 1100px; margin: 0 auto; align-items: start; }

        /* SECTIONS */
        .section-pad      { padding: var(--pad-y) var(--pad-x); }
        .section-pad-sm   { padding: var(--pad-y-sm) var(--pad-x); }
        .gallery-header   { display: flex; align-items: baseline; justify-content: space-between; padding: 0 var(--pad-x); margin-bottom: 48px; }
        .sessions-header  { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 80px; }
        .process-header   { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 80px; }

        /* HERO CTA */
        .hero-cta { display: inline-block; margin-top: 56px; padding: 18px 48px; }

        /* HERO IMG */
        .hero-img { object-position: 60% 15%; }

        /* FOOTER */
        .footer { display: flex; align-items: center; justify-content: space-between; padding: 36px var(--pad-x); border-top: 1px solid rgba(255,255,255,0.06); }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          :root { --pad-x: 24px; --pad-y: 72px; --pad-y-sm: 60px; }

          /* Nav */
          .nav-links-left  { display: none; }
          .nav-links-right { display: none; }
          .nav-hamburger   { display: flex; align-items: center; justify-content: center; background: none; border: none; color: #f0f0f0; padding: 8px; cursor: pointer; opacity: 0.6; }
          .mobile-menu     { display: flex; flex-direction: column; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 49; background: #050505; align-items: center; justify-content: center; gap: 40px; }
          .mobile-menu a   { font-size: 22px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700; color: #f0f0f0; text-decoration: none; opacity: 0.7; }

          /* Grids */
          .manifesto-grid   { grid-template-columns: 1fr; gap: 28px; }
          .gallery-grid     { grid-template-columns: repeat(2, 1fr); gap: 2px; padding: 0 2px; }
          .sessions-grid    { grid-template-columns: 1fr; gap: 2px; }
          .process-grid     { grid-template-columns: repeat(2, 1fr); }
          .contact-grid     { grid-template-columns: 1fr; gap: 48px; }

          /* Headers */
          .sessions-header  { flex-direction: column; gap: 8px; margin-bottom: 40px; }
          .process-header   { flex-direction: column; gap: 8px; margin-bottom: 40px; }
          .gallery-header   { padding: 0 var(--pad-x); margin-bottom: 28px; }

          /* Hero */
          .hero-cta { display: block; width: 100%; text-align: center; padding: 18px 24px; margin-top: 40px; box-sizing: border-box; }
          .hero-img { object-position: 52% 8%; }

          /* Footer */
          .footer { flex-direction: column; gap: 12px; text-align: center; padding: 32px 24px; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "24px 28px 24px var(--pad-x)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(to bottom, rgba(5,5,5,0.85) 0%, transparent 100%)" }}>
        <div className="nav-links-left">
          {["#trabalhos:Trabalhos", "#sessoes:Sessões", "#processo:Como funciona"].map(s => {
            const [href, label] = s.split(":");
            return <a key={href} href={href} style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500, opacity: 0.35, textDecoration: "none", color: "#f0f0f0", transition: "opacity 0.2s" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.35")}>{label}</a>;
          })}
        </div>

        <img src="/logo-nome.png" alt="NUNK" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", height: 26, width: "auto", objectFit: "contain" }} />

        <div className="nav-links-right">
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500, opacity: 0.35, textDecoration: "none", color: "#f0f0f0", transition: "opacity 0.2s" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.35")}>Instagram</a>
          <a href="#contato" style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500, opacity: 0.35, textDecoration: "none", color: "#f0f0f0", border: "1px solid rgba(255,255,255,0.2)", padding: "10px 22px", transition: "opacity 0.2s, border-color 0.2s" }} onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }} onMouseLeave={e => { e.currentTarget.style.opacity = "0.35"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}>Contato</a>
        </div>

        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><line x1="2" y1="2" x2="20" y2="20" stroke="white" strokeWidth="1.5"/><line x1="20" y1="2" x2="2" y2="20" stroke="white" strokeWidth="1.5"/></svg>
            : <svg width="22" height="16" viewBox="0 0 22 16" fill="none"><line x1="0" y1="1" x2="22" y2="1" stroke="white" strokeWidth="1.5"/><line x1="0" y1="8" x2="22" y2="8" stroke="white" strokeWidth="1.5"/><line x1="0" y1="15" x2="22" y2="15" stroke="white" strokeWidth="1.5"/></svg>
          }
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {[["#trabalhos", "Trabalhos"], ["#sessoes", "Sessões"], ["#processo", "Como funciona"], ["#contato", "Contato"], ["https://instagram.com/nunk.co", "Instagram"]].map(([href, lbl]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{lbl}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src="/hero.jpg" alt="NUNK" className="hero-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,5,0.05) 0%, rgba(5,5,5,0.25) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", width: "100%" }}>
          <h1 style={{ fontSize: "clamp(52px, 10vw, 148px)", fontWeight: 700, lineHeight: 0.88, letterSpacing: "-0.02em", margin: 0 }}>
            fotografia<br />
            <span style={{ fontWeight: 200, opacity: 0.45 }}>humanizada</span>
          </h1>
          <p style={{ marginTop: 40, fontSize: 13, letterSpacing: "0.45em", textTransform: "uppercase", fontWeight: 500, opacity: 0.3 }}>
            NUNK · Recife, PE
          </p>
          <a href="#contato" className="hero-cta"
            style={{ background: "#f0f0f0", color: "#050505", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(240,240,240,0.85)")}
            onMouseLeave={e => (e.currentTarget.style.background = "#f0f0f0")}>
            Quero agendar meu ensaio
          </a>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section-pad-sm" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="manifesto-grid">
          <p style={{ fontSize: "clamp(20px, 2.4vw, 36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.01em", margin: 0 }}>
            Num mundo saturado de imagens artificiais, a sua presença real é o diferencial.
          </p>
          <p style={{ fontSize: 15, fontWeight: 400, opacity: 0.35, lineHeight: 1.85, margin: 0 }}>
            A Imagem comunica antes mesmo da fala. A NUNK nasce para transformar presença em narrativa, com direção criativa, intenção e estética para profissionais, criadores e marcas que entendem o valor da própria imagem.
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 0" }}>
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 26, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: 64, whiteSpace: "nowrap", width: "max-content" }}>
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 64 }}>
              <span style={{ fontSize: 12, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2 }}>{w}</span>
              <span style={{ opacity: 0.12, fontSize: 6, fontFamily: "sans-serif" }}>·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* GALERIA */}
      <section id="trabalhos" style={{ paddingTop: "var(--pad-y)", paddingBottom: 80 }}>
        <div className="gallery-header">
          <span style={{ fontSize: 12, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2 }}>Trabalhos recentes</span>
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, letterSpacing: "0.45em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2, textDecoration: "none", color: "#f0f0f0", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.2")}>
            Instagram
          </a>
        </div>
        <div className="gallery-grid">
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
      <section id="sessoes" className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="sessions-header">
          <span style={{ fontSize: 12, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2 }}>Sessões</span>
          <span style={{ fontSize: 13, opacity: 0.2 }}>Recife, PE</span>
        </div>
        <div className="sessions-grid">
          {PACKAGES.map((pkg) => (
            <div key={pkg.n} style={{
              padding: "40px 32px",
              border: pkg.pop ? "1px solid rgba(255,255,255,0.28)" : pkg.n === "03" ? "none" : "1px solid rgba(255,255,255,0.07)",
              borderTop: pkg.n === "03" ? "1px solid rgba(255,255,255,0.07)" : undefined,
              background: pkg.pop ? "rgba(255,255,255,0.03)" : "transparent",
              display: "flex", flexDirection: "column", position: "relative"
            }}>
              {pkg.pop && <span style={{ position: "absolute", top: 20, right: 20, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.15)", padding: "3px 10px", opacity: 0.35 }}>popular</span>}
              <span style={{ fontSize: 11, fontWeight: 700, opacity: 0.18, marginBottom: 20, letterSpacing: "0.1em" }}>{pkg.n}</span>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 8 }}>{pkg.name}</h3>
              <p style={{ fontSize: 14, opacity: 0.3, lineHeight: 1.6, marginBottom: 28, fontWeight: 400 }}>{pkg.tagline}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {pkg.items.map(item => (
                  <li key={item} style={{ fontSize: 13, opacity: 0.5, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 11, opacity: 0.2, letterSpacing: "0.08em", marginBottom: 32 }}>Ideal para: {pkg.ideal}</p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>{pkg.price}</span>
                <a href="#contato" style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 700, color: "#f0f0f0", opacity: 0.4, textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.4")}>Solicitar</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="process-header">
          <span style={{ fontSize: 12, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2 }}>Como funciona</span>
          <span style={{ fontSize: 13, opacity: 0.2 }}>Do primeiro contato à entrega</span>
        </div>
        <div className="process-grid">
          {PROCESS.map((step) => (
            <div key={step.n} style={{ padding: "36px 28px", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ fontSize: 11, fontWeight: 700, opacity: 0.18, letterSpacing: "0.15em", display: "block", marginBottom: 20 }}>{step.n}</span>
              <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.01em" }}>{step.title}</h4>
              <p style={{ fontSize: 13, opacity: 0.35, lineHeight: 1.7 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="contact-grid">
          <div>
            <span style={{ fontSize: 12, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2, display: "block", marginBottom: 28 }}>Contato</span>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 28 }}>
              Vamos fazer<br />algo real.
            </h2>
            <p style={{ fontSize: 15, opacity: 0.3, lineHeight: 1.8, maxWidth: 380, marginBottom: 40 }}>
              Conta pra gente o que você precisa. Respondemos em até 2 horas e montamos juntos a sessão ideal para o seu objetivo.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {["Recife, PE", "Resposta em até 2 horas", "@nunk.co no Instagram"].map(txt => (
                <p key={txt} style={{ fontSize: 13, opacity: 0.25, display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ opacity: 0.5 }}>—</span> {txt}
                </p>
              ))}
            </div>
          </div>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[{ name: "nome", placeholder: "Nome", type: "text" }, { name: "whatsapp", placeholder: "WhatsApp", type: "tel" }].map(f => (
              <input key={f.name} required type={f.type} placeholder={f.placeholder}
                value={(form as Record<string, string>)[f.name]}
                onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "14px 0", fontSize: 15, color: "rgba(240,240,240,0.65)", outline: "none", fontFamily: "inherit", width: "100%", transition: "border-color 0.2s" }}
                onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.35)")}
                onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")} />
            ))}
            <select required value={form.pacote} onChange={e => setForm(p => ({ ...p, pacote: e.target.value }))}
              style={{ background: "#050505", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "14px 0", fontSize: 15, color: form.pacote ? "rgba(240,240,240,0.65)" : "rgba(240,240,240,0.2)", outline: "none", fontFamily: "inherit", appearance: "none", width: "100%", transition: "border-color 0.2s" }}
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
              style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "14px 0", fontSize: 15, color: "rgba(240,240,240,0.65)", outline: "none", resize: "none", fontFamily: "inherit", width: "100%", transition: "border-color 0.2s" }}
              onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.35)")}
              onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")} />
            <button type="submit"
              style={{ width: "100%", padding: "18px", background: "#f0f0f0", color: "#050505", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", fontWeight: 700, border: "none", fontFamily: "inherit", cursor: "pointer", transition: "background 0.2s", marginTop: 4 }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(240,240,240,0.85)")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f0f0f0")}>
              Solicitar via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src="/logo-nome.png" alt="NUNK" style={{ height: 18, opacity: 0.25 }} />
        <span style={{ fontSize: 12, opacity: 0.15 }}>Fotografia humanizada · Recife, PE</span>
        <span style={{ fontSize: 12, opacity: 0.15 }}>© 2026</span>
      </footer>
    </>
  );
}
