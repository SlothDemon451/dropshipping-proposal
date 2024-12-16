"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Results() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/success-1.jpeg"
                alt="New Client Success"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">New Client Success</h3>
            <p className="text-gray-600 mb-4">
              A new client's store, set up with our comprehensive package, achieved a 300% increase in sales within the first 6 months using our targeted advertising campaigns and curated product selection.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">300% Increase in Sales</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/success-2.jpg"
                alt="Existing Client Optimization"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Existing Client Optimization</h3>
            <p className="text-gray-600 mb-4">
              An existing client's store saw a 5x boost in conversions after we implemented our optimization plan, including speed enhancements, UI updates, and advanced retargeting strategies.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">5x Boost in Conversions</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/success-3.jpeg"
                alt="New Client Success"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Existing Client Optimization</h3>
            <p className="text-gray-600 mb-4">
            A small business client reduced their cart abandonment rate by 60% after we introduced streamlined checkout processes and tailored email reminders.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">60% Reduction in Cart Abandonment</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/success-4.jpeg"
                alt="Existing Client Optimization"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">New Client Success</h3>
            <p className="text-gray-600 mb-4">
            After implementing our data-driven SEO strategy and content marketing plan, a client's store achieved a 400% increase in organic traffic within 4 months.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold">400% Increase in Organic Traffic</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

