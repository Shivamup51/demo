
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NeuroRehabilitationPage() {
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
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20">Neuro Rehabilitation</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] font-heading leading-tight">
                  Neuro Rehabilitation in Delhi
                </h1>
                <p className="text-xl text-[#2E3A59] font-body">Rewiring Movement. Restoring Independence. Reclaiming Life.</p>
                <p className="text-lg text-[#6B7280] font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer specialized Neuro Rehabilitation in Delhi to support individuals navigating the physical and cognitive challenges that come with neurological injuries and disorders. Whether you're recovering from a stroke, managing the long-term effects of Parkinson’s, or rebuilding balance after a spinal cord injury, our expert neuro-physiotherapists combine skill, compassion, and technology to help you regain confidence and control in your daily life.
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
                  Home Visits & Online Consultations
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                <div className="w-full h-96 bg-gradient-to-br from-[#A259FF]/10 to-[#2E3A59]/10 rounded-2xl flex items-center justify-center">
                  <Brain className="w-24 h-24 text-[#2E3A59]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#A259FF] to-[#2E3A59] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Neuro Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What is Neuro Rehabilitation?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7280] font-body leading-relaxed mb-6">
              Neuro Rehabilitation is a specialized branch of physiotherapy focused on improving the quality of life for individuals with neurological impairments caused by conditions like stroke, traumatic brain injury, spinal cord injury, multiple sclerosis, or cerebral palsy. It involves structured, progressive therapies that retrain the brain and nervous system to regain function, adapt to changes, or compensate for limitations.
            </p>
            <p className="text-lg text-[#6B7280] font-body leading-relaxed">
              At Kynexa, we go beyond exercises—we emphasize neuroplasticity (the brain’s ability to reorganize and adapt) through functional movement training, sensory retraining, balance and gait work, and task-specific drills. Our ultimate goal is to reduce dependence, restore movement, and empower long-term participation in everyday tasks.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">How Does It Work?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                Each journey begins with a neurological assessment covering strength, tone, reflexes, balance, gait, coordination, and cognitive integration. Based on findings, we design a goal-oriented rehabilitation plan that may include:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Functional Strengthening – Focused muscle retraining and re-education for weakened limbs and postural control</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Gait & Balance Training – Using parallel bars, body-weight supported treadmills, and dynamic balance tools</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Postural Correction & Core Activation – To reduce compensation patterns and enhance trunk stability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Neurofacilitation Techniques (PNF, NDT) – To promote voluntary movement through guided stimuli and patterning</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Task-Specific Therapy – Practicing real-life activities like standing, grasping objects, or climbing stairs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Mirror Therapy & Sensory Integration – Enhancing brain feedback and improving perception or proprioception</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Coordination Drills & Hand Therapy – To improve fine motor control and bilateral limb integration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Manual Therapy & Spasticity Management – Relieving tone, improving joint mobility, and addressing muscle imbalances</p>
                </div>
              </div>
              <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                All interventions are customized in intensity and frequency—based on your pace, not a rigid protocol.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#111827] font-heading mb-4">Your Recovery Plan:</h3>
                <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                  At Kynexa, we don’t just treat conditions—we walk the recovery journey with you, helping you rediscover function, dignity, and purpose.
                </p>
              </div>
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Benefits of Neuro Rehabilitation</h3>
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Who Can Benefit from Neuro Rehab?</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Brain className="w-5 h-5 text-[#2E3A59] mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Why Choose Kynexa for Neuro Rehab?</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What to Expect in a Session</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Warm-up & Activation</h3>
                <p className="text-[#6B7280] font-body text-sm">Gentle ROM, breathing, or positional changes.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Motor Control</h3>
                <p className="text-[#6B7280] font-body text-sm">Exercises for strength and coordination.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Functional Drills</h3>
                <p className="text-[#6B7280] font-body text-sm">Practicing transfers and steps.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Manual Techniques</h3>
                <p className="text-[#6B7280] font-body text-sm">Stretching and spasticity modulation.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Feedback</h3>
                <p className="text-[#6B7280] font-body text-sm">Review of home exercise progression.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-[#6B7280] font-body">
              As your function improves, we incorporate greater complexity to keep progress moving forward.
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
              Neuro recovery is possible—with the right care, consistency, and compassion. Let Kynexa’s Neuro Rehabilitation experts help you reclaim movement, confidence, and independence.
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
              <p className="text-[#6B7280] font-body">Visit Us: [Clinic Address]</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-[#2E3A59]" />
              <p className="text-[#6B7280] font-body">Timings: [Operating Hours]</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Home className="w-5 h-5 text-[#2E3A59]" />
              <p className="text-[#6B7280] font-body">Home visits and online consultations available for select cases</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Frequently Asked Questions</h2>
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
              <Image src="/logo.png" alt="Kynexa Logo" width={120} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-[#6B7280] font-body">
              Kynexa Advanced Physiotherapy and Manual Therapy Clinic - Empowering you to heal, move, and thrive.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
