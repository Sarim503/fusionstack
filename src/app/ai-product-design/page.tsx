import type { Metadata } from "next";
import { AiProductDesignAbout } from "@/components/ai-product-design/AiProductDesignAbout";
import { AiProductDesignCta } from "@/components/ai-product-design/AiProductDesignCta";
import { AiProductDesignFooter } from "@/components/ai-product-design/AiProductDesignFooter";
import { AiProductDesignHero } from "@/components/ai-product-design/AiProductDesignHero";
import { AiProductDesignNavbar } from "@/components/ai-product-design/AiProductDesignNavbar";
import { AiProductDesignProjects } from "@/components/ai-product-design/AiProductDesignProjects";
import { AiProductDesignTools } from "@/components/ai-product-design/AiProductDesignTools";

export const metadata: Metadata = {
  title: "AI Powered Product Design — fusionstack",
  description:
    "Designing intelligent, engaging product experiences powered by AI. UI/UX design, 3D & motion, and design systems.",
};

export default function AiProductDesignPage() {
  return (
    <>
      <AiProductDesignNavbar />
      <main>
        <AiProductDesignHero />
        <AiProductDesignTools />
        <AiProductDesignAbout />
        <AiProductDesignProjects />
        <AiProductDesignCta />
      </main>
      <AiProductDesignFooter />
    </>
  );
}
