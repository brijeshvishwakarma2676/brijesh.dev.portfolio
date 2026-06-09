import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-950" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white tracking-tight leading-[1.1] max-w-3xl"
        >
          Custom Websites &amp;{' '}
          <span className="text-gray-400 dark:text-gray-500">Business Solutions</span>{' '}
          Built for Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed"
        >
          I design and engineer production-grade websites and web applications. No casual "vibe coding" shortcuts, and no bloated agency overhead—just robust, structured code tailored to grow your business affordably.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/919699642659?text=Hello%20Brijesh,%20I'd%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            Schedule a Consultation
            <ChevronRight size={16} />
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center gap-8 sm:gap-12"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
            <MapPin size={14} />
            <span>Available Worldwide</span>
          </div>
          <div className="h-4 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />
          <TrustStat label="Years of Experience" value="2+" />
          <div className="h-4 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />
          <TrustStat label="Projects Delivered" value="30+" />
          <div className="h-4 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />
          <TrustStat label="Happy Clients" value="20+" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustStat({ label, value }) {
  return (
    <div>
      <span className="text-lg font-semibold text-gray-900 dark:text-white">{value}</span>
      <span className="ml-2 text-sm text-gray-400 dark:text-gray-500">{label}</span>
    </div>
  );
}
