import { Code2, Users, Zap, Shield } from 'lucide-react';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'I write code that is readable, maintainable, and well-documented. The best code is code your team can work with confidently.',
  },
  {
    icon: Users,
    title: 'Clear Communication',
    description: 'Regular updates, honest timelines, and no surprises. I treat every project as a partnership, not a transaction.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Every decision considers load time, responsiveness, and user experience. Fast software is good software.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'I deliver what I commit to, on time. If something changes, I communicate early and adapt the plan together.',
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
                I&apos;m a software engineer focused on building web applications and digital products 
                that work well for real users and real businesses. My background is primarily in 
                frontend development with React, but I work across the stack when projects require it.
              </p>
              <p>
                Over the past several years, I&apos;ve worked with startups, small businesses, and 
                agencies on projects ranging from marketing websites to complex internal tools. 
                What I enjoy most is taking a vague business requirement and turning it into 
                software that people actually find useful.
              </p>
              <p>
                I care about the details — consistent spacing, fast load times, accessible interfaces, 
                and clean codebases. I also care about the bigger picture — does this actually solve 
                the problem? Is the architecture going to hold up in six months?
              </p>
              <p>
                I prefer working with clients who value quality over speed, and who see their 
                software as a long-term investment rather than a one-time expense. If that sounds 
                like you, I&apos;d enjoy the conversation.
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
