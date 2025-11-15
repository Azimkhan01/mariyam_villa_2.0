'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2 } from 'lucide-react'

const formSteps = [
  {
    id: 'contact',
    title: 'Contact Info',
    icon: '👤',
    fields: ['name', 'email', 'phone']
  },
  {
    id: 'booking',
    title: 'Booking Details',
    icon: '📅',
    fields: ['guests', 'checkIn', 'checkOut']
  },
  {
    id: 'message',
    title: 'Your Message',
    icon: '💬',
    fields: ['message']
  }
]

export default function EnquirySection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '1',
    checkIn: '',
    checkOut: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateStep = (step: number): boolean => {
    const fieldNames = formSteps[step].fields
    const newErrors: Record<string, string> = {}

    fieldNames.forEach((field) => {
      if (field === 'name' && !formData.name.trim()) {
        newErrors.name = 'Name is required'
      }
      if (field === 'email' && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = 'Valid email is required'
      }
      if (field === 'phone' && !formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(currentStep)) return

    const formattedMessage = `🏝️ *New Enquiry for Mariyam Villa*

*Contact Information:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Booking Details:*
Number of Guests: ${formData.guests}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}

*Message:*
${formData.message || 'No additional message'}`

    const whatsappNumber = '1234567890' // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(formattedMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
    setIsSubmitted(true)

    // Reset form after 2 seconds
    setTimeout(() => {
      setCurrentStep(0)
      setFormData({
        name: '',
        phone: '',
        email: '',
        guests: '1',
        checkIn: '',
        checkOut: '',
        message: '',
      })
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <section
      id="enquiry"
      data-animate
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary text-center">
            Start Your Luxury Getaway
          </h2>
          <p className="text-center text-foreground/70 mb-12">
            Complete a few details and we'll get back to you via WhatsApp shortly
          </p>

          <div className="mb-12">
            <div className="flex justify-between items-center">
              {formSteps.map((step, index) => (
                <div key={step.id} className="flex-1 flex items-center">
                  <motion.button
                    onClick={() => index <= currentStep && setCurrentStep(index)}
                    disabled={index > currentStep}
                    className={`relative flex flex-col items-center ${index <= currentStep ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    whileHover={index <= currentStep ? { scale: 1.1 } : {}}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        backgroundColor: index <= currentStep ? 'var(--accent)' : 'var(--border)',
                        scale: index === currentStep ? 1.2 : 1
                      }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                    >
                      {index < currentStep ? (
                        <CheckCircle2 size={28} />
                      ) : (
                        <span>{step.icon}</span>
                      )}
                    </motion.div>
                    <span className="text-xs font-semibold mt-2 text-center text-foreground/70">
                      {step.title}
                    </span>
                  </motion.button>

                  {index < formSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: index < currentStep ? 1 : 0 }}
                      className="flex-1 h-1 bg-accent mx-2"
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Success message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center"
              >
                <p className="text-green-700 font-semibold text-lg">
                  Thank you! Check your WhatsApp for our response.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form steps with animation */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 mb-8"
              >
                {/* Step 1: Contact Info */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full text-base ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full text-base ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className={`w-full text-base ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                )}

                {/* Step 2: Booking Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-semibold text-foreground mb-2">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground text-base focus:ring-2 focus:ring-accent"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} Guest{num > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="checkIn" className="block text-sm font-semibold text-foreground mb-2">
                        Check-in Date
                      </label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="checkOut" className="block text-sm font-semibold text-foreground mb-2">
                        Check-out Date
                      </label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full text-base"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Message */}
                {currentStep === 2 && (
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Special Requests or Message (Optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your preferences or special requests..."
                      className="w-full min-h-40 text-base"
                    />
                    <p className="text-xs text-foreground/60 mt-2">
                      Share any dietary preferences, special occasions, or additional requests
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4">
              {currentStep > 0 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="button"
                    onClick={handlePrev}
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    Back
                  </Button>
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                {currentStep < formSteps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    Send via WhatsApp
                  </Button>
                )}
              </motion.div>
            </div>

            <p className="text-xs text-center text-foreground/60 mt-6">
              Your information is secure and will only be used to contact you about your enquiry
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
