"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Home, CheckCircle, Clock, MapPin, Mail, Heart, ArrowUp, ArrowDown, Info } from "lucide-react"
import { FaLungs, FaHeartbeat, FaHospital, FaBriefcaseMedical, FaUserMd, FaRegChartBar } from "react-icons/fa"
import { IoFitnessOutline, IoNutritionOutline } from "react-icons/io5"
import Image from "next/image"
import FormDialog from "@/components/formDialog"
import Link from "next/link"
export default function CardioPulmonaryRehabPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isOpen, setIsOpen] = useState(false) 
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const benefits = [
    "Improved cardiovascular and pulmonary efficiency",
    "Enhanced oxygen intake and lung capacity",
    "Better tolerance for daily activities and exertion",
    "Reduced breathlessness, fatigue, and risk of relapse",
    "Stronger muscles and better energy utilization",
    "Decreased hospital readmissions and medication dependency",
    "Empowerment through knowledge, self-monitoring, and confidence",
  ]

  const conditions = [
    "Recent heart attack, bypass surgery, or stent placement",
    "Chronic heart failure or angina",
    "Chronic Obstructive Pulmonary Disease (COPD) or asthma",
    "Pulmonary fibrosis or interstitial lung disease",
    "Bronchiectasis or cystic fibrosis",
    "Post-COVID respiratory complications",
    "General deconditioning from prolonged illness or hospitalization",
    "Hypertension-related complications affecting cardiac function"
  ]

  const whyChooseUs = [
    "Experienced Physiotherapists trained in cardiopulmonary rehab protocols",
    "Evidence-Based Care with a focus on sustainable functional outcomes",
    "Comprehensive Monitoring with real-time feedback and safety protocols",
    "Personalized Recovery Paths tailored to every patient’s condition, age, and goal",
    "Holistic Mind-Body Integration with emotional support and education at its core",
    "One-on-One Sessions in a calm, private setting with modern equipment"
  ]

  const treatmentApproach = [
    {
      title: "Therapeutic Exercises",
      description: "Low to moderate-intensity aerobic training (walking, cycling) to improve cardiovascular endurance",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Respiratory Physiotherapy",
      description: "Includes breathing retraining, lung expansion techniques, and airway clearance",
      icon: <FaLungs className="w-7 h-7" />
    },
    {
      title: "Monitoring & Safety",
      description: "Continuous vital monitoring (heart rate, SpO₂, blood pressure) ensures a safe rehabilitation environment",
      icon: <FaHeartbeat className="w-7 h-7" />
    },
    {
      title: "Strength and Flexibility Workouts",
      description: "Improve muscle function, reduce fatigue, and support joint mobility",
      icon: <IoFitnessOutline className="w-7 h-7" />
    },
    {
      title: "Postural & Chest Mobility Training",
      description: "To improve lung expansion and prevent breathlessness on exertion",
      icon: <FaLungs className="w-7 h-7" />
    },
    {
      title: "Stress Reduction Techniques",
      description: "Guided relaxation, diaphragmatic breathing, and energy conservation strategies",
      icon: <Heart className="w-7 h-7" />
    },
    {
      title: "Lifestyle Counseling & Nutritional Support",
      description: "Manage risk factors and build healthy habits for long-term heart-lung health",
      icon: <IoNutritionOutline className="w-7 h-7" />
    },
    {
      title: "Education & Self-Management",
      description: "Equip patients to manage symptoms, meds, and activity levels",
      icon: <FaRegChartBar className="w-7 h-7" />
    },
    {
      title: "Balance & Gait Training",
      description: "Improve mobility and lower fall risk through targeted rehab",
      icon: <FaRegChartBar className="w-7 h-7" />
    }
  ]

  const whatToExpect = [
    {
      title: "Warm-up and breathing check",
      icon: <FaLungs className="w-8 h-8" />
    },
    {
      title: "Supervised aerobic or resistance training",
      icon: <IoFitnessOutline className="w-8 h-8" />
    },
    {
      title: "Breathing exercises and airway clearance as needed",
      icon: <FaLungs className="w-8 h-8" />
    },
    {
      title: "Cool-down with guided relaxation or stretching",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Progress tracking and education",
      icon: <FaRegChartBar className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      question: "Is this program safe for senior citizens?",
      answer: "Yes. Our sessions are age-appropriate, low-impact, and closely monitored."
    },
    {
      question: "How soon after a cardiac event can I start rehab?",
      answer: "Typically within 1–2 weeks, but it depends on your doctor’s clearance and stability."
    },
    {
      question: "Will I need equipment at home?",
      answer: "Basic items like resistance bands or a stepper may be recommended. We’ll guide you through setup."
    },
    {
      question: "Can I join if I have both heart and lung issues?",
      answer: "Yes, the program is specifically designed to accommodate overlapping conditions safely and effectively."
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
                  Cardio and <span className="text-white/90">Pulmonary</span> <br />Rehabilitation <span className="text-xl sm:text-2xl font-medium block mt-2">in Delhi</span>
                </h1>
                <p className="text-white/90 font-body">At Kynexa Advanced Physiotherapy and Manual Therapy Clinic in Delhi, we offer expert Cardio and Pulmonary Rehabilitation to help patients regain strength, improve breathing, and restore independence after heart or lung conditions. Using a tailored, evidence-based approach, we support recovery from cardiac events, COPD, and post-COVID complications. Our compassionate team ensures both physical and emotional care, helping you return to a more active, fulfilling lifestyle.</p>
                <p className="text-xl text-white/90 font-body">Breathe Freely. Move Confidently. Live Fully.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsOpen(true)}
                className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
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
                  alt="Cardio and Pulmonary Rehabilitation"
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
      
      {/* What is Cardio-Pulmonary Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="What is Cardio-Pulmonary Rehabilitation"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="space-y-6 p-6 lg:p-0 order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What is Cardio-Pulmonary Rehabilitation?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
                  Cardio and Pulmonary Rehabilitation is a medically supervised program that focuses on improving the cardiovascular and respiratory efficiency of patients who have experienced heart or lung-related illness. It blends therapeutic exercise, respiratory training, education, and lifestyle coaching into a holistic recovery plan.
                </p>
                <p className="text-lg text-gray-700 font-body leading-relaxed">
                  At Kynexa, we address not only the symptoms but the lifestyle factors that contribute to these conditions, empowering patients to achieve sustainable recovery. We help our clients restore lung capacity, regulate heart function, and improve their ability to perform everyday tasks—safely and confidently.
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
              This program is designed for individuals with:
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
                      <FaLungs className="w-6 h-6 text-[#9d4ed8] mt-1 flex-shrink-0" />
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
            <p className="text-xl text-gray-700 font-body max-w-6xl mx-auto">
              Our cardio-pulmonary rehab program begins with a comprehensive assessment of cardiovascular function, lung capacity, oxygen saturation, mobility, and lifestyle risks. Based on your health status and goals, our physiotherapists curate a progressive care plan that may include:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="text-center mt-8 bg-slate-50 p-6 rounded-xl shadow-sm">
            <Info className="w-8 h-8 text-[#9d4ed8] mx-auto mb-3" />
            <p className="text-lg text-gray-700 font-body">
              We collaborate with physicians and pulmonologists for an integrated, informed approach to your care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 p-6 lg:p-0 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">Benefits of Cardio and Pulmonary Rehabilitation</h2>
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
                  alt="Benefits of Cardio and Pulmonary Rehabilitation"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6c2c8b] font-heading">What Makes Kynexa Different?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 bg-white rounded-3xl p-6 lg:p-0 shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Cardio and Pulmonary Rehabilitation Team"
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
                We understand that recovery from cardiac and respiratory conditions is not just about healing the body—it’s about regaining independence, restoring confidence, and returning to the life you love.
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
                      {index === 5 && <FaHospital className="w-5 h-5" />}
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


      {/* Book Your Session */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Session Today</h2>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              If you or a loved one are navigating the challenges of heart or lung recovery, let Kynexa’s compassionate team guide your path to strength, breath, and wellness.
            </p>
            <p className="text-sm text-white/70 font-body">Online consultations available for eligible cases.</p>
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
            <Button 
              onClick={() => setIsOpen(true)}
              className="bg-white text-[#6c2c8b] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl"
            >
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