import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { blogData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

const blogCategories = ['All', ...new Set(blogData.map((b) => b.category))];

export default function Blog() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? blogData
    : blogData.filter((b) => b.category === active);

  return (
    <section id="blog" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Blog"
          title="Writing &amp; Thinking"
          description="Articles on frontend engineering, architecture decisions, and lessons learned from building software."
        />

        {/* Category filter */}
        <FadeIn className="mb-10">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  active === cat
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.06}>
              <article className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-gray-300 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
