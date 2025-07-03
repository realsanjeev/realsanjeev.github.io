import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FiMail, } from 'react-icons/fi';
import { SiHuggingface } from 'react-icons/si';
import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, research collaborations, 
            or just chatting about the latest developments in AI and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FiMail className="h-5 w-5 text-blue-400 mr-3" />
                <a
                  href="mailto:075bei033.sanjeev@pcampus.edu.np"
                  className="underline text-blue-300 hover:text-blue-200"
                >
                  075bei033.sanjeev@pcampus.edu.np
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedinIn className="h-5 w-5 text-blue-400 mr-3" />
                <a
                  href="https://linkedin.com/in/realsanjeev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300 hover:text-blue-200"
                >
                  linkedin.com/in/realsanjeev
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="h-5 w-5 text-blue-400 mr-3" />
                <a
                  href="https://github.com/realsanjeev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300 hover:text-blue-200"
                >
                  github.com/realsanjeev
                </a>
              </div>
              <div className="flex items-center">
                <SiHuggingface className="h-5 w-5 text-blue-400 mr-3" />
                <a
                  href="https://huggingface.co/sanjeev-bhandari01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300 hover:text-blue-200"
                >
                  huggingface.co/sanjeev-bhandari01
                </a>
              </div>
              <div className="flex items-center">
                <FaXTwitter className="h-5 w-5 text-blue-400 mr-3" />
                <a
                  href="https://x.com/realsanjeev2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300 hover:text-blue-200"
                >
                  x.com/realsanjeev2
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Areas of Interest</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Research collaborations in AI/ML</li>
                <li>• Speaking opportunities at conferences</li>
                <li>• Consulting on ML projects</li>
                <li>• Open source contributions</li>
                <li>• Mentoring and knowledge sharing</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <Input 
                placeholder="Your Name" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Input 
                placeholder="Subject" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <textarea 
                placeholder="Your Message [Feature not implemented]. Please contact via LinkedIn or direct email"
                rows={6}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
