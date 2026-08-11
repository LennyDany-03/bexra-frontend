import Section, { SectionLabel, SectionTitle } from "./ui/Section";
import Card, { PanelLabel } from "./ui/Card";

const INTEGRATIONS = [
  { name: "Razorpay", on: true },
  { name: "Zoho Books", on: true },
  { name: "Shopify", on: true },
  { name: "Tally", on: false },
  { name: "Google Sheets", on: false },
];

const SCAN_FINDINGS = [
  { label: "Payment retries missing", amount: "−₹1,42,000" },
  { label: "Courier remittance gap", amount: "−₹96,400" },
  { label: "Ageing receivables", amount: "−₹68,400" },
];

const ROADMAP = [
  { task: "Turn on UPI retry prompt in Razorpay", gain: "+₹1,42,000", done: true },
  { task: "Match 214 COD shipments to remittance", gain: "+₹96,400" },
  { task: "Set a 3-step reminder on 9 wholesale accounts", gain: "+₹68,400" },
  { task: "Write an SOP for weekly cash reconciliation", gain: "+₹31,200" },
];

function StepHeading({ index, title, blurb }) {
  return (
    <>
      <div className="flex items-baseline gap-2.5">
        <span className="tnum font-mono text-[12.5px] font-medium text-brand">
          {index}
        </span>
        <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
          {title}
        </h3>
      </div>
      <p className="text-[14.5px] leading-[1.55] text-muted">{blurb}</p>
    </>
  );
}

function Toggle({ on }) {
  return (
    <span
      className={`flex h-5 w-[34px] items-center rounded-full px-[3px] ${
        on ? "justify-end bg-brand" : "justify-start border border-muted/40"
      }`}
    >
      <span
        className={`size-3.5 rounded-full ${on ? "bg-white" : "bg-muted/35"}`}
      />
    </span>
  );
}

export default function HowItWorks() {
  return (
    <Section id="how">
      <SectionLabel>How it works</SectionLabel>
      <SectionTitle className="max-w-[20em]">
        Three steps from raw data to a ranked fix list
      </SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {/* 01 — Connect */}
        <div className="flex flex-col gap-4">
          <StepHeading
            index="01"
            title="Connect"
            blurb="Link your data and tools to Bexra."
          />
          <Card className="px-[18px] py-4">
            <PanelLabel className="mb-3">Integrations</PanelLabel>
            <div className="flex flex-col gap-[11px]">
              {INTEGRATIONS.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-3"
                >
                  <span
                    className={`text-[13.5px] ${item.on ? "" : "text-muted"}`}
                  >
                    {item.name}
                  </span>
                  <Toggle on={item.on} />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* 02 — AI Audit */}
        <div className="flex flex-col gap-4">
          <StepHeading
            index="02"
            title="AI Audit"
            blurb="Proprietary scan finds bottlenecks and revenue leaks."
          />
          <Card className="px-[18px] py-4">
            <div className="mb-2.5 flex items-baseline justify-between">
              <span className="text-[12.5px] font-medium">Scanning finance</span>
              <span className="tnum font-mono text-[12.5px] text-brand">68%</span>
            </div>
            <div className="mb-4 h-[5px] overflow-hidden rounded-full bg-muted/20">
              <div className="h-full w-[68%] bg-brand" />
            </div>
            <div className="flex flex-col gap-2.5">
              {SCAN_FINDINGS.map((finding) => (
                <div
                  key={finding.label}
                  className="flex items-center justify-between gap-2.5"
                >
                  <span className="text-[12.5px]">{finding.label}</span>
                  <span className="tnum font-mono text-xs text-loss">
                    {finding.amount}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-2.5">
                <span className="text-[12.5px] text-muted">
                  Scanning ops ledger…
                </span>
                <span className="font-mono text-xs text-muted">—</span>
              </div>
            </div>
          </Card>
        </div>

        {/* 03 — Execute */}
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
          <StepHeading
            index="03"
            title="Execute"
            blurb="A prioritized roadmap of fixes."
          />
          <Card className="px-[18px] py-4">
            <PanelLabel className="mb-3">This week · ranked by payback</PanelLabel>
            <div className="flex flex-col gap-3">
              {ROADMAP.map((item) => (
                <div key={item.task} className="flex items-start gap-2.5">
                  {item.done ? (
                    <span className="mt-px flex size-4 shrink-0 items-center justify-center rounded bg-brand text-[11px] leading-none text-white">
                      ✓
                    </span>
                  ) : (
                    <span className="mt-px size-4 shrink-0 rounded border border-muted/45" />
                  )}
                  <span
                    className={`flex-1 text-[13px] leading-[1.4] ${
                      item.done ? "text-muted line-through" : ""
                    }`}
                  >
                    {item.task}
                  </span>
                  <span className="tnum shrink-0 font-mono text-xs text-gain">
                    {item.gain}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
