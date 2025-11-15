'use client'

import { motion } from 'framer-motion'

const features = [
  { icon: '🛏️', title: '3 Bedrooms', description: 'Luxuriously appointed bedrooms' },
  { icon: '🏊', title: 'Private Pool', description: 'Olympic-sized heated pool' },
  { icon: '🌿', title: 'Garden', description: 'Landscaped tropical garden' },
  { icon: '🌅', title: 'Sea-view Balcony', description: 'Panoramic sea views' },
  { icon: '📶', title: 'Free WiFi', description: 'High-speed connectivity' },
  { icon: '👨‍💼', title: '24/7 Caretaker', description: 'Professional staff available' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      data-animate
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            About Mariyam Villa
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
            Nestled in a serene tropical paradise, Mariyam Villa offers the ultimate luxury escape. 
            Our exquisitely designed villa combines modern elegance with timeless comfort, providing 
            an unforgettable experience for discerning travelers seeking the perfect getaway.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
