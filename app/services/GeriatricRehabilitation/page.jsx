"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Accessibility, ShieldCheck, Brain, Activity, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GeriatricRehabilitationPage() {
  const benefits = [
    "Enhanced walking speed and coordination",
    "Reduced fear and risk of falls",
    "Improved strength, balance, and flexibility",
    "Better posture and joint alignment",
    "Increased independence in daily tasks",
    "Faster recovery from illness, surgeries, or hospitalization",
    "Boosted confidence, cognitive alertness, and mood"
  ]

  const conditions = [
    "Have a history of falls or fear of falling",
    "Experience poor balance, dizziness, or unsteady gait",
    "Are recovering from hip, knee, or spinal surgery",
    "Suffer from arthritis, Parkinson's, or stroke after-effects",
    "Deal with age-related muscle weakness (sarcopenia)",
    "Have difficulty walking, climbing stairs, or standing for long",
    "Live with conditions like osteoporosis, neuropathy, or vertigo",
    "Need support with daily activities and functional mobility"
  ]

  const whyChooseUs = [
    "Experienced Geriatric Physiotherapists trained in age-specific care",
    "Compassionate, One-on-One Support tailored to each person's pace",
    "Holistic Treatment Approach that integrates mind, body, and function",
    "Home Safety & Fall Prevention Guidance beyond the clinic",
    "Modern Tools including balance systems, resistance bands, and sensor mats",
    "Education for Families & Caregivers to ensure support at home"
  ]

  const programComponents = [
    "Balance Training – Static and dynamic balance exercises with stability tools",
    "Gait Training – Walking pattern correction and assistive device training",
    "Strength Training – Progressive resistance exercises for legs, core, and upper body",
    "Flexibility Training – Joint mobility and stretching programs",
    "Fall Prevention – Risk assessment and environmental safety education",
    "Functional Training – Practice of daily activities and movements",
    "Cognitive Training – Dual-task exercises combining physical and mental challenges"
  ]

  const faqs = [
    {
      question: "Is this program safe for elderly patients with multiple health conditions?",
      answer: "Yes. Every session is medically supervised, and programs are tailored to individual needs and tolerance."
    },
    {
      question: "How soon after a fall or surgery can one begin rehab?",
      answer: "Usually within a few days to weeks, depending on medical clearance. Sooner rehab often leads to faster recovery."
    },
    {
      question: "Can you help someone using a walker or wheelchair?",
      answer: "Absolutely. We adapt exercises and training to suit all mobility levels, including those needing assistive devices."
    },
    {
      question: "Do you offer family education?",
      answer: "Yes, we educate caregivers and families on safe transfers, exercises, and daily movement support."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 mt-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                  Geriatric Rehabilitation in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Strength. Stability. Safe Independence.</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, our Geriatric Rehabilitation program in Delhi is thoughtfully designed to help older adults maintain independence, restore functional mobility, and prevent falls. With a structured blend of Balance Training and Gait Re-education, we address age-related physical decline and promote safe, confident movement for daily living.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl"
                >
                  <Home className="w-5 h-5 mr-2" />
                  In-Home Therapy Available
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/5 to-[#9d4ed8]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#6c2c8b]/10 to-[#9d4ed8]/10 rounded-2xl flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <Accessibility className="w-16 h-16 text-[#6c2c8b]" />
                    <Users className="w-16 h-16 text-[#9d4ed8]" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Geriatric Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Geriatric Rehabilitation?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Geriatric Rehabilitation is a specialized branch of physiotherapy that focuses on helping older adults recover from injuries, adapt to age-related changes, and preserve their independence. As we age, issues like reduced balance, slower reaction time, joint degeneration, and chronic conditions can affect our ability to move safely and confidently.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              At Kynexa, we offer personalized rehabilitation plans that include strength training, balance enhancement, joint mobility, and gait improvement, aiming to reduce fall risk, support post-surgical recovery, and restore confidence in movement—at any age.
            </p>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Our Comprehensive Program</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programComponents.map((component, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed">{component}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Conditions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6">Benefits of Our Program</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Who Can Benefit */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6">Who Can Benefit?</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{condition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa Advanced Physiotherapy?</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
            <CardContent className="p-8">
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During Your Session</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Balance Training</h3>
                <p className="text-gray-600 font-body text-sm">
                  Seated and standing balance exercises with stability tools and real-time feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Accessibility className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Gait Training</h3>
                <p className="text-gray-600 font-body text-sm">
                  Assisted walking and cue-based gait training with or without assistive devices.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Strengthening</h3>
                <p className="text-gray-600 font-body text-sm">
                  Progressive resistance exercises using safe, age-appropriate equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Education</h3>
                <p className="text-gray-600 font-body text-sm">
                  Fall prevention education and home exercise program guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Embrace Active Aging with Confidence</h2>
            <p className="text-lg text-white/80 font-body">
              Age gracefully with our specialized geriatric rehabilitation program. Our compassionate team is dedicated to helping you maintain independence, prevent falls, and enjoy life to the fullest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Call Us</h3>
              <p className="text-white/80 font-body">+91 9876543210</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Email Us</h3>
              <p className="text-white/80 font-body">info@kynexa.com</p>
            </div>
          </div>

          <div className="space-y-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm inline-block mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Delhi, India</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Mon-Sat: 9AM-7PM</p>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#6c2c8b] font-heading mb-3">{index + 1}. {faq.question}</h3>
                  <p className="text-gray-600 font-body">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}