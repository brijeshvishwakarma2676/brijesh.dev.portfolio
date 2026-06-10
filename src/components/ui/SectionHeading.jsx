import { motion } from 'framer-motion';

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 24 },
    right: { y: 0, x: -24 },
    none: { y: 0, x: 0 },
  };

  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ label, title, description }) {
  return (
    <FadeIn className="mb-16">
      {label && (
        <p className="inline-flex items-center gap-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
          <span className="h-px w-6 bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
