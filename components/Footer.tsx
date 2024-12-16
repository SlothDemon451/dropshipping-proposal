import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Dropshipping Experts provides effortless dropshipping solutions for businesses in WorldWide.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('#about')} className="text-gray-400 hover:text-white transition duration-300">Who We Are</button></li>
              <li><button onClick={() => scrollToSection('#plans')} className="text-gray-400 hover:text-white transition duration-300">Plans</button></li>
              <li><button onClick={() => scrollToSection('#testimonials')} className="text-gray-400 hover:text-white transition duration-300">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('#team')} className="text-gray-400 hover:text-white transition duration-300">Our Team</button></li>
              <li><button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-white transition duration-300">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Phone: +92 3181522158</p>
            <p className="text-gray-400">Email: usmanimran158@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://wa.me/923181522158" className="text-gray-400 hover:text-white transition duration-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear() - 2} The Art Design Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

