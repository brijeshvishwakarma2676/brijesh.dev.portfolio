import { motion } from 'framer-motion';
import { WhatsappIcon } from './BrandIcons';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919699642659?text=Hello%20Brijesh,%20I'd%20like%20to%20discuss%20a%20project!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 dark:shadow-green-500/20 focus:outline-none transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping -z-10" />
      <WhatsappIcon size={28} />
    </motion.a>
  );
}
