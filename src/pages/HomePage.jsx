import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/sections/Hero';
import Expertise from '../components/sections/Expertise';
import WhyChooseMe from '../components/sections/WhyChooseMe';
import Testimonials from '../components/sections/Testimonials';
import { projectsData } from '../data/content';
import { FadeIn } from '../components/ui/SectionHeading';
import { ExternalLink } from 'lucide-react';

export default function HomePage() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Brijesh — Software Engineer | Web Development &amp; Business Solutions</title>
        <meta name="description" content="Software Engineer specializing in website development, React applications, API development, and scalable business solutions." />
      </Helmet>

      <Hero />
      <Expertise />
      <WhyChooseMe />

      {/* Featured Projects Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-16">
            <p className="inline-flex items-center gap-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
              Work
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">
                Featured Projects
              </h2>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View all projects
                <ArrowRight size={14} />
              </Link>
            </div>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              A selection of recent projects showcasing different types of work.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1} className="h-full">
                <div className="group border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Colored header / Image */}
                  <div
                    className="h-36 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: project.image ? 'transparent' : project.color + '08' }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} thumbnail`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 opacity-[0.04]"
                          style={{
                            backgroundImage: `radial-gradient(circle at 30% 50%, ${project.color}40 0%, transparent 50%)`,
                          }}
                        />
                        <span
                          className="text-4xl font-bold opacity-10 transition-transform duration-500 group-hover:scale-110"
                          style={{ color: project.color }}
                        >
                          {project.title.split(' ')[0]}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <div className="flex items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 dark:bg-gray-900 px-6 py-16 sm:px-16 text-center">
              {/* Decorative glow + grid */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[320px] rounded-full bg-blue-500/20 blur-[100px]" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                  Have a project in mind?
                </h2>
                <p className="mt-4 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Get in Touch
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:bg-white/5 hover:border-gray-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Learn More About Me
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
