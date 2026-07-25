import { FiMail, FiDownload } from 'react-icons/fi';
import { SOCIAL_LINKS } from '@/constants';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col lg:flex-row lg:items-center lg:justify-center bg-gradient-to-br from-background via-muted to-accent/20 overflow-hidden pt-32 sm:pt-40 pb-16 lg:pt-32 lg:pb-16">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-12 pb-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
              </div>
              <a
                href="https://bhandarisanjeev.com.np/QuickTools/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/20 rounded-full shadow-sm transition-all duration-200 group"
                title="QuickTools: An interactive suite of web utility and productivity tools for developers"
              >
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Try QuickTools (Developer Web App)</span>
                <span className="ml-1.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* Name with Gradient (Removed bg-clip-text due to Samsung Internet Dark Mode bugs) */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                <span className="text-foreground pb-2 block sm:inline-block sm:mr-3">
                  Sanjeev
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 pb-2 block sm:inline-block">
                  Bhandari
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
                Machine Learning Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I build things that see, read, and understand —{' '}
              <span className="font-semibold text-foreground">computer vision</span> systems for
              document verification,{' '}
              <span className="font-semibold text-foreground">LLM-powered</span> apps for education,
              and{' '}
              <span className="font-semibold text-foreground">Nepali NLP</span> tools.
              My work is backed by robust{' '}
              <span className="font-semibold text-foreground">Python backend</span> API services, Docker configurations, and graph databases.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center px-6 py-3.5 text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <FiMail className="mr-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                Get in Touch
              </a>
              <a
                href="/Sanjeev_Bhandari_CV.pdf"
                download="Sanjeev_Bhandari_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3.5 text-base font-medium text-foreground bg-card hover:bg-accent border border-border hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <FiDownload className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4" role="list" aria-label="Social media profiles">
              <span className="text-sm text-muted-foreground font-medium mr-2">Find me on</span>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-accent/50 rounded-lg transition-all duration-200 hover:-translate-y-0.5 group ${social.color}`}
                  aria-label={social.ariaLabel}
                  title={social.ariaLabel}
                  role="listitem"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-inherit" />
                </a>
              ))}
            </div>

            {/* Open to Collaboration */}
            <div className="pt-6 border-t border-border/60">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-3">Open to Collaboration</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI/ML Research",
                  "Speaking at Conferences",
                  "ML Consulting",
                  "Open Source Contributions",
                  "Mentoring & Knowledge Sharing"
                ].map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 bg-emerald-500/10 dark:bg-emerald-400/5 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-lg border border-emerald-500/20 dark:border-emerald-500/10 hover:shadow-sm hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-secondary/30 scale-125" />

              {/* Main image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl bg-gradient-to-br from-muted to-secondary">
                  <img
                    src="/hero-image.webp"
                    alt="Sanjeev Bhandari"
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

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
