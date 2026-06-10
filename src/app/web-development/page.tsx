import type { Metadata } from "next";
import { WebDevelopmentAbout } from "@/components/web-development/WebDevelopmentAbout";
import { WebDevelopmentCta } from "@/components/web-development/WebDevelopmentCta";
import { WebDevelopmentFooter } from "@/components/web-development/WebDevelopmentFooter";
import { WebDevelopmentHero } from "@/components/web-development/WebDevelopmentHero";
import { WebDevelopmentNavbar } from "@/components/web-development/WebDevelopmentNavbar";
import { WebDevelopmentProjects } from "@/components/web-development/WebDevelopmentProjects";
import { WebDevelopmentServices } from "@/components/web-development/WebDevelopmentServices";
import { WebDevelopmentStats } from "@/components/web-development/WebDevelopmentStats";

export const metadata: Metadata = {
  title: "Web Development — fusionstack",
  description:
    "We build modern web experiences. Fast, scalable SaaS platforms, business websites, and e-commerce stores.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <WebDevelopmentNavbar />
      <main>
        <WebDevelopmentHero />
        <WebDevelopmentStats />
        <WebDevelopmentAbout />
        <WebDevelopmentServices />
        <WebDevelopmentProjects />
        <WebDevelopmentCta />
      </main>
      <WebDevelopmentFooter />
    </>
  );
}
