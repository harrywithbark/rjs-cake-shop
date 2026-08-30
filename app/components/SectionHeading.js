export default function SectionHeading({
  kicker,
  title,
  align = "center",
  as: Tag = "h2",
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <p className="mb-4 font-body text-[11px] uppercase tracking-[0.28em] text-ink/50 sm:mb-6 sm:text-xs sm:tracking-[0.4em]">
        {kicker}
      </p>
      <div
        className={`mb-4 h-px w-16 bg-gold sm:mb-6 ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <Tag className="text-balance font-display text-[1.85rem] italic leading-tight tracking-wide text-navy sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </Tag>
    </div>
  );
}
