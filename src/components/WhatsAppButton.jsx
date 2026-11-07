import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919122909121?text=Namaste%20Dr.%20Amit%20Kumar%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nirmala%20Dental%20Care."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  )
}

export default WhatsAppButton
