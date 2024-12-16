'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your message. We\'ll get back to you soon!')
        setFormState({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitMessage('There was an error sending your message. Please try again.')
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Let&apos;s Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">Have questions or ready to start? Contact us today, and our team will get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="mt-2 block w-full rounded-md py-1 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={4}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitMessage && (
              <p className={`mt-4 text-center ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                {submitMessage}
              </p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            {/* <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <p className="text-gray-600">123 Dropship Street, Madrid, Spain</p>
            </div> */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-500 text-2xl" />
              <p className="text-gray-600">+92 3181522158</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <p className="text-gray-600">usmanimran158@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

