"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Clock, MapPin, Mail, Accessibility, ArrowUp, ArrowDown, CheckCircle, Info } from "lucide-react"
import { FaWalking, FaUserMd, FaBriefcaseMedical, FaRegChartBar, FaHome } from "react-icons/fa"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"
export default function GeriatricRehabilitationPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Enhanced walking speed and coordination",
    "Reduced fear and risk of falls",
    "Improved strength, balance, and flexibility",
    "Better posture and joint alignment",
    "Increased independence in daily tasks",
    "Faster recovery from illness, surgeries, or hospitalization",
    "Boosted confidence, cognitive alertness, and mood"
  ]

  const conditions = [
    "Have a history of falls or fear of falling",
    "Experience poor balance, dizziness, or unsteady gait",
    "Are recovering from hip, knee, or spinal surgery",
    "Suffer from arthritis, Parkinson’s, or stroke after-effects",
    "Deal with age-related muscle weakness (sarcopenia)",
    "Have difficulty walking, climbing stairs, or standing for long",
    "Live with conditions like osteoporosis, neuropathy, or vertigo",
    "Need support with daily activities and functional mobility"
  ]

  const whyChooseUs = [
    "Experienced Geriatric Physiotherapists trained in age-specific care",
    "Compassionate, One-on-One Support tailored to each person’s pace",
    "Holistic Treatment Approach that integrates mind, body, and function",
    "Home Safety & Fall Prevention Guidance beyond the clinic",
    "Modern Tools including balance systems, resistance bands, and sensor mats",
    "Education for Families & Caregivers to ensure support at home"
  ]

  const balanceTraining = [
    "Static and dynamic balance exercises",
    "Perturbation training to improve reaction time",
    "Use of stability cushions, balance boards, and parallel bars",
    "Core activation for postural control",
    "Weight-shifting and reaching drills for real-life movements",
    "Visual tracking tasks to enhance balance during head or eye movement"
  ]

  const gaitTraining = [
    "Step pattern correction and walking mechanics",
    "Supportive tools (walker, cane, or frame) guidance",
    "Dual-task walking drills for cognitive-motor coordination",
    "Obstacle course walking and safe stair navigation",
    "Endurance walking and turning techniques",
    "Rhythm and pacing control to promote smoother, coordinated strides"
  ]

  const additionalInterventions = [
    "Strengthening for legs, hips, and back",
    "Stretching to improve joint flexibility",
    "Manual therapy to address tightness and pain",
    "Education on home safety and fall-proofing",
    "Breathing exercises and energy conservation for endurance",
    "Balance drills to improve stability during everyday movements"
  ]

  const whatToExpect = [
    {
      title: "Seated and standing balance drills",
      icon: <Accessibility className="w-8 h-8" />
    },
    {
      title: "Assisted walking and cue-based gait training",
      icon: <FaWalking className="w-8 h-8" />
    },
    {
      title: "Strengthening exercises using safe, low-resistance equipment",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Stretching for joints and muscles",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
    {
      title: "Post-session feedback and home exercise review",
      icon: <FaHome className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: "Is this program safe for elderly patients with multiple health conditions?",
      answer: "Yes. Every session is medically supervised, and programs are tailored to individual needs and tolerance."
    },
    {
      question: "How soon after a fall or surgery can one begin rehab?",
      answer: "Usually within a few days to weeks, depending on medical clearance. Sooner rehab often leads to faster recovery."
    },
    {
      question: "Can you help someone using a walker or wheelchair?",
      answer: "Absolutely. We adapt exercises and training to suit all mobility levels, including those needing assistive devices."
    },
    {
      question: "Do you offer family education?",
      answer: "Yes, we educate caregivers and families on safe transfers, exercises, and daily movement support."
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
                  Geriatric Rehabilitation <br />in Delhi
                </h1>
                <p className="text-white/90 font-body">At Kynexa in Delhi, our Geriatric Rehabilitation program helps older adults stay independent and mobile through targeted balance and gait training. Whether recovering from surgery, injury, or managing age-related weakness and stiffness, our team offers personalized, compassionate care to improve safety, stability, and confidence in daily life.</p>

                <p className="text-xl text-white/90 font-body">Strength. Stability. Safe Independence.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  Supporting Graceful Aging With Confidence
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
                  src="/geriatric/Geriatric-Rehabilitation-Main.jpg"
                  alt="Geriatric Rehabilitation"
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

      {/* What is Geriatric Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/geriatric/Geriatric-Rehabilitation-What.jpg"
                  alt="What is Geriatric Rehabilitation"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Geriatric Rehabilitation?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Geriatric Rehabilitation is a specialized branch of physiotherapy that focuses on helping older adults recover from injuries, adapt to age-related changes, and preserve their independence. As we age, issues like reduced balance, slower reaction time, joint degeneration, and chronic conditions (like arthritis or osteoporosis) can affect our ability to move safely and confidently.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa, we offer personalized rehabilitation plans that include strength training, balance enhancement, joint mobility, and gait improvement, aiming to reduce fall risk, support post-surgical recovery, and restore confidence in movement—at any age.
                </p>
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
              This program is ideal for seniors who:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Accessibility className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 font-body">
              Even individuals who are relatively healthy benefit from proactive rehabilitation focused on mobility preservation and fall prevention.
            </p>
          </div>
        </div>
      </section>
      {/* How Does It Work? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does It Work?</h2>
      <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
        We begin with a comprehensive geriatric functional assessment including posture, balance, gait, flexibility, muscular strength, and overall coordination. Based on this, your therapist develops a progressive plan that may include:
      </p>
    </div>
    <div className="space-y-12">
      {/* Balance Training */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6 text-center">Balance Training</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {balanceTraining.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <FaWalking className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-body text-base leading-relaxed">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Gait Training */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6 text-center">Gait Training</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gaitTraining.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <FaWalking className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-body text-base leading-relaxed">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Additional Interventions */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#6c2c8b] font-heading mb-6 text-center">Additional Interventions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalInterventions.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <FaWalking className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-body text-base leading-relaxed">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p className="text-lg text-gray-700 font-body">
        Every element is adapted to your current condition and gradually intensified as progress is achieved.
      </p>
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Geriatric Rehabilitation</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#6c2c8b] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="text-lg text-gray-700 font-body mt-4">
                We don’t just train muscles—we help you trust your body again.
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/geriatric/Geriatric-Rehabilitation-Benefit.jpg"
                  alt="Benefits of Geriatric Rehabilitation"
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

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/geriatric/Geriatric-Rehabilitation-Why.jpg"
                  alt="Geriatric Rehabilitation Team"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa for Senior Rehab?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaHome className="w-5 h-5" />}
                      {index === 2 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 3 && <FaRegChartBar className="w-5 h-5" />}
                      {index === 4 && <Accessibility className="w-5 h-5" />}
                      {index === 5 && <CheckCircle className="w-5 h-5" />}
                    </div>
                    <p className="text-gray-700 font-body text-lg leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
              <div className="text-lg text-gray-700 font-body mt-4">
                At Kynexa, we treat older adults with the warmth of family and the precision of science—empowering graceful, safe aging.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      {/* What to Expect */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">
        What to Expect in a Session
      </h2>
      <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
        Your rehabilitation session may include:
      </p>
    </div>

    {/* First Row of 3 Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {whatToExpect.slice(0, 3).map((step, index) => (
        <Card
          key={index}
          className="flex flex-col h-full min-h-[280px] rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300"
        >
          <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]" />
          <CardContent className="p-6 flex flex-col items-center justify-between flex-grow text-center">
            <div className="flex flex-col items-center space-y-2 mb-4">
              <div className="text-[#9d4ed8] text-3xl">{step.icon}</div>
              <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">
                Step {index + 1}
              </h3>
            </div>
            <p className="text-gray-600 font-body text-base leading-relaxed">
              {step.title}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Second Row of 2 Cards */}
    <div className="flex justify-center mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
        {whatToExpect.slice(3).map((step, index) => (
          <Card
            key={index + 3}
            className="flex flex-col h-full min-h-[280px] rounded-xl shadow-md bg-white text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]" />
            <CardContent className="p-6 flex flex-col items-center justify-between flex-grow text-center">
              <div className="flex flex-col items-center space-y-2 mb-4">
                <div className="text-[#9d4ed8] text-3xl">{step.icon}</div>
                <h3 className="text-lg font-bold text-[#6c2c8b] font-heading">
                  Step {index + 4}
                </h3>
              </div>
              <p className="text-gray-600 font-body text-base leading-relaxed">
                {step.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Info Box */}
    <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
      <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
      <p className="text-lg text-gray-700 font-body">
        Every session is goal-driven, adapted to how your body is responding, and geared
        toward helping you resume your lifestyle—safely and effectively.
      </p>
    </div>
  </div>
</section>


      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Geriatric Rehab Consultation</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Support yourself or a loved one in staying strong, upright, and independent with Kynexa’s expert geriatric rehabilitation in Delhi. In-home physiotherapy and caregiver training also available upon request.
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
      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
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