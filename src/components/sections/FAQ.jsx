import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="FAQ"
          title="Common Questions"
          description="Answers to questions I frequently get from prospective clients."
        />

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <FadeIn key={index} delay={index * 0.06}>
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                  <div>
                    <div className="px-6 pb-5">
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
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
