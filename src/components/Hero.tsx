
import React from 'react';
import { Button } from '@/components/ui/button';
import { FiMail } from 'react-icons/fi';

// You can swap this placeholder filename for any other from the provided placeholder list.
const heroImageUrl =
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80"; // Stylish laptop workspace image

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center pt-24 pb-14">
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <img
              src={heroImageUrl}
              alt="Modern workspace"
              className="rounded-xl shadow-xl object-cover w-full max-w-4xl h-64 sm:h-80 border-2 border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight font-serif">
          Sanjeev Bhandari
        </h1>
        <h2 className="text-2xl text-gray-600 mb-8 font-light italic">
          Machine Learning Engineer
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Driven by curiosity and a passion for innovation, I work at the intersection of artificial intelligence and real-world impact. My mission is to harness the power of machine learning to develop transformative solutions that create meaningful change and contribute to a better world.
        </p>
        <div className="flex justify-center">
          <a
              href="https://www.linkedin.com/in/realsanjeev"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full tracking-wide text-base shadow-xs transition-all duration-200"
            >
              <FiMail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
