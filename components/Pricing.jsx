import Section, { SectionLabel, SectionTitle } from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";

const PLANS = [
  {
    name: "Free Tier",
    price: "₹0",
    period: "forever",
    features: ["View-only sample roadmaps"],
    cta: "Browse samples",
    variant: "outline",
  },
  {
    name: "Starter OS",
    price: "₹499",
    period: "one-time",
    badge: "Recommended",
    features: [
      "1 generation credit",
      "Side-hustle diagnostic",
      "Structured roadmap",
      "Task board",
      "24/7 AI chatbot guide",
    ],
    cta: "Get Starter OS",
    variant: "primary",
  },
  {
    name: "Pro Auditor",
    price: "₹699",
    period: "/ 30 days",
    features: [
      "Unlimited credits",
      "Deep audits",
      "Revenue leak identification",
      "Unlimited ventures",
      "Custom SOPs",
      "Priority processing",
    ],
    cta: "Go Pro",
    variant: "outline",
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" divider="none">
      <SectionLabel>Pricing</SectionLabel>
      <SectionTitle>One-time or monthly. No sales call.</SectionTitle>

      {/* Cards stretch to a shared height so the CTAs line up. */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col gap-5 px-[26px] py-7 ${
              plan.badge ? "border-brand" : ""
            }`}
          >
            <div>
              <div className="mb-2.5 flex items-center justify-between gap-3">
                <h3 className="font-display text-[19px] font-bold tracking-[-0.02em]">
                  {plan.name}
                </h3>
                {plan.badge && (
                  <span className="inline-flex h-[22px] items-center rounded-[5px] bg-brand px-2.5 text-[11px] font-semibold text-white">
                    {plan.badge}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="tnum font-mono text-[34px] font-medium tracking-[-0.03em]">
                  {plan.price}
                </span>
                <span className="tnum font-mono text-[13px] text-muted">
                  {plan.period}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-sm leading-[1.45] text-muted"
                >
                  <span aria-hidden="true" className="text-brand">
                    ↳
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href="/register"
              variant={plan.variant}
              size="full"
              className="mt-auto"
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
