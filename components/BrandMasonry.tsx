'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const brands = [
  { name: 'Brand 1', logo: '/images/1.png' },
  { name: 'Brand 2', logo: '/images/2.png' },
  { name: 'Brand 3', logo: '/images/3.png' },
  { name: 'Brand 4', logo: '/images/4.png' },
  { name: 'Brand 5', logo: '/images/5.png' },
  { name: 'Brand 6', logo: '/images/6.png' },
  { name: 'Brand 7', logo: '/images/7.png' },
  { name: 'Brand 8', logo: '/images/8.png' },
]

export default function BrandMasonry() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scroll = () => {
      controls.start({
        x: [0, -container.scrollWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        },
      })
    }

    scroll()

    return () => {
      controls.stop()
    }
  }, [controls])

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Brands We&apos;ve Worked With</h2>
        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex"
            animate={controls}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 m-4 rounded-lg flex items-center justify-center"
              >
                <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full p-4" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

