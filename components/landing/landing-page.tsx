import dynamic from "next/dynamic";
import { HeroSection } from "./hero-section";
import { MobileBottomCta } from "./mobile-bottom-cta";
import { Reveal } from "./motion";

const AppExperienceSection = dynamic(() => import("./app-experience-section").then((m) => m.AppExperienceSection));
const AppDownloadSection = dynamic(() => import("./app-download-section").then((m) => m.AppDownloadSection));
const CheapestRatesSection = dynamic(() => import("./cheapest-rates-section").then((m) => m.CheapestRatesSection));
const ComparisonSection = dynamic(() => import("./comparison-section").then((m) => m.ComparisonSection));
const CitiesSection = dynamic(() => import("./cities-section").then((m) => m.CitiesSection));
const DriverPreferencesSection = dynamic(() => import("./driver-preferences-section").then((m) => m.DriverPreferencesSection));
const FleetSection = dynamic(() => import("./fleet-section").then((m) => m.FleetSection));
const FaqSection = dynamic(() => import("./faq-section").then((m) => m.FaqSection));
const FooterSection = dynamic(() => import("./footer-section").then((m) => m.FooterSection));
const HowItWorksSection = dynamic(() => import("./how-it-works-section").then((m) => m.HowItWorksSection));
const LanguageSection = dynamic(() => import("./language-section").then((m) => m.LanguageSection));
const TestimonialsSection = dynamic(() => import("./testimonials-section").then((m) => m.TestimonialsSection));
// const TravelSolutionsSection = dynamic(() => import("./travel-solutions-section").then((m) => m.TravelSolutionsSection));

export function LandingPage() {
  return (
    <main className="landing-shell overflow-x-hidden pb-24 md:pb-0">
      <HeroSection />
      <Reveal delayMs={40}>
        <ComparisonSection />
      </Reveal>
      {/* <Reveal delayMs={40}>
        <TravelSolutionsSection />
      </Reveal> */}
      <Reveal delayMs={40}>
        <FleetSection />
      </Reveal>
      <Reveal delayMs={40}>
        <LanguageSection />
      </Reveal>
      <Reveal delayMs={40}>
        <DriverPreferencesSection />
      </Reveal>
      <Reveal delayMs={40}>
        <CheapestRatesSection />
      </Reveal>
      <Reveal delayMs={40}>
        <HowItWorksSection />
      </Reveal>
      {/* <Reveal delayMs={40}>
        <HowItWorksSectionOld />
      </Reveal> */}
      <Reveal delayMs={40}>
        <CitiesSection />
      </Reveal>
      <Reveal delayMs={40}>
        <AppExperienceSection />
      </Reveal>
      <Reveal delayMs={40}>
        <AppDownloadSection />
      </Reveal>
      <Reveal delayMs={40}>
        <FaqSection />
      </Reveal>
      <Reveal delayMs={40}>
        <TestimonialsSection />
      </Reveal>
      <Reveal className="relative z-10" delayMs={20}>
        <FooterSection />
      </Reveal>
      <MobileBottomCta />
    </main>
  );
}
