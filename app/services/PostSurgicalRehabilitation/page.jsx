"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Home, CheckCircle, Clock, MapPin, Mail, ArrowUp, ArrowDown, Info } from "lucide-react"
import { FaUserMd, FaBriefcaseMedical, FaRegChartBar } from "react-icons/fa"
import { IoFitnessOutline } from "react-icons/io5"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"

export default function PostSurgicalRehabilitationPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isOpen, setIsOpen] = useState(false) 
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Faster return to mobility and daily function",
    "Reduced pain, swelling, and surgical stiffness",
    "Improved joint range of motion and flexibility",
    "Stronger muscles supporting the operated area",
    "Minimized scar tissue and post-operative adhesions",
    "Lower risk of post-surgical complications and re-injury",
    "Restored confidence in movement and posture",
    "Guidance for transitioning to physical activity or sport",
  ]

  const conditions = [
    "Total Knee Replacement (TKR) and Total Hip Replacement (THR)",
    "Arthroscopic procedures (ACL, meniscus repair, rotator cuff)",
    "Spinal surgeries (discectomy, laminectomy, spinal fusion)",
    "Fracture repairs and orthopedic trauma surgeries",
    "Ligament reconstructions and tendon repairs",
    "Shoulder, wrist, and elbow surgeries",
    "Neurological procedures (brain or spinal interventions)",
    "Abdominal, thoracic, or gynecological surgeries requiring mobility rehab",
    "Patients recovering from cancer-related surgeries needing rehabilitation for fatigue, mobility, and strength",
  ]

  const whyChooseUs = [
    "Experienced Post-Op Physiotherapists trained in surgical recovery protocols",
    "Advanced Modalities including laser therapy, ultrasound, and electrotherapy for healing",
    "Surgeon-Collaborative Plans for continuity of care and evidence-based progress",
    "Private, Comfortable Environment for focused, 1-on-1 sessions",
    "Outcome-Oriented Goals that are trackable, measurable, and patient-centered",
    "In-Clinic & Home Rehab Options for flexibility and support throughout your journey",
  ]

  const treatmentApproach = [
    {
      title: "Pain & Swelling Management",
      description: "Cold therapy, elevation, TENS, and gentle manual drainage techniques",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Mobility Restoration",
      description: "Passive and active range of motion (ROM) exercises to improve joint flexibility",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Strengthening Exercises",
      description: "Gradual resistance work to rebuild muscle support around the affected area",
      icon: <FaUserMd className="w-7 h-7" />
    },
    {
      title: "Scar Tissue Mobilization",
      description: "Manual release and soft tissue techniques to improve tissue pliability",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
    {
      title: "Gait & Posture Re-education",
      description: "Especially for lower limb or spinal surgeries",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Balance and Proprioception Drills",
      description: "To retrain body awareness and prevent re-injury",
      icon: <FaBriefcaseMedical className="w-7 h-7" />
    },
    {
      title: "Functional Training",
      description: "Simulated daily activities like stair climbing, sitting/standing transitions, and carrying loads",
      icon: <FaUserMd className="w-7 h-7" />
    },
    {
      title: "Home Exercise Program",
      description: "Continuation exercises for between sessions or after discharge",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
  ]

  const whatToExpect = [
    {
      title: "Check-in on Pain & Progress",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
    {
      title: "Hands-on Techniques",
      icon: <FaBriefcaseMedical className="w-8 h-8" />
    },
    {
      title: "Guided Mobility/Strength Drills",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Functional Re-integration",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      title: "Home Program Planning",
      icon: <FaRegChartBar className="w-8 h-8" />
    },
  ]

  const faqs = [
    {
      question: "How soon after surgery should I begin physiotherapy?",
      answer: "It varies by procedure, but many rehab programs begin within 24–72 hours. We align with your surgeon’s timeline.",
    },
    {
      question: "Can rehab prevent surgical complications?",
      answer: "Yes. Physiotherapy reduces the risk of joint stiffness, clotting, muscle wasting, and loss of function.",
    },
    {
      question: "Will my rehab program be painful?",
      answer: "Some discomfort is normal, but sessions are adapted to your healing phase and pain tolerance.",
    },
    {
      question: "How long will it take to fully recover?",
      answer: "Recovery timelines differ depending on the surgery, but consistent therapy can dramatically improve speed and quality of recovery.",
    },
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
                  Post-Surgical Rehabilitation <span className="text-white/90">in Delhi</span>
                </h1>
                <div className="h-1 w-20 bg-white/40 rounded"></div>
                <p className="text-xl text-white/90 font-body">Rebuild Strength. Restore Mobility. Regain Confidence.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, our Post-Surgical Rehabilitation services in Delhi are designed to help you recover faster, safer, and smarter after surgery. We understand that surgery is just the first step; the real progress comes through targeted rehabilitation that restores mobility, reduces pain, and rebuilds functional strength. Whether you've undergone joint replacement, spinal surgery, or a soft tissue procedure, our tailored recovery plans are crafted to match your procedure, healing timeline, and lifestyle goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)}
                className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 rounded-xl flex items-center justify-center w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                  Book Your Consultation
                </Button>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent rounded-xl flex items-center justify-center w-full"
                  >
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/post/Post-Surgical main.jpg"
                  alt="Post-Surgical Rehabilitation"
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
      {/* What is Post-Surgical Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/post/Post-Surgical What.jpg"
                  alt="What is Post-Surgical Rehabilitation"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Post-Surgical Rehabilitation?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Post-Surgical Rehabilitation is a structured physiotherapy program that begins shortly after surgery to promote healing, restore movement, prevent complications, and help patients return to daily activities. At Kynexa, we collaborate with your surgeon’s protocol and provide progressive interventions that align with your healing phase—whether you're in the hospital, at home, or transitioning to full mobility.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  Our approach is centered on early mobilization, pain management, and personalized exercise prescription. From regaining joint flexibility to rebuilding muscle strength, we work to ensure your surgical outcome is successful—and long-lasting.
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
              We support individuals recovering from:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <FaBriefcaseMedical className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body text-base leading-relaxed">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-body">
              Whether you’re recovering from a major orthopedic procedure or a minimally invasive surgery, we’ll customize a rehab plan to meet your body’s evolving needs.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">How Does It Work?</h2>
            <p className="text-xl text-gray-700 font-body max-w-8xl mx-auto">
              Our program begins with a detailed post-operative assessment, taking into account your surgical procedure, healing stage, swelling, joint range, pain level, and overall strength.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {treatmentApproach.map((approach, index) => (
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
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Post-Surgical Physiotherapy</h2>
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
                  src="/post/Post-Surgical Benefits.jpg"
                  alt="Benefits of Post-Surgical Rehabilitation"
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
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/post/Post-Surgical Why.jpg"
                  alt="Post-Surgical Rehabilitation Team"
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
                We’re not just restoring joints—we’re helping you reclaim your independence, resilience, and everyday confidence.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-[#9d4ed8] flex-shrink-0">
                      {index === 0 && <FaUserMd className="w-5 h-5" />}
                      {index === 1 && <FaBriefcaseMedical className="w-5 h-5" />}
                      {index === 2 && <IoFitnessOutline className="w-5 h-5" />}
                      {index === 3 && <FaRegChartBar className="w-5 h-5" />}
                      {index === 4 && <CheckCircle className="w-5 h-5" />}
                      {index === 5 && <FaUserMd className="w-5 h-5" />}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Rehabilitation Plan Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Start your healing journey with Kynexa’s expert post-surgical rehabilitation in Delhi. We’ll help you move forward with strength, precision, and care.
            </p>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Home visits and online consultations available for eligible patients.
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