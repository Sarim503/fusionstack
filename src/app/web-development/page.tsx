import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { WebDevelopmentHero } from "@/components/web-development/WebDevelopmentHero";
import { WebDevelopmentNavbar } from "@/components/web-development/WebDevelopmentNavbar";
import { WebDevelopmentProjects } from "@/components/web-development/WebDevelopmentProjects";

export const metadata: Metadata = {
  title: "Web Development — fusionstack",
  description:
    "Fast, scalable, and user-focused web experiences. SaaS platforms, business websites, and e-commerce stores.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <WebDevelopmentNavbar />
      <main>
        <WebDevelopmentHero />
        <WebDevelopmentProjects />
      </main>
      <Footer />
    </>
  );
}
