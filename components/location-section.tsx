'use client'

import { motion } from 'framer-motion'

export default function LocationSection() {
  return (
    <section
      id="location"
      data-animate
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-primary text-center">
          Location
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.223841935804!2d102.8329!3d12.5654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31025c3b0b0b0b0b%3A0x0!2sLuxury%20Beachfront%20Villa!5e0!3m2!1sen!2skh!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Address Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">Villa Address</h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Mariyam Villa<br />
                Beachfront Luxury Resort<br />
                Tropical Paradise<br />
                Kingdom of Relaxation
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-primary mb-3">Getting Here</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ 15 minutes from International Airport</li>
                <li>✓ Private transfer service available</li>
                <li>✓ Direct beach access</li>
                <li>✓ Helicopter landing pad on-site</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
