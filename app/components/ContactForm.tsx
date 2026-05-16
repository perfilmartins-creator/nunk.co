"use client";

import { useState } from "react";

const PACKAGES = ["Essencial — R$ 450", "Editorial — R$ 600", "Campanha", "Ainda não sei"];

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", pacote: "", mensagem: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Vim pelo site da NUNK.\n\nNome: ${form.nome}\nPacote: ${form.pacote}${form.mensagem ? `\n\n${form.mensagem}` : ""}`;
    window.open(`https://wa.me/558199999999?text=${encodeURIComponent(msg)}`, "_blank");
  }

  const field = "w-full bg-transparent border-b border-white/10 py-3.5 text-xs font-medium tracking-wide placeholder:text-white/15 text-white/60 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-7 text-left">
      <div>
        <input name="nome" value={form.nome} onChange={handleChange} required placeholder="Nome" className={field} />
      </div>
      <div>
        <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="WhatsApp" className={field} />
      </div>
      <div>
        <select name="pacote" value={form.pacote} onChange={handleChange} required className={`${field} appearance-none cursor-pointer`}>
          <option value="" disabled className="bg-[#050505]">Pacote de interesse</option>
          {PACKAGES.map((p) => <option key={p} value={p} className="bg-[#050505]">{p}</option>)}
        </select>
      </div>
      <div>
        <textarea name="mensagem" value={form.mensagem} onChange={handleChange} rows={2} placeholder="Mensagem (opcional)" className={`${field} resize-none`} />
      </div>
      <button type="submit"
        className="w-full py-4 text-[10px] tracking-[0.45em] uppercase font-semibold bg-white text-black hover:bg-white/90 transition-colors mt-2">
        Solicitar via WhatsApp
      </button>
    </form>
  );
}
