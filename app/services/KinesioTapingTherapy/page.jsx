"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Home, CheckCircle, Clock, MapPin, Mail, ArrowUp, ArrowDown, Info } from "lucide-react"
import { FaUserMd, FaBriefcaseMedical, FaRegChartBar } from "react-icons/fa"
import { IoFitnessOutline } from "react-icons/io5"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"
export default function KinesioTapingTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Pain relief through neuromuscular stimulation",
    "Support for injured or weak muscles",
    "Improved lymphatic drainage and reduced swelling",
    "Enhanced athletic performance and recovery",
    "Postural correction and joint alignment",
    "Non-restrictive—allows full range of motion",
    "Reduced muscle fatigue during prolonged activity",
    "Accelerated healing by improving microcirculation",
    "Provides psychological confidence and body awareness",
  ]

  const conditions = [
    "Muscle strains and ligament sprains",
    "Tendonitis and bursitis",
    "Post-surgical swelling",
    "Joint instability (shoulder, knee, ankle)",
    "Plantar fasciitis",
    "Carpal tunnel syndrome",
    "Postural imbalances",
    "Sports injuries and overuse syndromes",
    "Chronic neck and back pain"
  ]

  const whyChooseUs = [
    "Certified physiotherapists trained in Kinesio taping techniques",
    "Integrated care with manual therapy, dry needling, and rehab",
    "Modern clinic in the heart of Delhi",
    "Personalized treatment plans for every patient",
    "Trusted provider of physiotherapy services in Delhi",
  ]

  const treatmentApproach = [
    {
      title: "Neuromuscular Feedback",
      description: "The tape stimulates sensory receptors in the skin, sending signals to the brain that help reduce pain and improve body awareness (proprioception).",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Improved Circulation",
      description: "By lifting the skin microscopically, it enhances blood and lymphatic flow, reducing swelling and inflammation.",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Joint Support",
      description: "Unlike rigid athletic tape, Kinesio tape is elastic and moves with your body, offering support while maintaining full range of motion.",
      icon: <FaUserMd className="w-7 h-7" />
    },
    {
      title: "Muscle Re-education",
      description: "It helps retrain muscles that are weak, overused, or misaligned by guiding movement and posture.",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
    {
      title: "Pain Modulation",
      description: "The tape may reduce pain by altering the way pain signals are transmitted through the nervous system.",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
    {
      title: "Fascial Release",
      description: "Kinesio tape gently lifts the skin, helping release fascial tension and adhesions for smoother movement and reduced stiffness.",
      icon: <FaRegChartBar className="w-7 h-7" />
    }
  ]

  const whatToExpect = [
    {
      title: "Condition Assessment",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
    {
      title: "Tape Selection",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Tape Application",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Aftercare Guidance",
      icon: <FaUserMd className="w-8 h-8" />
    },
  ]

  const faqs = [
    {
      question: "Is Kinesio taping painful?",
      answer: "No. It’s a gentle, non-invasive technique. Most patients don’t feel the tape once it’s applied.",
    },
    {
      question: "Can I shower with the tape on?",
      answer: "Yes. The tape is water-resistant and can stay on during showers or workouts.",
    },
    {
      question: "How long does the tape stay on?",
      answer: "Typically 3–5 days. It depends on your skin type, activity level, and the area taped.",
    },
    {
      question: "Is Kinesio taping only for athletes?",
      answer: "Not at all. It’s effective for anyone dealing with pain, swelling, or joint/muscle issues.",
    },
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
                  Kinesio Taping <span className="text-white/90">Therapy</span> in Delhi
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Support. Stability. Smart Recovery.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer Kinesio taping in Delhi as part of our advanced physiotherapy services. This innovative taping technique is designed to support injured muscles and joints, reduce pain, and enhance performance—without restricting your natural movement. Whether you're recovering from an injury, managing chronic pain, or looking to prevent strain, Kinesio taping is a gentle yet powerful solution.
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
                  alt="Kinesio Taping Therapy"
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
      {/* What is Kinesio Taping */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="What is Kinesio Taping"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Kinesio Taping?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Kinesio Taping is a therapeutic technique that uses elastic, skin-friendly tape to mimic the natural elasticity of human skin. When applied strategically, it lifts the skin slightly to:
                </p>
                <ul className="text-lg text-gray-700 font-body leading-relaxed list-disc pl-5">
                  <li>Improve blood and lymphatic circulation</li>
                  <li>Reduce inflammation and swelling</li>
                  <li>Support muscles and joints without limiting range of motion</li>
                  <li>Stimulate neurological and sensory pathways to reduce pain</li>
                </ul>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Originally developed by Dr. Kenzo Kase in the 1970s, Kinesio taping is now widely used by physiotherapists, athletes, and rehabilitation specialists worldwide.
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
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does Kinesio Taping Work?</h2>
      <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
        Kinesio taping works by gently lifting the skin to create space between the skin and underlying tissues, which helps reduce pressure, improve circulation, and support healing. Here’s how it functions step by step:
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {treatmentApproach.map((approach, index) => (
        <Card key={index} className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
          <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="text-[#9d4ed8]">
                {approach.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#6c2c8b]">{approach.title}</h3>
            </div>
            <p className="text-gray-700 font-body text-base leading-relaxed mt-4">{approach.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Kinesio Taping Therapy</h2>
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
                  alt="Benefits of Kinesio Taping Therapy"
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

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Conditions We Commonly Treat</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Our Kinesio taping therapy in Delhi is effective for:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <FaBriefcaseMedical className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}


          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa Advanced Physiotherapy?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Kinesio Taping Therapy Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
              <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                At Kynexa, we combine clinical expertise with compassionate care to deliver exceptional physiotherapy in Delhi. Here’s what sets us apart:
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 2 && <IoFitnessOutline className="w-5 h-5" />}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During Your Session</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              During your session, our therapist will assess your condition and apply Kinesio tape tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((step, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="flex items-center space-x-4">
                  <div className="text-[#9d4ed8]">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Step {index + 1}</h3>
                  </div>
                  <p className="text-gray-600 font-body text-base leading-relaxed mt-4">{step.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-body">
              The tape is water-resistant, latex-free, and can be worn for 3–5 days.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Appointment Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Looking for expert Kinesio taping in Delhi? At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we combine science, skill, and care to help you heal faster and move better.
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Frequently Asked Questions</h2>
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
