import { Code2, Users, Zap, Shield } from 'lucide-react';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

const values = [
  {
    icon: Code2,
    title: 'Production-Grade Architecture',
    description: 'I build software using robust design patterns, scalable data schemas, and strict validation. No temporary shortcuts or casual templates.',
  },
  {
    icon: Users,
    title: 'Systematic Planning',
    description: 'I document architectural decisions and maintain clear API specs. Every sprint has defined milestones and deliverables.',
  },
  {
    icon: Zap,
    title: 'Performance Audits',
    description: 'Applications are optimized for low latency, optimized caching, and core web vitals. Speed is engineered, not accidental.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'All communication pipelines, database queries, and authorization headers are designed to protect user data and business integrity.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="About"
          title="A Bit About Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <FadeIn className="lg:col-span-3">
            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I&apos;m a professional software engineer focused on engineering web applications and digital systems 
                that deliver commercial value and absolute reliability. While my primary expertise is in 
                modern React and frontend systems, I architect complete stack solutions with rigorous design standards.
              </p>
              <p>
                Unlike casual code assembly or trend-following shortcuts, my methodology centers on 
                sound engineering principles. I specialize in turning complex, ambiguous business problems into 
                highly structured, performant, and well-tested software applications.
              </p>
              <p>
                I prioritize the details that define professional engineering: test-driven state flows, secure 
                communication protocols, database optimization, and robust component architecture. I design systems 
                built for high scalability and long-term maintenance, ensuring your code remains stable six months or six years down the road.
              </p>
              <p>
                I partner with businesses and founders who reject short-sighted, unstable builds in favor of 
                durable software assets. If you value architectural rigor and professional execution, let&apos;s build.
              </p>
            </div>
          </FadeIn>

          {/* Values */}
          <div className="lg:col-span-2 space-y-6">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
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
      </div>
    </section>
  );
}
