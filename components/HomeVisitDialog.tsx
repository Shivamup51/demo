"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Send, CheckCircle, Home } from "lucide-react"

export function HomeVisitDialog() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDateTime: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", address: "", preferredDateTime: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
          <Home className="w-5 h-5 mr-2" />
          Request Home Visit
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
            <Input
              name="preferredDateTime"
              type="datetime-local"
              placeholder="Preferred Date & Time"
              value={formData.preferredDateTime}
              onChange={handleChange}
              required
              className="border-gray-200 rounded-md h-10 text-sm"
            />
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
  )
}