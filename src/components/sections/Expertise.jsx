import { expertiseData } from '../../data/content';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="What I Do"
          title="Areas of Expertise"
          description="I specialize in building digital products that solve real business problems — from marketing websites to complex internal tools."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-colors">
                    <Icon size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {item.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
