import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-brand text-white hover:bg-ink border border-transparent",
  outline:
    "border border-muted/45 text-ink hover:border-brand hover:text-brand",
  outlineLight:
    "border border-cream/30 text-cream hover:border-brand hover:text-brand",
};

const SIZES = {
  sm: "h-[38px] px-4 text-[13.5px]",
  md: "h-[46px] px-[22px] text-[14.5px]",
  full: "h-11 w-full px-5 text-sm",
};

/**
 * Shared call-to-action. Renders a Next <Link> when `href` is set,
 * otherwise a real <button> (so forms can submit).
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-[7px] font-semibold",
    "transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60",
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
