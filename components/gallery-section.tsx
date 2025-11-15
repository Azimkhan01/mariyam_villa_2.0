'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  { id: 1, caption: 'Master Bedroom', query: 'luxury master bedroom with sea view' },
  { id: 2, caption: 'Living Room', query: 'modern luxury living room' },
  { id: 3, caption: 'Private Pool', query: 'luxury infinity pool villa' },
  { id: 4, caption: 'Dining Area', query: 'elegant outdoor dining terrace' },
  { id: 5, caption: 'Sea-view Balcony', query: 'panoramic ocean view balcony' },
  { id: 6, caption: 'Garden', query: 'tropical garden with pool' },
]

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleLightboxNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => ((prev! + 1) % galleryImages.length))
    }
  }

  const handleLightboxPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => ((prev! - 1 + galleryImages.length) % galleryImages.length))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return
    if (e.key === 'ArrowRight') handleLightboxNext()
    if (e.key === 'ArrowLeft') handleLightboxPrev()
    if (e.key === 'Escape') setSelectedImage(null)
  }

  return (
    <section
      id="gallery"
      data-animate
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Gallery
          </h2>
          <p className="text-lg text-foreground/70">
            Explore the stunning spaces and breathtaking views of Mariyam Villa
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden group shadow-2xl"
          >
            <img
              src={`https://images.unsplash.com/photo-${['1631042614235-8f2eeda2b2b5', '1582719471384-894fbb1e4d04', '1512207736139-c1b0e01ec429', '1613395877297-a57bbb235b7c', '1591825481411-20ddf3d41e75', '1556909114-f6e7ad7d3136'][currentIndex]}?w=800&q=80`}
              alt={galleryImages[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-6">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-1">{galleryImages[currentIndex].caption}</h3>
                <p className="text-white/80">Click to view in full</p>
              </div>
              <span className="text-white/70 text-sm font-semibold">
                {currentIndex + 1} / {galleryImages.length}
              </span>
            </div>

            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </motion.button>

            <motion.button
              onClick={() => setSelectedImage(currentIndex)}
              className="absolute inset-0 opacity-0 hover:opacity-0 cursor-pointer"
              whileHover={{ opacity: 0.1 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative h-64 rounded-lg overflow-hidden group cursor-pointer transition-all ${
                currentIndex === index ? 'ring-3 ring-accent shadow-xl' : ''
              }`}
            >
              <img
                src={`https://images.unsplash.com/photo-${['1631042614235-8f2eeda2b2b5', '1582719471384-894fbb1e4d04', '1512207736139-c1b0e01ec429', '1613395877297-a57bbb235b7c', '1591825481411-20ddf3d41e75', '1556909114-f6e7ad7d3136'][index]}?w=400&q=80`}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold text-lg">{image.caption}</p>
                  <p className="text-xs text-white/80">Click to expand</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={`https://images.unsplash.com/photo-${['1631042614235-8f2eeda2b2b5', '1582719471384-894fbb1e4d04', '1512207736139-c1b0e01ec429', '1613395877297-a57bbb235b7c', '1591825481411-20ddf3d41e75', '1556909114-f6e7ad7d3136'][selectedImage]}?w=1200&q=90`}
                alt={galleryImages[selectedImage].caption}
                className="w-full rounded-lg shadow-2xl"
              />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                <h3 className="text-white text-2xl font-serif font-bold">
                  {galleryImages[selectedImage].caption}
                </h3>
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X size={28} />
                </motion.button>
              </div>

              <motion.button
                onClick={handleLightboxPrev}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </motion.button>
              <motion.button
                onClick={handleLightboxNext}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </motion.button>

              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="flex justify-between items-center">
                  <p className="text-sm opacity-80">
                    Image {selectedImage + 1} of {galleryImages.length}
                  </p>
                  <p className="text-xs opacity-60">
                    Use arrow keys or click buttons to navigate • ESC to close
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
