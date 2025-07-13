
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PreAndPostNatalPhysiotherapyPage() {
  const benefits = [
    "Reduced pelvic and back pain",
    "Improved posture and daily mobility",
    "Easier labor preparation with breath and core training",
    "Faster post-delivery recovery",
    "Prevention or correction of diastasis recti",
    "Improved sleep, energy, and confidence",
    "Safer return to fitness or daily tasks",
  ]

  const conditions = [
    "Pelvic floor dysfunction (leaking, heaviness)",
    "Pubic symphysis and sacroiliac joint pain",
    "Carpal tunnel and nerve compression",
    "Diastasis recti and core weakness",
    "Post-surgical (C-section) recovery",
    "Fatigue, swelling, and deconditioning",
    "Postural adaptations for feeding, lifting, and carrying",
  ]

  const whyChooseUs = [
    "Experienced Female Physiotherapists trained in women’s health",
    "Private, Supportive Environment for comfort and safety",
    "Education-Focused Approach for empowered recovery",
    "Gentle Hands-On Treatment with modern equipment and methods",
    "Personalized wellness plans that align physical therapy with emotional support",
  ]

  const faqs = [
    {
      question: "Is physiotherapy safe during pregnancy?",
      answer: "Yes! All sessions are designed by professionals to be safe for both mother and baby at every stage.",
    },
    {
      question: "When can I start postnatal therapy?",
      answer: "Most women can begin gentle therapy 6 weeks after delivery, or sooner with doctor clearance.",
    },
    {
      question: "Can it help with C-section recovery?",
      answer: "Absolutely. We address scar tissue, posture, and core strength to aid healing.",
    },
    {
      question: "Do I need a doctor’s referral?",
      answer: "Not required! You can directly book an assessment with our women’s health team.",
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
                <Badge className="bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20">Pre and Post Natal Physiotherapy</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] font-heading leading-tight">
                  Pre and Post Natal Physiotherapy in Delhi
                </h1>
                <p className="text-xl text-[#2E3A59] font-body">Empowering Mothers Through Every Stage of Motherhood</p>
                <p className="text-lg text-[#6B7280] font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer specialized Pre and Post Natal Physiotherapy in Delhi to support women through the physical demands of pregnancy and the recovery that follows. Our personalized, evidence-based care helps reduce pain, improve posture, and strengthen the core and pelvic floor during this transformative period. Whether you're expecting your first baby or navigating postpartum recovery, our therapists provide compassionate, tailored support that evolves with your needs.
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
                  <Heart className="w-24 h-24 text-[#2E3A59]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#A259FF] to-[#2E3A59] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pre and Post Natal Physiotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What is Pre and Post Natal Physiotherapy?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7280] font-body leading-relaxed mb-6">
              Pre and Post Natal Physiotherapy focuses on maintaining physical health and functional mobility before and after childbirth. During pregnancy, a woman’s body goes through dramatic changes in posture, weight distribution, hormonal balance, and muscle strength—often leading to discomfort or mobility issues.
            </p>
            <p className="text-lg text-[#6B7280] font-body leading-relaxed">
              This therapy approach combines safe exercises, hands-on techniques, and patient education to effectively address:
            </p>
            <ul className="text-lg text-[#6B7280] font-body leading-relaxed list-disc pl-6">
              <li>Pelvic girdle and low back pain</li>
              <li>Postural strain and sciatica</li>
              <li>Diastasis recti (abdominal separation)</li>
              <li>Swelling, joint instability, and fatigue</li>
              <li>Core and pelvic floor dysfunction</li>
            </ul>
            <p className="text-lg text-[#6B7280] font-body leading-relaxed">
              Postnatally, we help restore stability, rebuild strength, and support mothers in safely resuming activity, including lifting, carrying, and even returning to sport or work.
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
                Our Pre and Postnatal Physiotherapy programs at Kynexa are thoughtfully crafted to support the physical, emotional, and hormonal transitions women experience during pregnancy and after childbirth. We begin with a comprehensive assessment of your posture, pelvic alignment, core strength, and any areas of discomfort or mobility restriction. Based on this, our experienced physiotherapists design a customized care plan that prioritizes safety, function, and confidence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Pelvic Floor Training & Postural Correction – to strengthen deep stabilizers and reduce strain during lifting and feeding.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Breathing Exercises & Mobility Drills – to enhance relaxation, support labor prep, and improve postpartum recovery.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Core, Glute & Back Strengthening – to improve stability, reduce fatigue, and address pelvic or sacroiliac pain.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Manual Therapy – to relieve muscular tension and correct imbalances in the spine, hips, and upper back.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Education on Ergonomics & Positioning – for safer movement during daily tasks like lifting your baby or sleeping.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Scar Tissue Management – for improved healing and mobility after C-section or episiotomy.</p>
                </div>
              </div>
              <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                Each program is paced according to your trimester or healing phase and evolves with your goals. Through ongoing support and specialized care, we help you feel stronger, more balanced, and fully empowered during your motherhood journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#111827] font-heading mb-4">Your Care Plan:</h3>
                <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                  Through ongoing support and specialized care, we help you feel stronger, more balanced, and fully empowered during your motherhood journey.
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Benefits for Expecting and New Mothers</h3>
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Common Conditions We Address</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-[#2E3A59] mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Why Choose Kynexa?</h2>
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
                <h3 className="text-lg font-bold text-[#111827] font-heading">Assessment</h3>
                <p className="text-[#6B7280] font-body text-sm">Posture, pelvic alignment, and core evaluation.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Pelvic Floor Training</h3>
                <p className="text-[#6B7280] font-body text-sm">Strengthening deep stabilizers for stability.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Core Strengthening</h3>
                <p className="text-[#6B7280] font-body text-sm">Exercises to rebuild core and back strength.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Manual Therapy</h3>
                <p className="text-[#6B7280] font-body text-sm">Relieve tension and correct imbalances.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Education</h3>
                <p className="text-[#6B7280] font-body text-sm">Guidance on ergonomics and daily tasks.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-[#6B7280] font-body">
              Each program is paced according to your trimester or healing phase, ensuring safe and effective progress.
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
              Prioritize your well-being before and after childbirth with expert pre- and post-natal physiotherapy care at Kynexa.
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
              <p className="text-[#6B7280] font-body">Home visit and online consultation options available</p>
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
