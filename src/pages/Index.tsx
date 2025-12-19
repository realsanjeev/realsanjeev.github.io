import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>
      <div id="about">
        <RevealOnScroll delay={100}>
          <About />
        </RevealOnScroll>
      </div>
      <div id="experience">
        <RevealOnScroll delay={100}>
          <Experience />
        </RevealOnScroll>
      </div>
      <div id="projects">
        <RevealOnScroll delay={100}>
          <Projects />
        </RevealOnScroll>
      </div>
      {/* <div id="publications">
        <RevealOnScroll delay={100}>
          <Publications />
        </RevealOnScroll>
      </div> */}
      <div id="blog">
        <RevealOnScroll delay={100}>
          <Blog />
        </RevealOnScroll>
      </div>
      <div id="contact">
        <RevealOnScroll delay={100}>
          <Contact />
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Index;
