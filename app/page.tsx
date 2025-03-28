"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null!);
const skillsRef = useRef<HTMLElement>(null!);
const projectsRef = useRef<HTMLElement>(null!);
const contactRef = useRef<HTMLElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <main className="flex-1">
        <Hero scrollToSection={scrollToSection} projectsRef={projectsRef} contactRef={contactRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}