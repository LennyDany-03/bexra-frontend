/** White panel used for every product / preview surface. */
export default function Card({ as: Tag = "div", className = "", children }) {
  return (
    <Tag
      className={`rounded-xl border border-muted/25 bg-white ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Inset panel that sits inside a Card (cream fill, softer border). */
export function InsetPanel({ className = "", children }) {
  return (
    <div
      className={`rounded-[10px] border border-muted/20 bg-cream p-4 ${className}`}
    >
      {children}
    </div>
  );
}

/** Uppercase monospaced caption used above small data blocks. */
export function PanelLabel({ className = "", children }) {
  return (
    <div
      className={`font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted ${className}`}
    >
      {children}
    </div>
  );
}
