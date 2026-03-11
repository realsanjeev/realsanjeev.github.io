
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/constants';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  // Scroll spy to highlight active section using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible section (topmost one in viewport)
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const currentActive = `#${visibleSections[0].target.id}`;
          setActiveSection(currentActive);
        }
      },
      {
        rootMargin: '-20% 0px -35% 0px' // Triggers when element is in the upper portion of viewport
      }
    );

    const sectionIds = ['about', 'experience', 'projects', 'blog', 'contact'];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
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
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="group" aria-label="Home">
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              SB
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  activeSection === item.href
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-current={activeSection === item.href ? 'page' : undefined}
              >
                {item.name}
                <span
                  className={`absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 transition-transform duration-300 origin-left ${
                    activeSection === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 text-gray-700 hover:text-gray-900 rounded-lg transition-all duration-200 hover:bg-gray-100 ${social.color}`}
                aria-label={social.ariaLabel}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="ml-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 h-10 w-10 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {/* Animated Hamburger Icon */}
            <div className="w-5 h-5 relative">
              <span
                className={`absolute h-0.5 w-5 bg-gray-600 rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 top-2' : 'top-0.5'
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-gray-600 rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100 top-2'
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-gray-600 rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 top-2' : 'top-3.5'
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                    activeSection === item.href
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  aria-current={activeSection === item.href ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-3 px-4 pt-4 border-t border-gray-100 mt-4">
                {SOCIAL_LINKS.slice(0, 3).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-700 hover:text-gray-900 transition-colors hover:bg-gray-100 rounded-lg ${social.color}`}
                    aria-label={social.ariaLabel}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
