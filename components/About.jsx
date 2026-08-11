import Section, { SectionLabel, SectionTitle } from "./ui/Section";
import Card from "./ui/Card";

const TEAM = [
  {
    name: "Jaisree",
    role: "Founder",
    blurb: "Owns the audit logic and what makes a roadmap worth following.",
  },
  {
    name: "Harshavardhan",
    role: "Lead Developer & Technical Architect",
    blurb: "Builds the scan pipeline and the data model behind every audit.",
  },
  {
    name: "Tanya",
    role: "Frontend Developer & UI/UX",
    blurb: "Makes the roadmap readable on a phone at 11pm.",
  },
  {
    name: "Thiyanesh",
    role: "Full Stack Developer",
    blurb: "Connects the integrations and keeps the credits ledger honest.",
  },
];

export default function About({ waitlistCount = 300 }) {
  return (
    <Section id="about" divider="dashed">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(300px,1fr)_minmax(320px,1.05fr)]">
        <div>
          <SectionLabel>About</SectionLabel>
          <SectionTitle className="max-w-[18em]">
            I built the tool I needed at 17
          </SectionTitle>
        </div>
        <div className="flex max-w-[36em] flex-col gap-4 text-[15.5px] leading-[1.65] text-muted">
          <p>
            I chose commerce over medicine at 17. After that I collected around
            300 business ideas and executed none of them. I tried Etsy and it
            failed.
          </p>
          <p>
            It took me seven months to see the actual problem: nobody helps you
            find the right business model. Everyone sells you tactics for a
            business you haven&apos;t chosen yet.
          </p>
          <p>
            So I built Bexra — the audit and the roadmap I wanted before
            spending a rupee.
          </p>
          <p className="text-sm font-medium text-ink">Jaisree, founder</p>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member) => (
          <Card key={member.name} className="p-[22px]">
            <div className="flex size-[42px] items-center justify-center rounded-full bg-ink font-display text-[15px] font-bold text-cream">
              {member.name.charAt(0)}
            </div>
            <div className="mt-3.5 font-display text-[16.5px] font-bold tracking-[-0.02em]">
              {member.name}
            </div>
            <div className="mt-0.5 text-[12.5px] text-muted">{member.role}</div>
            <p className="mt-3 text-[13px] leading-[1.5] text-muted">
              {member.blurb}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap gap-12 border-t border-muted/20 pt-6">
        <div>
          <div className="tnum font-mono text-[28px] font-medium tracking-[-0.02em]">
            {waitlistCount.toLocaleString("en-IN")}+
          </div>
          <div className="mt-1 text-[12.5px] text-muted">on the waitlist</div>
        </div>
        <div>
          <div className="tnum font-mono text-[28px] font-medium tracking-[-0.02em]">
            ₹499
          </div>
          <div className="mt-1 text-[12.5px] text-muted">
            to run your first audit
          </div>
        </div>
        <div>
          <div className="pt-[5px] font-display text-[22px] font-bold tracking-[-0.02em]">
            Live product — not a Notion doc.
          </div>
          <div className="mt-1 text-[12.5px] text-muted">Ships weekly</div>
        </div>
      </div>
    </Section>
  );
}
