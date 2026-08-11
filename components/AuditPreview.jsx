import Card from "./ui/Card";

const ISSUES = [
  {
    tag: "PAY",
    title: "Checkout drop-off at the payment step",
    detail: "UPI timeout on 1 in 5 attempts · no retry prompt",
    amount: "−₹1,42,000",
  },
  {
    tag: "COD",
    title: "COD returns never reconciled",
    detail: "214 shipments unmatched against courier remittance",
    amount: "−₹96,400",
  },
  {
    tag: "INV",
    title: "Wholesale invoices 41 days past due",
    detail: "9 accounts, no reminder sequence in place",
    amount: "−₹68,400",
  },
];

const STATS = [
  { label: "Leaks found", value: "7", tone: "text-ink" },
  { label: "Monthly loss", value: "₹4.2L", tone: "text-loss" },
  { label: "Recoverable", value: "₹3.1L", tone: "text-gain" },
];

/** Browser-chrome mock of a completed revenue audit. Decorative. */
export default function AuditPreview() {
  return (
    <Card className="overflow-hidden">
      {/* Browser chrome */}
      <div className="flex h-9 items-center gap-2 border-b border-muted/20 bg-cream px-3">
        <span className="size-[9px] rounded-full bg-muted/35" />
        <span className="size-[9px] rounded-full bg-muted/35" />
        <span className="size-[9px] rounded-full bg-muted/35" />
        <span className="ml-2 flex h-5 flex-1 items-center overflow-hidden rounded-[5px] border border-muted/20 bg-white px-2 font-mono text-[10.5px] whitespace-nowrap text-muted">
          app.bexra.co/audit/acme-retail
        </span>
      </div>

      {/* Title row */}
      <div className="flex items-center justify-between gap-4 border-b border-muted/20 px-5 py-[18px]">
        <div className="min-w-0">
          <div className="font-display text-base font-bold tracking-[-0.02em]">
            Revenue audit — Acme Retail
          </div>
          <div className="tnum mt-1 font-mono text-[11px] text-muted">
            Sources: Razorpay · Zoho Books · Shopify — scanned 12 Aug, 09:41
          </div>
        </div>
        <span className="inline-flex h-6 shrink-0 items-center rounded-[5px] bg-brand/10 px-2.5 text-[11.5px] font-semibold text-brand">
          Complete
        </span>
      </div>

      {/* Headline numbers */}
      <div className="grid grid-cols-3 gap-px bg-muted/20">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white px-4 py-4">
            <div className="text-[11.5px] font-medium text-muted">
              {stat.label}
            </div>
            <div
              className={`tnum mt-1.5 font-mono text-[22px] font-medium tracking-[-0.02em] md:text-[26px] ${stat.tone}`}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Flagged issues */}
      <div className="flex items-baseline justify-between border-t border-muted/20 px-5 pt-4 pb-1.5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
          Flagged issues
        </span>
        <span className="tnum font-mono text-[10.5px] text-muted">
          3 of 7 shown
        </span>
      </div>

      <div className="px-5 pt-1.5 pb-5">
        {ISSUES.map((issue, i) => (
          <div
            key={issue.tag}
            className={`flex items-center gap-3 py-[13px] ${
              i < ISSUES.length - 1 ? "border-b border-muted/15" : ""
            }`}
          >
            <span className="flex h-[26px] w-[34px] shrink-0 items-center justify-center rounded-[5px] border border-muted/30 font-mono text-[9.5px] text-muted">
              {issue.tag}
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[13.5px] font-medium">{issue.title}</div>
              <div className="mt-0.5 text-[11.5px] text-muted">
                {issue.detail}
              </div>
            </div>
            <span className="tnum shrink-0 font-mono text-[13.5px] font-medium text-loss">
              {issue.amount}
            </span>
          </div>
        ))}

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-muted/50 pt-3">
          <span className="text-[12.5px] font-medium">
            Roadmap ready · 7 fixes ranked by payback
          </span>
          <span className="tnum font-mono text-[12.5px] font-medium text-gain">
            +₹3,10,000 / mo
          </span>
        </div>
      </div>
    </Card>
  );
}
