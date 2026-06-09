import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

export default function CaseStudies() {
  const featured = projectsData.find((p) => p.slug === 'pointnest-saas');
  if (!featured) return null;

  return (
    <section id="case-studies" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Case Study"
          title="Engineering Decisions in Practice"
          description="A closer look at the problem-solving process, architecture decisions, and trade-offs behind a real project."
        />

        <FadeIn>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Visual */}
              <div
                className="p-10 lg:p-14 flex items-center justify-center min-h-[300px]"
                style={{ backgroundColor: featured.color + '08' }}
              >
                <div className="text-center">
                  <div
                    className="text-6xl font-bold opacity-10 mb-4"
                    style={{ color: featured.color }}
                  >
                    PN
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {featured.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  Featured Case Study
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">
                  {featured.title}
                </h3>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Problem</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {featured.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Solution</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {featured.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Results</h4>
                    <div className="space-y-2">
                      {[
                        'Secured ledger with rapid point accounting calculations',
                        'Highly responsive frontend scoring >95 on mobile lighthouse',
                        'Modular component API ready for third-party widget embedded integrations',
                      ].map((result) => (
                        <div key={result} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {featured.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Discuss a similar project
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
