"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Bone, ArrowRight, Lightbulb, MessageCircle, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChiropracticCarePage() {
  const benefits = [
    "Drug-free pain relief",
    "Improved spinal mobility and alignment",
    "Decreased nerve compression and radiating symptoms",
    "Reduced muscle tightness and joint stiffness",
    "Headache and migraine management",
    "Better posture, core stability, and body awareness",
    "Enhanced performance and injury recovery",
    "Boosted nervous system function and energy levels"
  ]

  const conditions = [
    "Chronic lower back or neck pain",
    "Herniated or slipped discs",
    "Cervical and lumbar spondylosis",
    "Sciatica or radiating leg pain",
    "Migraine and tension-type headaches",
    "Poor posture and tech-neck syndrome",
    "Scoliosis and postural asymmetries",
    "Jaw pain (TMJ dysfunction)",
    "Sports-related misalignments and overuse stress",
    "Joint restrictions or stiffness due to sedentary lifestyle or injury"
  ]

  const whyChooseUs = [
    "Experienced professionals with specialized training in chiropractic assessment and treatment techniques",
    "Integrated Approach combining chiropractic with physiotherapy, manual therapy, and exercise science",
    "Customized Sessions based on postural and lifestyle assessment",
    "Patient Education Focused – Empowering you with tools to maintain alignment and prevent recurrence",
    "Comfort-focused setting that ensures privacy, safety, and quality care"
  ]

  const treatmentApproach = [
    "Spinal Adjustments – Precise, controlled movements to restore proper joint alignment and reduce nerve interference",
    "Soft Tissue Therapy – Manual techniques to release muscle tension and improve flexibility",
    "Postural Correction – Assessment and correction of postural imbalances that contribute to pain",
    "Exercise Prescription – Targeted exercises to strengthen supporting muscles and maintain alignment",
    "Lifestyle Counseling – Education on ergonomics, sleep positions, and daily habits for spinal health",
    "Preventive Care – Regular maintenance to prevent future problems and optimize spinal function"
  ]

  const faqs = [
    {
      question: "Is chiropractic care safe?",
      answer: "Yes! When performed by trained professionals, chiropractic adjustments are safe, precise, and effective."
    },
    {
      question: "Will I feel pain during adjustment?",
      answer: "Most patients feel relief. You may hear a gentle 'pop' as gas is released from the joint, which is completely normal."
    },
    {
      question: "How many sessions will I need?",
      answer: "It varies per person. Some feel improvement after 1–2 sessions, while others may benefit from a short course for lasting results."
    },
    {
      question: "Can I receive chiropractic therapy alongside physiotherapy?",
      answer: "Absolutely. In fact, combining the two often leads to faster, more sustainable recovery."
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
                  Chiropractic Care in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Realign. Rebalance. Restore.</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer Chiropractic Care in Delhi as part of our integrative approach to long-term pain relief and musculoskeletal wellness. This hands-on technique focuses on spinal adjustments and joint realignment to restore nerve function, correct posture, and enhance the body's self-healing ability.
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
                  Learn About Our Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/5 to-[#9d4ed8]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#6c2c8b]/10 to-[#9d4ed8]/10 rounded-2xl flex items-center justify-center">
                  <Bone className="w-24 h-24 text-[#6c2c8b]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Chiropractic Care */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Chiropractic Care?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Chiropractic care is a health care discipline that focuses on the diagnosis, treatment, and prevention of mechanical disorders of the musculoskeletal system, especially the spine. It emphasizes the body's ability to heal itself without the use of drugs or surgery.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Our skilled chiropractors use hands-on spinal manipulation and other alternative treatments to properly align the body's musculoskeletal structure, particularly the spine, which will enable the body to heal itself naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Our Treatment Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentApproach.map((approach, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed">{approach}</p>
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
                <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6">Benefits of Chiropractic Care</h3>
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

            {/* Conditions Treated */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6">Conditions We Treat</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Bone className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During Your Visit</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Assessment</h3>
                <p className="text-gray-600 font-body text-sm">
                  Comprehensive evaluation of your spinal health, posture, and movement patterns to identify problem areas.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Bone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Treatment</h3>
                <p className="text-gray-600 font-body text-sm">
                  Gentle, precise adjustments to realign your spine and restore proper function to affected joints.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Recovery Plan</h3>
                <p className="text-gray-600 font-body text-sm">
                  Personalized recovery plan including exercises, lifestyle modifications, and follow-up care.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Start Your Journey to Better Spinal Health</h2>
            <p className="text-lg text-white/80 font-body">
              Experience the difference that expert chiropractic care can make. Our integrated approach combines traditional chiropractic techniques with modern physiotherapy for optimal results.
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