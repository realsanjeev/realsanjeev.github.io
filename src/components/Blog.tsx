import React from 'react';
import { Button } from '@/components/ui/button';
import { FiLink, FiCalendar, FiClock, FiArrowUpRight } from 'react-icons/fi';
import { BLOG_POSTS } from '@/data/portfolio';
import { FaMedium } from 'react-icons/fa6';

const Blog = () => {
  const blogPosts = BLOG_POSTS;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Blog & <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Sharing insights on machine learning, AI research, and the future of technology.
            Follow my journey as I explore the cutting edge of artificial intelligence.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Top Border */}
              <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-600" />
              
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar className="h-4 w-4 text-green-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiClock className="h-4 w-4 text-green-600" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-xs font-medium border border-green-100 hover:bg-green-100 transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read Button */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-200 group/btn"
                >
                  <FiLink className="mr-2 h-4 w-4" />
                  Read on Medium
                  <FiArrowUpRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@sanjeev-bhandari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <FaMedium className="mr-2 h-5 w-5" />
              Follow on Medium
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
