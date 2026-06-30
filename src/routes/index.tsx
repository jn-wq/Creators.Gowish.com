import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { Benefits } from "@/components/site/Benefits";
import { PlatformStats } from "@/components/site/PlatformStats";
import { GetStarted } from "@/components/site/GetStarted";
import { Comparison } from "@/components/site/Comparison";
import { CTA } from "@/components/site/CTA";
import { CreatorReels } from "@/components/site/CreatorReels";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ønskeskyen Creator Universe — Skab, Tjen & Promovér" },
      {
        name: "description",
        content:
          "Bliv creator på Ønskeskyen. 75.000+ partnershops, ingen venteliste, permanent udbetaling. Creator Takeover 2026 er nu åben.",
      },
      { property: "og:title", content: "Ønskeskyen Creator Universe" },
      {
        property: "og:description",
        content: "Skab, tjen og promovér på Ønskeskyen. Beta 1.0 er live.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen pt-4">
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Benefits />
        <PlatformStats />
        <CreatorReels />
        <GetStarted />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
