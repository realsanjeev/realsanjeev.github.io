import React from 'react';
import { Button } from '@/components/ui/button';
import { FiLink } from 'react-icons/fi';

const Blog = () => {
  const blogPosts = [
    {
      title: "Nepali Text Summarization",
      excerpt: "This project addresses the challenges of Nepali text summarization using transformer models like mBART, focusing on fine-tuning for linguistic accuracy and data scarcity.",
      date: "Feb 26, 2024",
      readTime: "7 min read",
      tags: ["Nepali NLP", "Transformer Models", "mBART", "Text Summarization", "Multilingual AI"],
      url: "https://medium.com/@sanjeev-bhandari/nepali-text-summarization-2df72a8a3080"
    },
    {
      title: "Model Merging: A new way of creating model",
      excerpt: "Explore innovative techniques like SLERP, TIES, and DARE to merge multiple language models into a single, efficient model without extensive retraining.",
      date: "Jul 6, 2024",
      readTime: "4 min read",
      tags: ["Model Merging", "SLERP", "TIES", "DARE", "Language Models", "AI Efficiency"],
      url: "https://medium.com/@sanjeev-bhandari/model-merging-a-new-way-of-creating-model-e62e6d14ef97"
    },
    {
      title: "🦀 Supercharge Python with Rust: Building Fast Python Extensions with PyO3 and Maturin",
      excerpt: "Learn how to enhance Python performance by building native extensions using Rust, PyO3, and Maturin, including benchmarking for performance gains.",
      date: "May 23, 2025",
      readTime: "3 min read",
      tags: ["Python", "Rust", "PyO3", "Maturin", "Performance Optimization", "Machine Learning"],
      url: "https://medium.com/@sanjeev-bhandari/supercharge-python-with-rust-building-fast-python-extensions-with-pyo3-and-maturin-da09306d97a8"
    },
    {
      title: "Creating the SnowFlake In C using recursive method with raylib",
      excerpt: "A step-by-step guide to drawing a recursive snowflake fractal in C using Raylib, covering setup, code implementation, and build automation.",
      date: "Nov 27, 2024",
      readTime: "4 min read",
      tags: ["C Programming", "Raylib", "Graphics Programming", "Fractals", "Recursive Algorithms"],
      url: "https://medium.com/@sanjeev-bhandari/creating-the-snowflake-in-c-using-raylib-07a0c4fa5e17"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog & Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights on machine learning, AI research, and the future of technology. 
            Follow my journey as I explore the cutting edge of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-smtext-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <FiLink className="mr-2 h-4 w-4" />
                    Read on Medium
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@sanjeev-bhandari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <FiLink className="mr-2 h-5 w-5" />
              Follow on Medium
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
