"use client";

import { useEffect, useState } from "react";

const inputClass =
  "w-full min-h-12 border border-navy/15 bg-cream px-4 py-3 text-base font-body text-ink focus:border-navy focus:outline-none";

export default function CustomCakeForm({ initialStyle = "" }) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    servings: "",
    tiers: "1",
    shape: "Round",
    sponge: "",
    filling: "",
    designNotes: initialStyle
      ? `I would like a cake in the style of: ${initialStyle}.`
      : "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!initialStyle) return;
    setFormData((prev) => {
      if (prev.designNotes) return prev;
      return {
        ...prev,
        designNotes: `I would like a cake in the style of: ${initialStyle}.`,
      };
    });
  }, [initialStyle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.eventType || !formData.eventDate || !formData.servings) {
        return "Please complete the event details before continuing.";
      }
    }
    if (step === 3) {
      if (!formData.designNotes.trim()) {
        return "Please describe the cake you have in mind.";
      }
    }
    if (step === 4) {
      if (!formData.name || !formData.email || !formData.phone) {
        return "Please leave your name, email, and phone.";
      }
    }
    return "";
  };

  const handleNext = () => {
    const message = validateStep();
    if (message) {
      setError(message);
      return;
    }
    setError("");
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setError("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const buildMessage = () => {
    return [
      `Hello, I would like to enquire about a custom cake.`,
      ``,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Event: ${formData.eventType} on ${formData.eventDate}`,
      `Servings: ${formData.servings}`,
      `Tiers: ${formData.tiers}`,
      `Shape: ${formData.shape}`,
      formData.sponge ? `Sponge: ${formData.sponge}` : null,
      formData.filling ? `Filling: ${formData.filling}` : null,
      ``,
      `Notes:`,
      formData.designNotes,
    ]
      .filter((line) => line !== null)
      .join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validateStep();
    if (message) {
      setError(message);
      return;
    }

    const text = buildMessage();
    const subject = encodeURIComponent(`Cake enquiry from ${formData.name}`);
    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/17789184162?text=${encoded}`, "_blank", "noopener,noreferrer");
    window.open(`mailto:?subject=${subject}&body=${encoded}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-linen px-5 py-10 text-center sm:px-8 sm:py-12">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">
          Request sent
        </p>
        <div className="mx-auto mt-6 mb-6 h-px w-16 bg-gold" />
        <h3 className="font-display text-2xl italic text-navy sm:text-3xl">
          We have your details
        </h3>
        <p className="mx-auto mt-4 max-w-md font-body text-ink/70">
          WhatsApp and your mail app should have opened with the enquiry. If
          nothing appeared, message or call us and we will pick up from there.
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="https://wa.me/17789184162"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center bg-navy px-8 py-3 font-body text-sm tracking-wide text-cream hover:bg-navy/90"
          >
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

  const steps = ["Event", "Cake", "Design", "Contact"];

  return (
    <div className="bg-linen p-4 sm:p-6 md:p-10">
      <div className="mb-8 sm:mb-10">
        <div className="flex justify-between gap-1 sm:gap-2">
          {steps.map((label, i) => (
            <span
              key={label}
              className={`font-body text-[10px] uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.18em] ${
                step >= i + 1 ? "text-navy" : "text-ink/30"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mt-3 h-px bg-navy/10">
          <div
            className="h-px bg-gold transition-all duration-300"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="font-display text-xl italic text-navy sm:text-2xl">
              Tell us about the event
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Event type
                </label>
                <select
                  required
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select an event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Baby Shower">Baby shower</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Event date
                </label>
                <input
                  required
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Estimated servings
                </label>
                <select
                  required
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select servings</option>
                  <option value="10-20">10–20</option>
                  <option value="20-40">20–40</option>
                  <option value="40-70">40–70</option>
                  <option value="70-100">70–100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="font-display text-xl italic text-navy sm:text-2xl">
              Build the cake
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Number of tiers
                </label>
                <select
                  name="tiers"
                  value={formData.tiers}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="1">1 tier</option>
                  <option value="2">2 tiers</option>
                  <option value="3">3 tiers</option>
                  <option value="4+">4+ tiers</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Shape
                </label>
                <select
                  name="shape"
                  value={formData.shape}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Round">Round</option>
                  <option value="Square">Square</option>
                  <option value="Heart">Heart</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Sponge
                </label>
                <select
                  name="sponge"
                  value={formData.sponge}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select sponge</option>
                  <option value="Vanilla">Vanilla</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Red Velvet">Red velvet</option>
                  <option value="Lemon">Lemon</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Filling
                </label>
                <select
                  name="filling"
                  value={formData.filling}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select filling</option>
                  <option value="Vanilla Buttercream">Vanilla buttercream</option>
                  <option value="Chocolate Ganache">Chocolate ganache</option>
                  <option value="Raspberry Compote">Raspberry</option>
                  <option value="Salted Caramel">Salted caramel</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="font-display text-xl italic text-navy sm:text-2xl">
              Design notes
            </h3>
            <div>
              <label className="mb-2 block font-body text-sm text-ink/80">
                Describe the cake
              </label>
              <textarea
                required
                name="designNotes"
                value={formData.designNotes}
                onChange={handleChange}
                rows={5}
                placeholder="Theme, colours, piping style, wording on the cake…"
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h3 className="font-display text-xl italic text-navy sm:text-2xl">
              Your details
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-2 block font-body text-sm text-ink/80">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}

        {error && (
          <p className="mt-6 font-body text-sm text-navy">{error}</p>
        )}

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-navy/10 pt-5 sm:mt-10 sm:pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex min-h-11 items-center font-body text-sm text-ink/60 hover:text-navy"
            >
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex min-h-11 min-w-[5.5rem] items-center justify-center bg-navy px-6 py-2.5 font-body text-sm tracking-wide text-cream hover:bg-navy/90"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center bg-navy px-6 py-2.5 font-body text-sm tracking-wide text-cream hover:bg-navy/90 sm:px-8"
            >
              Submit enquiry
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
