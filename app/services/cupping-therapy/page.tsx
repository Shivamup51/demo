"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, Waves, CheckCircle, ArrowLeft, Clock, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CuppingTherapyPage() {
  const benefits = [
    "Improved blood circulation to muscles and tissues",
    "Relief from muscle tension and stiffness",
    "Reduction in stress and anxiety",
    "Faster recovery from injuries and inflammation",
    "Relief from headaches, migraines, and fatigue",
    "Detoxification by stimulating lymphatic flow",
    "Improved posture and mobility when combined with manual therapy",
  ]

  const conditions = [
    "Chronic back and neck pain",
    "Frozen shoulder",
    "Sciatica",
    "Sports injuries",
    "Fibromyalgia",
    "Arthritis and joint stiffness",
    "Headaches and migraines",
    "Postural imbalances",
    "Muscle spasms and knots",
    "Anxiety and fatigue",
  ]

  const whyChooseUs = [
    "Experienced physiotherapists trained in advanced cupping techniques",
    "Modern, hygienic clinic in the heart of Delhi",
    "Integrated care combining cupping with manual therapy, dry needling, and rehabilitation",
    "Personalized treatment plans tailored to your condition and goals",
    "Trusted provider of physiotherapy in Delhi with a growing base of happy clients",
  ]

  const faqs = [
    {
      question: "Is cupping therapy painful?",
      answer: "Not really. You may feel a gentle pulling or warmth during the session. Most people find it relaxing.",
    },
    {
      question: "Are the circular marks permanent?",
      answer: "No. The marks usually fade within 3–7 days and are a normal response to increased blood flow.",
    },
    {
      question: "How many sessions will I need?",
      answer: "It varies. Some feel relief after one session, while others may need 3–5 sessions for lasting results.",
    },
    {
      question: "Can cupping be combined with other therapies?",
      answer: "Absolutely. At Kynexa, we often combine cupping with manual therapy, dry needling, and rehab exercises for better outcomes.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20">Traditional Healing</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] font-heading leading-tight">
                  Cupping Therapy in Delhi
                </h1>
                <p className="text-xl text-[#2E3A59] font-body">Ancient Wisdom. Modern Healing.</p>
                <p className="text-lg text-[#6B7280] font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer cupping therapy in Delhi as part of our holistic physiotherapy services. This time-tested technique, rooted in traditional medicine and now backed by modern science, is designed to relieve pain, improve circulation, and promote deep tissue healing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#2E3A59] to-[#A259FF] hover:from-[#A259FF] hover:to-[#2E3A59] text-white px-8 py-6 text-lg font-medium transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 bg-transparent"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Home Visit Available
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                <div className="w-full h-96 bg-gradient-to-br from-[#A259FF]/10 to-[#2E3A59]/10 rounded-2xl flex items-center justify-center">
                  <Waves className="w-24 h-24 text-[#2E3A59]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cupping */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What is Cupping Therapy?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7280] font-body leading-relaxed mb-6">
              Cupping therapy is a non-invasive treatment where specialized cups are placed on the skin to create suction. This suction gently lifts the skin and underlying tissues, stimulating blood flow, loosening tight muscles, and encouraging lymphatic drainage. It's often described as a "reverse massage" because instead of applying pressure, it lifts and decompresses the tissues.
            </p>

            <div className="bg-[#F9FAFB] rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold text-[#111827] font-heading mb-4">There are two main types:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A259FF] rounded-full mt-3"></div>
                  <p className="text-[#6B7280] font-body">
                    <strong className="text-[#111827]">Dry Cupping:</strong> Suction is applied without any incisions.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A259FF] rounded-full mt-3"></div>
                  <p className="text-[#6B7280] font-body">
                    <strong className="text-[#111827]">Wet Cupping (Hijama):</strong> Involves light skin pricks to draw out small amounts of blood, used for detoxification.
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-lg text-[#6B7280] font-body leading-relaxed">
              At Kynexa, we primarily use dry cupping as part of our physiotherapy services in Delhi, ensuring a safe and comfortable experience.
            </p>
          </div>
        </div>
      </section>

      {/* How Does Cupping Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">How Does Cupping Therapy Work?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                Cupping therapy works by creating a vacuum-like suction on the skin using specialized cups. This gentle suction raises the skin and underlying tissues, helping to:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Increase blood circulation to the targeted area</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Loosen tight muscles and fascia</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Stimulate lymphatic drainage to remove toxins</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Trigger the body's natural healing response</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#111827] font-heading mb-4">Two Main Methods:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2E3A59] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-[#111827] mb-2">Dry Cupping</h4>
                      <p className="text-[#6B7280] font-body text-sm">Cups are placed on the skin and left for 5–15 minutes to create suction. This draws blood to the surface and promotes healing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2E3A59] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-[#111827] mb-2">Gliding Cupping</h4>
                      <p className="text-[#6B7280] font-body text-sm">Cups are smoothly moved over the skin using oil, creating a massage-like effect that's perfect for relaxing muscles and releasing fascia.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                At Kynexa, we use safe, hygienic, and clinically approved cupping techniques as part of our integrated physiotherapy services in Delhi to ensure optimal results with minimal discomfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Conditions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Benefits of Cupping Therapy</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                      <p className="text-[#6B7280] font-body">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conditions Treated */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Conditions We Treat with Cupping</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Waves className="w-5 h-5 text-[#2E3A59] mt-1 flex-shrink-0" />
                      <p className="text-[#6B7280] font-body">{condition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Why Choose Kynexa for Cupping Therapy?</h2>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                    <p className="text-[#6B7280] font-body">{reason}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What to Expect During Your Session</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Assessment</h3>
                <p className="text-[#6B7280] font-body text-sm">Your session begins with a detailed assessment of your symptoms and goals.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Waves className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Apply Cups</h3>
                <p className="text-[#6B7280] font-body text-sm">Apply cups to specific areas using gentle suction.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Treatment</h3>
                <p className="text-[#6B7280] font-body text-sm">Leave them in place for 5–15 minutes or use gliding cupping for a massage-like effect.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Post-Care</h3>
                <p className="text-[#6B7280] font-body text-sm">Provide post-session care tips to enhance results.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-[#6B7280] font-body">
              You may notice temporary circular marks on the skin—these are not bruises but signs of increased blood flow and typically fade within a few days.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Book Your Appointment Today</h2>
            <p className="text-lg text-[#6B7280] font-body">
              If you're looking for cupping therapy in Delhi that blends tradition with clinical precision, Kynexa Advanced Physiotherapy and Manual Therapy Clinic is your destination. Let us help you restore balance, relieve pain, and rejuvenate your body.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#111827] font-heading mb-2">Call Us</h3>
              <p className="text-[#6B7280] font-body">[Phone Number]</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#111827] font-heading mb-2">Email Us</h3>
              <p className="text-[#6B7280] font-body">[Email Address]</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="w-5 h-5 text-[#2E3A59]" />
              <p className="text-[#6B7280] font-body">Visit us: [Clinic Address]</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-[#2E3A59]" />
              <p className="text-[#6B7280] font-body">Hours: [Operating Hours]</p>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-gradient-to-r from-[#2E3A59] to-[#A259FF] hover:from-[#A259FF] hover:to-[#2E3A59] text-white px-8 py-6 text-lg font-medium transition-all duration-300">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Frequently Asked Questions (FAQs)</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#111827] font-heading mb-3">{index + 1}. {faq.question}</h3>
                  <p className="text-[#6B7280] font-body">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image src="/logo.png" alt="KYNEXA PHYSIO Logo" width={120} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-[#6B7280] font-body">
              KYNEXA PHYSIO - Providing exceptional physiotherapy and rehabilitation services with a personal touch.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
