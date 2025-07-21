"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, CheckCircle, Clock, MapPin, Mail, Bone, ArrowUp, ArrowDown, Info } from "lucide-react"
import { FaUserMd, FaBriefcaseMedical, FaRegChartBar } from "react-icons/fa"
import { IoFitnessOutline } from "react-icons/io5"
import Image from "next/image"

export default function ChiropracticCarePage() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
    {
      title: "Spinal Manipulation & Mobilization",
      description: "Gentle thrusts to correct joint alignment",
      icon: <Bone className="w-7 h-7" />
    },
    {
      title: "Soft Tissue Release",
      description: "Myofascial or trigger point therapy to reduce muscular tension",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Posture Correction Techniques",
      description: "Ergonomic guidance for daily activities",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Stretching & Strengthening",
      description: "To stabilize the spine and prevent recurrence",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Lifestyle & Movement Coaching",
      description: "Teaching safe lifting, walking, and movement habits",
      icon: <FaRegChartBar className="w-7 h-7" />
    }
  ]

  const whatToExpect = [
    {
      title: "Explain your spinal health and how it affects symptoms",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
    {
      title: "Perform focused adjustments using hands or specialized tools",
      icon: <Bone className="w-8 h-8" />
    },
    {
      title: "Apply soft tissue techniques to reduce muscular compensation",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Guide you through follow-up exercises or ergonomic corrections",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: "Is chiropractic care safe?",
      answer: "Yes! When performed by trained professionals, chiropractic adjustments are safe, precise, and effective."
    },
    {
      question: "Will I feel pain during adjustment?",
      answer: "Most patients feel relief. You may hear a gentle “pop” as gas is released from the joint, which is completely normal."
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
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-5 mt-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
                  Chiropractic <span className="text-white/90">Care</span> <br />in Delhi
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Realign. Rebalance. Restore.</p>
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
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Chiropractic Care"
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

      {/* Unlock Natural Healing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6c2c8b]/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9d4ed8]/5 rounded-full -ml-40 -mb-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 p-6 lg:p-0 order-2 lg:order-1 lg:pr-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading leading-tight">
                  Unlock Natural Healing Through <span className="text-[#6c2c8b]">Structural Balance</span>
                </h2>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer Chiropractic Care in Delhi as part of our integrative approach to long-term pain relief and musculoskeletal wellness. This hands-on technique focuses on spinal adjustments and joint realignment to restore nerve function, correct posture, and enhance the body’s self-healing ability. Whether you’re struggling with chronic back pain, tension headaches, or restricted mobility, our certified chiropractors provide safe, personalized care to help you move and live better—naturally.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full gap-2">
                    <Bone className="w-5 h-5 text-[#9d4ed8]" />
                    <span className="text-gray-700 text-sm font-medium">Chiropractic Adjustments</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full gap-2">
                    <FaBriefcaseMedical className="w-5 h-5 text-[#9d4ed8]" />
                    <span className="text-gray-700 text-sm font-medium">Physiotherapy</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full gap-2">
                    <CheckCircle className="w-5 h-5 text-[#9d4ed8]" />
                    <span className="text-gray-700 text-sm font-medium">Pain Relief</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Chiropractic Care"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Chiropractic Care */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="What is Chiropractic Care"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Chiropractic Care?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Chiropractic therapy uses hands-on techniques to align the spine and musculoskeletal system, promoting pain relief and improved movement without drugs or invasive procedures. By correcting misalignments (subluxations), chiropractic adjustments help reduce nerve irritation, improve joint movement, and support better posture and balance.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Unlike symptomatic treatments, chiropractic care addresses the root mechanical causes of dysfunction—especially in the spine, pelvis, and shoulders. It’s widely used for managing back pain, neck pain, sciatica, headaches, and posture-related issues resulting from lifestyle strain or injury.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Who Can Benefit from Chiropractic Therapy?</h2>
            <p className="text-xl text-gray-700 font-body max-w-3xl mx-auto">
              Chiropractic care is highly beneficial for:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Bone className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md">
        <div className="text-center mt-8">
          <p className="text-xl text-gray-700 font-semibold">
            Its safe for people of all age groups - from working professionals and athletes to senior seeking natural pain relief.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does It Work?</h2>
      <p className="text-xl text-gray-700 font-body max-w-3xl mx-auto">
        After a thorough spinal assessment and postural analysis, our chiropractor identifies joint misalignments or movement restrictions. Based on your findings and history, we perform controlled, precise manual adjustments to restore normal motion and relieve nerve pressure.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {treatmentApproach && treatmentApproach.map((approach, index) => (
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
  <div className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 rounded-xl shadow-md ">
    <div className="text-center mt-8">
      <p className="text-xl text-gray-700 font-semibold">
        Your care plan evolves session by session based on how your body responds, with constant feedback and education.
      </p>
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Chiropractic Treatment</h2>
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
                  alt="Benefits of Chiropractic Treatment"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa for Chiropractic Care?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Chiropractic Care Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
              <p className="text-xl  text-gray-700 font-semibold leading-relaxed mb-6">
                We go beyond cracking spines—we deliver intentional, controlled adjustments that align with your healing goals and lifestyle.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 2 && <Bone className="w-5 h-5" />}
                      {index === 3 && <IoFitnessOutline className="w-5 h-5" />}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect in a Session</h2>
            <p className="text-xl text-gray-700 font-body max-w-3xl mx-auto">
              Your first chiropractic session will begin with a detailed assessment including posture screening, spinal motion tests, and functional movement analysis. Based on findings, we will:
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
                  <p className="text-gray-600 font-body text-base leading-relaxed">{step.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-semibold">
              Every visit is tailored to your progress, comfort, and overall well-being.
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
              Say goodbye to constant strain and stiffness. Let Kynexa’s chiropractic care in Delhi help realign your spine, reboot your system, and refresh your movement.
            </p>
            <p className="text-sm text-white/70 font-body">Virtual consultations and postural evaluations available by appointment.</p>
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
            <Button className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
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