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
    const msg = `Olá! Vim pelo site da NUNK.\n\nNome: ${form.nome}\nPacote de interesse: ${form.pacote}\n${form.mensagem ? `Mensagem: ${form.mensagem}` : ""}`.trim();
    window.open(`https://wa.me/558199999999?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
      <div>
        <label className="block text-xs tracking-widest text-white/30 uppercase mb-2">Nome</label>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
          placeholder="Seu nome"
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-md px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs tracking-widest text-white/30 uppercase mb-2">WhatsApp</label>
        <input
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          required
          placeholder="(81) 9 0000-0000"
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-md px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs tracking-widest text-white/30 uppercase mb-2">Pacote de interesse</label>
        <select
          name="pacote"
          value={form.pacote}
          onChange={handleChange}
          required
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-md px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-white/20 transition-colors appearance-none"
        >
          <option value="" disabled className="bg-neutral-900">Selecione um pacote</option>
          {PACKAGES.map((p) => (
            <option key={p} value={p} className="bg-neutral-900">{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs tracking-widest text-white/30 uppercase mb-2">Mensagem (opcional)</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          rows={3}
          placeholder="Conte um pouco sobre o que você precisa..."
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-md px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black text-sm font-semibold tracking-wide py-4 rounded-md hover:bg-white/90 transition-colors"
      >
        Solicitar orçamento via WhatsApp
      </button>
    </form>
  );
}
