"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X, ChevronDown, Heart, Brain, Activity, Dumbbell, Users, Home, PhoneCall, Syringe, Waves, Zap, Bone, Bandage, Accessibility, Send, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ScrollArea } from "./ui/scroll-area"

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDateTime: null as Date | null,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", address: "", preferredDateTime: null, message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      preferredDateTime: date || null,
    }))
  }

  const allServices = [
    { name: "Dry Needling Therapy", href: "/services/DryNeedling", icon: <Syringe className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Cupping Therapy", href: "/services/cupping-therapy", icon: <Waves className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Kinesio Taping", href: "/services/KinesioTapingTherapy", icon: <Bandage className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Laser Therapy", href: "/services/LaserTherapy", icon: <Zap className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Manual Therapy", href: "/services/ManualTherapy", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Electrotherapy", href: "/services/Electrotherapy", icon: <Zap className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Sports Physiotherapy", href: "/services/SportsPhysiotherapy", icon: <Dumbbell className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Cardio & Pulmonary Rehab", href: "/services/CardioPulmonaryRehab", icon: <Heart className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Chiropractic Care", href: "/services/ChiropracticCare", icon: <Bone className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Geriatric Rehabilitation", href: "/services/GeriatricRehabilitation", icon: <Accessibility className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Post Surgical Rehabilitation", href: "/services/PostSurgicalRehabilitation", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Spine Alignment Therapy", href: "/services/SpineAlignmentTherapy", icon: <Bone className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Neuro Rehabilitation", href: "/services/NeuroRehabilitation", icon: <Brain className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Pre & Post Natal Physiotherapy", href: "/services/PreAndPostNatalPhysiotherapy", icon: <Heart className="w-4 h-4 mr-2 text-[#6c2c8b]" /> }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Kynexa Logo" width={120} height={30} className="h-10 w-auto sm:h-12" />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#6c2c8b] font-medium relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#6c2c8b] font-medium relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Services Dropdown (Desktop only) */}
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
                className="w-full max-w-[900px] bg-white shadow-xl p-6 rounded-xl mt-4 border border-gray-100 lg:block hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto">
                  {allServices.map((service, i) => (
                    <DropdownMenuItem 
                      key={i} 
                      asChild 
                      className="rounded-md hover:bg-gray-50 focus:bg-gray-50 transition-all duration-200 py-3 px-4"
                    >
                      <Link href={service.href} className="flex items-center text-gray-700 hover:text-[#6c2c8b] font-medium text-sm">
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
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" className="border-[#6c2c8b] text-[#6c2c8b] hover:bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] hover:text-white rounded-lg transition-colors px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base">
              <PhoneCall className="w-4 h-4 mr-2" />
              +91 8868879387
            </Button>
            <div className="flex justify-center">
                 <Link href="/home-visit">
                 <Button 
                  className="w-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white hover:opacity-90 rounded-lg text-sm py-2.5">
                    <Home className="w-4 h-4 mr-2" />
                    Home Visit
                  </Button>
                 </Link>
                </div>  
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
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
                  <ScrollArea className="mt-2 pl-4 space-y-2 max-h-[50vh] overflow-y-auto">
                    {allServices.map((service, i) => (
                      <Link 
                        key={i}
                        href={service.href}
                        className="flex items-center text-gray-700 hover:text-[#6c2c8b] transition-colors text-sm py-2 block"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsServicesOpen(false)
                        }}
                      >
                        {service.icon}
                        {service.name}
                      </Link>
                    ))}
                  </ScrollArea>
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
                <Button variant="outline" className="w-full border-[#6c2c8b] text-[#6c2c8b] hover:bg-[#6c2c8b]/5 rounded-lg text-sm py-2.5">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  +91 8868879387
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white hover:opacity-90 rounded-lg text-sm py-2.5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Home Visit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-white rounded-xl border-none shadow-xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-[#6c2c8b] font-heading">Request a Home Visit</DialogTitle>
                    </DialogHeader>
                    {isSubmitted ? (
                      <div className="text-center py-8 space-y-4">
                        <div className="w-16 h-16 bg-[#6c2c8b]/10 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle className="w-8 h-8 text-[#6c2c8b]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#6c2c8b]">Request Sent Successfully!</h3>
                        <p className="text-gray-600 text-sm">We'll contact you within 24 hours to confirm your home visit.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-200 rounded-md h-10 text-sm"
                        />
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-200 rounded-md h-10 text-sm"
                        />
                        <Input
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="border-gray-200 rounded-md h-10 text-sm"
                        />
                        <Input
                          name="address"
                          placeholder="Your Address for Home Visit"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="border-gray-200 rounded-md h-10 text-sm"
                        />
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal border-gray-200 rounded-md h-10 text-sm",
                                !formData.preferredDateTime && "text-muted-foreground"
                              )}
                            >
                              <Calendar className="mr-2 h-4 w-4 text-[#6c2c8b]" />
                              {formData.preferredDateTime ? format(formData.preferredDateTime, "PPP HH:mm") : <span>Pick a date & time</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white border-gray-200 rounded-md shadow-xl">
                            <CalendarComponent
                              mode="single"
                              selected={formData.preferredDateTime || undefined}
                              onSelect={handleDateChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="rounded-md border-gray-200"
                            />
                            <div className="p-3 border-t border-gray-200">
                              <Input
                                type="time"
                                value={formData.preferredDateTime ? format(formData.preferredDateTime, "HH:mm") : ""}
                                onChange={(e) => {
                                  if (formData.preferredDateTime) {
                                    const [hours, minutes] = e.target.value.split(":")
                                    const newDate = new Date(formData.preferredDateTime)
                                    newDate.setHours(parseInt(hours), parseInt(minutes))
                                    handleDateChange(newDate)
                                  }
                                }}
                                className="border-gray-200 rounded-md h-10 text-sm"
                              />
                            </div>
                          </PopoverContent>
                        </Popover>
                        <Textarea
                          name="message"
                          placeholder="Your Message / Specific Needs"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="border-gray-200 rounded-md resize-none text-sm"
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white hover:opacity-80 py-2 rounded-md transition-all duration-200 text-sm"
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit Request
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}