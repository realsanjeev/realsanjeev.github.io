
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Publications', href: '#publications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-gray-900">
            Sanjeev Bhandari
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
