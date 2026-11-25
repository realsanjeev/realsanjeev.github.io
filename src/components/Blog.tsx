import { Button } from '@/components/ui/button';
import { FiCalendar, FiClock, FiArrowUpRight } from 'react-icons/fi';
import { BLOG_POSTS } from '@/data/portfolio';
import { FaMedium } from 'react-icons/fa6';

const Blog = () => {
  return (
    <section className="py-20 sm:py-28 bg-muted/35 dark:bg-muted/15 border-t border-border/60" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Technical Writing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Blog &amp; <span className="text-emerald-600 dark:text-emerald-400">Articles</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
            Deep dives into machine learning, model merging, Nepali NLP, and high-performance systems engineering
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Blog Post Image */}
              {post.image && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={`${post.title} featured image`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  {/* Medium Badge */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1.5 bg-card/90 backdrop-blur-md rounded-xl shadow-sm border border-border flex items-center gap-1.5">
                    <FaMedium className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span className="text-xs font-semibold text-foreground">Medium</span>
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col grow">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiClock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2.5 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed line-clamp-3 grow">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded-lg text-xs font-medium border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Button */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Read article "${post.title}" on Medium`}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-foreground bg-muted hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 rounded-xl transition-all duration-200 group/btn mt-auto"
                >
                  <span>Read Article on Medium</span>
                  <FiArrowUpRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@realsanjeev"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Sanjeev Bhandari (@realsanjeev) on Medium"
          >
            <Button size="lg">
              <FaMedium className="mr-2 h-5 w-5" aria-hidden="true" />
              Follow on Medium
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
