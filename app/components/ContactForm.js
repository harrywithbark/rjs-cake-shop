"use client";

import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/17789184162";

const inputClass =
  "w-full min-h-12 border border-navy/15 bg-cream px-4 py-3 text-base font-body text-ink placeholder:text-ink/35 focus:border-navy focus:outline-none";

function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.85 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l3.963-1.724a11.86 11.86 0 005.919 1.51h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const buildMessage = () =>
    [
      `Hello, I would like to enquire about a cake.`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : null,
      formData.date ? `Date: ${formData.date}` : null,
      ``,
      `Message:`,
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Please leave your name, phone, and a short note.");
      return;
    }

    const encoded = encodeURIComponent(buildMessage());
    window.open(`${WHATSAPP_URL}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col justify-center py-6 text-center md:text-left">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">
          WhatsApp
        </p>
        <h3 className="mt-4 font-display text-2xl italic text-navy sm:text-3xl">
          Your message is ready
        </h3>
        <p className="mx-auto mt-4 max-w-md font-body text-ink/70 md:mx-0">
          WhatsApp should have opened with your enquiry. If nothing appeared,
          tap below and we will pick up from there.
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center md:items-start">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 bg-navy px-8 py-3.5 font-body text-sm tracking-wide text-cream transition-colors hover:bg-navy/90"
          >
            <WhatsAppIcon />
            Message on WhatsApp
          </a>
          <a
            href="tel:+17789184162"
            className="inline-flex min-h-11 items-center justify-center font-body text-sm text-navy underline decoration-gold/40 underline-offset-4"
          >
            Call (778) 918-4162
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-ink/50">
            Name
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            className={inputClass}
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-ink/50">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={inputClass}
            required
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-ink/50">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-ink/50">
            Event date
          </span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-ink/50">
          Tell us about the cake
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Occasion, size, flavours, and any design notes."
          className={`${inputClass} resize-none`}
          required
        />
      </label>

      {error && (
        <p className="font-body text-sm text-navy" role="alert">
          {error}
        </p>
      )}

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 bg-navy px-8 py-3.5 font-body text-sm tracking-wide text-cream transition-colors hover:bg-navy/90 sm:w-auto"
        >
          <WhatsAppIcon />
          Send on WhatsApp
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center font-body text-sm text-navy underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
        >
          Or open a blank chat
        </a>
      </div>
    </form>
  );
}
