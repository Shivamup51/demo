
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
export default function SpineAlignmentTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Reduced stiffness and muscular tightness",
    "Improved posture and spinal curvature",
    "Enhanced flexibility and joint mobility",
    "Relief from chronic neck, back, and shoulder pain",
    "Better breathing and circulation through improved alignment",
    "Increased energy and reduced fatigue",
    "Prevention of long-term spinal degeneration",
    "Improved body awareness and movement efficiency",
  ]

  const conditions = [
    "Chronic neck, shoulder, or lower back stiffness",
    "Poor posture from prolonged sitting or screen use",
    "Tech-neck or forward head posture",
    "Scoliosis or spinal curvature issues",
    "Postural fatigue and muscular tightness",
    "Reduced flexibility or range of motion",
    "Uneven gait or weight distribution",
    "Recurrent headaches or tension-related discomfort",
    'Limited spinal mobility affecting daily activities'
  ]

  const whyChooseUs = [
    "Posture-Focused Physiotherapists trained in spinal biomechanics",
    "Hands-On Expertise in manual therapy, myofascial release, and alignment correction",
    "Integrated Approach combining therapy, exercise, and lifestyle coaching",
    "Private, Comfortable Setting for focused, one-on-one care",
    "Progress Tracking with posture assessments and mobility benchmarks",
    "Patient Education to empower long-term spinal health",
  ]

  const treatmentApproach = [
    {
      title: "Manual Therapy & Joint Mobilization",
      description: "To release joint restrictions and improve vertebral motion",
      icon: <FaUserMd className="w-7 h-7" />
    },
    {
      title: "Myofascial Release & Trigger Point Therapy",
      description: "To reduce muscular tension and restore tissue elasticity",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Postural Correction Exercises",
      description: "To retrain alignment and strengthen stabilizing muscles",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Core Activation & Pelvic Stabilization",
      description: "To support spinal integrity and reduce compensatory strain",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
    {
      title: "Stretching & Mobility Drills",
      description: "To improve flexibility and reduce stiffness",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Ergonomic Coaching",
      description: "To correct sitting, standing, and sleeping habits that contribute to misalignment",
      icon: <FaUserMd className="w-7 h-7" />
    },
  ]

  const whatToExpect = [
    {
      title: "Postural and Spinal Assessment",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
    {
      title: "Manual Therapy and Soft Tissue Release",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Corrective Exercises and Mobility Drills",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Breathing and Core Engagement",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      title: "Home Care Guidance and Ergonomic Tips",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
  ]

  const faqs = [
    {
      question: "Is spine alignment therapy painful?",
      answer: "Not at all. Most techniques are gentle and relieving. Some mild soreness may occur initially as your body adjusts.",
    },
    {
      question: "How many sessions will I need?",
      answer: "It depends on your posture and stiffness level. Some feel relief in 2–3 sessions; others benefit from a short course.",
    },
    {
      question: "Can this help with scoliosis or spinal curvature?",
      answer: "Yes. While we don’t 'fix' scoliosis, we can reduce compensatory strain and improve function and comfort.",
    },
    {
      question: "Is this suitable for office workers or sedentary individuals?",
      answer: "Absolutely. It’s one of the most effective therapies for reversing the effects of prolonged sitting and poor posture.",
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
                  Spine Alignment Therapy <span className="text-white/90">in Delhi</span>
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Unwind Stiffness. Realign Posture. Reclaim Movement.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer Spine Alignment Therapy in Delhi to address chronic body stiffness, postural imbalances, and spinal misalignment. Whether you're dealing with tech-neck, lower back tightness, or general muscular rigidity, our expert physiotherapists use hands-on techniques and corrective exercises to restore spinal balance and improve your body’s natural movement patterns. This therapy is ideal for anyone experiencing fatigue, poor posture, or stiffness from prolonged sitting, stress, or injury.
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
                  alt="Spine Alignment Therapy"
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
      {/* What is Spine Alignment Therapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="What is Spine Alignment Therapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Spine Alignment Therapy?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Spine Alignment Therapy is a targeted physiotherapy approach that focuses on correcting postural deviations and restoring the natural curvature of the spine. Misalignment can occur due to sedentary habits, muscular imbalances, injuries, or degenerative changes—leading to stiffness, pain, and reduced mobility.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa, we assess spinal posture, joint mobility, and muscular tension to identify the root cause of misalignment. Our therapy combines manual adjustments, myofascial release, mobilization, and neuromuscular re-education to realign the spine and reduce compensatory strain across the body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Who Can Benefit?</h2>
            <p className="text-xl text-gray-700 font-body max-w-3xl mx-auto">
              Spine Alignment Therapy is ideal for individuals experiencing:
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
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-body">
              It’s also beneficial for those recovering from spinal injuries or looking to prevent long-term postural degeneration.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does It Work?</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              We begin with a comprehensive spinal and postural assessment, including visual analysis, palpation, and mobility testing. Based on your findings, we create a personalized treatment plan that may include:
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Spine Alignment Therapy</h2>
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
                  alt="Benefits of Spine Alignment Therapy"
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

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Spine Alignment Therapy Team"
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
                We don’t just treat stiffness—we help you move with ease, stand tall, and feel aligned from the inside out.
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
                      {index === 5 && <FaUserMd className="w-5 h-5" />}
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
      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">
              What to Expect in a Session
            </h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Your rehabilitation session may include:
            </p>
          </div>

          {/* First Row of 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whatToExpect.slice(0, 3).map((step, index) => (
              <Card
                key={index}
                className="flex flex-col h-full min-h-[280px] rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]" />
                <CardContent className="p-6 flex flex-col items-center justify-between flex-grow text-center">
                  <div className="flex flex-col items-center space-y-2 mb-4">
                    <div className="text-[#9d4ed8] text-3xl">{step.icon}</div>
                    <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">
                      Step {index + 1}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-body text-base leading-relaxed">
                    {step.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Row of 2 Cards */}
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
              {whatToExpect.slice(3).map((step, index) => (
                <Card
                  key={index + 3}
                  className="flex flex-col h-full min-h-[280px] rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]" />
                  <CardContent className="p-6 flex flex-col items-center justify-between flex-grow text-center">
                    <div className="flex flex-col items-center space-y-2 mb-4">
                      <div className="text-[#9d4ed8] text-3xl">{step.icon}</div>
                      <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">
                        Step {index + 4}
                      </h3>
                    </div>
                    <p className="text-gray-600 font-body text-base leading-relaxed">
                      {step.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-body">
              You’ll leave each session feeling lighter, more mobile, and more in tune with your body’s alignment.
            </p>
          </div>
        </div>
      </section>


      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Spine Alignment Session Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              If you’re tired of stiffness, slouching, or spinal discomfort, let Kynexa’s expert team help you realign and recharge—naturally and effectively.
            </p>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Home visits and posture consultations available upon request.
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
