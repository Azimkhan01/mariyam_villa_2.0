'use client'

import { motion } from 'framer-motion'

export default function VideoTourSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Virtual Tour
          </h2>
          <p className="text-lg text-foreground/70">
            Explore every corner of your luxury sanctuary from the comfort of your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                title="Mariyam Villa Virtual Tour"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Villa Highlights</h3>
              <ul className="space-y-3">
                {[
                  'Infinity pool overlooking the ocean',
                  'Full home automation system',
                  'Walk-in closets in all bedrooms',
                  'Premium European kitchenware',
                  'Entertainment system in every room',
                  'Spa facilities and sauna',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4">Premium Amenities</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Bedrooms', value: '3' },
                  { label: 'Bathrooms', value: '3' },
                  { label: 'Area', value: '500m²' },
                  { label: 'Guests', value: '8' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold text-accent">{item.value}</p>
                    <p className="text-sm text-foreground/60">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
