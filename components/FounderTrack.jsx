import Section, { SectionLabel, SectionTitle } from "./ui/Section";
import Card from "./ui/Card";
import NumberedList from "./ui/NumberedList";

const STEPS = [
  {
    title: "Side-Hustle Diagnostic",
    blurb:
      "Stress-test an idea against real market data before committing capital.",
  },
  {
    title: "Income Blueprint",
    blurb: "A lean execution plan focused on near-term ROI.",
  },
  {
    title: "Rapid Execution Steps",
    blurb: "Day-by-day checklist of what to set up and who to contact.",
  },
];

const METRICS = [
  { label: "Local demand signal", value: "78 / 100", tone: "text-gain" },
  { label: "Capital to start", value: "₹85,000" },
  { label: "Break-even", value: "4.5 months" },
  { label: "Competitor density, 5 km", value: "14 sellers", tone: "text-loss" },
];

const SCORE = 72;

export default function FounderTrack() {
  return (
    <Section id="founder">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(300px,1fr)_minmax(340px,0.95fr)]">
        <div>
          <SectionLabel>Founder Track</SectionLabel>
          <SectionTitle className="max-w-[18em]">
            Test the idea before you commit the capital
          </SectionTitle>
          <NumberedList items={STEPS} />
        </div>

        <Card className="overflow-hidden">
          <div className="border-b border-muted/20 px-5 py-[18px]">
            <div className="font-display text-[15.5px] font-bold tracking-[-0.02em]">
              Diagnostic — Home bakery, Coimbatore
            </div>
            <div className="tnum mt-0.5 font-mono text-[10.5px] text-muted">
              Report 0142 · generated 11 Aug
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 border-b border-muted/20 p-5">
            <div>
              <div className="text-[11.5px] font-medium text-muted">
                Viability score
              </div>
              <div className="tnum font-mono text-[40px] leading-[1.1] font-medium tracking-[-0.03em]">
                {SCORE}
                <span className="text-lg text-muted">/100</span>
              </div>
            </div>
            <div className="flex min-w-[180px] flex-1 flex-col gap-2">
              <div
                className="flex gap-[3px]"
                role="img"
                aria-label={`Viability score ${SCORE} out of 100`}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 flex-1 rounded-[2px] ${
                      i < Math.round(SCORE / 10) ? "bg-brand" : "bg-muted/20"
                    }`}
                  />
                ))}
              </div>
              <div className="text-[12.5px] leading-[1.45] text-muted">
                Viable with a narrow menu. Margin breaks below 40 orders a week.
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {METRICS.map((metric, i) => (
              <div
                key={metric.label}
                className={`flex justify-between gap-3 px-5 py-[13px] text-[13px] ${
                  i < METRICS.length - 1 ? "border-b border-muted/15" : ""
                }`}
              >
                <span>{metric.label}</span>
                <span className={`tnum font-mono ${metric.tone ?? ""}`}>
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-muted/50 px-5 py-3.5">
            <span className="text-[12.5px] font-medium">
              Next: Income Blueprint
            </span>
            <span className="tnum font-mono text-xs text-muted">
              7 steps queued
            </span>
          </div>
        </Card>
      </div>
    </Section>
  );
}
