"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, Instagram, Facebook, Twitter, Headphones, ArrowRight, MessageSquare, Users, PhoneCall, Home, Loader2, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import FormDialog from "@/components/formDialog"
import Footer from "@/components/Footer"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 8868879387", "+91 1145545245"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@kynexaphysio.com"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: [
        "D 16, Basement, Hauz Khas, New Delhi - 110016",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Clinic Hours",
      details: [
        "Monday to Saturday: 08:00 AM – 08:00 PM",
      ],
    },
  ] 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     setIsSubmitting(true)
 
     try {
       const payload = {
         ...formData,
         subject: `Contact Form Submission from ${formData.name}`,
       }
 
       const res = await fetch("/api/send-email", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(payload),
       })
 
       if (!res.ok) throw new Error("Failed to send email")
 
       setIsSubmitted(true)
       setTimeout(() => {
         setIsSubmitted(false)
         setFormData({
           name: "",
           email: "",
           phone: "",
           message: "",
         })
       }, 3000)
     } catch (err) {
       console.error(err)
       alert("Something went wrong sending your request. Please try again.")
     } finally {
       setIsSubmitting(false)
     }
   }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                Let's Start Your Healing Journey
              </h1>
              <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                We're just one message away from helping you move better, feel stronger, and live pain-free.
              </p>
              <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                Whether you're ready to book your first session, have questions about our therapies, or simply want to say hello—we'd love to hear from you. At Kynexa, we believe healing begins with connection. So go ahead, reach out. Your recovery story starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)}
                className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl flex items-center justify-center w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                  Book Consultation
                </Button>
                <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent rounded-xl flex items-center justify-center w-full"
                >
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  Contact Us
                </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/5 to-[#9d4ed8]/5 rounded-3xl"></div>
                <Image
                  src="/contact-us.jpg"
                  alt="Contact Us"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#6c2c8b] font-sans">{info.title}</h3>
                  </div>
                  <div className="space-y-1 text-center">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-bold text-xs">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 font-medium flex items-center justify-center">
              <FaWhatsapp className="w-5 h-5 mr-2 text-green-500" />
              WhatsApp: +91 8868879387
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section with Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Quick Contact Form - Redesigned and Compact */}
            <div className="lg:col-span-5">
              <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center">
                        <div className="bg-[#6c2c8b]/10 p-2 rounded-full mr-3">
                          <MessageSquare className="w-5 h-5 text-[#6c2c8b]" />
                        </div>
                        <h2 className="text-xl font-bold text-[#6c2c8b] font-heading">Quick Contact Form</h2>
                      </div>
                      <p className="text-gray-600 text-sm font-body">
                        Not sure where to begin? Tell us what's troubling you, and we'll point you toward the right solution.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="text-center py-10 space-y-4">
                        <div className="w-16 h-16 bg-[#6c2c8b]/10 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle className="w-8 h-8 text-[#6c2c8b]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#6c2c8b]">Message Sent Successfully!</h3>
                        <p className="text-gray-600 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3">
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
                          placeholder="Email Address (Optional)"
                          value={formData.email}
                          onChange={handleChange}
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
                        <Textarea
                          name="message"
                          placeholder="Your Message / Query"
                          rows={10}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="border-gray-200 rounded-md resize-none text-sm"
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white hover:opacity-80 py-2 rounded-md transition-all duration-200 text-sm"
                        >
                          {isSubmitting ? (
                            <><Loader2 className="animate-spin w-4 h-4 mr-2" /><span>submitting...</span></>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Let's Talk
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Face-to-Face Chat & Map */}
            <div className="lg:col-span-7 space-y-6">
              {/* Face-to-Face Chat */}
              <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6c2c8b]/10 p-2 rounded-full mt-0.5">
                      <Headphones className="w-5 h-5 text-[#6c2c8b]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#6c2c8b] font-heading mb-2">Prefer a Face-to-Face Chat?</h3>
                      <p className="text-gray-600 text-sm font-body">
                        We offer free 10-minute consultations to help you understand which therapy suits you best. Just mention it when you reach out!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Integration */}
              <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.03550782994446!2d77.19877459431524!3d28.552698080165765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20b4aa993fb%3A0x730903fb40df2441!2sd!5e0!3m2!1sen!2sin!4v1753126526937!5m2!1sen!2sin"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kynexa Advanced Physiotherapy Location"
                  ></iframe>
                </CardContent>
              </Card>

              {/* Stay Connected */}
              <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6c2c8b]/10 p-2 rounded-full mt-0.5">
                      <Users className="w-5 h-5 text-[#6c2c8b]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#6c2c8b] font-heading mb-2">Stay Connected</h3>
                      <p className="text-gray-600 text-sm font-body mb-4">
                        Healing never goes out of style. Follow Kynexa for a daily dose of movement, motivation, and momentum.
                      </p>
                      <div className="flex space-x-4">
                        <Link href="https://www.instagram.com/kynexaphysio" className="w-9 h-9 rounded-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                          <Instagram className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.facebook.com/kynexaphysio" className="w-9 h-9 rounded-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                          <Facebook className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/kynexa-advanced-physiotherapy-and-manual-therapy-clinic/" className="w-9 h-9 rounded-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                          <FaLinkedin className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white mb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Ready to Take the First Step?</h2>
            <p className="text-xl text-white/90 font-body">
              Your healing begins the moment you reach out. Don't let pain decide your pace.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsOpen(true)} className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl flex items-center justify-center w-full sm:w-auto">
              <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
              Book Your Appointment Now
            </Button>
            <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent rounded-xl flex items-center justify-center w-full sm:w-auto"
            >
              <PhoneCall className="w-5 h-5 mr-2 flex-shrink-0" />
              Contact Us Now
            </Button>
            </Link>
          </div>
        </div>
      </section>
      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
    </div>
  )
}