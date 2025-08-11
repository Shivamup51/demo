"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, CheckCircle, Clock, MapPin, Mail, Waves, ArrowUp, ArrowDown, Info } from "lucide-react"
import { FaSpa, FaUserMd, FaBriefcaseMedical, FaRegChartBar } from "react-icons/fa"
import Image from "next/image"
import FormDialog from "@/components/formDialog"  
import Link from "next/link"
export default function CuppingTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleFaq = (index: number | null) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Improved blood circulation to muscles and tissues",
    "Relief from muscle tension and stiffness",
    "Reduction in stress and anxiety",
    "Faster recovery from injuries and inflammation",
    "Relief from headaches, migraines, and fatigue",
    "Detoxification by stimulating lymphatic flow",
    "Improved posture and mobility when combined with manual therapy"
  ]

  const conditions = [
    "Chronic back and neck pain",
    "Frozen shoulder",
    "Sciatica",
    "Sports injuries",
    "Fibromyalgia",
    "Arthritis and joint stiffness",
    "Headaches and migraines",
    "Postural imbalances",
    "Muscle spasms and knots",
    "Anxiety and fatigue",
    "Plantar Fasciitis",
    "Digestive Distress"
  ]

  const whyChooseUs = [
    "Experienced physiotherapists trained in advanced cupping techniques",
    "Modern, hygienic clinic in the heart of Delhi",
    "Integrated care combining cupping with manual therapy, dry needling, and rehabilitation",
    "Personalized treatment plans tailored to your condition and goals",
    "Trusted provider of physiotherapy in Delhi with a growing base of happy clients"
  ]

  const cuppingTypes = [
    {
      title: "Dry Cupping",
      description: "Suction is applied without any incisions.",
      icon: <Waves className="w-7 h-7" />
    },
    {
      title: "Gliding Cupping",
      description: "Cups are smoothly moved over the skin using oil, creating a massage-like effect that's perfect for relaxing muscles and releasing fascia.",
      icon: <FaSpa className="w-7 h-7" />
    }
  ]

  const whatToExpect = [
    {
      title: "Apply cups to specific areas using gentle suction",
      icon: <Waves className="w-8 h-8" />
    },
    {
      title: "Leave them in place for 5–15 minutes",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Optionally use gliding cupping for a massage-like effect",
      icon: <FaSpa className="w-8 h-8" />
    },
    {
      title: "Provide post-session care tips to enhance results",
      icon: <FaRegChartBar className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: "Is cupping therapy painful?",
      answer: "Not really. You may feel a gentle pulling or warmth during the session. Most people find it relaxing."
    },
    {
      question: "Are the circular marks permanent?",
      answer: "No. The marks usually fade within 3–7 days and are a normal response to increased blood flow."
    },
    {
      question: "How many sessions will I need?",
      answer: "It varies. Some feel relief after one session, while others may need 3–5 sessions for lasting results."
    },
    {
      question: "Can cupping be combined with other therapies?",
      answer: "Absolutely. At Kynexa, we often combine cupping with manual therapy, dry needling, and rehab exercises for better outcomes."
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
                  Cupping Therapy <br />in Delhi
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Ancient Wisdom. Modern Healing.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer cupping therapy in Delhi as part of our holistic physiotherapy services. This time-tested technique, rooted in traditional medicine and now backed by modern science, is designed to relieve pain, improve circulation, and promote deep tissue healing. Whether you're recovering from an injury, managing chronic pain, or simply seeking relaxation, cupping can be a powerful addition to your wellness journey.
                </p>
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
                  src="/cupping/Cupping-Main.jpg"
                  alt="Cupping Therapy"
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
      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* What is Cupping Therapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/cupping/Cupping-Why.jpg"
                  alt="What is Cupping Therapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Cupping Therapy?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Cupping therapy is a non-invasive treatment where specialized cups are placed on the skin to create suction. This suction gently lifts the skin and underlying tissues, stimulating blood flow, loosening tight muscles, and encouraging lymphatic drainage. It’s often described as a “reverse massage” because instead of applying pressure, it lifts and decompresses the tissues.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  There are two main types:
                </p>
                <ul className="list-disc pl-5 text-lg text-gray-700 font-body leading-relaxed">
                  <li><span className="font-bold">Dry Cupping:</span> Suction is applied without any incisions.</li>
                  <li><span className="font-bold">Wet Cupping (Hijama):</span> Involves light skin pricks to draw out small amounts of blood, used for detoxification.</li>
                </ul>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa, we primarily use dry cupping as part of our physiotherapy services in Delhi, ensuring a safe and comfortable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* How Does Cupping Therapy Work */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does Cupping Therapy Work?</h2>
      <p className="text-xl text-gray-700 font-body max-w-6xl mx-auto">
        Cupping therapy works by creating a vacuum-like suction on the skin using specialized cups. This gentle suction raises the skin and underlying tissues, helping to:
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
        <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="text-[#9d4ed8]">
              <Waves className="w-7 h-7" />
            </div>
            <p className="text-gray-700 font-body text-base leading-relaxed">Increase blood circulation to the targeted area</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
        <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="text-[#9d4ed8]">
              <FaSpa className="w-7 h-7" />
            </div>
            <p className="text-gray-700 font-body text-base leading-relaxed">Loosen tight muscles and fascia</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
        <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="text-[#9d4ed8]">
              <Waves className="w-7 h-7" />
            </div>
            <p className="text-gray-700 font-body text-base leading-relaxed">Stimulate lymphatic drainage to remove toxins</p>
          </div>
        </CardContent>
      </Card>
      <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
        <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="text-[#9d4ed8]">
              <FaBriefcaseMedical className="w-7 h-7" />
            </div>
            <p className="text-gray-700 font-body text-base leading-relaxed">Trigger the body’s natural healing response</p>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {cuppingTypes.map((type, index) => (
        <Card key={index} className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
          <div className="h-2 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="text-[#9d4ed8]">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#6c2c8b]">{type.title}</h3>
            </div>
            <p className="text-gray-700 font-body text-base leading-relaxed mt-4">{type.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="text-center">
      <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
        The suction effect also stimulates nerve endings and pain receptors, which can help reduce pain perception and improve mobility. The circular marks left behind are a sign of increased blood flow and typically fade within a few days.
      </p>
      <p className="text-lg text-gray-700 font-body leading-relaxed">
        At Kynexa, we use safe, hygienic, and clinically approved cupping techniques as part of our integrated physiotherapy services in Delhi to ensure optimal results with minimal discomfort.
      </p>
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Cupping Therapy</h2>
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
                  src="/cupping/Cupping-Benefits.jpg"
                  alt="Benefits of Cupping Therapy"
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

      {/* Conditions We Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Conditions We Treat with Cupping</h2>
            <p className="text-xl text-gray-700 font-body max-w-3xl mx-auto">
              Our cupping therapy in Delhi is effective for a variety of conditions, including:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Waves className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/cupping/Cupping-Why.jpg"
                  alt="Cupping Therapy Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa for Cupping Therapy?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 2 && <Waves className="w-5 h-5" />}
                      {index === 3 && <FaRegChartBar className="w-5 h-5" />}
                      {index === 4 && <CheckCircle className="w-5 h-5" />}
                    </div>
                    <p className="text-gray-700 font-body text-lg leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During Your Session</h2>
            <p className="text-xl text-gray-700 font-body max-w-6xl mx-auto">
              Your session begins with a detailed assessment of your symptoms and goals. Based on your needs, our therapist will:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="text-center mt-8 bg-white p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-semibold">
              You may notice temporary circular marks on the skin—these are not bruises but signs of increased blood flow and typically fade within a few days.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Appointment Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              If you're looking for cupping therapy in Delhi that blends tradition with clinical precision, Kynexa Advanced Physiotherapy and Manual Therapy Clinic is your destination. Let us help you restore balance, relieve pain, and rejuvenate your body.
            </p>
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
              <p className="text-white/80 font-body">Timings: Monday to Saturday 08:00 AM - 08:00 PM</p>
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