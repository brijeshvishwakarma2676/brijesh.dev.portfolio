import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
              brijesh<span className="text-blue-600">.dev</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Building modern websites, web applications, and business solutions with proven technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'Projects', to: '/projects' },
                { label: 'About', to: '/about' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:brijesh.vishwakarma2676@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail size={16} />
                brijesh.vishwakarma2676@gmail.com
              </a>
              <a
                href="tel:+919699642659"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Phone size={16} />
                +91 96996 42659
              </a>
              <a
                href="https://wa.me/919699642659?text=Hello%20Brijesh,%20I'd%20like%20to%20chat%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <WhatsappIcon size={16} />
                WhatsApp Chat
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon size={16} />
                GitHub
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon size={16} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {currentYear} Brijesh. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Designed &amp; Built with React, Tailwind CSS, and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
