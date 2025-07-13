"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Bone, ArrowRight, Lightbulb, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChiropracticCarePage() {
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

  const faqs = [
    {
      question: "Is chiropractic care safe?",
      answer: "Yes! When performed by trained professionals, chiropractic adjustments are safe, precise, and effective."
    },
    {
      question: "Will I feel pain during adjustment?",
      answer: "Most patients feel relief. You may hear a gentle 'pop' as gas is released from the joint, which is completely normal."
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
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#4e54c8]/10 text-[#4e54c8] border-[#4e54c8]/20 font-medium">Chiropractic Care</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1F2937] font-heading leading-tight">
                  Chiropractic Care in Delhi
                </h1>
                <p className="text-xl text-[#4e54c8] font-body">Realign. Rebalance. Restore.</p>
                <p className="text-lg text-[#4B5563] font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer Chiropractic Care in Delhi as part of our integrative approach to long-term pain relief and musculoskeletal wellness. This hands-on technique focuses on spinal adjustments and joint realignment to restore nerve function, correct posture, and enhance the body's self-healing ability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] hover:from-[#8f94fb] hover:to-[#4e54c8] text-white px-8 py-6 text-lg font-medium transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="border-[#4e54c8] text-[#4e54c8] hover:bg-[#4e54c8] hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 bg-transparent"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Learn About Our Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="w-full h-96 bg-gradient-to-br from-[#4e54c8]/10 to-[#8f94fb]/10 rounded-2xl flex items-center justify-center">
                  <Bone className="w-24 h-24 text-[#4e54c8]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#8f94fb] to-[#4e54c8] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Chiropractic Care */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-heading">What is Chiropractic Care?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#4B5563] font-body leading-relaxed mb-6">
              Chiropractic therapy uses hands-on techniques to align the spine and musculoskeletal system, promoting pain relief and improved movement without drugs or invasive procedures. By correcting misalignments (subluxations), chiropractic adjustments help reduce nerve irritation, improve joint movement, and support better posture and balance.
            </p>
            <p className="text-lg text-[#4B5563] font-body leading-relaxed">
              Unlike symptomatic treatments, chiropractic care addresses the root mechanical causes of dysfunction—especially in the spine, pelvis, and shoulders. It's widely used for managing back pain, neck pain, sciatica, headaches, and posture-related issues resulting from lifestyle strain or injury.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-heading">Who Can Benefit from Chiropractic Therapy?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
            <p className="text-lg text-[#4B5563] font-body max-w-2xl mx-auto">
              Chiropractic care is highly beneficial for individuals with various conditions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <Bone className="w-5 h-5 text-[#4e54c8] mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#4B5563] font-body">{condition}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-[#4B5563] font-body">
              It's safe for people of all ages—from working professionals and athletes to seniors seeking natural pain relief.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-heading">How Does It Work?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-[#4B5563] font-body leading-relaxed">
                After a thorough spinal assessment and postural analysis, our chiropractor identifies joint misalignments or movement restrictions. Based on your findings and history, we perform controlled, precise manual adjustments to restore normal motion and relieve nerve pressure.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#4e54c8] mt-1 flex-shrink-0" />
                  <p className="text-[#4B5563] font-body">Spinal Manipulation & Mobilization – Gentle thrusts to correct joint alignment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#4e54c8] mt-1 flex-shrink-0" />
                  <p className="text-[#4B5563] font-body">Soft Tissue Release – Myofascial or trigger point therapy to reduce muscular tension</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#4e54c8] mt-1 flex-shrink-0" />
                  <p className="text-[#4B5563] font-body">Posture Correction Techniques – Ergonomic guidance for daily activities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#4e54c8] mt-1 flex-shrink-0" />
                  <p className="text-[#4B5563] font-body">Stretching & Strengthening – To stabilize the spine and prevent recurrence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#4e54c8] mt-1 flex-shrink-0" />
                  <p className="text-[#4B5563] font-body">Lifestyle & Movement Coaching – Teaching safe lifting, walking, and movement habits</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4e54c8]/5 to-[#8f94fb]/5 rounded-2xl p-8 shadow-lg border border-gray-50">
                <h3 className="text-xl font-bold text-[#1F2937] font-heading mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 text-[#4e54c8] mr-2" />
                  Your Care Plan:
                </h3>
                <p className="text-lg text-[#4B5563] font-body leading-relaxed">
                  Your care plan evolves session by session based on how your body responds, with constant feedback and education.
                </p>
                
                <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                  <div className="flex items-center space-x-2 text-[#4e54c8] font-medium mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Personalized Approach</span>
                  </div>
                  <p className="text-sm text-[#4B5563]">
                    Every visit is tailored to your progress, comfort, and overall well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-heading">Benefits of Chiropractic Treatment</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-lg flex items-center justify-center text-white mb-4">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-[#4B5563] font-body">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-heading">Why Choose Kynexa for Chiropractic Care?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <Card className="bg-gradient-to-br from-[#4e54c8]/5 to-[#8f94fb]/5 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#4e54c8] mt-1 flex-shrink-0" />
                    <p className="text-[#4B5563] font-body">{reason}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-[#4B5563] italic">
                  "We go beyond cracking spines—we deliver intentional, controlled adjustments that align with your healing goals and lifestyle."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-heading">What to Expect in a Session</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
            <p className="text-lg text-[#4B5563] font-body max-w-2xl mx-auto">
              Your first chiropractic session will begin with a detailed assessment including posture screening, spinal motion tests, and functional movement analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] font-heading">Assessment</h3>
                <p className="text-[#4B5563] font-body text-sm">Explain your spinal health and how it affects symptoms</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Bone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] font-heading">Adjustments</h3>
                <p className="text-[#4B5563] font-body text-sm">Focused adjustments using hands or specialized tools</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] font-heading">Soft Tissue Work</h3>
                <p className="text-[#4B5563] font-body text-sm">Apply soft tissue techniques to reduce muscular compensation</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] font-heading">Follow-Up</h3>
                <p className="text-[#4B5563] font-body text-sm">Guide you through follow-up exercises or ergonomic corrections</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-[#4B5563] font-body">
              Every visit is tailored to your progress, comfort, and overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">Book Your Appointment Today</h2>
            <p className="text-lg font-body opacity-90">
              Say goodbye to constant strain and stiffness. Let Kynexa's chiropractic care in Delhi help realign your spine, reboot your system, and refresh your movement.
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
            <Button className="bg-white hover:bg-white/90 text-[#4e54c8] px-8 py-6 text-lg font-medium transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] font-heading">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#1F2937] font-heading mb-3">{faq.question}</h3>
                  <p className="text-[#4B5563] font-body">{faq.answer}</p>
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
            <p className="text-[#4B5563] font-body">
              Kynexa Advanced Physiotherapy and Manual Therapy Clinic - Empowering you to heal, move, and thrive.
            </p>
            <div className="mt-4">
              <Link href="/contact" className="inline-flex items-center text-[#4e54c8] font-medium hover:underline">
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