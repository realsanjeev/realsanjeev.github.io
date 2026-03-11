import React from 'react';
import { Button } from '@/components/ui/button';
import { FiLink, FiCalendar, FiClock, FiArrowUpRight } from 'react-icons/fi';
import { BLOG_POSTS } from '@/data/portfolio';
import { FaMedium } from 'react-icons/fa6';

const Blog = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Blog & <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Sharing insights on machine learning, AI research, and the future of technology.
            Follow my journey as I explore the cutting edge of artificial intelligence.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Blog Post Image */}
              {post.image && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={`${post.title} featured image`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Medium Badge */}
                  <div className="absolute top-4 right-4 p-2 bg-card/90 backdrop-blur-sm rounded-lg shadow-md border border-border">
                    <FaMedium className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar className="h-4 w-4 text-emerald-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiClock className="h-4 w-4 text-emerald-600" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-default"
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
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-foreground bg-muted hover:bg-foreground hover:text-background rounded-xl transition-all duration-200 group/btn"
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
            <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
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
