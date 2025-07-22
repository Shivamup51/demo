"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Home, CheckCircle, Clock, MapPin, Mail, Heart, ArrowUp, ArrowDown, Info } from "lucide-react"
import { FaLungs, FaHeartbeat, FaHospital, FaBriefcaseMedical, FaUserMd } from "react-icons/fa"
import { IoFitnessOutline } from "react-icons/io5"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"  
export default function PreAndPostNatalPhysiotherapyPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const whatIsConditions = [
    "Pelvic girdle and low back pain",
    "Postural strain and sciatica",
    "Diastasis recti (abdominal separation)",
    "Swelling, joint instability, and fatigue",
    "Core and pelvic floor dysfunction"
  ]

  const howItWorks = [
    {
      title: "Pelvic Floor Training & Postural Correction",
      description: "To strengthen deep stabilizers and reduce strain during lifting and feeding.",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      title: "Breathing Exercises & Mobility Drills",
      description: "To enhance relaxation, support labor prep, and improve postpartum recovery.",
      icon: <FaHeartbeat className="w-8 h-8" />
    },
    {
      title: "Core, Glute & Back Strengthening",
      description: "To improve stability, reduce fatigue, and address pelvic or sacroiliac pain.",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Manual Therapy",
      description: "To relieve muscular tension and correct imbalances in the spine, hips, and upper back.",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Education on Ergonomics & Positioning",
      description: "For safer movement during daily tasks like lifting your baby or sleeping.",
      icon: <FaHospital className="w-8 h-8" />
    },
    {
      title: "Scar Tissue Management",
      description: "For improved healing and mobility after C-section or episiotomy.",
      icon: <Heart className="w-8 h-8" />
    }
  ]

  const benefits = [
    "Reduced pelvic and back pain",
    "Improved posture and daily mobility",
    "Easier labor preparation with breath and core training",
    "Faster post-delivery recovery",
    "Prevention or correction of diastasis recti",
    "Improved sleep, energy, and confidence",
    "Safer return to fitness or daily tasks"
  ]

  const conditions = [
    "Pelvic floor dysfunction (leaking, heaviness)",
    "Pubic symphysis and sacroiliac joint pain",
    "Carpal tunnel and nerve compression",
    "Diastasis recti and core weakness",
    "Post-surgical (C-section) recovery",
    "Fatigue, swelling, and deconditioning",
    "Postural adaptations for feeding, lifting, and carrying"
  ]

  const whyChooseUs = [
    "Experienced Female Physiotherapists trained in women’s health",
    "Private, Supportive Environment for comfort and safety",
    "Education-Focused Approach for empowered recovery",
    "Gentle Hands-On Treatment with modern equipment and methods",
    "Personalized wellness plans that align physical therapy with emotional support"
  ]

  const whatToExpect = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of posture, pelvic alignment, core strength, and mobility.",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      title: "Personalized Plan",
      description: "Customized care plan tailored to your trimester or postpartum stage.",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Therapeutic Exercises",
      description: "Safe exercises to strengthen core, pelvic floor, and improve mobility.",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Manual Therapy",
      description: "Hands-on techniques to relieve tension and correct imbalances.",
      icon: <FaHeartbeat className="w-8 h-8" />
    },
    {
      title: "Ongoing Support",
      description: "Education and home exercises to maintain progress between sessions.",
      icon: <Heart className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: "Is physiotherapy safe during pregnancy?",
      answer: "Yes! All sessions are designed by professionals to be safe for both mother and baby at every stage."
    },
    {
      question: "When can I start postnatal therapy?",
      answer: "Most women can begin gentle therapy 6 weeks after delivery, or sooner with doctor clearance."
    },
    {
      question: "Can it help with C-section recovery?",
      answer: "Absolutely. We address scar tissue, posture, and core strength to aid healing."
    },
    {
      question: "Do I need a doctor’s referral?",
      answer: "Not required! You can directly book an assessment with our women’s health team."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-5 mt-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
                  Pre and <span className="text-white/90">Post Natal</span> <br />Physiotherapy <span className="text-xl sm:text-2xl font-medium block mt-2">in Delhi</span>
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Empowering Mothers Through Every Stage of Motherhood</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)} className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                </Link>
                </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Pre and Post Natal Physiotherapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl relative z-10"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Care Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6c2c8b]/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#9d4ed8]/5 rounded-full -ml-40 -mb-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 p-6 lg:p-0 order-2 lg:order-1 lg:pr-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading leading-tight">
                  Specialized Care for <span className="text-[#6c2c8b]">Pregnancy and Postpartum</span>
                </h2>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer specialized Pre and Post Natal Physiotherapy in Delhi to support women through the physical demands of pregnancy and the recovery that follows. Our personalized, evidence-based care helps reduce pain, improve posture, and strengthen the core and pelvic floor during this transformative period.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Whether you're expecting your first baby or navigating postpartum recovery, our therapists provide compassionate, tailored support that evolves with your needs, ensuring you feel stronger, more balanced, and fully empowered during your motherhood journey.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full gap-2">
                    <Heart className="w-5 h-5 text-[#9d4ed8]" />
                    <span className="text-gray-700 text-sm font-medium">Pregnancy Support</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full gap-2">
                    <FaUserMd className="w-5 h-5 text-[#9d4ed8]" />
                    <span className="text-gray-700 text-sm font-medium">Postpartum Recovery</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full gap-2">
                    <CheckCircle className="w-5 h-5 text-[#9d4ed8]" />
                    <span className="text-gray-700 text-sm font-medium">Women’s Health</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Pre and Post Natal Physiotherapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* What is Pre and Post Natal Physiotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="What is Pre and Post Natal Physiotherapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Pre and Post Natal Physiotherapy?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Pre and Post Natal Physiotherapy focuses on maintaining physical health and functional mobility before and after childbirth. During pregnancy, a woman’s body goes through dramatic changes in posture, weight distribution, hormonal balance, and muscle strength—often leading to discomfort or mobility issues.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  This therapy combines safe exercises, hands-on techniques, and patient education to effectively address conditions like pelvic girdle pain, diastasis recti, and core dysfunction. Postnatally, we help restore stability, rebuild strength, and support mothers in safely resuming activity, including lifting, carrying, and returning to sport or work.
                </p>
              </div>
              <div className="space-y-4">
                {whatIsConditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-6 text-[#6c2c8b] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Who Can Benefit?</h2>
            <p className="text-xl text-gray-700 font-body max-w-3xl mx-auto">
              This program is designed for expecting and new mothers experiencing:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    {index % 2 === 0 ? (
                      <Heart className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    ) : (
                      <FaUserMd className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    )}
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

 {/* How Does It Work */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does It Work?</h2>
      <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
        Our Pre and Postnatal Physiotherapy programs begin with a comprehensive assessment of your posture, pelvic alignment, core strength, and any areas of discomfort or mobility restriction. Based on this, our experienced physiotherapists design a customized care plan that prioritizes safety, function, and confidence.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {howItWorks.map((approach, index) => (
        <Card key={index} className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
          <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="text-[#9d4ed8]">
                {approach.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#6c2c8b]">{approach.title}</h3>
            </div>
            <p className="text-gray-700 font-body text-base leading-relaxed mt-4">{approach.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
    <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
      <p className="text-lg text-gray-700 font-body">
        Each program is paced according to your trimester or healing phase and evolves with your goals.
      </p>
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits for Expecting and New Mothers</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#6c2c8b] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Benefits of Pre and Post Natal Physiotherapy"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Kynexa Different */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Pre and Post Natal Physiotherapy Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
              <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                We understand that pregnancy and postpartum recovery are transformative journeys. At Kynexa, we provide compassionate, expert care to help you feel stronger, more confident, and ready to embrace motherhood.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 2 && <FaHeartbeat className="w-5 h-5" />}
                      {index === 3 && <IoFitnessOutline className="w-5 h-5" />}
                      {index === 4 && <Heart className="w-5 h-5" />}
                    </div>
                    <p className="text-gray-700 font-body text-lg leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect in a Session */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect in a Session</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Each session is carefully structured around your capacity and goals. Here's what typically happens:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whatToExpect.map((step, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="flex items-center space-x-4">
                  <div className="text-[#9d4ed8]">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">Step {index + 1}</h3>
                  </div>
                  <p className="text-gray-600 font-body text-base leading-relaxed mt-4">{step.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-body">
              You’ll also receive home care strategies, self-monitoring tips, and exercises to maintain progress between sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Book Your Session */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Session Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Prioritize your well-being before and after childbirth with expert pre- and post-natal physiotherapy care at Kynexa.
            </p>
            <p className="text-sm text-white/70 font-body">Home visit and online consultation options available.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Call Us</h3>
              <p className="text-white/80 font-body">+91 8868879387</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Email Us</h3>
              <p className="text-white/80 font-body">info@kynexaphysio.com</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">Visit Us</h3>
              <p className="text-white/80 font-body">D 16 , Basement , Hauz Khas , New Delhi - 110016</p>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm inline-block mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Timings: Monday to Saturday 10:00 AM - 07:00 PM</p>
            </div>
          </div>
          <div>
            <Button onClick={() => setIsOpen(true)} className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Appointment
            </Button>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div
                    className="w-full text-left flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-bold text-[#6c2c8b] font-heading hover:text-[#9d4ed8]">
                      <span className="inline-block w-7 h-7 bg-[#6c2c8b]/10 rounded-full text-center text-[#6c2c8b] mr-2">
                        Q
                      </span>
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ArrowUp className="w-5 h-5 text-[#9d4ed8]" />
                    ) : (
                      <ArrowDown className="w-5 h-5 text-[#9d4ed8]" />
                    )}
                  </div>
                  {expandedFaq === index && (
                    <div className="mt-4 pl-9">
                      <p className="text-gray-600 font-body text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}