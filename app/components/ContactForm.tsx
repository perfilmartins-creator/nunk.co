"use client";

import { useState } from "react";

const PACKAGES = ["Essencial — R$ 450", "Editorial — R$ 600", "Campanha", "Ainda não sei"];

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", pacote: "", mensagem: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Vim pelo site da NUNK.\n\nNome: ${form.nome}\nPacote: ${form.pacote}${form.mensagem ? `\n\n${form.mensagem}` : ""}`.trim();
    window.open(`https://wa.me/558199999999?text=${encodeURIComponent(msg)}`, "_blank");
  }

  const inputClass = "w-full bg-transparent border-b border-white/10 py-3 text-xs font-light tracking-wide placeholder:text-white/20 text-white/70 focus:outline-none focus:border-white/30 transition-colors text-center";
  const labelClass = "block text-[8px] tracking-[0.35em] uppercase font-light opacity-25 mb-2 text-center";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
      <div>
        <label className={labelClass}>Nome</label>
        <input name="nome" value={form.nome} onChange={handleChange} required placeholder="seu nome" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>WhatsApp</label>
        <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="(81) 9 0000-0000" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Pacote de interesse</label>
        <select name="pacote" value={form.pacote} onChange={handleChange} required className={`${inputClass} appearance-none cursor-pointer`}>
          <option value="" disabled className="bg-neutral-900">selecione</option>
          {PACKAGES.map((p) => <option key={p} value={p} className="bg-neutral-900">{p}</option>)}
        </select>
      </div>

      <div>
        <label className={labelClass}>Mensagem (opcional)</label>
        <textarea name="mensagem" value={form.mensagem} onChange={handleChange} rows={2} placeholder="conte mais sobre o que precisa..." className={`${inputClass} resize-none`} />
      </div>

      <button type="submit" className="w-full py-4 text-[9px] tracking-[0.4em] uppercase font-light border border-white/15 hover:border-white/40 hover:bg-white hover:text-black transition-all duration-300">
        Solicitar via WhatsApp
      </button>
    </form>
  );
}
