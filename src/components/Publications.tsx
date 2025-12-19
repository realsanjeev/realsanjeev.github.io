import React from 'react';
import { Button } from '@/components/ui/button';
import { FiFileText, FiLink } from 'react-icons/fi';
import { PUBLICATIONS } from '@/data/portfolio';

const Publications = () => {
  const publications = PUBLICATIONS;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Publications</h2>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-8 pb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{pub.authors}</p>
                  <p className="text-blue-600 font-medium mb-1">{pub.venue}</p>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {pub.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{pub.abstract}</p>

              <div className="flex flex-wrap gap-3">
                {Object.entries(pub.links).map(([type, url]) => (
                  <Button
                    key={type}
                    variant="outline"
                    size="sm"
                    className="capitalize"
                  >
                    {type === 'paper' ? <FiFileText className="mr-2 h-4 w-4" /> : <FiLink className="mr-2 h-4 w-4" />}
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <FiFileText className="mr-2 h-5 w-5" />
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
