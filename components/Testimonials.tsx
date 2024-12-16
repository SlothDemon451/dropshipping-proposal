'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Juan R.',
    company: 'Spain',
    text: 'Thanks to their expert team, I launched my store in just two weeks and started making sales in no time!',
    image: '/images/img-1.png'
  },
  {
    name: 'Elena M.',
    company: 'Italy',
    text: 'Their optimization plan completely transformed my existing business. I highly recommend their services!',
    image: '/images/img-2.jpeg'
  },
  {
    name: 'Alex K.',
    company: 'Germany',
    text: 'The personalized marketing strategies they implemented boosted my sales by 200% in just three months!',
    image: '/images/img-3.jpeg'
  },
  {
    name: 'Sophia L.',
    company: 'United States',
    text: 'Their attention to detail and commitment to success helped my store rank #1 in my niche!',
    image: '/images/avatar-3.jpeg'
  },
  {
    name: 'Liam D.',
    company: 'United Kingdom',
    text: 'The new website design and SEO strategies increased my organic traffic by 150% in two months!',
    image: '/images/avatar-2.png'
  },
  {
    name: 'Mia R.',
    company: 'Australia',
    text: 'Their customer retention techniques doubled my returning customers within six months!',
    image: '/images/avatar-1.jpeg'
  },
  {
    name: 'Noah M.',
    company: 'Canada',
    text: 'The speed optimizations they performed reduced my website load time by 75%, and my conversions skyrocketed!',
    image: '/images/avatar-4.png'
  },
  {
    name: 'Emma V.',
    company: 'Netherlands',
    text: 'Their advanced retargeting strategies brought back 70% of abandoned carts, which boosted my overall revenue!',
    image: '/images/avatar-3.jpeg'
  }  
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
            <p className="text-gray-600 mb-6 text-lg">{testimonials[currentTestimonial].text}</p>
            <div className="flex items-center">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name} 
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-black text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-blue-500">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

