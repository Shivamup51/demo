"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Dumbbell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SportsPhysiotherapyPage() {
  const benefits = [
    "Faster recovery from injuries",
    "Improved muscle control and joint stability",
    "Optimized performance and endurance",
    "Reduced injury recurrence",
    "Enhanced posture and neuromuscular coordination",
    "Sport-specific training for peak conditioning",
  ]

  const conditions = [
    "Ligament sprains and muscle strains",
    "Runner’s knee, IT band issues, and shin splints",
    "Shoulder instability and rotator cuff tears",
    "Achilles tendon issues and plantar fasciitis",
    "Groin pulls and hamstring injuries",
    "Concussions and post-impact rehabilitation",
    "Post-operative orthopedic recovery",
  ]

  const whyChooseUs = [
    "Certified Sports Physiotherapists with advanced training",
    "Evidence-Based Protocols tailored to your sport and injury history",
    "Comprehensive Services including dry needling, taping, laser therapy & shockwave",
    "Injury Prevention Programs designed to minimize re-injury risks",
    "Trusted by Athletes across disciplines—from runners and cricketers to dancers and swimmers",
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
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20">Sports Physiotherapy</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] font-heading leading-tight">
                  Sports Physiotherapy in Delhi
                </h1>
                <p className="text-xl text-[#2E3A59] font-body">Powering Performance, Preventing Injury</p>
                <p className="text-lg text-[#6B7280] font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we provide specialized Sports Physiotherapy in Delhi to help athletes of all levels recover faster, move better, and perform at their peak. Our evidence-based approach is tailored to the unique demands of your sport, addressing injuries, movement inefficiencies, and performance limitations. Whether you're a competitive athlete, weekend warrior, or fitness enthusiast, our physiotherapists design every session to restore function, prevent re-injury, and elevate your game with precision care.
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
                  Online Consultations Available
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                <div className="w-full h-96 bg-gradient-to-br from-[#A259FF]/10 to-[#2E3A59]/10 rounded-2xl flex items-center justify-center">
                  <Dumbbell className="w-24 h-24 text-[#2E3A59]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#A259FF] to-[#2E3A59] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Sports Physiotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What is Sports Physiotherapy?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7280] font-body leading-relaxed mb-6">
              A dedicated branch of physiotherapy, sports physiotherapy targets the prevention and rehabilitation of sports-related injuries. At Kynexa Advanced Physiotherapy and Manual Therapy Clinic in Delhi, our sports physio team is trained to evaluate movement, biomechanics, and musculoskeletal health with precision—catering to everyone from professional athletes to weekend warriors.
            </p>
            <p className="text-lg text-[#6B7280] font-body leading-relaxed">
              Whether you're recovering from an acute injury, managing chronic strain, or simply aiming to improve performance, we tailor each session to your unique sport, position, and training load. Our comprehensive approach includes strength conditioning, flexibility training, functional movement correction, and injury risk assessment. By addressing both current concerns and potential vulnerabilities, we help athletes build resilience, enhance efficiency, and return to sport safely and confidently.
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
                Our approach to Sports Physiotherapy blends in-depth clinical assessment with goal-driven functional rehabilitation to support every stage of your recovery and performance journey. We combine advanced techniques with sport-specific insights to not only treat current injuries but also enhance overall biomechanics and prevent future setbacks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Injury Assessment and Diagnosis – A detailed evaluation of injury mechanism, joint integrity, soft tissue condition, and functional deficits.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Manual Therapy and Joint Mobilization – Hands-on techniques to restore joint mechanics, relieve pain, and improve overall mobility.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Customized Exercise Prescription – Targeted strength, flexibility, and neuromuscular exercises based on your sport, injury stage, and performance goals.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Biomechanical Correction and Muscle Re-education – Focused retraining to correct faulty movement patterns that contribute to repeated injuries.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Taping and Bracing for Support and Recovery – Supportive strategies to stabilize vulnerable areas during healing and training.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Return-to-Sport Testing and Progression – Evidence-based milestones that guide safe transition back to play or competition without compromising recovery.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#111827] font-heading mb-4">Our Approach:</h3>
                <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                  At Kynexa, we emphasize addressing the root cause of dysfunction—not just symptom relief—ensuring your recovery is sustainable, comprehensive, and aligned with your athletic potential. Every session is designed to recondition your body for stronger, safer, and smarter movement under stress.
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Key Benefits</h3>
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Common Conditions We Treat</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Dumbbell className="w-5 h-5 text-[#2E3A59] mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Why Choose Kynexa for Sports Physio?</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What to Expect</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Assessment</h3>
                <p className="text-[#6B7280] font-body text-sm">Detailed physical and functional assessment.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Guided Sessions</h3>
                <p className="text-[#6B7280] font-body text-sm">1-on-1 guided sessions with real-time corrections.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Education</h3>
                <p className="text-[#6B7280] font-body text-sm">Education on technique, posture, warm-ups, and recovery strategies.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-[#6B7280] font-body">
              Every client begins with a detailed physical and functional assessment. We study how you move, load, and recover. From there, we develop an action plan that balances rehab, conditioning, and sports-specific drills—paving your path from recovery to peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Book Your Session Today</h2>
            <p className="text-lg text-[#6B7280] font-body">
              Reclaim your edge and play without pain. Schedule your customized sports physiotherapy session now and take the first step toward peak performance.
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
              <p className="text-[#6B7280] font-body">Location: [Clinic Address]</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-[#2E3A59]" />
              <p className="text-[#6B7280] font-body">Hours: [Operating Hours]</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Home className="w-5 h-5 text-[#2E3A59]" />
              <p className="text-[#6B7280] font-body">Online consultations and home-exercise plans also available</p>
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