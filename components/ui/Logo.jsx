import Link from "next/link";

/** Bexra wordmark. `tone="light"` inverts the tile for dark backgrounds. */
export default function Logo({ href = "/", tone = "dark", className = "" }) {
  const content = (
    <>
      <span
        className={`flex size-7 items-center justify-center rounded-md font-display text-[15px] font-bold ${
          tone === "light" ? "bg-cream text-ink" : "bg-ink text-cream"
        }`}
      >
        B
      </span>
      <span className="font-display text-[16.5px] font-bold tracking-[-0.02em]">
        Bexra
      </span>
    </>
  );

  const classes = `flex items-center gap-[9px] ${
    tone === "light" ? "text-cream" : "text-ink"
  } ${className}`;

  if (!href) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <Link href={href} className={classes} aria-label="Bexra home">
      {content}
    </Link>
  );
}
