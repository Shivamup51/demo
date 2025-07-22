
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
export default function NeuroRehabilitationPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Improved movement quality and muscle control",
    "Greater balance, walking, and postural stability",
    "Reduced muscle stiffness, spasticity, or flaccidity",
    "Enhanced independence in daily living tasks",
    "Reduced risk of falls, injuries, and re-hospitalization",
    "Improved mental well-being and social participation",
    "Re-engagement in hobbies, communication, and personal goals",
  ]

  const conditions = [
    "Stroke and transient ischemic attack (TIA)",
    "Traumatic brain injury (TBI)",
    "Spinal cord injuries",
    "Parkinson’s disease",
    "Multiple sclerosis (MS)",
    "Cerebral palsy",
    "Guillain-Barré syndrome",
    "Neuropathy and nerve injuries",
    "Post-surgical brain or spine recovery",
  ]

  const whyChooseUs = [
    "Experienced Neurological Physiotherapists with advanced certifications",
    "Dedicated Infrastructure for neuro therapy, including assistive devices and body-weight support systems",
    "Outcome-Driven Plans that adapt to your progress and maximize neuroplasticity",
    "1-on-1 Supervised Therapy in a quiet, patient-centric environment",
    "Education & Support for caregivers, families, and home care management",
    "Collaborative Approach involving physicians, speech therapists, and occupational specialists (when needed)",
  ]

  const treatmentApproach = [
    {
      title: "Functional Strengthening",
      description: "Focused muscle retraining and re-education for weakened limbs and postural control",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Gait & Balance Training",
      description: "Using parallel bars, body-weight supported treadmills, and dynamic balance tools",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Neurofacilitation Techniques",
      description: "Promote voluntary movement through guided stimuli and patterning (PNF, NDT)",
      icon: <FaUserMd className="w-7 h-7" />
    },
    {
      title: "Task-Specific Therapy",
      description: "Practicing real-life activities like standing, grasping objects, or climbing stairs",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
    {
      title: "Mirror Therapy & Sensory Integration",
      description: "Enhancing brain feedback and improving perception or proprioception",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Coordination Drills & Hand Therapy",
      description: "To improve fine motor control and bilateral limb integration",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Manual Therapy & Spasticity Management",
      description: "Relieving tone, improving joint mobility, and addressing muscle imbalances",
      icon: <FaUserMd className="w-7 h-7" />
    },
  ]

  const whatToExpect = [
    {
      title: "Warm-up & Activation",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
    {
      title: "Motor Control Exercises",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Functional Integration Drills",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Manual Techniques",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      title: "Cool-Down & Feedback",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
  ]

  const faqs = [
    {
      question: "How long does neuro rehab take?",
      answer: "It depends on your condition and goals. Some patients recover function in weeks; others need longer-term therapy.",
    },
    {
      question: "Can elderly patients benefit?",
      answer: "Absolutely. Our programs are tailored to all age groups and adjusted to personal tolerance and safety.",
    },
    {
      question: "Is this only for stroke recovery?",
      answer: "No. We also treat spinal injuries, Parkinson’s, MS, brain injury, and more.",
    },
    {
      question: "Do I need a neurologist’s referral?",
      answer: "Not mandatory, but we do coordinate with your doctors if you’re under ongoing medical care.",
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
                  Neuro Rehabilitation <span className="text-white/90">in Delhi</span>
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Rewiring Movement. Restoring Independence. Reclaiming Life.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer specialized Neuro Rehabilitation in Delhi to support individuals navigating the physical and cognitive challenges that come with neurological injuries and disorders. Whether you're recovering from a stroke, managing the long-term effects of Parkinson’s, or rebuilding balance after a spinal cord injury, our expert neuro-physiotherapists combine skill, compassion, and technology to help you regain confidence and control in your daily life.
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
                  alt="Neuro Rehabilitation Therapy"
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
      {/* What is Neuro Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="What is Neuro Rehabilitation"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Neuro Rehabilitation?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Neuro Rehabilitation is a specialized branch of physiotherapy focused on improving the quality of life for individuals with neurological impairments caused by conditions like stroke, traumatic brain injury, spinal cord injury, multiple sclerosis, or cerebral palsy. It involves structured, progressive therapies that retrain the brain and nervous system to regain function, adapt to changes, or compensate for limitations.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa, we go beyond exercises—we emphasize neuroplasticity (the brain’s ability to reorganize and adapt) through functional movement training, sensory retraining, balance and gait work, and task-specific drills. Our ultimate goal is to reduce dependence, restore movement, and empower long-term participation in everyday tasks.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Who Can Benefit from Neuro Rehab?</h2>
            <p className="text-xl text-gray-700 font-body max-w-3xl mx-auto">
              Our program is tailored for patients recovering from or managing:
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
              We welcome both recent and chronic cases, customizing each plan based on functional status, age, goals, and prognosis.
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
              Each journey begins with a neurological assessment covering strength, tone, reflexes, balance, gait, coordination, and cognitive integration. Based on findings, we design a goal-oriented rehabilitation plan that may include:
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Neuro Rehabilitation</h2>
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
                  alt="Benefits of Neuro Rehabilitation"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa for Neuro Rehab?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Neuro Rehabilitation Team"
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
                At Kynexa, we don’t just treat conditions—we walk the recovery journey with you, helping you rediscover function, dignity, and purpose.
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect in a Session</h2>
               <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Each session typically lasts 45–60 minutes and includes:
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
              As your function improves, we incorporate greater complexity to keep progress moving forward.
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
              Neuro recovery is possible—with the right care, consistency, and compassion. Let Kynexa’s Neuro Rehabilitation experts help you reclaim movement, confidence, and independence.
            </p>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Home visits and online consultations available for select cases.
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
