import React from 'react';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaMedium } from 'react-icons/fa6';
import { SiHuggingface } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                SB
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-sm font-medium text-gray-300">Sanjeev Bhandari</span>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/realsanjeev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-blue-600 bg-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/realsanjeev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-gray-700 bg-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/realsanjeev2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-gray-700 bg-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Twitter/X"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://medium.com/@sanjeev-bhandari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-green-600 bg-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Medium"
            >
              <FaMedium className="h-5 w-5" />
            </a>
            <a
              href="https://huggingface.co/sanjeev-bhandari01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-yellow-500 bg-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Hugging Face"
            >
              <SiHuggingface className="h-5 w-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-gray-500">
            Built with React, TypeScript, and Tailwind CSS • Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
