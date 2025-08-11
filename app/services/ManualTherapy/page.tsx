"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Clock, MapPin, Mail, Hand, ArrowUp, ArrowDown, CheckCircle } from "lucide-react"
import { FaHandHoldingMedical, FaUserMd, FaBriefcaseMedical, FaRegChartBar } from "react-icons/fa"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"  
export default function ManualTherapyPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const howItWorks = [
    "Joint Mobilization & Manipulation – To improve range of motion and joint alignment",
    "Soft Tissue Mobilization – To break down adhesions and muscle tension",
    "Trigger Point Release – To deactivate painful muscle knots",
    "Neurodynamic Mobilization – To reduce nerve irritation and improve flexibility"
  ]

  const myofascialRelease = [
    "Restore tissue elasticity",
    "Relieve referred pain",
    "Improve muscle performance",
    "Support natural alignment",
    
  ]

  const benefits = [
    "Drug-free pain relief",
    "Improved flexibility and joint health",
    "Enhanced athletic performance",
    "Better posture and body awareness",
    "Quicker recovery from injuries or surgeries",
    "Reduced tension, stress, and muscular fatigue",
    "Increased circulation for faster tissue healing",
    "Restored range of motion in restricted areas",
    "Improved nervous system regulation and relaxation"
  ]

  const conditions = [
    "Cervical and lumbar spine dysfunction",
    "Shoulder impingement and frozen shoulder",
    "Postural misalignments and scoliosis",
    "Sciatica and nerve compression",
    "Headaches and TMJ disorders",
    "Sports injuries and repetitive strain issues",
    "Post-operative joint stiffness",
    "Arthritic joint pain and mobility limitations"
  ]

  const whyChooseUs = [
    "Certified Physiotherapists trained in advanced manual techniques",
    "Evidence-Based Methods proven to provide measurable improvements",
    "Holistic blend of physical therapy, knowledge empowerment, and posture correction",
    "Comfortable & Private Setting for one-on-one sessions",
    "Client-Centric Care tailored to your lifestyle, goals, and healing timeline"
  ]

  const whatToExpect = [
    {
      title: "A relaxing and pain-relieving experience",
      icon: <FaHandHoldingMedical className="w-8 h-8" />
    },
    {
      title: "Immediate mobility improvements",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Post-session guidance on exercises, stretches, and lifestyle hacks to maintain progress",
      icon: <FaRegChartBar className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: "Is manual therapy safe for everyone?",
      answer: "Yes, when administered by trained professionals, it’s safe and highly effective. Your treatment plan is always adapted to your specific needs."
    },
    {
      question: "How many sessions are required?",
      answer: "That depends on your condition. While some clients feel immediate relief, chronic issues may require ongoing care."
    },
    {
      question: "Will I feel pain during the session?",
      answer: "Some techniques may feel intense, but they are never harmful. We constantly check your comfort level throughout the process."
    },
    {
      question: "Can manual therapy be combined with other treatments?",
      answer: "Absolutely. It works best when integrated with physiotherapeutic exercises, dry needling, or modalities like cupping and laser therapy."
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
                  Manual Therapy <br />in Delhi
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Hands-On Relief. Lasting Results.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, our Manual Therapy services in Delhi offer a hands-on path to healing, designed to relieve pain, restore joint mobility, and improve overall function. This specialized approach uses skilled techniques like joint mobilization, myofascial release, and soft tissue manipulation to target the root causes of discomfort. Whether you're managing postural imbalances, recovering from surgery, or dealing with chronic pain conditions, our physiotherapists craft each session to address your unique needs and restore natural movement with precision and care.
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
                  src="/manual/Manual-Therapy-Main.jpg"
                  alt="Manual Therapy"
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
      {/* What is Manual Therapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/manual/Manual-Therapy-What.jpg"
                  alt="What is Manual Therapy"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#9d4ed8]/20 rounded-full flex items-center justify-center">
                  <Hand className="w-6 h-6 text-[#6c2c8b]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Manual Therapy?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Manual Therapy is a specialized, hands-on approach used by our skilled physiotherapists to diagnose, treat, and manage musculoskeletal dysfunctions. Unlike machine-based treatments, manual therapy involves controlled movements and pressure applied directly to muscles, joints, and connective tissues to reduce pain, improve mobility, and restore natural movement patterns.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  It is particularly effective for those suffering from joint stiffness, restricted range of motion, or soft tissue injuries. By physically engaging the body’s structures through targeted techniques, manual therapy not only relieves symptoms but also improves circulation, encourages proper alignment, and supports long-term functional independence. Each session is crafted based on individual needs, making it a cornerstone of personalized care at Kynexa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does Manual Therapy Work?</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Manual therapy techniques work by physically mobilizing restricted joints and decompressing tight soft tissues. This encourages better blood flow, reduces pain signaling from nerves, and improves overall movement quality. Common techniques we use include:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Hand className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Myofascial Release */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="space-y-6 p-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Myofascial Release: A Core Component</h2>
        <div className="prose prose-lg max-w-none mx-auto">
          <p className="text-lg text-gray-700 font-body leading-relaxed">
            One of the cornerstones of our manual therapy approach is Myofascial Release, a technique designed to stretch and release tension in the fascia—the connective tissue that surrounds your muscles and organs.
          </p>
          <p className="text-lg text-gray-700 font-body leading-relaxed">
            Tight fascia can restrict movement, create chronic pain patterns, and affect posture. Through slow, sustained pressure, we target specific myofascial restrictions, helping to:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
          {myofascialRelease.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm text-left">
              <CheckCircle className="w-5 h-5 text-[#9d4ed8] mt-1 flex-shrink-0" />
              <p className="text-gray-700 font-body text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Manual Therapy</h2>
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
                  src="/manual/Manual-Therapy-Benefits.jpg"
                  alt="Benefits of Manual Therapy"
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

      {/* Conditions We Commonly Treat */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Conditions We Commonly Treat</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Manual therapy is ideal for:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Hand className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/manual/Manual-Therapy-Why.jpg"
                  alt="Manual Therapy Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#9d4ed8]/20 rounded-full flex items-center justify-center">
                  <FaUserMd className="w-6 h-6 text-[#6c2c8b]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 2 && <FaHandHoldingMedical className="w-5 h-5" />}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What to Expect During Your Session</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Your first appointment includes a comprehensive assessment of posture, mobility, and functional strength. Based on your condition, we apply a combination of manual techniques to target the root cause of discomfort—not just the symptoms. Expect:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Appointment Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Ready to move freely and painlessly again? Let Kynexa’s manual therapy experts guide your recovery journey. Also available for online consultations and treatment planning.
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