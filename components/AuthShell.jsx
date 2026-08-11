import Link from "next/link";
import Logo from "./ui/Logo";

const PROOF_POINTS = [
  { label: "Leaks found", value: "7" },
  { label: "Monthly loss", value: "₹4.2L", tone: "text-loss" },
  { label: "Recoverable", value: "₹3.1L", tone: "text-gain" },
];

/**
 * Two-column frame shared by /login and /register: brand panel on the
 * left (desktop only), form on the right.
 */
export default function AuthShell({ eyebrow, title, subtitle, children, footer }) {
  return (
    <main className="grid min-h-dvh grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      {/* Brand panel */}
      <aside className="hidden flex-col justify-between bg-ink px-10 py-12 text-cream lg:flex xl:px-14">
        <Logo tone="light" />

        <div className="max-w-[24em]">
          <h2 className="font-display text-[34px] leading-[1.08] font-bold tracking-[-0.03em] text-pretty">
            Stop revenue leaks before they scale
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-cream/70">
            Connect your sales, ops and finance data. Bexra puts a rupee figure
            on every leak and ranks the fixes by payback.
          </p>

          <div className="mt-9 rounded-xl border border-cream/20 bg-cream/5 p-5">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-cream/50">
              Sample audit · Acme Retail
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {PROOF_POINTS.map((point) => (
                <div key={point.label}>
                  <div className="text-[11px] text-cream/60">{point.label}</div>
                  <div
                    className={`tnum mt-1 font-mono text-xl font-medium tracking-[-0.02em] ${
                      point.tone ?? "text-cream"
                    }`}
                  >
                    {point.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="tnum font-mono text-[11.5px] text-cream/55">
          300+ founders on the waitlist · Made in Coimbatore, India
        </p>
      </aside>

      {/* Form panel */}
      <div className="flex flex-col bg-cream">
        <div className="flex items-center justify-between px-6 py-6 md:px-10">
          <div className="lg:invisible">
            <Logo />
          </div>
          <Link
            href="/"
            className="text-[13px] font-medium text-muted transition-colors hover:text-ink"
          >
            ← Back to site
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 pt-4 pb-16 md:px-10">
          <div className="w-full max-w-[420px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              {eyebrow}
            </span>
            <h1 className="mt-3 font-display text-[32px] leading-[1.1] font-bold tracking-[-0.03em]">
              {title}
            </h1>
            <p className="mt-2.5 text-[14.5px] leading-[1.55] text-muted">
              {subtitle}
            </p>

            <div className="mt-8">{children}</div>

            {footer && (
              <div className="mt-7 text-center text-[13.5px] text-muted">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
