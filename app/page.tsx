'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TrustSection from '@/components/trust-section'
import LocationSection from '@/components/location-section'
import GallerySection from '@/components/gallery-section'
import VideoTourSection from '@/components/video-tour-section'
import RulesSection from '@/components/rules-section'
import EnquirySection from '@/components/enquiry-section'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef(null)

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
            markers: false,
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main ref={mainRef} className="w-full">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <VideoTourSection />
      <LocationSection />
      <GallerySection />
      <RulesSection />
      <EnquirySection />
      <Footer />
    </main>
  )
}
