"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Calendar, Send, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function FormDialog({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDateTime: null,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds and close dialog
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", address: "", preferredDateTime: null, message: "" })
      onClose()
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      preferredDateTime: date || null,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-xl border-none shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-center font-bold text-[#6c2c8b] font-heading">Provide Your Information</DialogTitle>
        </DialogHeader>
        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#6c2c8b]/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-[#6c2c8b]" />
            </div>
            <h3 className="text-lg font-bold text-[#6c2c8b]">Request Sent Successfully!</h3>
            <p className="text-gray-600 text-sm">We'll contact you within 24 hours to confirm your session.</p>
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
                  selected={formData.preferredDateTime}
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
  )
}