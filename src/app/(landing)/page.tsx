import { Cta } from "@/components/landing/cta";
import { EmailCapture } from "@/components/landing/email-capture";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Innovation } from "@/components/landing/innovation";
import { LibraryBanner } from "@/components/landing/library-banner";
import { Personas } from "@/components/landing/personas";
import { StatsBand } from "@/components/landing/stats-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <LibraryBanner />
      <StatsBand />
      <Personas />
      <EmailCapture />
      <Innovation />
      <Cta />
    </>
  );
}
