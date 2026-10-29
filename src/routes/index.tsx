import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";

const BelowFold = lazy(() => import("@/components/portfolio/BelowFold"));

const title = "Gaurav Balade — Computer Engineering Student & Full-Stack Developer";
const description =
  "Portfolio of Gaurav Balade, B.E. Computer Engineering student at DMCE building web apps with React, Spring Boot, REST APIs and SQL databases.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
          <BelowFold />
        </Suspense>
      </main>
    </>
  );
}
