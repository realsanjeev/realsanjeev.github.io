
import React from 'react';
import { Button } from '@/components/ui/button';
import { FiFileText, FiLink } from 'react-icons/fi';

const Publications = () => {
  const publications = [
    {
      title: "Advances in Deep Learning for Computer Vision: A Comprehensive Survey",
      authors: "Sanjeev Bhandari, Co-Author A, Co-Author B",
      venue: "Conference on Computer Vision and Pattern Recognition (CVPR) 2023",
      type: "Conference Paper",
      abstract: "This paper presents a comprehensive survey of recent advances in deep learning architectures for computer vision tasks, highlighting breakthrough methods and future research directions.",
      links: {
        paper: "#",
        code: "#",
        demo: "#"
      }
    },
    {
      title: "Efficient Training of Large Language Models with Distributed Computing",
      authors: "Sanjeev Bhandari, Research Team",
      venue: "International Conference on Machine Learning (ICML) 2023",
      type: "Conference Paper",
      abstract: "We propose a novel distributed training framework that significantly reduces the computational overhead of training large language models while maintaining model performance.",
      links: {
        paper: "#",
        code: "#"
      }
    },
    {
      title: "Transfer Learning in Medical Image Analysis: Challenges and Opportunities",
      authors: "Sanjeev Bhandari, Medical AI Team",
      venue: "Journal of Machine Learning Research (JMLR) 2022",
      type: "Journal Article",
      abstract: "This work explores the application of transfer learning techniques in medical imaging, addressing domain adaptation challenges and presenting novel solutions for healthcare AI.",
      links: {
        paper: "#",
        supplement: "#"
      }
    }
  ];

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
