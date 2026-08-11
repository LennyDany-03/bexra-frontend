import Section, { SectionLabel, SectionTitle } from "./ui/Section";
import Card, { InsetPanel, PanelLabel } from "./ui/Card";

const OWNER_TIME = [
  { label: "Approving purchases", hours: "9.5 h", pct: 72 },
  { label: "Counter billing", hours: "6.0 h", pct: 46 },
  { label: "Vendor calls", hours: "3.0 h", pct: 23 },
];

const SCHEMA_TABLES = ["users", "workspaces", "plans", "invoices"];

const SLIPPAGE = [
  { asset: "NIFTY opts", trades: "142 trades", delta: "−18 bps", tone: "text-loss" },
  { asset: "Mid-cap eq", trades: "61 trades", delta: "−7 bps", tone: "text-loss" },
  { asset: "Gold ETF", trades: "12 trades", delta: "+2 bps", tone: "text-gain" },
];

function FeatureList({ items }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-[1.45] text-muted"
        >
          <span aria-hidden="true" className="text-brand">
            ↳
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProductCard({ title, features, children }) {
  return (
    <Card className="flex flex-col gap-[18px] px-6 py-[26px]">
      <h3 className="font-display text-[21px] font-bold tracking-[-0.02em]">
        {title}
      </h3>
      <FeatureList items={features} />
      <div className="mt-auto">{children}</div>
    </Card>
  );
}

export default function Products() {
  return (
    <Section id="products">
      <SectionLabel>Capabilities</SectionLabel>
      <SectionTitle className="max-w-[20em]">
        Built for the three kinds of ventures Indian founders run
      </SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="Traditional Ventures"
          features={[
            "Isolates operational friction",
            "Tracks owner-bottleneck time",
            "Builds offline SOPs",
            "Closes cash leakage",
          ]}
        >
          <InsetPanel>
            <PanelLabel className="mb-3 text-[10px]">
              Owner time this week
            </PanelLabel>
            <div className="flex flex-col gap-2.5">
              {OWNER_TIME.map((row) => (
                <div key={row.label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{row.label}</span>
                    <span className="tnum font-mono text-muted">
                      {row.hours}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-muted/20">
                    <div
                      className="h-full rounded-full bg-brand"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </InsetPanel>
        </ProductCard>

        <ProductCard
          title="Online SaaS & Apps"
          features={[
            "Runs ideas through a discovery quiz",
            "Defines database schema",
            "Formulates MVP backlog",
            "Drafts GTM pipeline",
          ]}
        >
          <InsetPanel>
            <div className="mb-3 flex items-baseline justify-between">
              <PanelLabel className="text-[10px]">Discovery quiz</PanelLabel>
              <span className="tnum font-mono text-[11px] text-brand">
                7 / 12
              </span>
            </div>
            <div className="mb-2.5 text-[12.5px] leading-[1.45]">
              Who pays first — the team lead or the finance owner?
            </div>
            <div className="mb-3 flex flex-col gap-1.5">
              <div className="rounded-md border border-brand px-2.5 py-1.5 text-xs text-brand">
                Team lead, on a card
              </div>
              <div className="rounded-md border border-muted/30 px-2.5 py-1.5 text-xs text-muted">
                Finance, on invoice
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 border-t border-muted/20 pt-2.5">
              {SCHEMA_TABLES.map((table) => (
                <span
                  key={table}
                  className="rounded border border-muted/30 px-[7px] py-[3px] font-mono text-[10.5px] text-muted"
                >
                  {table}
                </span>
              ))}
            </div>
          </InsetPanel>
        </ProductCard>

        <ProductCard
          title="Stock & Trading Ventures"
          features={[
            "Audits transaction slip rates",
            "Monitors broker records",
            "Flags asset over-exposure",
            "Structures compliant ledger SOPs",
          ]}
        >
          <InsetPanel>
            <PanelLabel className="mb-3 text-[10px]">
              Slippage audit · last 30 days
            </PanelLabel>
            <div className="flex flex-col gap-2">
              {SLIPPAGE.map((row) => (
                <div
                  key={row.asset}
                  className="tnum flex items-center justify-between font-mono text-xs"
                >
                  <span className="text-ink">{row.asset}</span>
                  <span className="text-muted">{row.trades}</span>
                  <span className={row.tone}>{row.delta}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between border-t border-muted/20 pt-2.5 text-xs">
              <span>Over-exposure flag</span>
              <span className="tnum font-mono text-loss">64% in 1 sector</span>
            </div>
          </InsetPanel>
        </ProductCard>
      </div>
    </Section>
  );
}
