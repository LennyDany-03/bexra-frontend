/** Constrained page gutter used by every section. */
export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** Small monospaced eyebrow above a section heading. */
export function SectionLabel({ tone = "dark", children }) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.1em] ${
        tone === "light" ? "text-cream/55" : "text-muted"
      }`}
    >
      {children}
    </span>
  );
}

/** Display-face section heading. */
export function SectionTitle({ className = "", children }) {
  return (
    <h2
      className={`mt-3.5 font-display text-[32px] leading-[1.08] font-bold tracking-[-0.03em] text-pretty md:text-[40px] ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * A page section with a top divider. `tone="dark"` inverts to the ink
 * background used by the Enterprise band.
 */
export default function Section({
  id,
  tone = "light",
  divider = "solid",
  className = "",
  children,
}) {
  const dividerClass =
    divider === "dashed"
      ? "border-t border-dashed border-muted/50"
      : divider === "none"
        ? ""
        : "border-t border-muted/20";

  return (
    <section
      id={id}
      className={`${tone === "dark" ? "bg-ink text-cream" : ""} ${dividerClass} ${className}`}
    >
      <Container className="py-16 md:py-[76px]">{children}</Container>
    </section>
  );
}
