import type { Metadata } from "next";
import { DigitalMarketingAbout } from "@/components/digital-marketing/DigitalMarketingAbout";
import { DigitalMarketingFooter } from "@/components/digital-marketing/DigitalMarketingFooter";
import { DigitalMarketingHero } from "@/components/digital-marketing/DigitalMarketingHero";
import { DigitalMarketingNavbar } from "@/components/digital-marketing/DigitalMarketingNavbar";
import { DigitalMarketingServices } from "@/components/digital-marketing/DigitalMarketingServices";
import { DigitalMarketingStats } from "@/components/digital-marketing/DigitalMarketingStats";

export const metadata: Metadata = {
  title: "Digital Marketing — fusionstack",
  description:
    "We scale brands through strategic digital marketing. SEO, Google Ads, Meta Ads, and data-driven growth strategies.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingNavbar />
      <main>
        <DigitalMarketingHero />
        <DigitalMarketingStats />
        <DigitalMarketingAbout />
        <DigitalMarketingServices />
      </main>
      <DigitalMarketingFooter />
    </>
  );
}
