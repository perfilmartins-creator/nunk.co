"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const G = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const HERO_IMG  = "1pAgVVU0Xdv2dArfXkdZg9bdT7r9p6UXv";

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
  { n: "01", name: "Essencial",  price: "R$ 450",   info: "40 min · 1 cenário · direção de poses" },
  { n: "02", name: "Editorial",  price: "R$ 600",   info: "1h30 · looks ilimitados · todas as fotos editadas", pop: true },
  { n: "03", name: "Campanha",   price: "Consulta", info: "Editorial completo + 2 vídeos + making of" },
];

const MARQUEE_ITEMS = ["Fotografia Humanizada", "Recife, PE", "Profissionais", "Marcas", "Criadores", "Editorial", "Campanha"];

const s = {
  label: { fontSize: 12, letterSpacing: "0.5em", textTransform: "uppercase" as const, fontWeight: 700, opacity: 0.2 },
  navLink: { fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase" as const, fontWeight: 500, opacity: 0.35, transition: "opacity 0.2s", textDecoration: "none", color: "#f0f0f0" } as React.CSSProperties,
};

export default function Home() {
  const [ready, setReady] = useState(false);
  const [form, setForm] = useState({ nome: "", whatsapp: "", pacote: "", msg: "" });

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2300);
    return () => clearTimeout(t);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const txt = `Olá! Vim pelo site da NUNK.\n\nNome: ${form.nome}\nPacote: ${form.pacote}${form.msg ? `\n\n${form.msg}` : ""}`;
    window.open(`https://wa.me/558199999999?text=${encodeURIComponent(txt)}`, "_blank");
  }

  return (
    <>
      {/* LOADER */}
      <AnimatePresence>
        {!ready && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: "fixed", inset: 0, zIndex: 500, background: "#050505", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
          >
            <div style={{ overflow: "hidden" }}>
              <motion.span
                initial={{ y: "100%" }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                style={{ display: "block", fontSize: 13, letterSpacing: "0.6em", textTransform: "uppercase", fontWeight: 600, color: "rgba(240,240,240,0.8)" }}
              >
                NUNK
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: "linear", delay: 0.3 }}
              style={{ marginTop: 24, height: 1, width: 48, background: "rgba(255,255,255,0.2)", transformOrigin: "left" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "28px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 100%)" }}>
        <div style={{ display: "flex", gap: 32 }}>
          <a href="#galeria" style={s.navLink} onMouseEnter={e => (e.currentTarget.style.opacity="1")} onMouseLeave={e => (e.currentTarget.style.opacity="0.35")}>Trabalhos</a>
          <a href="#sessoes" style={s.navLink} onMouseEnter={e => (e.currentTarget.style.opacity="1")} onMouseLeave={e => (e.currentTarget.style.opacity="0.35")}>Sessões</a>
        </div>
        <span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", fontSize: 15, letterSpacing: "0.6em", textTransform: "uppercase", fontWeight: 700 }}>
          NUNK
        </span>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer" style={s.navLink} onMouseEnter={e => (e.currentTarget.style.opacity="1")} onMouseLeave={e => (e.currentTarget.style.opacity="0.35")}>Instagram</a>
          <a href="#contato" style={{ ...s.navLink, border: "1px solid rgba(255,255,255,0.2)", padding: "10px 20px" }} onMouseEnter={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.borderColor="rgba(255,255,255,0.5)"; }} onMouseLeave={e => { e.currentTarget.style.opacity="0.35"; e.currentTarget.style.borderColor="rgba(255,255,255,0.2)"; }}>Contato</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={G(HERO_IMG)} alt="NUNK" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 35%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.55) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px" }}>
          <h1 style={{ fontSize: "clamp(56px, 9vw, 130px)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.02em", margin: 0 }}>
            fotografia<br />
            <span style={{ fontWeight: 200, opacity: 0.5 }}>humanizada</span>
          </h1>
          <p style={{ marginTop: 48, fontSize: 13, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 500, opacity: 0.3 }}>
            NUNK · Recife, PE
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" style={{ display: "block", width: "100%", paddingTop: 96, paddingBottom: 48 }}>
        <p style={{ ...s.label, textAlign: "center", marginBottom: 40, display: "block" }}>Trabalhos</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 2, padding: "0 2px" }}>
          {GALLERY.map((id, i) => (
            <div key={id} style={{ aspectRatio: "2/3", overflow: "hidden" }}>
              <img
                src={G(id)}
                alt={`NUNK ${i + 1}`}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://instagram.com/nunk.co" target="_blank" rel="noopener noreferrer"
            style={{ ...s.label, textDecoration: "none", color: "#f0f0f0", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.2")}
          >
            Ver mais no Instagram ↗
          </a>
        </p>
      </section>

      {/* MARQUEE */}
      <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 0", margin: "48px 0" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: 64, whiteSpace: "nowrap", width: "max-content" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((w, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 64 }}>
              <span style={s.label}>{w}</span>
              <span style={{ opacity: 0.1, fontSize: 6 }}>◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* SESSÕES */}
      <section id="sessoes" style={{ display: "block", width: "100%", padding: "80px 24px" }}>
        <p style={{ ...s.label, textAlign: "center", marginBottom: 64, display: "block" }}>Sessões</p>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.n} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start", minWidth: 0 }}>
                <span style={{ fontSize: 10, fontWeight: 700, opacity: 0.15, marginTop: 3, flexShrink: 0 }}>{pkg.n}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>{pkg.name}</span>
                    {pkg.pop && <span style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.15)", padding: "2px 8px", opacity: 0.3 }}>popular</span>}
                  </div>
                  <p style={{ fontSize: 13, opacity: 0.25, marginTop: 6, lineHeight: 1.6 }}>{pkg.info}</p>
                </div>
              </div>
              <span style={{ fontSize: 18, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{pkg.price}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: 48 }} />
          <div style={{ textAlign: "center" }}>
            <a href="#contato" style={{ display: "inline-block", padding: "18px 64px", background: "#f0f0f0", color: "#050505", fontSize: 12, letterSpacing: "0.45em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(240,240,240,0.85)")}
              onMouseLeave={e => (e.currentTarget.style.background = "#f0f0f0")}
            >
              Solicitar sessão
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ display: "block", width: "100%", padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ ...s.label, textAlign: "center", marginBottom: 8, display: "block" }}>Contato</p>
        <p style={{ textAlign: "center", fontSize: 13, opacity: 0.2, marginBottom: 56, letterSpacing: "0.05em" }}>Recife, PE · Responde em até 2h</p>
        <form onSubmit={submit} style={{ maxWidth: 360, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
          {[
            { name: "nome",      placeholder: "Nome",       type: "text" },
            { name: "whatsapp",  placeholder: "WhatsApp",   type: "tel"  },
          ].map(f => (
            <input key={f.name} required type={f.type} placeholder={f.placeholder}
              value={(form as Record<string,string>)[f.name]}
              onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
              style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "14px 0", fontSize: 14, fontWeight: 500, letterSpacing: "0.03em", color: "rgba(240,240,240,0.6)", outline: "none", fontFamily: "inherit", transition: "border-color 0.2s" }}
              onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.3)")}
              onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")}
            />
          ))}
          <select required value={form.pacote} onChange={e => setForm(p => ({ ...p, pacote: e.target.value }))}
            style={{ background: "#050505", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "14px 0", fontSize: 14, fontWeight: 500, letterSpacing: "0.03em", color: form.pacote ? "rgba(240,240,240,0.6)" : "rgba(240,240,240,0.15)", outline: "none", fontFamily: "inherit", appearance: "none", transition: "border-color 0.2s" }}
            onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.3)")}
            onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")}
          >
            <option value="" disabled>Pacote de interesse</option>
            <option value="Essencial — R$ 450">Essencial — R$ 450</option>
            <option value="Editorial — R$ 600">Editorial — R$ 600</option>
            <option value="Campanha">Campanha</option>
            <option value="Ainda não sei">Ainda não sei</option>
          </select>
          <textarea placeholder="Mensagem (opcional)" rows={2} value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
            style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "14px 0", fontSize: 14, fontWeight: 500, letterSpacing: "0.03em", color: "rgba(240,240,240,0.6)", outline: "none", resize: "none", fontFamily: "inherit", transition: "border-color 0.2s" }}
            onFocus={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.3)")}
            onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.1)")}
          />
          <button type="submit" style={{ width: "100%", padding: "18px", background: "#f0f0f0", color: "#050505", fontSize: 12, letterSpacing: "0.45em", textTransform: "uppercase", fontWeight: 700, border: "none", fontFamily: "inherit", transition: "background 0.2s", marginTop: 8 }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(240,240,240,0.85)")}
            onMouseLeave={e => (e.currentTarget.style.background = "#f0f0f0")}
          >
            Solicitar via WhatsApp
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px 64px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 13, letterSpacing: "0.5em", textTransform: "uppercase", fontWeight: 700, opacity: 0.2 }}>NUNK</span>
        <span style={{ fontSize: 13, fontWeight: 500, opacity: 0.15 }}>© 2026 · Recife</span>
      </footer>
    </>
  );
}
