"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Zap, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LaserTherapyPage() {
  const benefits = [
    "Reduces inflammation and swelling",
    "Accelerates tissue repair and cell growth",
    "Relieves pain without medication",
    "Enhances wound healing and scar tissue remodeling",
    "Improves joint flexibility and mobility",
    "Stimulates nerve regeneration",
    "Shortens recovery time post-injury or surgery"
  ]

  const conditions = [
    "Arthritis and joint pain",
    "Tendonitis and bursitis",
    "Sciatica and nerve pain",
    "Frozen shoulder",
    "Plantar fasciitis",
    "Carpal tunnel syndrome",
    "Sports injuries and muscle strains",
    "Post-surgical recovery",
    "Chronic back and neck pain"
  ]

  const whyChooseUs = [
    "Certified physiotherapists trained in laser therapy",
    "Integrated care with manual therapy, dry needling, and rehab",
    "Modern clinic with advanced laser equipment",
    "Evidence-based protocols for faster, safer recovery",
    "Trusted provider of physiotherapy services in Delhi"
  ]

  const faqs = [
    {
      question: "Is laser therapy safe?",
      answer: "Yes. It's FDA-approved, non-invasive, and has no known side effects when administered by trained professionals."
    },
    {
      question: "How many sessions will I need?",
      answer: "It varies. Some conditions improve in 3–5 sessions, while chronic issues may require 8–10."
    },
    {
      question: "Does laser therapy hurt?",
      answer: "Not at all. Most patients feel a mild warmth or tingling during treatment."
    },
    {
      question: "Can laser therapy be combined with other treatments?",
      answer: "Absolutely. At Kynexa, we often combine it with manual therapy, dry needling, and rehab for optimal results."
    }
  ]

  const howItWorks = [
    {
      title: "Photon Absorption",
      description: "The laser emits light at specific wavelengths (typically 600–1000 nm), which is absorbed by chromophores in the mitochondria of cells."
    },
    {
      title: "ATP Production",
      description: "This stimulates the production of adenosine triphosphate (ATP), the energy currency of the cell, boosting cellular metabolism."
    },
    {
      title: "Improved Circulation",
      description: "It increases blood flow and oxygen delivery to the tissues."
    },
    {
      title: "Cellular Repair",
      description: "Enhances collagen synthesis, reduces inflammation, and promotes tissue regeneration."
    },
    {
      title: "Pain Modulation",
      description: "Alters nerve conduction and reduces pain signals by stimulating endorphin release."
    }
  ]

  const sessionSteps = [
    {
      title: "Assessment",
      description: "We evaluate your condition and determine the appropriate laser settings",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Application",
      description: "The laser device is applied to the affected area for 5–15 minutes",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Sensation",
      description: "Most patients feel a gentle warmth or tingling—no pain or discomfort",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Post-Care",
      description: "You can resume normal activities immediately after the session",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 mt-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                  Laser Therapy in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Light-Powered Healing for Pain-Free Living</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer advanced laser therapy in Delhi to accelerate healing, reduce pain, and restore function. This non-invasive, scientifically backed treatment uses focused light energy to stimulate cellular repair and improve tissue health.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#4e54c8] hover:bg-white/90 px-6 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Learn About Our Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4e54c8]/5 to-[#8f94fb]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#4e54c8]/10 to-[#8f94fb]/10 rounded-2xl flex items-center justify-center">
                  <Zap className="w-24 h-24 text-[#4e54c8]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8f94fb] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4e54c8] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Laser Therapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What is Laser Therapy?</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Laser therapy, also known as Low-Level Laser Therapy (LLLT) or Photobiomodulation, involves the application of low-intensity laser light to injured or painful areas of the body. Unlike surgical lasers, low-level laser therapy (LLLT) does not cut, burn, or damage tissue. Instead, it penetrates the skin to stimulate healing at the cellular level—without any discomfort or downtime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">How Does Laser Therapy Work?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="mb-10">
            <p className="text-lg text-gray-700 font-body leading-relaxed text-center max-w-3xl mx-auto">
              Laser therapy works through a process called photobiomodulation, where light energy is absorbed by the cells and converted into biochemical energy. Here's what happens:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-lg flex items-center justify-center text-white mr-3">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#4e54c8] font-heading">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 font-body">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 font-body">
              This makes laser therapy a cornerstone of physiotherapy in Delhi for treating both acute and chronic conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Benefits of Laser Therapy</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-lg flex items-center justify-center text-white mb-4">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 font-body">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Conditions Treated with Laser Therapy</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-body max-w-2xl mx-auto">
              Our laser therapy in Delhi is effective for a wide range of conditions, including:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <Zap className="w-5 h-5 text-[#4e54c8] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 font-body">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Why Choose Kynexa?</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What to Expect During Your Session</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionSteps.map((step, index) => (
              <Card key={index} className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#4e54c8] font-heading">{index + 1}. {step.title}</h3>
                  <p className="text-gray-600 font-body text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">Book Your Appointment Today</h2>
            <p className="text-lg font-body opacity-90">
              If you're looking for laser therapy in Delhi that delivers real results, trust the experts at Kynexa Advanced Physiotherapy and Manual Therapy Clinic. Let us help you heal faster, move better, and live pain-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Call Us</h3>
              <p className="font-body">[Phone Number]</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Email Us</h3>
              <p className="font-body">[Email Address]</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Visit Us</h3>
              <p className="font-body">[Clinic Address]</p>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-white hover:bg-white/90 text-[#4e54c8] px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#4e54c8] font-heading mb-3">{index + 1}. {faq.question}</h3>
                  <p className="text-gray-700 font-body">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Kynexa Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 font-body">
              Kynexa Advanced Physiotherapy and Manual Therapy Clinic - Empowering you to heal, move, and thrive.
            </p>
            <div className="mt-4">
              <Link href="/services" className="inline-flex items-center text-[#4e54c8] font-medium hover:underline">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to all services
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}