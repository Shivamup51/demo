"use client"

import { useState } from "react"
import { Phone, Menu, X, ChevronDown, Heart, Brain, Activity, Dumbbell, Users, Home, PhoneCall } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarProps {
  subServices: Array<{
    icon: React.ReactNode
    title: string
    description: string
    link: string
  }>
}

export default function Navbar({ subServices }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // All services from the provided image with their icons
  const allServices = [
    { name: "Dry Needling Therapy", href: "/services/DryNiddle", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Cupping Therapy", href: "#services/cupping-therapy", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Kinesio Taping", href: "#services/KinesioTapingTherapy", icon: <Dumbbell className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Laser Therapy", href: "/services/LaserTherapy", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Manual Therapy", href: "#services/ManualTherapy", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Electrotherapy", href: "/services/Electrotherapy", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Sports Physiotherapy", href: "#services/SportsPhysiotherapy", icon: <Dumbbell className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Cardio & Pulmonary Rehab", href: "#services/CardioPulmonaryRehab", icon: <Heart className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Chiropractic Care", href: "#services/ChiropracticCare", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Geriatric Rehabilitation", href: "#services/GeriatricRehabilitation", icon: <Users className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Post Surgical Rehabilitation", href: "#services/PostSurgicalRehabilitation", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Spine Alignment Therapy", href: "#services/SpineAlignmentTherapy", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Kynexa Logo" width={120} height={30} className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 text-[#6c2c8b] font-medium relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#6c2c8b] font-medium relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-[#6c2c8b] font-medium focus:outline-none relative group py-2">
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-[800px] bg-white shadow-xl p-6 rounded-xl mt-4 border border-gray-100"
              >
                <div className="grid grid-cols-4 gap-3">
                  {allServices.map((service, i) => (
                    <DropdownMenuItem key={i} asChild className="rounded-md hover:bg-gray-50 focus:bg-gray-50 transition-all duration-200 py-2.5 px-3">
                      <Link href={service.href} className="flex items-center text-gray-700 hover:text-[#6c2c8b] font-medium">
                        {service.icon}
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blogs" className="text-gray-700 hover:text-[#6c2c8b] font-medium relative group py-2">
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#6c2c8b] font-medium relative group py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          {/* Contact/Call buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-[#6c2c8b] text-[#6c2c8b] hover:bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] hover:text-white rounded-lg transition-colors px-4">
              <PhoneCall className="w-4 h-4 mr-2" />
              +91 9876543210
            </Button>
            <Button variant="outline" className=" bg-[#6c2c8b] text-white border-[#6c2c8b] hover:bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] hover:text-white rounded-lg shadow-sm px-4">
              <Home className="w-4 h-4 mr-2" />
              Home Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#6c2c8b] hover:bg-[#6c2c8b]/5 transition-colors font-medium px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[#6c2c8b] hover:bg-[#6c2c8b]/5 transition-colors font-medium px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="px-4">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center w-full text-left text-gray-700 hover:text-[#6c2c8b] transition-colors font-medium py-2"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#6c2c8b]/20">
                    {allServices.map((service, i) => (
                      <Link 
                        key={i}
                        href={service.href}
                        className="flex items-center text-gray-700 hover:text-[#6c2c8b] transition-colors text-sm py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.icon}
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                href="/blogs" 
                className="text-gray-700 hover:text-[#6c2c8b] hover:bg-[#6c2c8b]/5 transition-colors font-medium px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#6c2c8b] hover:bg-[#6c2c8b]/5 transition-colors font-medium px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 mt-4 px-4 py-2">
                <Button variant="outline" className="w-full border-[#6c2c8b] text-[#6c2c8b] hover:bg-[#6c2c8b]/5 rounded-lg">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  +91 9876543210
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white hover:opacity-90 rounded-lg">
                  <Home className="w-4 h-4 mr-2" />
                  Home Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}