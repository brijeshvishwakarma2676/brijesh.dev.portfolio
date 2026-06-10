import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

const categories = ['All', 'Premium Multipage', 'SaaS', 'React Apps', 'Websites', 'Quick Demo'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === active);

  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          description="A selection of recent projects showcasing different types of work — from marketing websites to full-stack applications."
        />

        {/* Filter tabs */}
        <FadeIn className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  active === cat
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <div className="group border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
                {/* Browser mockup header */}
                <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                  </div>
                  <div className="flex-1 h-5 bg-gray-200 dark:bg-gray-700 rounded mx-8" />
                </div>

                {/* Colored content area */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: project.color + '08' }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, ${project.color}40 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${project.color}20 0%, transparent 50%)`,
                    }}
                  />
                  <span
                    className="text-5xl font-bold opacity-10"
                    style={{ color: project.color }}
                  >
                    {project.title.split(' ')[0]}
                  </span>
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
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
