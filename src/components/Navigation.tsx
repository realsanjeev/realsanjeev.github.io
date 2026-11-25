import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { SOCIAL_LINKS } from '@/constants';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
];

const sectionIds = ['hero', 'about', 'experience', 'projects', 'blog', 'contact'];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'hero') {
            setActiveSection('');
          } else {
            setActiveSection(`#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveSection(href === '#hero' ? '' : href);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full bg-background/85 backdrop-blur-xl border-b border-border/80 z-50 transition-colors"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick('#hero')}
            className="group inline-flex items-center gap-2.5 focus-visible:rounded-xl"
            aria-label="Sanjeev Bhandari Home"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-600 text-white font-bold text-sm tracking-tight shadow-sm group-hover:shadow-md transition-shadow">
              SB
            </span>
            <span className="font-bold text-base sm:text-lg tracking-tight text-foreground">
              Sanjeev<span className="text-emerald-600 dark:text-emerald-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-muted/60 dark:bg-muted/40 p-1 rounded-xl border border-border/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-card text-emerald-600 dark:text-emerald-400 shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Theme Toggle & Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-1.5">
            <ModeToggle />
            <div className="h-5 w-px bg-border mx-1" aria-hidden="true" />
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-200 hover:bg-accent ${social.color}`}
                aria-label={social.ariaLabel}
                title={social.ariaLabel}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-1.5">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 relative flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-5 relative" aria-hidden="true">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 top-2.25' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100 top-2.25'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 top-2.25' : 'top-3.5'
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-5 border-t border-border animate-in slide-in-from-top-2 duration-200 max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <div className="space-y-1.5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-4 py-3 rounded-xl transition-colors font-medium ${
                    activeSection === item.href
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  aria-current={activeSection === item.href ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-3 border-t border-border flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.slice(0, 4).map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 text-muted-foreground hover:text-foreground transition-colors hover:bg-accent rounded-xl ${social.color}`}
                      aria-label={social.ariaLabel}
                      title={social.ariaLabel}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl shadow-sm"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
