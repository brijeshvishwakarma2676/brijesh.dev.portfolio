import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/BrandIcons';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const initials = data.name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          initials,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      reset();
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Contact"
          title="Let's Discuss Your Project"
          description="Have an idea or a business challenge? I'd be happy to talk through how I can help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <FadeIn className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-2.5 text-sm bg-white dark:bg-gray-900 border rounded-lg outline-none transition-colors ${
                      errors.name
                        ? 'border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/15'
                        : 'border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                    } text-gray-900 dark:text-white placeholder:text-gray-400`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email',
                      },
                    })}
                    className={`w-full px-4 py-2.5 text-sm bg-white dark:bg-gray-900 border rounded-lg outline-none transition-colors ${
                      errors.email
                        ? 'border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/15'
                        : 'border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                    } text-gray-900 dark:text-white placeholder:text-gray-400`}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-2.5 text-sm bg-white dark:bg-gray-900 border rounded-lg outline-none transition-colors ${
                    errors.subject
                      ? 'border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/15'
                      : 'border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                  } text-gray-900 dark:text-white placeholder:text-gray-400`}
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-2.5 text-sm bg-white dark:bg-gray-900 border rounded-lg outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/15'
                      : 'border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                  } text-gray-900 dark:text-white placeholder:text-gray-400`}
                  placeholder="Tell me about your project, timeline, and budget..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle2 size={16} />
                  Message sent successfully. I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </FadeIn>

          {/* Contact info */}
          <FadeIn className="lg:col-span-2" delay={0.1}>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                  Other Ways to Reach Me
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:brijesh.vishwakarma2676@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    brijesh.vishwakarma2676@gmail.com
                  </a>

                  <a
                    href="tel:+919699642659"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Phone size={16} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    +91 96996 42659
                  </a>

                  <a
                    href="https://github.com/brijeshvishwakarma2676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <GithubIcon size={16} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <LinkedinIcon size={16} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    LinkedIn
                  </a>

                  <a
                    href="https://wa.me/919699642659?text=Hello%20Brijesh,%20I'd%20like%20to%20chat%20about%20a%20web%20design%20/%20development%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <WhatsappIcon size={16} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Typical Response Time
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I respond to all inquiries within 24 hours during business days. For urgent projects, 
                  mention it in your message and I&apos;ll prioritize the response.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
