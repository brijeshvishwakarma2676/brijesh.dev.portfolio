import { Quote } from 'lucide-react';
import { testimonialsData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Feedback from people I've worked with on real projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.1}>
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 h-full flex flex-col">
                <Quote size={20} className="text-gray-200 dark:text-gray-700 mb-4" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {item.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
