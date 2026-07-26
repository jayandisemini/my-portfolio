import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Particles } from "@/components/layout/Particles";
import { BackToTop } from "@/components/layout/BackToTop";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Jayandi Semini | Software Developer Portfolio";
    const description =
      "Computer Science Undergraduate at NSBM Green University passionate about software development, web technologies, mobile applications, and UI/UX design.";
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jayandi Semini",
      jobTitle: "Computer Science Undergraduate",
      description,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "NSBM Green University",
      },
      knowsAbout: [
        "Software Development",
        "Web Development",
        "Mobile Application Development",
        "UI/UX Design",
        "Cloud Computing",
      ],
      sameAs: ["https://www.linkedin.com/in/jayandi-semini-b6723a326", "https://github.com/"],
    };
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "Jayandi Semini, Software Developer, Portfolio, Computer Science, NSBM, Full-Stack Developer, UI/UX Designer, Web Development, Mobile Apps, Cloud Computing",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(personSchema),
        },
      ],
    };
  },
  component: Portfolio,
});

function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <>
          <Particles />
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <GitHubStats />
            <Education />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}
