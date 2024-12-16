"use client";
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const features = [
  { icon: FaArrowRight, title: 'Web Design & Development', description: '' },
  { icon: FaArrowRight, title: 'Custom Store & Theme Development', description: '' },
  { icon: FaArrowRight, title: 'Video Editing', description: '' },
  { icon: FaArrowRight, title: 'Animation 2D/3D', description: '' },
  { icon: FaArrowRight, title: 'Motion Graphics', description: '' },
  { icon: FaArrowRight, title: 'Graphic Design', description: '' },
  { icon: FaArrowRight, title: 'UI/UX', description: '' },
  { icon: FaArrowRight, title: 'Digital Marketing', description: '' },
  { icon: FaArrowRight, title: 'E-commerce', description: '' },
  { icon: FaArrowRight, title: 'Full Stack Development', description: '' },
  { icon: FaArrowRight, title: 'Mobile App Development', description: '' },
  { icon: FaArrowRight, title: 'CMS System', description: '' },
  { icon: FaArrowRight, title: 'SEO', description: '' },
]

export default function MoreServices() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">More Services</h2>
        {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We specialize in building and managing dropshipping stores tailored for the Spanish and European markets. With years of experience, we ensure your business thrives with reliable suppliers, profitable product strategies, and cutting-edge marketing campaigns.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="text-4xl text-blue-500 mb-4 m-auto" />
              <h3 className="text-xl font-semibold mb-2 text-black text-center">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

