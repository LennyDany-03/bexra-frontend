import AuditPreview from "./AuditPreview";
import Button from "./ui/Button";
import { Container } from "./ui/Section";

export default function Hero({ waitlistCount = 300 }) {
  return (
    <section id="top">
      <Container className="grid grid-cols-1 items-start gap-14 pt-16 pb-20 md:pt-20 md:pb-22 lg:grid-cols-[minmax(320px,1fr)_minmax(420px,1.15fr)]">
        <div>
          <span className="inline-flex h-[30px] items-center gap-2 rounded-full border border-muted/35 px-3.5 text-xs font-medium text-muted">
            <span className="size-1.5 rounded-full bg-brand" />
            AI operating system for founders
          </span>

          <h1 className="mt-[22px] font-display text-[40px] leading-[1.02] font-bold tracking-[-0.035em] text-pretty sm:text-5xl lg:text-[60px]">
            Stop revenue leaks before they scale
          </h1>

          <p className="mt-5 max-w-[30em] text-[17px] leading-[1.55] text-pretty text-muted">
            Bexra audits your sales, ops and finance data, puts a rupee figure
            on every leak it finds, and hands you a prioritised roadmap to close
            them.
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3">
            <Button href="/register">Run my first audit</Button>
            <Button href="/#how" variant="outline">
              See how it works
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5 text-[13px] text-muted">
            <span className="tnum font-mono font-medium text-ink">
              {waitlistCount.toLocaleString("en-IN")}+
            </span>
            <span>
              founders on the waitlist · Live product, not a Notion doc
            </span>
          </div>
        </div>

        <AuditPreview />
      </Container>
    </section>
  );
}
