
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Bandage, Scissors, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KinesioTapingTherapyPage() {
  const benefits = [
    "Pain relief through neuromuscular stimulation",
    "Support for injured or weak muscles",
    "Improved lymphatic drainage and reduced swelling",
    "Enhanced athletic performance and recovery",
    "Postural correction and joint alignment",
    "Non-restrictive—allows full range of motion"
  ]

  const conditions = [
    "Muscle strains and ligament sprains",
    "Tendonitis and bursitis",
    "Post-surgical swelling",
    "Joint instability (shoulder, knee, ankle)",
    "Plantar fasciitis",
    "Carpal tunnel syndrome",
    "Postural imbalances",
    "Sports injuries and overuse syndromes"
  ]

  const whyChooseUs = [
    "Certified physiotherapists trained in Kinesio taping techniques",
    "Integrated care with manual therapy, dry needling, and rehab",
    "Modern clinic in the heart of Delhi",
    "Personalized treatment plans for every patient",
    "Trusted provider of physiotherapy services in Delhi"
  ]

  const faqs = [
    {
      question: "Is Kinesio taping painful?",
      answer: "No. It's a gentle, non-invasive technique. Most patients don't feel the tape once it's applied."
    },
    {
      question: "Can I shower with the tape on?",
      answer: "Yes. The tape is water-resistant and can stay on during showers or workouts."
    },
    {
      question: "How long does the tape stay on?",
      answer: "Typically 3–5 days. It depends on your skin type, activity level, and the area taped."
    },
    {
      question: "Is Kinesio taping only for athletes?",
      answer: "Not at all. It's effective for anyone dealing with pain, swelling, or joint/muscle issues."
    }
  ]

  const howItWorks = [
    {
      title: "Neuromuscular Feedback",
      description: "The tape stimulates sensory receptors in the skin, sending signals to the brain that help reduce pain and improve body awareness (proprioception)."
    },
    {
      title: "Improved Circulation",
      description: "By lifting the skin microscopically, it enhances blood and lymphatic flow, reducing swelling and inflammation."
    },
    {
      title: "Joint Support Without Restriction",
      description: "Unlike rigid athletic tape, Kinesio tape is elastic and moves with your body, offering support while maintaining full range of motion."
    },
    {
      title: "Muscle Re-education",
      description: "It helps retrain muscles that are weak, overused, or misaligned by guiding movement and posture."
    },
    {
      title: "Pain Modulation",
      description: "The tape may reduce pain by altering the way pain signals are transmitted through the nervous system."
    }
  ]

  const sessionSteps = [
    {
      title: "Assessment",
      description: "Assess your condition and movement patterns",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Tape Selection",
      description: "Select the appropriate tape type and tension",
      icon: <Bandage className="w-8 h-8" />
    },
    {
      title: "Application",
      description: "Apply the tape using specific cuts (I, Y, X, fan)",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      title: "Aftercare Guidance",
      description: "Guidance on wearing duration and aftercare tips",
      icon: <ArrowRight className="w-8 h-8" />
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
                  Kinesio Taping Therapy in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Support. Stability. Smart Recovery.</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer Kinesio taping in Delhi as part of our advanced physiotherapy services. This innovative taping technique is designed to support injured muscles and joints, reduce pain, and enhance performance—without restricting your natural movement.
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
                  In-Clinic Therapy Available
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4e54c8]/5 to-[#8f94fb]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#4e54c8]/10 to-[#8f94fb]/10 rounded-2xl flex items-center justify-center">
                  <Bandage className="w-24 h-24 text-[#4e54c8]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8f94fb] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4e54c8] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Kinesio Taping */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What is Kinesio Taping?</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Kinesio Taping is a therapeutic technique that uses elastic, skin-friendly tape to mimic the natural elasticity of human skin. When applied strategically, it lifts the skin slightly to:
                </p>
                <ul className="text-lg text-gray-700 font-body leading-relaxed list-disc pl-6 space-y-2">
                  <li>Improve blood and lymphatic circulation</li>
                  <li>Reduce inflammation and swelling</li>
                  <li>Support muscles and joints without limiting range of motion</li>
                  <li>Stimulate neurological and sensory pathways to reduce pain</li>
                </ul>
                <p className="text-lg text-gray-700 font-body leading-relaxed mt-6">
                  Originally developed by Dr. Kenzo Kase in the 1970s, Kinesio taping is now widely used by physiotherapists, athletes, and rehabilitation specialists worldwide.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">How Does Kinesio Taping Work?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="mb-10">
            <p className="text-lg text-gray-700 font-body leading-relaxed text-center max-w-3xl mx-auto">
              Kinesio taping works by gently lifting the skin to create space between the skin and underlying tissues, which helps reduce pressure, improve circulation, and support healing.
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
              At Kynexa, our trained physiotherapists apply the tape using specific patterns and tension levels based on your condition—ensuring optimal therapeutic effect as part of our integrated physiotherapy services in Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Benefits of Kinesio Taping</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 text-[#4e54c8] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 font-body">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Conditions Treated with Kinesio Taping</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-body max-w-2xl mx-auto">
              Our Kinesio taping therapy in Delhi is effective for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <Bandage className="w-5 h-5 text-[#4e54c8] mt-1 mr-3 flex-shrink-0" />
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

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-body">
              The tape is water-resistant, latex-free, and can be worn for 3–5 days.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">Book Your Appointment Today</h2>
            <p className="text-lg font-body opacity-90">
              Looking for expert Kinesio taping in Delhi? At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we combine science, skill, and care to help you heal faster and move better.
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
