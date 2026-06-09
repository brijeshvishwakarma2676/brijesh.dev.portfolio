import { processData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Process"
          title="How I Work"
          description="A structured, transparent development process that keeps projects on track and expectations clear."
        />

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {processData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <FadeIn
                  key={item.step}
                  delay={index * 0.08}
                  direction={isLeft ? 'right' : 'left'}
                >
                  <div className={`lg:flex lg:items-center lg:gap-8 ${isLeft ? '' : 'lg:flex-row-reverse'} lg:mb-12`}>
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                      <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold">
                          {item.step}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md lg:ml-auto">
                        {item.description}
                      </p>
                    </div>

                    {/* Center dot for desktop */}
                    <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 z-10 flex-shrink-0">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {item.step}
                      </span>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
