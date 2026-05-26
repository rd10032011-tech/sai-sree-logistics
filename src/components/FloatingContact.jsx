import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <motion.a
        href="tel:+919840923192"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-accent hover:bg-accent-dark text-white rounded-full shadow-lg shadow-accent/20 flex items-center justify-center transition-colors"
        aria-label="Call us"
      >
        <Phone size={18} />
      </motion.a>
      <motion.a
        href="https://wa.me/919840923192"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/20 flex items-center justify-center transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle size={18} />
      </motion.a>
    </div>
  )
}
