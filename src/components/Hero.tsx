import { FiMail, FiDownload, FiCpu, FiLayers, FiGlobe, FiServer } from 'react-icons/fi';
import { SOCIAL_LINKS } from '@/constants';

const FOCUS_PILLARS = [
  { icon: FiCpu, label: 'Computer Vision & OCR' },
  { icon: FiLayers, label: 'RAG & Agentic LLMs' },
  { icon: FiGlobe, label: 'Nepali NLP & PEFT' },
  { icon: FiServer, label: 'FastAPI & Graph DBs' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col lg:flex-row lg:items-center lg:justify-center bg-gradient-to-b from-background via-background to-muted/40 overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-36 -right-36 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/12 rounded-full blur-3xl" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center px-3.5 py-1.5 bg-card/90 backdrop-blur-sm border border-border rounded-full shadow-xs">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2" />
                <span className="text-xs sm:text-sm font-medium text-foreground/85">
                  Available for opportunities
                </span>
              </div>
              <a
                href="https://bhandarisanjeev.com.np/QuickTools/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/18 backdrop-blur-sm border border-emerald-500/25 rounded-full shadow-xs transition-all duration-200 group"
                title="QuickTools: An interactive suite of web utility and productivity tools for developers"
              >
                <span className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Try QuickTools Suite
                </span>
                <span
                  className="ml-1.5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>

            {/* Name & Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.08]">
                <span className="text-foreground block sm:inline-block sm:mr-3">
                  Sanjeev
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 block sm:inline-block">
                  Bhandari
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-[1.75rem] text-foreground/90 font-semibold tracking-tight">
                Machine Learning Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I engineer production AI systems that see, read, and reason — from{' '}
              <span className="font-semibold text-foreground">computer vision</span> pipelines for
              document verification to{' '}
              <span className="font-semibold text-foreground">RAG &amp; LLM-powered</span> platforms
              and{' '}
              <span className="font-semibold text-foreground">Nepali NLP</span> tooling, backed by
              scalable{' '}
              <span className="font-semibold text-foreground">FastAPI</span> microservices, Docker,
              and graph databases.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-1">
              <a
                href="#contact"
                className="group inline-flex items-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <FiMail className="mr-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                Get in Touch
              </a>
              <a
                href="/Sanjeev_Bhandari_CV.pdf"
                download="Sanjeev_Bhandari_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3.5 text-sm sm:text-base font-semibold text-foreground bg-card hover:bg-emerald-500/10 border border-border hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <FiDownload className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2" role="list" aria-label="Social media profiles">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
                Connect
              </span>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-card border border-border/80 rounded-xl shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30 group ${social.color}`}
                  aria-label={social.ariaLabel}
                  title={social.ariaLabel}
                  role="listitem"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-inherit" />
                </a>
              ))}
            </div>

            {/* Core Technical Pillars */}
            <div className="pt-6 border-t border-border/70">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-3">
                Core Specialties
              </span>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
                {FOCUS_PILLARS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-card/80 text-foreground/90 text-xs font-medium rounded-xl border border-border shadow-2xs"
                  >
                    <Icon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 scale-108 pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 scale-118 pointer-events-none" aria-hidden="true" />

              {/* Main image container */}
              <div className="relative w-60 h-60 sm:w-76 sm:h-76 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl" aria-hidden="true" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl bg-muted">
                  <img
                    src="/hero-image.webp"
                    alt="Sanjeev Bhandari - Machine Learning Engineer"
                    className="w-full h-full object-cover"
                    draggable={false}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
