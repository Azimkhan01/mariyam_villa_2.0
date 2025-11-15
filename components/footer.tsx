'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-3">Mariyam Villa</h3>
            <p className="opacity-90">
              Experience the ultimate luxury getaway in paradise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition">
                  Location
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="mailto:info@mariyamvilla.com" className="hover:text-accent transition">
                  info@mariyamvilla.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-accent transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-sm">
                Beachfront Paradise, Tropical Island
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {currentYear} Mariyam Villa. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
