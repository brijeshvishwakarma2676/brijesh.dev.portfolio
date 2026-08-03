import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Search, X, SearchX } from 'lucide-react';
import { projectsData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

const categories = ['All', 'Premium Multipage', 'SaaS', 'React Apps', 'Websites', 'Quick Demo'];

function buildHaystack(project) {
  return [
    project.title,
    project.category,
    project.description,
    ...(project.techStack || []),
    ...(project.keywords || []),
  ]
    .join(' ')
    .toLowerCase();
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  // Domain-aware search: every word of the query must match the title,
  // category, description, tech stack, or keywords (e.g. "gym", "yoga").
  const searched = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return projectsData;
    return projectsData.filter((p) => {
      const haystack = buildHaystack(p);
      return tokens.every((token) => haystack.includes(token));
    });
  }, [query]);

  const countFor = (cat) =>
    cat === 'All' ? searched.length : searched.filter((p) => p.category === cat).length;

  const filtered = active === 'All'
    ? searched
    : searched.filter((p) => p.category === active);

  const clearFilters = () => {
    setQuery('');
    setActive('All');
  };

  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          description="A selection of recent projects showcasing different types of work — from marketing websites to full-stack applications."
        />

        {/* Search + filter chips */}
        <FadeIn className="mb-10">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count = countFor(cat);
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm rounded-full border transition-colors ${
                      isActive
                        ? 'border-transparent text-white dark:text-gray-900 font-medium'
                        : `border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-gray-200 ${
                            count === 0 ? 'opacity-40' : ''
                          }`
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="project-filter-pill"
                        className="absolute inset-0 rounded-full bg-gray-900 dark:bg-white"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                    <span
                      className={`relative z-10 text-xs tabular-nums ${
                        isActive ? 'text-gray-400 dark:text-gray-500' : 'text-gray-400 dark:text-gray-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative sm:w-72 flex-shrink-0">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: gym, healthcare, ecommerce..."
                aria-label="Search projects"
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg outline-none text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 transition-all"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Result count when searching */}
          {query.trim() && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} found for{' '}
              <span className="font-medium text-gray-900 dark:text-white">"{query.trim()}"</span>
            </p>
          )}
        </FadeIn>

        {/* Empty state */}
        {filtered.length === 0 && (
          <FadeIn>
            <div className="py-20 text-center border border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                <SearchX size={22} className="text-gray-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                No projects found
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                Nothing matches your search in this category. Try a different keyword like
                "gym", "healthcare", or "ecommerce".
              </p>
              <button
                onClick={clearFilters}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Clear search & filters
              </button>
            </div>
          </FadeIn>
        )}

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <div className="group h-full border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300">
                {/* Browser mockup header */}
                <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 h-5 bg-gray-200 dark:bg-gray-700/60 rounded mx-8 flex items-center px-3 overflow-hidden">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono truncate">
                        {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Colored content area */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: project.color + '08' }}
                >
                  {/* Fallback Background */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, ${project.color}40 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${project.color}20 0%, transparent 50%)`,
                    }}
                  />
                  <span
                    className="text-5xl font-bold opacity-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: project.color }}
                  >
                    {project.title.split(' ')[0]}
                  </span>

                  {/* Image Overlay */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 z-10 bg-white dark:bg-gray-900"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <div className="flex items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                          aria-label={`Open live demo of ${project.title}`}
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View all CTA */}
        <FadeIn className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Have a project in mind? Let&apos;s talk
            <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
