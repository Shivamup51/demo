import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import FormDialog from "@/components/formDialog"
export default function Component() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <footer className="bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-2">Kynexa Physiotherapy by <br />Dr. Pravesh Kumar</h3>
            <p className="text-white/80 mb-4 text-sm">Healing That Comes to You</p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-white/80 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-white/80 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              
              <Link href="/blogs" className="block text-white/80 hover:text-white transition-colors text-sm">
                Blogs
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/home-visit" className="block text-white/80 hover:text-white transition-colors text-sm">
                Home Visits
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-white/80" />
                <Link href="tel:+918868879387" className="text-white/80 hover:text-white transition-colors text-sm">
                  +91 8868879387
                </Link>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-white/80" />
                <Link
                  href="mailto:info@kynexaphysio.com"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  info@kynexaphysio.com
                </Link>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white/80" />
                <address className="text-white/80 text-sm not-italic">
                  D 16, Basement, Hauz Khas,
                  <br />
                  New Delhi - 110016
                </address>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-0.5 text-white/80" />
                <span className="text-white/80 text-sm">
                  Monday to Saturday
                  <br />
                  10:00 AM - 07:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Areas We Serve */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Areas We Serve</h4>
            <div className="space-y-2 mb-4">
              <div className="text-white/80 text-sm">South Delhi</div>
              <div className="text-white/80 text-sm">West Delhi</div>
              <div className="text-white/80 text-sm">East Delhi</div>
              <div className="text-white/80 text-sm">Central Delhi</div>
              <div className="text-white/80 text-sm">North Delhi</div>
            </div>
          </div>
        </div>

        {/* Book Appointment Section */}
        <div className="bg-white/10 rounded-lg p-6 mt-8 mb-12">
          <div className="text-center flex flex-col items-center justify-center md:text-left md:flex md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <Button onClick={() => setIsOpen(true)} className="bg-white text-[#6c2c8b] hover:bg-white/90 font-semibold px-6 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
              <p className="text-white/80 text-lg max-w-2xl mt-4">
                Schedule a physiotherapy session with Dr. Pravesh Kumar at our clinic or your home.
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 my-6" />

        {/* Copyright */}
        <div className="text-center py-4">
          <p className="text-white/70 text-sm">
            © 2025 Kynexa Advanced Physiotherapy and Manual Therapy Clinic. All rights reserved.
          </p>
        </div>
      </div>
      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
  )
}