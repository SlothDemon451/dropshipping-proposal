'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import NavButton from './NavButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
  
    window.googleTranslateElementInit = () => {
     new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };
  
   }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    if (isOpen) {
      toggleMenu()
    }
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={() => scrollToSection('#hero')} className="flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold text-blue-600">
                <span className="sm:hidden">TAS</span>
                <span className="hidden sm:inline">The Art Design Solution</span>
              </span>
              
            </a>
          </div>
          <div className='flex'>
            <div id="google_translate_element" className='order-2 ml-4'></div>
            <div className="hidden xl:ml-6 xl:flex lg:space-x-8 text-black order-1">
              <NavButton onClick={() => scrollToSection('#about')}>Who We Are</NavButton>
              <NavButton onClick={() => scrollToSection('#plans')}>Plans</NavButton>
              <NavButton onClick={() => scrollToSection('#testimonials')}>Testimonials</NavButton>
              <NavButton onClick={() => scrollToSection('#team')}>Our Team</NavButton>
              <NavButton onClick={() => scrollToSection('#contact')}>Contact</NavButton>

            </div>
            <div className="xl:hidden flex items-center order-2">
              <div id="google_translate_element"></div>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="xl:hidden border-t border-b border-gray-300"
        >
          
          <div className="flex flex-col py-5 space-y-1 text-black">
            <NavButton className="text-lg py-1 px-2 text-left hover:bg-gray-300" onClick={() => scrollToSection('#about')}>Who We Are</NavButton>
            <NavButton className="text-lg py-1 px-2 text-left hover:bg-gray-300" onClick={() => scrollToSection('#plans')}>Plans</NavButton>
            <NavButton className="text-lg py-1 px-2 text-left hover:bg-gray-300" onClick={() => scrollToSection('#testimonials')}>Testimonials</NavButton>
            <NavButton className="text-lg py-1 px-2 text-left hover:bg-gray-300" onClick={() => scrollToSection('#team')}>Our Team</NavButton>
            <NavButton className="text-lg py-1 px-2 text-left hover:bg-gray-300" onClick={() => scrollToSection('#contact')}>Contact</NavButton>
          </div>
        </motion.div>

      )}
      {/* {showTranslate && (
        <div
          id="google_translate_element"
          className="bg-black"
        />
      )} */}
    </nav>
  )
}
