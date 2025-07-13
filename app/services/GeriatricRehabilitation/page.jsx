"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Accessibility, ShieldCheck, Brain, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GeriatricRehabilitationPage() {
  const benefits = [
    "Enhanced walking speed and coordination",
    "Reduced fear and risk of falls",
    "Improved strength, balance, and flexibility",
    "Better posture and joint alignment",
    "Increased independence in daily tasks",
    "Faster recovery from illness, surgeries, or hospitalization",
    "Boosted confidence, cognitive alertness, and mood"
  ]

  const conditions = [
    "Have a history of falls or fear of falling",
    "Experience poor balance, dizziness, or unsteady gait",
    "Are recovering from hip, knee, or spinal surgery",
    "Suffer from arthritis, Parkinson's, or stroke after-effects",
    "Deal with age-related muscle weakness (sarcopenia)",
    "Have difficulty walking, climbing stairs, or standing for long",
    "Live with conditions like osteoporosis, neuropathy, or vertigo",
    "Need support with daily activities and functional mobility"
  ]

  const whyChooseUs = [
    "Experienced Geriatric Physiotherapists trained in age-specific care",
    "Compassionate, One-on-One Support tailored to each person's pace",
    "Holistic Treatment Approach that integrates mind, body, and function",
    "Home Safety & Fall Prevention Guidance beyond the clinic",
    "Modern Tools including balance systems, resistance bands, and sensor mats",
    "Education for Families & Caregivers to ensure support at home"
  ]

  const faqs = [
    {
      question: "Is this program safe for elderly patients with multiple health conditions?",
      answer: "Yes. Every session is medically supervised, and programs are tailored to individual needs and tolerance."
    },
    {
      question: "How soon after a fall or surgery can one begin rehab?",
      answer: "Usually within a few days to weeks, depending on medical clearance. Sooner rehab often leads to faster recovery."
    },
    {
      question: "Can you help someone using a walker or wheelchair?",
      answer: "Absolutely. We adapt exercises and training to suit all mobility levels, including those needing assistive devices."
    },
    {
      question: "Do you offer family education?",
      answer: "Yes, we educate caregivers and families on safe transfers, exercises, and daily movement support."
    }
  ]

  const balanceTraining = [
    "Static and dynamic balance exercises",
    "Perturbation training to improve reaction time",
    "Use of stability cushions, balance boards, and parallel bars",
    "Core activation for postural control",
    "Weight-shifting and reaching drills for real-life movements"
  ]

  const gaitTraining = [
    "Step pattern correction and walking mechanics",
    "Supportive tools (walker, cane, or frame) guidance",
    "Dual-task walking drills for cognitive-motor coordination",
    "Obstacle course walking and safe stair navigation",
    "Endurance walking and turning techniques"
  ]

  const additionalInterventions = [
    "Strengthening for legs, hips, and back",
    "Stretching to improve joint flexibility",
    "Manual therapy to address tightness and pain",
    "Education on home safety and fall-proofing",
    "Breathing exercises and energy conservation for endurance"
  ]

  const sessionSteps = [
    {
      title: "Balance Drills",
      description: "Seated and standing balance drills",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Gait Training",
      description: "Assisted walking and cue-based gait training",
      icon: <Accessibility className="w-8 h-8" />
    },
    {
      title: "Strengthening",
      description: "Exercises using safe, low-resistance equipment",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Stretching",
      description: "Stretching for joints and muscles",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Feedback",
      description: "Post-session feedback and home exercise review",
      icon: <Brain className="w-8 h-8" />
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
                  Geriatric Rehabilitation in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Strength. Stability. Safe Independence.</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, our Geriatric Rehabilitation program in Delhi is thoughtfully designed to help older adults maintain independence, restore functional mobility, and prevent falls. With a structured blend of Balance Training and Gait Re-education, we address age-related physical decline and promote safe, confident movement for daily living.
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
                  In-Home Therapy Available
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4e54c8]/5 to-[#8f94fb]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#4e54c8]/10 to-[#8f94fb]/10 rounded-2xl flex items-center justify-center">
                  <Accessibility className="w-24 h-24 text-[#4e54c8]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8f94fb] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4e54c8] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Graceful Aging */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Supporting Graceful Aging With Confidence</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Whether you're facing joint stiffness, muscle weakness, or recovering from a fall or surgery, our physiotherapists provide one-on-one, compassionate care tailored to your goals, ensuring safety, dignity, and strength through every step.
            </p>
          </div>
        </div>
      </section>

      {/* What is Geriatric Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What is Geriatric Rehabilitation?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Geriatric Rehabilitation is a specialized branch of physiotherapy that focuses on helping older adults recover from injuries, adapt to age-related changes, and preserve their independence. As we age, issues like reduced balance, slower reaction time, joint degeneration, and chronic conditions (like arthritis or osteoporosis) can affect our ability to move safely and confidently.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa, we offer personalized rehabilitation plans that include strength training, balance enhancement, joint mobility, and gait improvement, aiming to reduce fall risk, support post-surgical recovery, and restore confidence in movement—at any age.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Who Can Benefit?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-body max-w-2xl mx-auto">
              This program is ideal for seniors who:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <Accessibility className="w-5 h-5 text-[#4e54c8] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 font-body">{condition}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-body">
              Even individuals who are relatively healthy benefit from proactive rehabilitation focused on mobility preservation and fall prevention.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">How Does It Work?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-700 font-body leading-relaxed text-center max-w-3xl mx-auto">
              We begin with a comprehensive geriatric functional assessment including posture, balance, gait, flexibility, muscular strength, and overall coordination. Based on this, your therapist develops a progressive plan that may include:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Balance Training */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#4e54c8] font-heading mb-6 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2 text-[#8f94fb]" />
                  Balance Training
                </h3>
                <div className="space-y-3">
                  {balanceTraining.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gait Training */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#4e54c8] font-heading mb-6 flex items-center">
                  <Accessibility className="w-5 h-5 mr-2 text-[#8f94fb]" />
                  Gait Training
                </h3>
                <div className="space-y-3">
                  {gaitTraining.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Interventions */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#4e54c8] font-heading mb-6 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-[#8f94fb]" />
                  Additional Interventions
                </h3>
                <div className="space-y-3">
                  {additionalInterventions.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-body">
              Every element is adapted to your current condition and gradually intensified as progress is achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Benefits of Geriatric Rehabilitation</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-lg flex items-center justify-center text-white mb-4">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 font-body">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-body italic">
              "We don't just train muscles—we help you trust your body again."
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Why Choose Kynexa for Senior Rehab?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
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
              <div className="mt-6 text-center">
                <p className="text-gray-700 italic">
                  "At Kynexa, we treat older adults with the warmth of family and the precision of science—empowering graceful, safe aging."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What to Expect in a Session</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-body max-w-2xl mx-auto">
              Each session runs 45–60 minutes and begins with a gentle warm-up. Your physiotherapist will guide you through:
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              Your progress is tracked, celebrated, and steadily built upon in every session.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">Book Your Geriatric Rehab Consultation</h2>
            <p className="text-lg font-body opacity-90">
              Support yourself or a loved one in staying strong, upright, and independent with Kynexa's expert geriatric rehabilitation in Delhi.
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
            <p className="mt-4 text-white/80">
              In-home physiotherapy and caregiver training also available upon request.
            </p>
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
                  <h3 className="text-lg font-bold text-[#4e54c8] font-heading mb-3">{faq.question}</h3>
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