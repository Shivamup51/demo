
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Zap, Activity, Waves, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElectrotherapyPage() {
  const benefits = [
    "Decrease pain by blocking pain receptors",
    "Stimulate circulation and cellular healing",
    "Improve muscle strength and endurance",
    "Break muscle spasms and joint stiffness",
    "Facilitate faster recovery from injury or surgery",
    "Reduce inflammation and swelling",
    "Non-invasive and drug-free pain management"
  ]

  const conditions = [
    "Lower back pain and lumbar spondylosis",
    "Osteoarthritis of the knees and spine",
    "Cervical pain and radiating shoulder aches",
    "Neuropathy and nerve compression",
    "Muscle weakness and post-fracture stiffness",
    "Chronic inflammatory conditions like fibromyalgia",
    "Sports injuries and repetitive strain syndromes"
  ]

  const whyChooseUs = [
    "Trained Professionals with hands-on experience in electro-modality protocols",
    "Modern Equipment including TENS, IFT, EMS, Ultrasound, and Shockwave",
    "Personalized therapies evolving with each stage of your recovery",
    "Integrated Care combining electrotherapy with hands-on techniques and therapeutic movement",
    "Transparent Guidance on safety, effectiveness, and home program integration"
  ]

  const electrotherapyTypes = [
    "TENS (Transcutaneous Electrical Nerve Stimulation) – Pain relief through nerve stimulation",
    "IFT (Interferential Therapy) – Deep tissue treatment using crossed electrical currents",
    "EMS (Electrical Muscle Stimulation) – Muscle strengthening and rehabilitation",
    "Ultrasound Therapy – Deep heating for tissue healing and pain relief",
    "Shockwave Therapy – High-energy acoustic waves for chronic conditions",
    "Laser Therapy – Low-level laser for tissue repair and inflammation reduction"
  ]

  const faqs = [
    {
      question: "Is electrotherapy painful?",
      answer: "Not at all. Most patients feel mild tingling or warmth, but the sensation is generally soothing and non-invasive."
    },
    {
      question: "How long is each session?",
      answer: "Sessions typically range between 15–30 minutes, depending on the treatment goal."
    },
    {
      question: "Are there side effects?",
      answer: "Side effects are rare and minimal. Our physiotherapists will assess your suitability before starting."
    },
    {
      question: "Can electrotherapy be combined with other treatments?",
      answer: "Yes, it's often most effective when used alongside manual therapy, dry needling, or corrective exercise."
    }
  ]

  const shockwaveConditions = [
    "Plantar fasciitis",
    "Achilles tendinopathy",
    "Calcific shoulder tendonitis",
    "Tennis/golfer's elbow",
    "Trigger point release and chronic scar tissue breakdown"
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
                  Electrotherapy in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Stimulating Recovery, Naturally and Effectively</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, our Electrotherapy services in Delhi offer a modern, non-invasive solution for pain relief and functional recovery. By using medically guided electrical impulses, we help stimulate muscles, improve circulation, and reduce inflammation—naturally and effectively.
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
                  <div className="flex items-center space-x-4">
                    <Zap className="w-16 h-16 text-[#6c2c8b]" />
                    <Waves className="w-16 h-16 text-[#9d4ed8]" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Electrotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Electrotherapy?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Electrotherapy is a therapeutic treatment that uses electrical energy to stimulate nerves and muscles for pain relief, muscle strengthening, and tissue healing. This evidence-based modality has been used in physiotherapy for decades to treat various musculoskeletal conditions.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              By applying controlled electrical currents to specific areas of the body, electrotherapy can reduce pain, improve circulation, strengthen muscles, and accelerate the healing process. It's a safe, non-invasive treatment that complements other physiotherapy interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Electrotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Types of Electrotherapy</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electrotherapyTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed">{type}</p>
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
                <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6">Benefits of Electrotherapy</h3>
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
                      <Zap className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{condition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shockwave Therapy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Shockwave Therapy</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                Shockwave therapy is a specialized form of electrotherapy that uses high-energy acoustic waves to treat chronic musculoskeletal conditions. It's particularly effective for:
              </p>
              <div className="space-y-4">
                {shockwaveConditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Waves className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{condition}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During Your Session</h2>
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
                  We evaluate your condition and determine the most appropriate electrotherapy modality for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Treatment</h3>
                <p className="text-gray-600 font-body text-sm">
                  Comfortable application of electrical stimulation with adjustable intensity for optimal therapeutic effect.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Follow-up</h3>
                <p className="text-gray-600 font-body text-sm">
                  Progress monitoring and treatment adjustment to ensure optimal recovery outcomes.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Start Your Recovery with Electrotherapy</h2>
            <p className="text-lg text-white/80 font-body">
              Experience the power of advanced electrotherapy for pain relief and healing. Our state-of-the-art equipment and expert physiotherapists ensure safe, effective treatment tailored to your needs.
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
