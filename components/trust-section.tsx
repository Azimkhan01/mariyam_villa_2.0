'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Star } from 'lucide-react'

const trustItems = [
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized globally for excellence in luxury hospitality',
    stat: '15+',
    label: 'Awards'
  },
  {
    icon: Users,
    title: '5000+ Guests',
    description: 'Trusted by thousands of satisfied travelers worldwide',
    stat: '5000+',
    label: 'Happy Guests'
  },
  {
    icon: Star,
    title: '4.9/5 Rating',
    description: 'Consistently rated as a top luxury destination',
    stat: '4.9',
    label: 'Star Rating'
  },
  {
    icon: CheckCircle,
    title: 'Certified Safe',
    description: 'Certified with international safety and quality standards',
    stat: '100%',
    label: 'Verified'
  },
]

export default function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

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
            Why Choose Mariyam Villa
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Trusted by discerning travelers for delivering exceptional experiences and uncompromising quality
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background rounded-lg p-8 text-center border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-12 h-12 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-2">{item.stat}</h3>
                <p className="text-sm text-accent font-semibold mb-4">{item.label}</p>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
