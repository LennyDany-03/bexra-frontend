/**
 * Divided list of numbered steps, shared by the Founder Track and
 * Enterprise sections. `tone="dark"` lightens the rules and body copy.
 */
export default function NumberedList({ items, tone = "light" }) {
  const rule = tone === "dark" ? "border-cream/15" : "border-muted/20";
  const body = tone === "dark" ? "text-cream/70" : "text-muted";

  return (
    <div className="mt-9 flex flex-col">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`grid grid-cols-[36px_1fr] gap-4 border-t py-5 ${rule} ${
            i === items.length - 1 ? `border-b ${rule}` : ""
          }`}
        >
          <span className="tnum pt-[3px] font-mono text-[12.5px] font-medium text-brand">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="mb-1.5 font-display text-[19px] font-bold tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className={`text-[14.5px] leading-[1.55] ${body}`}>
              {item.blurb}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
