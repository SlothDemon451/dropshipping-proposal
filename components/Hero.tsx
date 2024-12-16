'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const heroTexts = [
  "Launch Your Dream Dropshipping Business WorldWide",
  "Streamline Your E-commerce with Expert Solutions",
  "Grow Your Online Store with Our Proven Strategies"
]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          key={currentTextIndex}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {heroTexts[currentTextIndex]}
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From store creation to product delivery, we handle it all—so you can focus on growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button onClick={() => scrollToSection('#contact')} className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-bold text-lg sm:text-xl hover:bg-blue-100 transition duration-300">
            Get Started Today
          </button>
          <button onClick={() => scrollToSection('#plans')} className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-bold text-lg sm:text-xl hover:bg-white hover:text-blue-600 transition duration-300">
            See Our Plans
          </button>
        </motion.div>
      </div>
    </section>
  )
}

