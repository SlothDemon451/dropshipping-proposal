"use client";
import { motion } from 'framer-motion'
import { FaSearch, FaTruck, FaBullhorn, FaUsers } from 'react-icons/fa'

const strategies = [
  { icon: FaSearch, title: 'Product Research', description: 'We find trending, high-margin products suited for your market.' },
  { icon: FaTruck, title: 'Supplier Management', description: 'Partner with reliable suppliers for fast shipping and quality products.' },
  { icon: FaBullhorn, title: 'Marketing Campaigns', description: 'Tailored Facebook and Google ads to drive traffic.' },
  { icon: FaUsers, title: 'Customer Engagement', description: 'Use email and social media to retain customers.' },
]

export default function Strategies() {
  return (
    <section id="strategies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Smart Strategies for Your Success</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our comprehensive strategies ensure long-term profitability for your dropshipping business. Here's how we do it:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <strategy.icon className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full font-bold hover:bg-blue-600 transition duration-300">
            Learn More About Our Approach
          </a>
        </div>
      </div>
    </section>
  )
}

