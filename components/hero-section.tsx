'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' }
      })

      timeline
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 },
          0
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          0.3
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8 },
          0.6
        )

      gsap.to(titleRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleScroll = () => {
    const trustSection = document.querySelector('section:nth-of-type(2)')
    if (trustSection) {
      trustSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1570129477492-45a003537e20?w=1920&q=80)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 text-accent font-semibold tracking-widest text-sm uppercase"
        >
          Luxury Experience
        </motion.div>

        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-balance drop-shadow-2xl leading-tight"
        >
          Mariyam Villa
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-12 text-balance drop-shadow-lg font-light leading-relaxed"
        >
          Indulge in unparalleled luxury with breathtaking ocean views and world-class amenities
        </p>

        <div ref={ctaRef} className="flex gap-4 justify-center flex-wrap">
          <Button
            onClick={handleScroll}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold"
          >
            Discover More
          </Button>
          <Button
            onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold"
          >
            Book Now
          </Button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
