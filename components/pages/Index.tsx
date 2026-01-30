"use client";

import { useEffect } from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import AboutMe from "@/components/shared/AboutMe";
import Projects from "@/components/shared/Projects";
import TechStack from "@/components/shared/TechStack";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import AnimatedBackground from "@/components/shared/AnimatedBackground";

const Index = () => {
  useEffect(() => {
    // Terminal animation effect
    const messages = [
      "> Welcome to my portfolio!",
      "> npm install portfolio-dependencies",
      "> Installing packages: react, next, node, tailwind...",
      "> Adding 3+ years of development experience...",
      "> Bundling skills and projects...",
      "> Optimizing for performance and security...",
      "> Portfolio ready! 🚀",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        console.log(
          "%c" + messages[i],
          "color: #64ffda; font-family: monospace; font-size: 14px;"
        );
        i++;
      } else {
        clearInterval(interval);
        console.log(
          "%c👋 Thanks for checking out my portfolio! Feel free to explore my projects and get in touch!",
          "color: white; background: #0a192f; font-family: monospace; font-size: 14px; padding: 8px;"
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-space-blue relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
