"use client";
import { motion } from 'framer-motion'
import { FaStore, FaPalette, FaSearch, FaBullhorn } from 'react-icons/fa'

const features = [
  { icon: FaStore, title: 'Store Creation', description: 'Design and development of responsive, user-friendly stores using Shopify or WooCommerce.' },
  { icon: FaPalette, title: 'Branding and Design', description: 'Creation of professional logos, banners, and branded materials for a strong brand identity.' },
  { icon: FaSearch, title: 'Product Selection', description: 'Research and selection of profitable products tailored to your target audience.' },
  { icon: FaBullhorn, title: 'Marketing Strategy', description: 'Implementation of targeted marketing campaigns on social media and Google Ads.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We specialize in building and managing dropshipping stores tailored for the Spanish and European markets. With years of experience, we ensure your business thrives with reliable suppliers, profitable product strategies, and cutting-edge marketing campaigns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

