
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Syringe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DryNeedlingTherapyPage() {
  const benefits = [
    "Precise, drug-free pain relief tailored to your needs",
    "Improved muscle flexibility and joint mobility",
    "Neuromuscular re-education for better movement patterns",
    "Faster recovery from sports injuries and overuse syndromes",
    "Relieves stress and releases deep muscle tension",
    "Enhanced effectiveness when combined with manual therapy and exercise",
  ]

  const conditions = [
    "Chronic neck and back pain",
    "Frozen shoulder and rotator cuff injuries",
    "Sciatica and lumbar disc issues",
    "Headaches and migraines",
    "Tennis elbow and golfer's elbow",
    "Plantar fasciitis and Achilles tendinopathy",
    "TMJ (jaw) dysfunction",
    "Fibromyalgia and myofascial pain syndrome",
    "Postural imbalances and repetitive strain injuries",
  ]

  const whyChooseUs = [
    "Highly trained physiotherapists certified in advanced dry needling techniques",
    "Comprehensive care approach blending dry needling with manual therapy, guided exercise, and rehab",
    "State-of-the-art clinic located in the heart of Delhi",
    "Evidence-based approach tailored to your goals and lifestyle",
    "Trusted provider of physiotherapy services in Delhi with a growing community of satisfied patients",
  ]

  const faqs = [
    {
      question: "Is dry needling the same as acupuncture?",
      answer: "No. Dry needling follows Western medical principles and targets muscle trigger points, while acupuncture is based on traditional Chinese medicine.",
    },
    {
      question: "Does dry needling hurt?",
      answer: "Not much. You might feel a quick twitch or mild ache, but it's usually well-tolerated and short-lived.",
    },
    {
      question: "What conditions does it treat?",
      answer: "It helps with neck/back pain, sciatica, shoulder injuries, TMJ issues, and sports muscle tightness.",
    },
    {
      question: "How many sessions are needed?",
      answer: "Depends on the case. Some feel better after one session, while others may need a few more for full relief.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 mt-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                  Dry Needling Therapy in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Precision Healing for Pain-Free Living</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer Dry Needling therapy in Delhi as part of our advanced, evidence-based physiotherapy services. This powerful technique is designed to release muscle tension, reduce pain, and restore optimal movement patterns. Whether you're an athlete recovering from injury, a professional dealing with postural strain, or someone managing chronic pain, our expert physiotherapists tailor each session to your unique needs.
                </p>
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
                  <Home className="w-5 h-5 mr-2" />
                  In-Clinic Therapy Available
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/5 to-[#9d4ed8]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#6c2c8b]/10 to-[#9d4ed8]/10 rounded-2xl flex items-center justify-center">
                  <Syringe className="w-24 h-24 text-[#6c2c8b]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Dry Needling */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Dry Needling?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Dry Needling is a modern therapeutic technique that involves inserting ultra-fine, sterile needles into specific myofascial trigger points—commonly known as muscle knots. These trigger points are hyperirritable spots in skeletal muscle that can cause pain, stiffness, and restricted movement.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Unlike acupuncture, which is rooted in traditional Chinese medicine, dry needling is grounded in Western medicine and neuroanatomy. It targets the neuromuscular system to stimulate a healing response, improve blood flow, and normalize muscle function. It's a cornerstone of physiotherapy services in Delhi for treating musculoskeletal dysfunctions.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does It Work?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-body leading-relaxed">
                When a muscle is overused or injured, it can form tight bands of tissue that limit blood flow and reduce oxygen supply. This creates an "energy crisis" within the muscle, leading to pain and impaired function. By inserting a needle directly into the trigger point, we:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-body">Stimulate a local twitch response, which helps release the tight band</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-body">Increase circulation and oxygenation to the affected area</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-body">Reduce inflammation and chemical irritants</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-body">Stimulate the body's natural pain relief response, triggering the release of endorphins</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white h-full hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 font-body leading-relaxed">
                    At Kynexa, we combine clinical expertise with compassionate care to deliver exceptional physiotherapy in Delhi. Our focus is on providing personalized treatment plans that address your specific needs and goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Conditions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6">Benefits of Dry Needling Therapy</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conditions Treated */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6">Conditions We Commonly Treat</h3>
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Syringe className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-body">{condition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa Advanced Physiotherapy?</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
            <CardContent className="p-8">
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{reason}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During Your Session</h2>
          </div>

          <p className="text-lg text-gray-700 font-body mb-8 max-w-3xl mx-auto text-center">
            Your first session begins with a comprehensive assessment of your condition, posture, and movement patterns. Based on this, we identify the trigger points contributing to your pain and dysfunction.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">During Treatment</h3>
                <p className="text-gray-600 font-body text-sm">
                  You may feel a brief twitch or mild ache as the needle activates the muscle. Most patients describe the sensation as tolerable and even relieving.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <Syringe className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Post-Treatment</h3>
                <p className="text-gray-600 font-body text-sm">
                  Post-treatment soreness is normal and usually subsides within 24–48 hours. We'll provide guidance on managing any discomfort.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Aftercare</h3>
                <p className="text-gray-600 font-body text-sm">
                  We'll guide you through post-needling care, including hydration, gentle movement, and follow-up exercises to maximize results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Appointment Today</h2>
            <p className="text-lg text-white/80 font-body">
              If you're searching for dry needling therapy in Delhi that delivers real results, look no further than Kynexa Advanced Physiotherapy and Manual Therapy Clinic. We're here to help you move with ease, feel stronger, and live free from pain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Call Us</h3>
              <p className="text-white/80 font-body">[Phone Number]</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Email Us</h3>
              <p className="text-white/80 font-body">[Email Address]</p>
            </div>
          </div>

          <div className="space-y-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm inline-block mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Visit us: [Clinic Address]</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Hours: [Operating Hours]</p>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#6c2c8b] font-heading mb-3">{index + 1}. {faq.question}</h3>
                  <p className="text-gray-600 font-body">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
