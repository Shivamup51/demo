"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Clock, MapPin, Mail, Zap, ArrowUp, ArrowDown, CheckCircle, Info } from "lucide-react"
import { FaSpa, FaUserMd, FaBriefcaseMedical, FaRegChartBar } from "react-icons/fa"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"

export default function LaserTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // How Does It Work
  const howItWorksTitle = [
    "Photon Absorption",
    "ATP Boost",
    "Enhanced Circulation",
    "Cellular Repair",
    "Pain Modulation"
  ]
  const howItWorks = [
    "Light at targeted wavelengths (600–1064 nm) is absorbed by mitochondrial chromophores.",
    "Energy conversion promotes ATP production, fuelling faster cellular activity.",
    "Promotes better oxygen and nutrient flow to support faster healing.",
    "Enhances collagen synthesis, reduces oxidative stress, and improves regeneration.",
    "Influences nerve signal transmission and stimulates endorphin release for natural pain relief."
  ]

  const benefits = [
    "Rapid reduction in pain and inflammation",
    "Accelerated tissue and nerve regeneration",
    "Enhanced flexibility and joint function",
    "Medication-free pain relief",
    "Improved wound healing and scar remodelling",
    "Faster post-injury and post-surgical recovery",
    "Safe for repetitive use with no downtime"
  ]

  const conditions = [
    "Arthritis and joint degeneration",
    "Sciatica and nerve compression",
    "Tendonitis, bursitis, and repetitive strain injuries",
    "Plantar fasciitis and carpal tunnel syndrome",
    "Frozen shoulder and rotator cuff issues",
    "Muscular strains and sports injuries",
    "Post-surgical stiffness and scarring",
    "Cervical and lumbar spine dysfunction",
    "Chronic neck, back, and soft tissue pain"
  ]

  const whyChooseUs = [
    "Certified Physiotherapists trained in both LLLT and High Power Laser application",
    "Advanced Laser Systems approved for deep tissue treatment",
    "Integrated Care Plans combining manual therapy, dry needling, rehab, and laser",
    "Evidence-Based Protocols for improved recovery metrics",
    "Clean, Modern Facility focused on comfort, safety, and healing outcomes"
  ]

  const whatToExpect = [
    {
      title: "Evaluation – We assess your symptoms, diagnosis, and tissue depth to determine laser modality.",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      title: "Application – The laser is applied to target zones using clinically set parameters for 5–15 minutes.",
      icon: <FaSpa className="w-8 h-8" />
    },
    {
      title: "Sensation – Patients may feel a gentle warmth; there is no pain or irritation.",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Aftercare – No restrictions post-session; you can resume daily activities immediately.",
      icon: <FaRegChartBar className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: "What’s the difference between low-level and high-power laser therapy?",
      answer: "Low-level laser is ideal for mild or superficial conditions, while high power laser penetrates deeper tissues and offers quicker results for chronic or complex issues."
    },
    {
      question: "How many sessions are needed?",
      answer: "Acute conditions may improve in 3–5 sessions; deeper or long-standing issues may require 8–10, especially when using high power modalities."
    },
    {
      question: "Can laser therapy be combined with other treatments?",
      answer: "Absolutely. It complements manual therapy, exercise rehab, dry needling, and spinal alignment for comprehensive recovery."
    },
    {
      question: "Is it safe?",
      answer: "Yes, both LLLT and HPLT are FDA-approved and safe when administered by certified professionals."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-5 mt-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
                  Laser Therapy <br />in Delhi
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Light-Powered Healing for Pain-Free Living</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer both Low-Level Laser Therapy (LLLT) and High-Power Laser Therapy (HPLT) in Delhi to accelerate healing, reduce pain, and restore mobility. These non-invasive, scientifically backed treatments use therapeutic light energy to stimulate cellular regeneration, improve tissue health, and reduce inflammation—making laser therapy a cornerstone of modern rehabilitation care.
                </p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  Our High-Power Laser Therapy offers deeper tissue penetration and faster energy delivery, resulting in quicker relief, shorter recovery time, and more pronounced effects—especially for chronic or deep-tissue conditions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)} className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Laser Therapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative z-10"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* What is Laser Therapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="What is Laser Therapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#9d4ed8]/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#6c2c8b]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Laser Therapy?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Laser therapy involves the application of medical-grade laser light to injured or painful areas to stimulate healing from within. While LLLT uses low-intensity light ideal for surface tissues and mild conditions, HPLT emits powerful wavelengths that reach deeper muscle, ligament, and joint tissues, making it a more efficient solution for advanced musculoskeletal concerns.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed py-2">
                  Unlike surgical lasers, both forms of therapy are non-destructive and do not involve cutting or burning. They work by stimulating natural cellular functions without pain, side effects, or downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does Laser Therapy Work?</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Laser therapy functions through photobiomodulation, a cellular process where light energy is absorbed and converted into biological repair signals. Here’s how:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Zap className="w-6 h-6 text-[#9d4ed8] flex-shrink-0" />
                    <p className="text-gray-700 font-semibold text-lg">{howItWorksTitle[index]}</p>
                  </div>
                  <p className="text-gray-700 font-body text-base leading-relaxed mt-4">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-body">
              High Power Laser Therapy offers enhanced outcomes in fewer sessions by delivering more energy per minute, especially beneficial for chronic pain, deep-seated injuries, and post-operative recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Laser Therapy</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#6c2c8b] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Benefits of Laser Therapy"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Conditions Treated</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Laser therapy at Kynexa is effective for a wide spectrum of conditions, including:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Laser Therapy Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#9d4ed8]/20 rounded-full flex items-center justify-center">
                  <FaUserMd className="w-6 h-6 text-[#6c2c8b]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 2 && <FaSpa className="w-5 h-5" />}
                      {index === 3 && <FaRegChartBar className="w-5 h-5" />}
                      {index === 4 && <CheckCircle className="w-5 h-5" />}
                    </div>
                    <p className="text-gray-700 font-body text-lg leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During a Session</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((step, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300 h-[220px] w-full flex flex-col justify-between">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-[#9d4ed8]">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Step {index + 1}</h3>
                  </div>
                  <p className="text-gray-600 font-body text-base leading-relaxed">{step.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Laser Therapy Appointment</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Explore the benefits of High-Power Laser Therapy with Kynexa’s expert physiotherapy team. Experience faster healing, deeper relief, and better mobility—powered by light.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Call Us</h3>
              <p className="text-white/80 font-body">+91 8868879387</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Email Us</h3>
              <p className="text-white/80 font-body">info@kynexaphysio.com</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Visit Us</h3>
              <p className="text-white/80 font-body">D 16 , Basement , Hauz Khas , New Delhi - 110016</p>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm inline-block mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Timings: Monday to Saturday 10:00 AM - 07:00 PM</p>
            </div>
          </div>
          <div>
            <Button onClick={() => setIsOpen(true)} className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Frequently Asked Questions (FAQs)</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div
                    className="w-full text-left flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-bold text-[#6c2c8b] font-heading hover:text-[#9d4ed8]">
                      <span className="inline-block w-7 h-7 bg-[#6c2c8b]/10 rounded-full text-center text-[#6c2c8b] mr-2">
                        Q
                      </span>
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ArrowUp className="w-5 h-5 text-[#9d4ed8]" />
                    ) : (
                      <ArrowDown className="w-5 h-5 text-[#9d4ed8]" />
                    )}
                  </div>
                  {expandedFaq === index && (
                    <div className="mt-4 pl-9">
                      <p className="text-gray-600 font-body text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}