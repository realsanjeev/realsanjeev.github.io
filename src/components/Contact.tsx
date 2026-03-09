import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import { SiHuggingface } from 'react-icons/si';
import { FaGithub, FaXTwitter, FaLinkedinIn, FaMedium } from 'react-icons/fa6';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/realsanjeev',
      icon: FaLinkedinIn,
      color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      label: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/realsanjeev',
      icon: FaGithub,
      color: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
      label: 'View GitHub Profile'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/realsanjeev2',
      icon: FaXTwitter,
      color: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
      label: 'Follow on X'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@sanjeev-bhandari',
      icon: FaMedium,
      color: 'hover:bg-green-600 hover:text-white hover:border-green-600',
      label: 'Read on Medium'
    },
    {
      name: 'Hugging Face',
      url: 'https://huggingface.co/sanjeev-bhandari01',
      icon: SiHuggingface,
      color: 'hover:bg-yellow-500 hover:text-white hover:border-yellow-500',
      label: 'View Hugging Face Profile'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden" id="contact">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, research collaborations,
            or just chatting about the latest developments in AI and machine learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:075bei033.sanjeev@pcampus.edu.np"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-200 group"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                  <FiMail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-blue-400 group-hover:text-blue-300 transition-colors">075bei033.sanjeev@pcampus.edu.np</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-200">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* Social Links Grid */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Find Me Online</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-transparent ${social.color} transition-all duration-200 hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="text-xs font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h4 className="text-lg font-semibold mb-4">Open to</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Research collaborations in AI/ML
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Speaking opportunities at conferences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Consulting on ML projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Open source contributions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Mentoring and knowledge sharing
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input
                  placeholder="Project Collaboration"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 font-medium"
              >
                <FiSend className="mr-2 h-5 w-5" />
                Send Message
              </Button>

              <p className="text-xs text-gray-400 text-center">
                Note: This form is for demo purposes. Please contact me via LinkedIn or email for actual communication.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
