import Section, { SectionLabel, SectionTitle } from "./ui/Section";

const FAQS = [
  {
    q: "How does the AI audit my business?",
    a: "You connect your sales, ops and finance sources. Bexra reads the transaction and workflow records, compares them against benchmarks for your venture type, and reports each gap with the rupee value attached.",
  },
  {
    q: "What is the difference between the Starter and Enterprise tracks?",
    a: "Starter is for choosing and launching one venture: a diagnostic, a lean plan, a checklist. Enterprise audits an operating business across departments, quantifies the leaks, and automates the manual work behind them.",
  },
  {
    q: "Is my company data secure?",
    a: "Connections are read-only, transferred over TLS 1.3, and encrypted at rest with AES-256. You can revoke any integration and delete an audit and its underlying records from the workspace settings.",
  },
  {
    q: "Can I manage multiple startups on one account?",
    a: "Yes. Each venture gets its own workspace, integrations and roadmap. Starter OS covers one venture; Pro Auditor allows unlimited ventures on the same login.",
  },
];

export default function Faq() {
  return (
    <Section id="resources">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(260px,0.7fr)_minmax(400px,1.3fr)]">
        <div>
          <SectionLabel>Resources</SectionLabel>
          <SectionTitle>Questions founders ask first</SectionTitle>
        </div>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => (
            <details
              key={faq.q}
              className={`group border-t border-muted/20 ${
                i === FAQS.length - 1 ? "border-b" : ""
              }`}
            >
              <summary className="flex items-center justify-between gap-4 py-5 text-[16.5px] font-medium">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-[15px] text-brand"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mb-[22px] max-w-[44em] text-[14.5px] leading-[1.6] text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
