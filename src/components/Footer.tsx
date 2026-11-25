import { SOCIAL_LINKS } from '@/constants';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/80 py-12 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-600 text-white font-bold text-sm shadow-xs">
              SB
            </span>
            <div>
              <span className="font-bold text-base text-foreground block leading-none">
                Sanjeev Bhandari
              </span>
              <span className="text-xs text-muted-foreground mt-1 block">
                Machine Learning Engineer • Computer Vision &amp; NLP
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Blog
            </a>
            <a
              href="https://bhandarisanjeev.com.np/QuickTools/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              QuickTools
              <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                title={social.ariaLabel}
                className={`p-2 text-muted-foreground rounded-xl border border-transparent hover:border-border transition-all duration-200 ${social.color}`}
              >
                <social.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Sanjeev Bhandari (@realsanjeev). All rights reserved.</p>
          <a href="#hero" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
