
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
export default function SportsPhysiotherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Faster recovery from injuries",
    "Improved muscle control and joint stability",
    "Optimized performance and endurance",
    "Reduced injury recurrence",
    "Enhanced posture and neuromuscular coordination",
    "Sport-specific training for peak conditioning",
    "Sharper body awareness",
    "Faster rehab for chronic stress injuries",
    "Boosted confidence through tailored plans"
  ]

  const conditions = [
    "Ligament sprains and muscle strains",
    "Runner’s knee, IT band issues, and shin splints",
    "Shoulder instability and rotator cuff tears",
    "Achilles tendon issues and plantar fasciitis",
    "Groin pulls and hamstring injuries",
    "Concussions and post-impact rehabilitation",
    "Post-operative orthopedic recovery",
    "Tennis and golfer’s elbow due to repetitive arm movements",
    "Back and neck strains from poor training posture or overuse"
  ]

  const whyChooseUs = [
    "Certified Sports Physiotherapists with advanced training",
    "Evidence-Based Protocols tailored to your sport and injury history",
    "Comprehensive Services including dry needling, taping, laser therapy & shockwave",
    "Injury Prevention Programs designed to minimize re-injury risks",
    "Trusted by Athletes across disciplines—from runners and cricketers to dancers and swimmers",
  ]
  const [isOpen, setIsOpen] = useState(false)
  const treatmentApproach = [
    {
      title: "Injury Assessment and Diagnosis",
      description: "A detailed evaluation of injury mechanism, joint integrity, soft tissue condition, and functional deficits",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
    {
      title: "Manual Therapy and Joint Mobilization",
      description: "Hands-on techniques to restore joint mechanics, relieve pain, and improve overall mobility",
      icon: <FaUserMd className="w-7 h-7" />
    },
    {
      title: "Customized Exercise Prescription",
      description: "Targeted strength, flexibility, and neuromuscular exercises based on your sport, injury stage, and performance goals",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Biomechanical Correction",
      description: "Focused retraining to correct faulty movement patterns that contribute to repeated injuries",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Taping and Bracing",
      description: "Supportive strategies to stabilize vulnerable areas during healing and training",
      icon: <FaUserMd className="w-7 h-7" />
    },
    {
      title: "Return-to-Sport Testing",
      description: "Evidence-based milestones that guide safe transition back to play or competition",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
  ]

  const whatToExpect = [
    {
      title: "1-on-1 Guided Sessions",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      title: "Real-time Corrections",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Education on Technique",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
  ]

  const faqs = [
    {
      question: "Is sports physiotherapy only for athletes?",
      answer: "Not at all! Anyone with an active lifestyle, from gym-goers to dancers, can benefit.",
    },
    {
      question: "Can this help with recurring injuries?",
      answer: "Absolutely. We target the root causes of strain and equip you with tools to prevent recurrence.",
    },
    {
      question: "Do I need a doctor’s referral?",
      answer: "No referral is needed. You can book an initial assessment directly with our team.",
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
                  Sports Physiotherapy <span className="text-white/90">in Delhi</span>
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Powering Performance, Preventing Injury</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we provide specialized Sports Physiotherapy in Delhi to help athletes of all levels recover faster, move better, and perform at their peak. Our evidence-based approach is tailored to the unique demands of your sport, addressing injuries, movement inefficiencies, and performance limitations. Whether you're a competitive athlete, weekend warrior, or fitness enthusiast, our physiotherapists design every session to restore function, prevent re-injury, and elevate your game with precision care.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)}
                className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl flex items-center justify-center w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                  Book Your Consultation
                </Button>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent rounded-xl flex items-center justify-center w-full"
                  >
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/sport/Sports Physiotherapy main.jpg"
                  alt="Sports Physiotherapy"
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
      {/* What is Sports Physiotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/sport/Sports Physiotherapy what.jpg"
                  alt="What is Sports Physiotherapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Sports Physiotherapy?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  A dedicated branch of physiotherapy, sports physiotherapy targets the prevention and rehabilitation of sports-related injuries. At Kynexa Advanced Physiotherapy and Manual Therapy Clinic in Delhi, our sports physio team is trained to evaluate movement, biomechanics, and musculoskeletal health with precision—catering to everyone from professional athletes to weekend warriors.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Whether you're recovering from an acute injury, managing chronic strain, or simply aiming to improve performance, we tailor each session to your unique sport, position, and training load. Our comprehensive approach includes strength conditioning, flexibility training, functional movement correction, and injury risk assessment. By addressing both current concerns and potential vulnerabilities, we help athletes build resilience, enhance efficiency, and return to sport safely and confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Common Conditions We Treat</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Our Sports Physiotherapy in Delhi is effective for:
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

      {/* How Does It Work */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does It Work?</h2>
      <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
        Our approach to Sports Physiotherapy blends in-depth clinical assessment with goal-driven functional rehabilitation to support every stage of your recovery and performance journey. We combine advanced techniques with sport-specific insights to not only treat current injuries but also enhance overall biomechanics and prevent future setbacks.
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

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Key Benefits</h2>
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
                  src="/sport/Sports Physiotherapy Benefits.jpg"
                  alt="Benefits of Sports Physiotherapy"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa for Sports Physio?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/sport/Sports Physiotherapy why.jpg"
                  alt="Sports Physiotherapy Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Every client begins with a detailed physical and functional assessment. We study how you move, load, and recover. From there, we develop an action plan that balances rehab, conditioning, and sports-specific drills—paving your path from recovery to peak performance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              You’ll receive real-time corrections and education on technique, posture, warm-ups, and recovery strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Session Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Reclaim your edge and play without pain. Schedule your customized sports physiotherapy session now and take the first step toward peak performance.
            </p>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Online consultations and home-exercise plans also available.
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
              <h3 className="text-lg font-bold text-white font-heading mb-2">Location</h3>
              <p className="text-white/80 font-body">D 16 , Basement , Hauz Khas , New Delhi - 110016</p>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm inline-block mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Timings: Monday to Saturday 08:00 AM - 08:00 PM</p>
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