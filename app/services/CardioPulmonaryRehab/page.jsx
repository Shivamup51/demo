"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, Heart, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Lungs } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CardioPulmonaryRehabPage() {
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
  ]

  const whyChooseUs = [
    "Experienced physiotherapists trained in cardiopulmonary rehab protocols",
    "Evidence-based care with a focus on sustainable functional outcomes",
    "Comprehensive monitoring with real-time feedback and safety protocols",
    "Personalized recovery paths tailored to every patient's condition, age, and goal",
    "Holistic mind-body integration with emotional support and education at its core",
    "One-on-one sessions in a calm, private setting with modern equipment",
  ]

  const programComponents = [
    "Therapeutic Exercises – Low to moderate-intensity aerobic training (walking, cycling) to improve cardiovascular endurance",
    "Respiratory Physiotherapy – Includes breathing retraining, lung expansion techniques, and airway clearance",
    "Monitoring & Safety – Continuous vital monitoring (heart rate, SpO₂, blood pressure) ensures a safe rehabilitation environment",
    "Strength and Flexibility Workouts – Improve muscle function, reduce fatigue, and support joint mobility",
    "Postural & Chest Mobility Training – To improve lung expansion and prevent breathlessness on exertion",
    "Stress Reduction Techniques – Guided relaxation, diaphragmatic breathing, and energy conservation strategies",
    "Lifestyle Counseling & Nutritional Support – Manage risk factors and build healthy habits for long-term heart-lung health",
  ]

  const faqs = [
    {
      question: "Is this program safe for senior citizens?",
      answer: "Yes. Our sessions are age-appropriate, low-impact, and closely monitored.",
    },
    {
      question: "How soon after a cardiac event can I start rehab?",
      answer: "Typically within 1–2 weeks, but it depends on your doctor's clearance and stability.",
    },
    {
      question: "Will I need equipment at home?",
      answer: "Basic items like resistance bands or a stepper may be recommended. We'll guide you through setup.",
    },
    {
      question: "Can I join if I have both heart and lung issues?",
      answer: "Yes, the program is specifically designed to accommodate overlapping conditions safely and effectively.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-none px-4 py-1.5 text-sm rounded-full">Cardio-Pulmonary Rehab</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                  Cardio and Pulmonary Rehabilitation in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Breathe Freely. Move Confidently. Live Fully.</p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we offer specialized Cardio and Pulmonary Rehabilitation in Delhi to help individuals rebuild strength, improve breathing, and regain independence after heart and lung conditions.
                </p>
                <p className="text-lg text-white/80 font-body max-w-lg leading-relaxed">
                  Whether you're recovering from a cardiac event, coping with chronic obstructive pulmonary disease (COPD), or managing post-COVID lung complications, our team will guide you every step of the way with personalized care and compassion.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#4e54c8] hover:bg-white/90 px-6 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Learn About Our Services
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4e54c8]/5 to-[#8f94fb]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#4e54c8]/10 to-[#8f94fb]/10 rounded-2xl flex items-center justify-center">
                  <Heart className="w-24 h-24 text-[#4e54c8]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8f94fb] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4e54c8] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cardio-Pulmonary Rehabilitation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What is Cardio-Pulmonary Rehabilitation?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Cardio and Pulmonary Rehabilitation is a medically supervised program that focuses on improving the cardiovascular and respiratory efficiency of patients who have experienced heart or lung-related illness. It blends therapeutic exercise, respiratory training, education, and lifestyle coaching into a holistic recovery plan.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              At Kynexa, we address not only the symptoms but the lifestyle factors that contribute to these conditions, empowering patients to achieve sustainable recovery. We help our clients restore lung capacity, regulate heart function, and improve their ability to perform everyday tasks—safely and confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Who Can Benefit?</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{condition}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">How Does It Work?</h2>
          </div>

          <p className="text-lg text-gray-700 font-body mb-8 text-center max-w-3xl mx-auto">
            Our cardio-pulmonary rehab program begins with a comprehensive assessment of cardiovascular function, lung capacity, oxygen saturation, mobility, and lifestyle risks. Based on your health status and goals, our physiotherapists curate a progressive care plan that may include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {programComponents.map((component, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white">
                <div className="h-1 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{component}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-body">
              We collaborate with physicians and pulmonologists for an integrated, informed approach to your care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Benefits of Cardio and Pulmonary Rehabilitation</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What Makes Kynexa Different?</h2>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 font-body italic">
              "We understand that recovery from cardiac and respiratory conditions is not just about healing the body—it's about regaining independence, restoring confidence, and returning to the life you love."
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What to Expect in a Session</h2>
          </div>
          
          <p className="text-lg text-gray-700 font-body mb-8 text-center max-w-3xl mx-auto">
            Each session is carefully structured around your capacity and goals. Here's what typically happens:
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center w-52">
              <div className="h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] rounded-full flex items-center justify-center mx-auto text-white">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Warm-up</h3>
                <p className="text-gray-600 font-body text-sm">
                  Warm-up and breathing check
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center w-52">
              <div className="h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] rounded-full flex items-center justify-center mx-auto text-white">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Training</h3>
                <p className="text-gray-600 font-body text-sm">
                  Supervised aerobic or resistance training
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center w-52">
              <div className="h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] rounded-full flex items-center justify-center mx-auto text-white">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Breathing</h3>
                <p className="text-gray-600 font-body text-sm">
                  Breathing exercises and airway clearance as needed
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center w-52">
              <div className="h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] rounded-full flex items-center justify-center mx-auto text-white">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Cool-Down</h3>
                <p className="text-gray-600 font-body text-sm">
                  Cool-down with guided relaxation or stretching
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none rounded-xl shadow-md bg-white text-center w-52">
              <div className="h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] rounded-full flex items-center justify-center mx-auto text-white">
                  <span className="text-lg font-bold">5</span>
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Progress</h3>
                <p className="text-gray-600 font-body text-sm">
                  Progress tracking and education
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-body">
              You'll also receive home care strategies, self-monitoring tips, and exercises to maintain progress between sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Book Your Session Today</h2>
            <p className="text-xl text-white/90 font-body">
              If you or a loved one are navigating the challenges of heart or lung recovery, let Kynexa's compassionate team guide your path to strength, breath, and wellness.
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
            <div className="flex items-center justify-center space-x-4">
              <Home className="w-5 h-5 text-white" />
              <p className="text-white/80 font-body">Online consultations available for eligible cases</p>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-white text-[#4e54c8] hover:bg-white/90 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md bg-white">
                <div className="h-1 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#4e54c8] font-heading mb-3">{faq.question}</h3>
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