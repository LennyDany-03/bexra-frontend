import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import FounderTrack from "@/components/FounderTrack";
import Enterprise from "@/components/Enterprise";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Faq from "@/components/Faq";
import SiteFooter from "@/components/SiteFooter";

/** Waitlist figure shown in the hero and the About stat row. */
const WAITLIST_COUNT = 300;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero waitlistCount={WAITLIST_COUNT} />
        <HowItWorks />
        <Products />
        <FounderTrack />
        <Enterprise />
        <Pricing />
        <About waitlistCount={WAITLIST_COUNT} />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
