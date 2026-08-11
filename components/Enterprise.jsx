import { Fragment } from "react";
import Section, { SectionLabel, SectionTitle } from "./ui/Section";
import NumberedList from "./ui/NumberedList";

const STEPS = [
  {
    title: "Deep Structural Audit",
    blurb: "Analysis across sales, marketing, ops and finance.",
  },
  {
    title: "Revenue Leak Identification",
    blurb:
      "The exact rupee amount lost to poor conversion or broken funnels.",
  },
  {
    title: "Scale Automation",
    blurb: "Replace manual tasks with AI-driven systems.",
  },
];

const COLUMNS = ["Leakage", "Manual", "Latency"];

/** [value, intensity] — intensity drives the heatmap fill. */
const ROWS = [
  {
    team: "Sales",
    cells: [
      ["₹2.4L", 0.85],
      ["31 h", 0.45],
      ["2.1 d", 0.2],
    ],
  },
  {
    team: "Marketing",
    cells: [
      ["₹88K", 0.35],
      ["18 h", 0.25],
      ["0.8 d", 0.12],
    ],
  },
  {
    team: "Operations",
    cells: [
      ["₹1.5L", 0.6],
      ["47 h", 0.9],
      ["3.4 d", 0.5],
    ],
  },
  {
    team: "Finance",
    cells: [
      ["₹64K", 0.28],
      ["29 h", 0.55],
      ["5.0 d", 0.7],
    ],
  },
];

function HeatCell({ value, intensity }) {
  return (
    <span
      className={`tnum rounded-md py-[11px] text-center font-mono text-[12.5px] ${
        intensity >= 0.3 ? "text-white" : "text-cream/85"
      }`}
      style={{ background: `rgba(47, 95, 255, ${intensity})` }}
    >
      {value}
    </span>
  );
}

export default function Enterprise() {
  return (
    <Section id="enterprise" tone="dark" divider="none">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(300px,1fr)_minmax(360px,1fr)]">
        <div>
          <SectionLabel tone="light">Enterprise</SectionLabel>
          <SectionTitle className="max-w-[18em]">
            Audit every department, then automate what stays manual
          </SectionTitle>
          <NumberedList items={STEPS} tone="dark" />
        </div>

        <div className="rounded-xl border border-cream/20 bg-cream/5 p-[22px]">
          <div className="mb-[18px] flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-display text-[15px] font-bold tracking-[-0.02em]">
              Department audit — 4 teams
            </span>
            <span className="tnum font-mono text-[10.5px] text-cream/55">
              Q3 · ₹ per month
            </span>
          </div>

          <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] items-center gap-1.5">
            <span />
            {COLUMNS.map((col) => (
              <span
                key={col}
                className="text-center font-mono text-[10px] uppercase tracking-[0.06em] text-cream/50"
              >
                {col}
              </span>
            ))}

            {ROWS.map((row) => (
              <Fragment key={row.team}>
                <span className="text-[13px]">{row.team}</span>
                {row.cells.map(([value, intensity], i) => (
                  <HeatCell
                    key={`${row.team}-${COLUMNS[i]}`}
                    value={value}
                    intensity={intensity}
                  />
                ))}
              </Fragment>
            ))}
          </div>

          <div className="mt-[18px] flex flex-wrap items-center justify-between gap-2 border-t border-cream/15 pt-3.5">
            <span className="text-[12.5px] text-cream/70">
              Total identified leakage
            </span>
            <span className="tnum font-mono text-[15px] font-medium">
              ₹5.42L / mo
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
