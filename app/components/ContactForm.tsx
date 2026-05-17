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

  const fieldStyle = "w-full bg-transparent border-b border-white/10 py-3.5 text-sm placeholder:text-white/20 text-white/60 focus:outline-none focus:border-white/30 transition-colors font-light";

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        required
        placeholder="Nome"
        className={fieldStyle}
      />
      <input
        name="whatsapp"
        value={form.whatsapp}
        onChange={handleChange}
        required
        placeholder="WhatsApp"
        type="tel"
        className={fieldStyle}
      />
      <select
        name="pacote"
        value={form.pacote}
        onChange={handleChange}
        required
        className={`${fieldStyle} appearance-none cursor-pointer bg-[#050505]`}
        style={{ color: form.pacote ? "rgba(240,240,240,0.6)" : "rgba(240,240,240,0.2)" }}
      >
        <option value="" disabled className="bg-[#050505]">Pacote de interesse</option>
        {PACKAGES.map((p) => (
          <option key={p.n} value={`${p.name} — ${p.price}`} className="bg-[#050505]">
            {p.name} — {p.price}
          </option>
        ))}
        <option value="Ainda não sei" className="bg-[#050505]">Ainda não sei</option>
      </select>
      <textarea
        name="msg"
        value={form.msg}
        onChange={handleChange}
        rows={3}
        placeholder="Mensagem (opcional)"
        className={`${fieldStyle} resize-none`}
      />
      <button
        type="submit"
        className="w-full py-4 text-[10px] tracking-[0.45em] uppercase font-bold bg-white text-black hover:bg-white/85 transition-colors"
      >
        Solicitar via WhatsApp
      </button>
    </form>
  );
}
