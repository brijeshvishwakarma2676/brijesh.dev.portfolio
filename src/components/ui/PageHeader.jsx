import { FadeIn } from './SectionHeading';

export default function PageHeader({ label, title, description }) {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          {label && (
            <p className="inline-flex items-center gap-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
              <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
              {label}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
