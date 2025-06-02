import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Publications from '@/components/Publications';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* <div id="publications">
        <Publications />
      </div> */}
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
