'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ruleCategories = [
  {
    id: 'house-rules',
    title: 'House Rules',
    icon: '🏠',
    rules: [
      { title: 'Check-in Time', description: 'From 3:00 PM onwards. Early check-in available upon request.' },
      { title: 'Check-out Time', description: 'By 11:00 AM. Late checkout available for an additional fee.' },
      { title: 'Smoking Policy', description: 'Smoking is strictly prohibited inside the villa. Designated outdoor area available.' },
      { title: 'Noise Policy', description: 'Guests are requested to maintain quiet hours after 10:00 PM.' },
      { title: 'Parties & Events', description: 'Private events require prior approval. Maximum occupancy must be respected.' },
      { title: 'Pets Policy', description: 'Pets are allowed with prior notification. Cleaning charges may apply.' },
    ]
  },
  {
    id: 'amenities',
    title: 'Amenities & Services',
    icon: '✨',
    rules: [
      { title: 'Pool Access', description: 'Available 24/7. Children must be supervised at all times.' },
      { title: 'WiFi Password', description: 'Provided at check-in. Password resets available through front desk.' },
      { title: 'Air Conditioning', description: 'Climate control available in all rooms. Central thermostat in living area.' },
      { title: 'Kitchenette', description: 'Fully equipped. Personal chef services available upon request.' },
      { title: 'Housekeeping', description: 'Daily cleaning service included. Additional service available for fee.' },
      { title: 'Security', description: '24-hour security personnel on-site. Safe deposit available for valuables.' },
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Security',
    icon: '🔒',
    rules: [
      { title: 'Emergency Contacts', description: 'Emergency numbers provided at check-in. 24/7 support available.' },
      { title: 'Medical Services', description: 'Doctor on call. Nearest hospital 15 minutes away.' },
      { title: 'Fire Safety', description: 'Fire extinguishers located throughout villa. Emergency exits clearly marked.' },
      { title: 'Valuables', description: 'Use provided safe for valuable items. Villa not responsible for lost items.' },
      { title: 'Liability', description: 'Guests assume responsibility for personal belongings and accidents.' },
      { title: 'COVID-19', description: 'All health protocols followed. Sanitization after each guest.' },
    ]
  },
]

export default function RulesSection() {
  const [expandedCategory, setExpandedCategory] = useState('house-rules')

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Important Information
          </h2>
          <p className="text-lg text-foreground/70">
            Please review our guidelines to ensure a smooth and enjoyable stay
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {ruleCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setExpandedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                expandedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {ruleCategories.map((category) => (
            expandedCategory === category.id && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {category.rules.map((rule, index) => (
                  <RuleItem key={index} rule={rule} index={index} />
                ))}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

function RuleItem({ rule, index }: { rule: { title: string; description: string }; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-foreground text-left">{rule.title}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border px-6 py-4 bg-muted/20"
          >
            <p className="text-foreground/70 leading-relaxed">{rule.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
