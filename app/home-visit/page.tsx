"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Send, CheckCircle, Calendar, MapPin, Clipboard, Hand, Zap, Activity, Brain, Footprints, Heart, Clock, Bandage, PhoneCall, Mail, Waves } from "lucide-react"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function HomeVisitsPage() {
  const [isOpen, setIsOpen] = useState(false)

  const treatments = [
    { name: "Manual therapy and joint mobilization", icon: <Hand className="w-6 h-6 text-[#6c2c8b]" />, alt: "Manual therapy session" },
    { name: "Dry needling and soft tissue release", icon: <Zap className="w-6 h-6 text-[#6c2c8b]" />, alt: "Dry needling treatment" },
    { name: "Electrotherapy modalities (TENS, IFT, EMS)", icon: <Zap className="w-6 h-6 text-[#6c2c8b]" />, alt: "Electrotherapy device" },
    { name: "Therapeutic exercise and rehab programming", icon: <Activity className="w-6 h-6 text-[#6c2c8b]" />, alt: "Therapeutic exercise" },
    { name: "Post-surgical and orthopaedic recovery", icon: <Heart className="w-6 h-6 text-[#6c2c8b]" />, alt: "Post-surgical rehab" },
    { name: "Neurological rehabilitation (stroke, Parkinson’s, etc.)", icon: <Brain className="w-6 h-6 text-[#6c2c8b]" />, alt: "Neurological rehab session" },
    { name: "Gait training and balance exercises", icon: <Footprints className="w-6 h-6 text-[#6c2c8b]" />, alt: "Gait training" },
    { name: "Kinesio taping and posture correction techniques", icon: <Bandage className="w-6 h-6 text-[#6c2c8b]" />, alt: "Kinesio taping application" },
    {name:"Cupping therapy", icon: <Waves className="w-6 h-6 text-[#6c2c8b]" />, alt: "Cupping therapy session" }
  ]

  const benefits = [
    "Expert physiotherapy care by Dr. Pravesh Kumar",
    "Flexible scheduling across Delhi",
    "Privacy and comfort in your own space",
    "Customized treatment based on your surroundings",
    "Progress tracking and home exercise planning",
    "Personalized attention and continuity of care",
  ]

  const areasServed = [
    "South Delhi",
    "West Delhi",
    "East Delhi",
    "Central Delhi",
    "North Delhi",
  ]

  const processSteps = [
    { step: "Initial Assessment", description: "Review of condition, home setup, and treatment goals", icon: <Clipboard className="w-6 h-6 text-[#6c2c8b]" /> },
    { step: "Treatment Delivery", description: "Hands-on therapy, modality application, and exercise training", icon: <Hand className="w-6 h-6 text-[#6c2c8b]" /> },
    { step: "Feedback & Education", description: "Updates on progress and guidance for in-between visits", icon: <CheckCircle className="w-6 h-6 text-[#6c2c8b]" /> },
    { step: "Session Duration", description: "Typically 45–60 minutes; varies depending on complexity", icon: <Clock className="w-6 h-6 text-[#6c2c8b]" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                Physiotherapy Home Visits in Delhi
              </h1>
              <p className="text-xl text-white/90 font-body">Healing That Comes to You</p>
              <p className="text-lg text-white/80 font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we understand that recovery should never be restricted by distance, mobility, or comfort. That’s why Dr. Pravesh Kumar; PT now offers personalized physiotherapy sessions at home across Delhi—delivering expert care right to your doorstep.
                <p className="text-white/80 font-body leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-4"> 
                Whether you're recovering from surgery, managing chronic pain, or seeking postnatal support, our in-home sessions are designed to deliver the same precision, compassion, and clinical excellence you'd expect inside our clinic—without you needing to travel.
                </p>
              </p>
              <Button 
                onClick={() => setIsOpen(true)}
                className="mt-6 bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/homevisit/Home visit main.jpg"
                  alt="Physiotherapist treating patient at home"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/10 to-[#9d4ed8]/10"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Home Visit Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/homevisit/Home visit what.jpg"
                  alt="Home physiotherapy session"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/10 to-[#9d4ed8]/10"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#6c2c8b] font-heading">
                What Are Home Visit Physiotherapy Services?
              </h2>
              <p className="text-gray-600 text-lg font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Home visit physiotherapy allows patients to receive hands-on, professional treatment from a certified physiotherapist in the comfort and safety of their home. These sessions are especially valuable for:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                {[
                  "Elderly patients with mobility challenges",
                  "Post-operative cases unable to travel",
                  "Individuals with neurological conditions",
                  "Postnatal women needing recovery support",
                  "Patients needing one-on-one attention in a familiar setting",
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700 font-body text-sm">
                    <CheckCircle className="w-5 h-5 text-[#6c2c8b] mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Available */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#6c2c8b] font-heading text-center mb-8">
            Treatments Available at Home
          </h2>
          <p className="text-gray-600 text-lg font-body text-center max-w-3xl mx-auto mb-8">
            Dr. Pravesh brings portable tools and expertise to deliver a wide range of treatments:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="border-none rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6 flex items-center space-x-4">
                  {treatment.icon}
                  <p className="text-gray-700 font-body text-sm">{treatment.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-[#6c2c8b] font-heading">
                Why Choose Kynexa’s Home Visit Program?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-none rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <CheckCircle className="w-5 h-5 text-[#6c2c8b]" />
                      <p className="text-gray-700 font-body text-sm">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/homevisit/Home visit benefit.jpg"
                  alt="Patient exercising at home with physiotherapist"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/10 to-[#9d4ed8]/10"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
        
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
  <div className="max-w-7xl mx-auto text-center relative z-10">
    <h2 className="text-3xl font-bold text-[#6c2c8b] font-heading mb-8">
      Areas We Serve
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {["South Delhi", "West Delhi", "East Delhi", "Central Delhi", "North Delhi"].map((area, index) => (
        <div key={index} className="flex items-center text-gray-700 font-body text-sm">
          <MapPin className="w-5 h-5 text-[#6c2c8b] mr-2" />
          {area}
        </div>
      ))}
    </div>
    <p className="text-gray-600 text-sm font-body mt-4">
      Other locations on request; subject to availability
    </p>
  </div>
</section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/homevisit/Home visit why.jpg"
                  alt="Physiotherapist explaining treatment plan at home"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c2c8b]/10 to-[#9d4ed8]/10"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#6c2c8b] font-heading">
                What to Expect During a Home Visit
              </h2>
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                {processSteps.map((step, index) => (
                  <Card key={index} className="border-none rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                    <CardContent className="p-6 flex items-start space-x-4">
                      {step.icon}
                      <div>
                        <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">{step.step}</h3>
                        <p className="text-gray-600 text-sm font-body mt-2">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Schedule Your Home Session Today
          </h2>
          <p className="text-xl text-white/90 font-body">
            Whether it’s difficult for you to travel or you simply prefer healing at home, let Dr. Pravesh Kumar bring Kynexa’s trusted care to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent rounded-xl flex items-center justify-center w-full sm:w-auto"
            >
              <PhoneCall className="w-5 h-5 mr-2 flex-shrink-0" />
              Call: +91 8868879387
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent rounded-xl flex items-center justify-center w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
              Email: info@kynexaphysio.com
            </Button>
            <Button 
              onClick={() => setIsOpen(true)}
              className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl flex items-center justify-center w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
              Book Appointment
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm inline-flex items-center space-x-4">
              <Clock className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body text-sm">Hours: Monday to Saturday 08:00 AM - 08:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div className="mt-16">
          <Footer/>
        </div>
    </div>

  )
}