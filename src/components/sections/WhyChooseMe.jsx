import { ShieldAlert, IndianRupee, Sparkles } from 'lucide-react';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

const differentiators = [
  {
    icon: ShieldAlert,
    title: 'Engineered Rigor (No "Vibe Coding")',
    description: 'We do not build software with casual guesses or trend-following AI generation shortcuts. Every project is built using disciplined software engineering principles, well-documented APIs, and robust data schemas designed to stand up to heavy production traffic.',
    color: 'text-red-500 bg-red-50/50 dark:bg-red-950/20'
  },
  {
    icon: IndianRupee,
    title: 'Direct-to-Developer Value',
    description: 'By working directly with a senior engineer instead of a bloated agency, you avoid paying for account managers, sales commissions, or fancy office overhead. You get premium, enterprise-grade development work at highly competitive and transparent rates.',
    color: 'text-green-500 bg-green-50/50 dark:bg-green-950/20'
  },
  {
    icon: Sparkles,
    title: 'High-Converting Aesthetics',
    description: 'We couple structural integrity with stunning, state-of-the-art designs. Your site will look premium, load instantly (optimized Core Web Vitals), and offer a responsive user experience that actively converts visitors into clients.',
    color: 'text-blue-500 bg-blue-50/50 dark:bg-blue-950/20'
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 border-t border-b border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Our Standard"
          title="Direct Value, Structured Engineering"
          description="High-performance, secure software built without bloated agency pricing or casual shortcuts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="group h-full p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
                  {/* Subtle top decoration */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${item.color}`}>
                      <Icon size={24} />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
