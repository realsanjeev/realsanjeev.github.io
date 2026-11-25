import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main id="main-content" className="grow">
        <Hero />
        <RevealOnScroll delay={100}>
          <About />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <Blog />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
