"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Usman',
    role: 'CEO & Founder',
    image: '/images/avatar-2.png',
    bio: 'Usman has over 10 years of experience in e-commerce and dropshipping.'
  },
  {
    name: 'Waleed',
    role: 'Marketing Director',
    image: '/images/avatar-4.png',
    bio: 'Waleed specializes in creating high-converting marketing campaigns for dropshipping stores.'
  },
  {
    name: 'Sara',
    role: 'Product Sourcing Specialist',
    image: '/images/avatar-3.jpeg',
    bio: 'Sara has a keen eye for trending products and maintains strong supplier relationships.'
  },
  {
    name: 'Elisa',
    role: 'Customer Success Manager',
    image: '/images/avatar-1.jpeg',
    bio: 'Elisa ensures our clients receive top-notch support throughout their dropshipping journey.'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

