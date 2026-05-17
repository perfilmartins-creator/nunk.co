"use client";

import { useState } from "react";
import { PACKAGES, WHATSAPP } from "../lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", pacote: "", msg: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const txt = `Olá! Vim pelo site da NUNK.\n\nNome: ${form.nome}\nPacote: ${form.pacote}${form.msg ? `\n\n${form.msg}` : ""}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
  }

  const label = { display: "block", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(240,240,240,0.3)", marginBottom: 10 };
  const field = "w-full bg-transparent border-b border-white/15 pb-3 text-[13px] text-white/75 placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors font-light";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">

      <div>
        <label style={label}>Nome</label>
        <input name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome" className={field} />
      </div>

      <div>
        <label style={label}>WhatsApp</label>
        <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="(81) 99999-9999" type="tel" className={field} />
      </div>

      <div>
        <label style={label}>Pacote</label>
        <select
          name="pacote"
          value={form.pacote}
          onChange={handleChange}
          required
          className={`${field} appearance-none cursor-pointer bg-[#050505]`}
          style={{ color: form.pacote ? "rgba(240,240,240,0.75)" : "rgba(240,240,240,0.2)" }}
        >
          <option value="" disabled className="bg-[#050505]">Escolha um pacote</option>
          {PACKAGES.map((p) => (
            <option key={p.n} value={`${p.name} — ${p.price}`} className="bg-[#050505]">
              {p.name} — {p.price}
            </option>
          ))}
          <option value="Ainda não sei" className="bg-[#050505]">Ainda não sei</option>
        </select>
      </div>

      <div>
        <label style={label}>Mensagem <span style={{ opacity: 0.4 }}>(opcional)</span></label>
        <textarea name="msg" value={form.msg} onChange={handleChange} rows={3} placeholder="Conte um pouco sobre o que você precisa" className={`${field} resize-none`} />
      </div>

      <button
        type="submit"
        className="w-full py-[18px] text-[10px] tracking-[0.45em] uppercase font-bold bg-white text-black hover:bg-white/85 transition-colors mt-2"
      >
        Solicitar via WhatsApp
      </button>

    </form>
  );
}
