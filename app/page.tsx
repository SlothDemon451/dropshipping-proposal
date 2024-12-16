'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BrandMasonry from '../components/BrandMasonry'
import About from '../components/About'
import Plans from '../components/Plans'
import Results from '../components/Results'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Strategies from '@/components/Strategies'
import MoreServices from '@/components/MoreServices'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <BrandMasonry />
      <section id="about">
        <About />
      </section>
      <section id="strategies">
        <Strategies />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <Results />
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <MoreServices />
      <Footer />
    </main>
  )
}

