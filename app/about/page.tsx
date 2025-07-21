"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Calendar,
  Award,
  Target,
  Lightbulb,
  CheckCircle,
  Clock,
  Home,
  Heart,
  Users,
  BookOpen,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence in Treatment",
      description: "We strive for the highest standards in physiotherapy using evidence-based practices.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient-Centered Approach",
      description: "Your individual needs and goals are at the center of everything we do.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "We stay current with the latest research and techniques in physiotherapy.",
    },
  ]

  const qualifications = [
    "Bachelor of Physiotherapy (BPT)",
    "Master of Physiotherapy (MPT)",
    "Certified Manual Therapist (CMT)",
    "Specialization in Orthopedic and Sports Rehabilitation",
    "Expert in Manual Therapy, Dry Needling, and Kinesio Taping",
    "Continuing Education in Rehabilitation Science",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-none px-4 py-1.5 text-sm rounded-full">About Us</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                  About <span className="text-white">Kynexa</span> Advanced Physiotherapy and Manual Therapy Clinic
                </h1>
                <p className="text-xl text-white/90 font-body">Where Movement Meets Mastery</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa, we believe that healing is more than just recovery—it’s about reclaiming strength, restoring confidence, and redefining personal limits. Located in the heart of Delhi, our clinic serves as a sanctuary for individuals seeking expert care, personalized treatment, and long-term wellness.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/5 to-[#9d4ed8]/5 rounded-3xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Kynexa Clinic"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-slate-50 rounded-3xl p-6 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our Story"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-t-3xl"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center mb-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Our Approach</h2>
                </div>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  We specialize in evidence-based physiotherapy services that address orthopedic, neurological, and sports-related conditions. From chronic pain and post-surgical rehab to athletic performance and posture correction, our approach blends modern science with compassionate care.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Our treatment philosophy is rooted in integration—we combine manual therapy, dry needling, cupping, laser therapy, electrotherapy, and Kinesio taping with tailored exercise plans to deliver results that last. Every patient receives a custom roadmap to recovery in a calm, modern setting designed to promote healing from the inside out.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-none rounded-xl shadow-lg bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-3">Our Mission</h3>
                      <p className="text-lg text-gray-700 font-body leading-relaxed">
                        To deliver evidence-based, personalized physiotherapy that empowers individuals to heal, move, and thrive.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none rounded-xl shadow-lg bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-3">Our Vision</h3>
                      <p className="text-lg text-gray-700 font-body leading-relaxed">
                        To be Delhi’s leading center for integrative physiotherapy, where innovation meets compassionate care.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-lg text-gray-700 font-body leading-relaxed mt-6">
                  Whether you're an athlete chasing peak performance, a desk-bound professional battling posture pain, or someone seeking to live pain-free, Kynexa is your partner in progress. We don’t just treat symptoms—we target the source, educate our patients, and empower them to take charge of their health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-[#9d4ed8]/20 text-[#6c2c8b] hover:bg-[#9d4ed8]/30 border-none px-4 py-1.5 text-sm rounded-full mb-2 inline-flex">Core Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What Drives Us Forward</h2>
            <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
              These principles guide our approach to delivering exceptional physiotherapy care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center mx-auto text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#6c2c8b] font-heading text-center">{value.title}</h3>
                  <p className="text-gray-600 font-body leading-relaxed text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Mind Behind Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-[#9d4ed8]/20 text-[#6c2c8b] hover:bg-[#9d4ed8]/30 border-none px-4 py-1.5 text-sm rounded-full mb-2 inline-flex">Our Leader</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">The Mind Behind Kynexa: Dr. Pravesh Kumar PT</h2>
            <p className="text-xl text-[#9d4ed8] font-body">Driven by Purpose. Defined by Precision</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white">
                <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 font-body leading-relaxed">
                      At the helm of Kynexa is Dr. Pravesh Kumar, a seasoned physiotherapist with over 10 years of clinical experience in orthopedic and sports rehabilitation. Holding degrees in BPT, MPT, and CMT, Dr. Kumar brings a rare blend of academic excellence, hands-on expertise, and patient-first philosophy to every treatment session.
                    </p>
                    <p className="text-lg text-gray-700 font-body leading-relaxed">
                      His journey began with a simple yet powerful belief: that movement is medicine. Over the years, he has worked with a diverse range of patients—from post-operative cases and chronic pain sufferers to elite athletes and weekend warriors—helping each one regain mobility, strength, and confidence.
                    </p>
                    <p className="text-lg text-gray-700 font-body leading-relaxed">
                      Dr. Kumar’s specialization in orthopedic and sports conditions means he understands the biomechanics of movement at a granular level. His treatments are not just reactive but proactive focused on preventing future injuries, correcting posture, and optimizing performance. He is known for his manual therapy skills, clinical precision, and ability to connect with patients on a human level.
                    </p>
                    <p className="text-lg text-gray-700 font-body leading-relaxed">
                      Beyond the clinic, Dr. Kumar is a passionate educator and advocate for physiotherapy awareness. He regularly conducts workshops, contributes to wellness blogs, and stays updated with the latest advancements in rehabilitation science.
                    </p>
                    <p className="text-lg text-gray-700 font-body leading-relaxed">
                      At Kynexa, his vision is clear: to create a space where physiotherapy is not just a treatment but a lifestyle. A place where every patient feels heard, supported, and empowered to move without limits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md">
                <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/10 to-[#9d4ed8]/10 rounded-3xl"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=450"
                    alt="Dr. Pravesh Kumar"
                    width={450}
                    height={500}
                    className="w-full h-auto rounded-2xl relative z-10"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Qualifications */}
            <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white">
              <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading">Qualifications & Expertise</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pl-4 mt-6">
                    {qualifications.map((qualification, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
                        <p className="text-gray-700 font-body">{qualification}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl text-white/90 font-body">
              Experience Kynexa's personalized physiotherapy and start your journey to better health today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}