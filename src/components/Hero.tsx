
import React from 'react';
import { Button } from '@/components/ui/button';
import { FiMail, FiDownload } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaMedium } from 'react-icons/fa6';
import { SiHuggingface } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Greeting Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
              <span className="text-sm font-medium text-gray-600">Available for opportunities</span>
            </div>

            {/* Name with Gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Sanjeev
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Bhandari
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-600 font-light">
                Machine Learning Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Driven by curiosity and a passion for innovation, I work at the intersection of{' '}
              <span className="font-semibold text-gray-900">artificial intelligence</span> and{' '}
              <span className="font-semibold text-gray-900">real-world impact</span>. 
              My mission is to harness the power of machine learning to develop transformative solutions 
              that create meaningful change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <FiMail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3.5 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <FiDownload className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-sm text-gray-500 mr-2">Find me on</span>
              <a
                href="https://linkedin.com/in/realsanjeev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-600 hover:text-white hover:bg-blue-600 bg-gray-100 hover:bg-blue-600 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/realsanjeev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-600 hover:text-white hover:bg-gray-900 bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/realsanjeev2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-600 hover:text-white hover:bg-gray-900 bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://medium.com/@sanjeev-bhandari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-600 hover:text-white hover:bg-green-600 bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaMedium className="h-5 w-5" />
              </a>
              <a
                href="https://huggingface.co/sanjeev-bhandari01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-600 hover:text-white hover:bg-yellow-500 bg-gray-100 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <SiHuggingface className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-200/50 scale-110" />
              <div className="absolute inset-0 rounded-full border border-indigo-200/30 scale-125" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src="hero-image.png"
                    alt="Sanjeev Bhandari"
                    className="w-full h-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 animate-bounce">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">💡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
