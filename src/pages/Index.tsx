import React, { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

// Lazy loading heavy components
const About = React.lazy(() => import('@/components/About'));
const Experience = React.lazy(() => import('@/components/Experience'));
const Projects = React.lazy(() => import('@/components/Projects'));
const Blog = React.lazy(() => import('@/components/Blog'));
const Contact = React.lazy(() => import('@/components/Contact'));

// Fallback skeleton loader
const Loader = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-8 h-8 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<Loader />}>
          <RevealOnScroll delay={100}>
            <About />
          </RevealOnScroll>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <RevealOnScroll delay={100}>
            <Experience />
          </RevealOnScroll>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <RevealOnScroll delay={100}>
            <Projects />
          </RevealOnScroll>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <RevealOnScroll delay={100}>
            <Blog />
          </RevealOnScroll>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <RevealOnScroll delay={100}>
            <Contact />
          </RevealOnScroll>
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
