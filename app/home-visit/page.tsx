"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Calendar,
  Home,
  CheckCircle,
  ArrowLeft,
  Clock,
  Shield,
  Heart,
  Users,
  MapPin,
  Stethoscope,
  Award,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomeVisitPage() {
  const benefits = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Comfort of Your Home",
      description: "Receive professional treatment in your familiar, comfortable environment",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Appointments that fit your schedule, including evenings and weekends",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Equipment",
      description: "We bring all necessary medical equipment and supplies to your location",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Care",
      description: "One-on-one attention without the distractions of a busy clinic",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Involvement",
      description: "Family members can observe and learn supportive techniques",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "No Travel Required",
      description: "Eliminate transportation barriers and save time on commuting",
    },
  ]

  const services = [
    "Manual Therapy & Myofascial Release",
    "Dry Needling Treatment",
    "Cupping Therapy",
    "Kinesio Taping Application",
    "Exercise Prescription & Training",
    "Post-Surgical Rehabilitation",
    "Geriatric Physiotherapy",
    "Pre & Post Natal Care",
    "Pain Management Techniques",
    "Mobility & Balance Training",
    "Injury Prevention Education",
    "Home Safety Assessments",
  ]

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Phone consultation to assess your needs and determine if home visit is appropriate",
    },
    {
      step: "2",
      title: "Appointment Scheduling",
      description: "We schedule a convenient time that works with your availability",
    },
    {
      step: "3",
      title: "Professional Visit",
      description: "Our physiotherapist arrives with all necessary equipment and supplies",
    },
    {
      step: "4",
      title: "Comprehensive Treatment",
      description: "Full assessment and treatment session in your comfortable environment",
    },
    {
      step: "5",
      title: "Follow-up Care",
      description: "Ongoing support and additional visits as needed for your recovery",
    },
  ]

  const testimonials = [
    {
      name: "Margaret Thompson",
      age: "72",
      condition: "Post-Hip Surgery",
      text: "The home visits were a lifesaver after my hip surgery. I couldn't drive, and having professional care at home made all the difference in my recovery.",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      age: "45",
      condition: "Back Injury",
      text: "As a busy father of three, finding time for clinic visits was impossible. Home visits allowed me to get the treatment I needed while being present for my family.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      age: "34",
      condition: "Prenatal Care",
      text: "During my pregnancy, the comfort and convenience of home visits was incredible. The personalized attention helped me stay active and healthy.",
      rating: 5,
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
                <Badge className="bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20">Home Visit Services</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] font-heading leading-tight">
                  Professional Physiotherapy at Your Home
                </h1>
                <p className="text-xl text-[#2E3A59] font-body">Bringing Expert Care to Your Doorstep</p>
                <p className="text-lg text-[#6B7280] font-body max-w-lg">
                  Experience the convenience and comfort of professional physiotherapy treatment in your own home. Our
                  mobile service brings the same high-quality care directly to you, complete with all necessary
                  equipment and expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#2E3A59] to-[#A259FF] hover:from-[#A259FF] hover:to-[#2E3A59] text-white px-8 py-6 text-lg font-medium transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Home Visit
                </Button>
                <Button
                  variant="outline"
                  className="border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Home Visit Physiotherapy"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#A259FF] to-[#2E3A59] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">
              Why Choose Home Visit Physiotherapy?
            </h2>
            <p className="text-lg text-[#6B7280] font-body max-w-2xl mx-auto">
              Discover the advantages of receiving professional physiotherapy treatment in the comfort of your own home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] font-heading">{benefit.title}</h3>
                  <p className="text-[#6B7280] font-body leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">
                  Services Available at Home
                </h2>
                <p className="text-lg text-[#6B7280] font-body leading-relaxed">
                  Our comprehensive home visit service includes a wide range of physiotherapy treatments and
                  interventions, all delivered with the same professional standards as our clinic-based care.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF] flex-shrink-0" />
                    <span className="text-[#111827] font-medium text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200/50">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Home Physiotherapy Equipment"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">How It Works</h2>
            <p className="text-lg text-[#6B7280] font-body max-w-2xl mx-auto">
              Our streamlined process ensures you receive the best possible care with minimal hassle.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-gradient-to-r from-white to-[#F9FAFB] border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#111827] font-heading">{step.title}</h3>
                      <p className="text-[#6B7280] font-body leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Patient Success Stories</h2>
            <p className="text-lg text-[#6B7280] font-body max-w-2xl mx-auto">
              Hear from patients who have experienced the benefits of our home visit physiotherapy services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A259FF] text-[#A259FF]" />
                    ))}
                  </div>
                  <blockquote className="text-[#6B7280] font-body italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-center space-y-1">
                    <p className="font-bold text-[#111827]">{testimonial.name}</p>
                    <p className="text-sm text-[#6B7280]">
                      Age {testimonial.age} • {testimonial.condition}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">Pricing & Insurance</h2>
            <p className="text-lg text-[#6B7280] font-body">
              Transparent pricing with insurance coverage options available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#A259FF]/5 to-[#2E3A59]/5 border-0">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <Stethoscope className="w-12 h-12 text-[#2E3A59] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#111827] font-heading">Standard Home Visit</h3>
                  <p className="text-3xl font-bold text-[#A259FF] mt-2">$150</p>
                  <p className="text-[#6B7280] text-sm">per session</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">60-minute treatment session</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">All equipment included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">Comprehensive assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">Exercise program design</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#2E3A59]/5 to-[#A259FF]/5 border-0">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <Award className="w-12 h-12 text-[#2E3A59] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#111827] font-heading">Insurance Coverage</h3>
                  <p className="text-[#6B7280] mt-2">Most plans accepted</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">Direct billing available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">Medicare & Medicaid accepted</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">Workers' compensation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A259FF]" />
                    <span className="text-[#111827]">Flexible payment plans</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2E3A59] to-[#A259FF]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Ready to Experience Home Visit Care?
            </h2>
            <p className="text-xl text-white/90 font-body">
              Schedule your home visit consultation today and discover the convenience of professional physiotherapy at
              your doorstep.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#2E3A59] hover:bg-gray-100 px-8 py-6 text-lg font-medium transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Home Visit
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2E3A59] px-8 py-6 text-lg font-medium transition-all duration-300 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
