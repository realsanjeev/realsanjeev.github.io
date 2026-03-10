import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sanjeev Bhandari | Machine Learning Engineer</title>
        <meta name="description" content="Portfolio of Sanjeev Bhandari (@realsanjeev), a Machine Learning Engineer specializing in Computer Vision, NLP, and LLMs." />
        <meta name="keywords" content="Sanjeev Bhandari, Machine Learning Engineer, Computer Vision, NLP, Deep Learning, AI, Portfolio, Developer" />
        <meta name="author" content="Sanjeev Bhandari" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://realsanjeev.github.io" />
        
        <meta property="og:title" content="Sanjeev Bhandari - Portfolio" />
        <meta property="og:description" content="Machine Learning Engineer specializing in AI and real-world impact. Explore my projects and experience." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/45820805?v=4" />
        <meta property="og:url" content="https://realsanjeev.github.io" />
        <meta property="og:site_name" content="Sanjeev Bhandari" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@realsanjeev2" />
        <meta name="twitter:creator" content="@realsanjeev2" />
        <meta name="twitter:title" content="Sanjeev Bhandari - Portfolio" />
        <meta name="twitter:description" content="Portfolio of Sanjeev Bhandari, ML Engineer." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/45820805?v=4" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sanjeev Bhandari",
              "alternateName": "realsanjeev",
              "url": "https://realsanjeev.github.io",
              "image": "https://avatars.githubusercontent.com/u/45820805?v=4",
              "jobTitle": "Machine Learning Engineer",
              "sameAs": [
                "https://linkedin.com/in/realsanjeev",
                "https://github.com/realsanjeev",
                "https://x.com/realsanjeev2",
                "https://medium.com/@sanjeev-bhandari",
                "https://huggingface.co/sanjeev-bhandari01",
                "https://bhandarisanjeev.com.np",
                "https://bhandarisanjeeev.com.np"
              ],
              "knowsAbout": [
                "Machine Learning",
                "Deep Learning",
                "Artificial Intelligence"
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Bachelor's Degree",
                "name": "Electronics and Information Engineering",
                "recognizedBy": {
                  "@type": "GovernmentOrganization",
                  "name": "Nepal Engineering Council (NEC)",
                  "url": "https://nec.gov.np"
                }
              },
              "worksFor": {
                "@type": "Organization",
                "name": "TAI Inc."
              }
            })
          }}
        />
      </Helmet>
      <Navigation />
      <main id="main-content">
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
