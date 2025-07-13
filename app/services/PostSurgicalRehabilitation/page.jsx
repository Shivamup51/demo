
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Stethoscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PostSurgicalRehabilitationPage() {
  const benefits = [
    "Faster, safer healing of surgical sites",
    "Reduced pain, swelling, and scar tissue buildup",
    "Restored joint mobility and muscle strength",
    "Improved balance, stability, and coordination",
    "Minimized risk of post-surgical complications",
    "Quicker return to daily activities, work, or sports",
    "Enhanced confidence in movement post-surgery",
  ]

  const conditions = [
    "Post-orthopedic surgeries (joint replacements, fracture fixations)",
    "Spinal surgeries (discectomy, laminectomy, fusion)",
    "Ligament reconstructions (ACL, PCL, MCL)",
    "Meniscus repairs and arthroscopic procedures",
    "Shoulder surgeries (rotator cuff repair, labral repair)",
    "Post-surgical stiffness or weakness",
    "Cardiac or abdominal surgery recovery",
  ]

  const whyChooseUs = [
    "Certified Physiotherapists with expertise in post-surgical protocols",
    "Personalized Recovery Plans aligned with your surgeon’s guidelines",
    "Advanced Techniques like laser therapy, ultrasound, and manual therapy",
    "Safe, Supervised Environment to ensure optimal healing",
    "Home-Based Rehab Options for early recovery or mobility limitations",
    "Ongoing Coordination with your surgical team for seamless care",
  ]

  const faqs = [
    {
      question: "When can I start physiotherapy after surgery?",
      answer: "This varies by surgery but often begins within days to weeks, based on your surgeon’s clearance.",
    },
    {
      question: "Will physiotherapy be painful?",
      answer: "Our therapists prioritize your comfort, using gentle techniques to manage pain while promoting healing.",
    },
    {
      question: "How long will recovery take?",
      answer: "Recovery timelines depend on the surgery and your condition. We set clear milestones to track progress.",
    },
    {
      question: "Can I do rehab at home?",
      answer: "Yes, we offer home-based sessions and guided home exercise plans for early or limited-mobility recovery.",
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
                <Badge className="bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20">Post-Surgical Rehabilitation</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] font-heading leading-tight">
                  Post-Surgical Rehabilitation in Delhi
                </h1>
                <p className="text-xl text-[#2E3A59] font-body">Restore Strength. Regain Movement. Recover Confidently.</p>
                <p className="text-lg text-[#6B7280] font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, our Post-Surgical Rehabilitation program in Delhi is designed to guide you through a safe and effective recovery after surgery. Whether you’ve undergone a joint replacement, spinal surgery, or ligament repair, our expert physiotherapists work closely with you to reduce pain, restore mobility, and rebuild strength. With personalized plans tailored to your surgical procedure and recovery goals, we ensure a smoother, faster return to your daily life or active pursuits.
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
                  Home-Based Rehab Available
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                <div className="w-full h-96 bg-gradient-to-br from-[#A259FF]/10 to-[#2E3A59]/10 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="w-24 h-24 text-[#2E3A59]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#A259FF] to-[#2E3A59] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Post-Surgical Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">What is Post-Surgical Rehabilitation?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6B7280] font-body leading-relaxed mb-6">
              Post-Surgical Rehabilitation is a structured physiotherapy program aimed at restoring function, reducing pain, and promoting healing after surgical procedures. Surgery, while often necessary, can lead to temporary limitations like stiffness, weakness, swelling, or restricted mobility. Our expert team at Kynexa ensures these challenges are addressed systematically to help you regain strength, mobility, and independence.
            </p>
            <p className="text-lg text-[#6B7280] font-body leading-relaxed">
              From orthopedic surgeries (like knee or hip replacements) to spinal or soft tissue repairs, our rehabilitation plans are customized to align with your surgeon’s protocols, ensuring safe progression through each recovery phase—acute, subacute, and functional.
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
                We begin with a thorough post-surgical assessment, evaluating incision healing, joint function, muscle strength, and mobility limitations. Collaborating with your surgical team, we develop a phased recovery plan that includes:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Pain and Swelling Management – Using cryotherapy, compression, and gentle manual techniques</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Range of Motion Restoration – Progressive stretching and joint mobilization to counter stiffness</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Strength and Stability Training – Targeted exercises to rebuild muscle and protect joints</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Functional Retraining – Task-specific drills for daily activities or sport-specific movements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Scar Tissue Management – Techniques to minimize adhesions and improve tissue flexibility</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Balance and Gait Correction – To ensure safe walking and prevent falls</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#A259FF] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7280] font-body">Advanced Modalities – Including ultrasound, laser therapy, or electrical stimulation for enhanced healing</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#111827] font-heading mb-4">Your Recovery Plan:</h3>
                <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                  Every phase is carefully monitored to ensure healing aligns with your surgical recovery timeline, prioritizing safety and long-term functionality.
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Benefits of Post-Surgical Rehabilitation</h3>
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
                <h3 className="text-2xl font-bold text-[#111827] font-heading mb-6">Who Can Benefit?</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Stethoscope className="w-5 h-5 text-[#2E3A59] mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Why Choose Kynexa for Post-Surgical Rehab?</h2>
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
                <h3 className="text-lg font-bold text-[#111827] font-heading">Pain Relief</h3>
                <p className="text-[#6B7280] font-body text-sm">Techniques to reduce swelling and discomfort.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Mobility Work</h3>
                <p className="text-[#6B7280] font-body text-sm">Gentle joint mobilization and stretching.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Strengthening</h3>
                <p className="text-[#6B7280] font-body text-sm">Progressive exercises to rebuild muscle.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Functional Training</h3>
                <p className="text-[#6B7280] font-body text-sm">Task-specific drills for daily activities.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] font-heading">Progress Review</h3>
                <p className="text-[#6B7280] font-body text-sm">Feedback and home exercise guidance.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-[#6B7280] font-body">
              Each session is tailored to your surgical recovery stage, ensuring steady progress without overloading healing tissues.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Book Your Post-Surgical Rehab Session</h2>
            <p className="text-lg text-[#6B7280] font-body">
              Take the first step toward a confident recovery. Let Kynexa’s expert team guide you back to strength and mobility.
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
              <p className="text-[#6B7280] font-body">Home-based rehabilitation available for early recovery</p>
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
