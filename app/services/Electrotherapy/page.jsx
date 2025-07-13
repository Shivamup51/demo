
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, Home, CheckCircle, ArrowLeft, Clock, MapPin, Mail, Zap, Activity, Waves } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElectrotherapyPage() {
  const benefits = [
    "Decrease pain by blocking pain receptors",
    "Stimulate circulation and cellular healing",
    "Improve muscle strength and endurance",
    "Break muscle spasms and joint stiffness",
    "Facilitate faster recovery from injury or surgery"
  ]

  const conditions = [
    "Lower back pain and lumbar spondylosis",
    "Osteoarthritis of the knees and spine",
    "Cervical pain and radiating shoulder aches",
    "Neuropathy and nerve compression",
    "Muscle weakness and post-fracture stiffness",
    "Chronic inflammatory conditions like fibromyalgia",
    "Sports injuries and repetitive strain syndromes"
  ]

  const whyChooseUs = [
    "Trained Professionals with hands-on experience in electro-modality protocols",
    "Modern Equipment including TENS, IFT, EMS, Ultrasound, and Shockwave",
    "Personalized therapies evolving with each stage of your recovery",
    "Integrated Care combining electrotherapy with hands-on techniques and therapeutic movement",
    "Transparent Guidance on safety, effectiveness, and home program integration"
  ]

  const faqs = [
    {
      question: "Is electrotherapy painful?",
      answer: "Not at all. Most patients feel mild tingling or warmth, but the sensation is generally soothing and non-invasive."
    },
    {
      question: "How long is each session?",
      answer: "Sessions typically range between 15–30 minutes, depending on the treatment goal."
    },
    {
      question: "Are there side effects?",
      answer: "Side effects are rare and minimal. Our physiotherapists will assess your suitability before starting."
    },
    {
      question: "Can electrotherapy be combined with other treatments?",
      answer: "Yes, it's often most effective when used alongside manual therapy, dry needling, or corrective exercise."
    }
  ]

  const shockwaveConditions = [
    "Plantar fasciitis",
    "Achilles tendinopathy",
    "Calcific shoulder tendonitis",
    "Tennis/golfer's elbow",
    "Trigger point release and chronic scar tissue breakdown"
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 mt-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading leading-tight">
                  Electrotherapy in Delhi
                </h1>
                <p className="text-xl text-white/90 font-body">Stimulating Recovery, Naturally and Effectively</p>
                <p className="text-lg text-white/80 font-body max-w-lg">
                  At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, our Electrotherapy services in Delhi offer a modern, non-invasive solution for pain relief and functional recovery. By using medically guided electrical impulses, we help stimulate muscles, improve circulation, and reduce inflammation—naturally and effectively.
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
                  <Home className="w-5 h-5 mr-2" />
                  Learn About Our Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4e54c8]/5 to-[#8f94fb]/5 rounded-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-[#4e54c8]/10 to-[#8f94fb]/10 rounded-2xl flex items-center justify-center">
                  <Zap className="w-24 h-24 text-[#4e54c8]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8f94fb] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4e54c8] rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Electrotherapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What is Electrotherapy?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Electrotherapy is a non-invasive, pain-relieving treatment method that uses carefully controlled electrical impulses to stimulate nerves and muscles. At Kynexa Advanced Physiotherapy and Manual Therapy Clinic in Delhi, we employ a range of clinically proven modalities to reduce inflammation, accelerate tissue repair, and improve muscle function—without the need for medication or surgery.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Our expert physiotherapists customize electrotherapy treatments based on your diagnosis, lifestyle, and response to therapy, ensuring a safe and effective path to recovery.
            </p>
          </div>
        </div>
      </section>

      {/* How Does It Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">How Does Electrotherapy Work?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-body leading-relaxed">
                Using devices that deliver low- to medium-frequency electrical impulses through surface electrodes, electrotherapy targets specific muscle groups or nerve pathways. These impulses mimic the body's own bioelectric signals to:
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white h-full hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 font-body leading-relaxed">
                    Whether you're coping with post-injury stiffness, chronic nerve pain, or muscular weakness, our physiotherapists personalize each electrotherapy session to accelerate healing and restore your body's optimal rhythm.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Shockwave Therapy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Shockwave Therapy: Precision Impact for Chronic Pain</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-body leading-relaxed">
                As part of our advanced electrotherapy options, Shockwave Therapy delivers high-energy acoustic waves directly to affected tissues. This non-invasive technique is ideal for breaking down calcific deposits, stimulating the body's healing mechanisms, and relieving persistent musculoskeletal pain.
              </p>
              <p className="text-lg text-gray-700 font-body leading-relaxed">
                At Kynexa, we use shockwave for:
              </p>
              <div className="space-y-4">
                {shockwaveConditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Waves className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{condition}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 font-body leading-relaxed mt-4">
                Patients often experience reduced pain and improved function after just a few sessions, making it a valuable addition to rehabilitation plans.
              </p>
            </div>

            <div className="relative">
              <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-gradient-to-br from-[#4e54c8]/5 to-[#8f94fb]/5 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] rounded-full flex items-center justify-center text-white mb-6">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4e54c8] mb-4">Advanced Technology</h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    Our clinic is equipped with state-of-the-art electrotherapy devices that ensure precise, comfortable, and effective treatment. From TENS and IFT to advanced shockwave therapy, we have the tools to address your specific condition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Conditions Treated with Electrotherapy</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <Zap className="w-5 h-5 text-[#4e54c8] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 font-body">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kynexa */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Why Choose Kynexa for Electrotherapy?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <Card className="overflow-hidden border-none rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]"></div>
            <CardContent className="p-8">
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#8f94fb] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-body">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">What to Expect in a Session</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Assessment</h3>
                <p className="text-gray-600 font-body text-sm">Evaluation of your condition and treatment goals.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Electrode Placement</h3>
                <p className="text-gray-600 font-body text-sm">Precise placement of electrodes on target areas.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Therapy Application</h3>
                <p className="text-gray-600 font-body text-sm">Delivery of controlled electrical impulses.</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-2xl flex items-center justify-center mx-auto text-white">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#4e54c8] font-heading">Feedback</h3>
                <p className="text-gray-600 font-body text-sm">Post-session feedback and home care guidance.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-body">
              Sessions are tailored to your needs, ensuring comfort and effectiveness throughout your recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">Book Your Appointment Today</h2>
            <p className="text-lg font-body opacity-90">
              Rediscover pain-free living with Kynexa's advanced electrotherapy in Delhi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Call Us</h3>
              <p className="font-body">[Phone Number]</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Email Us</h3>
              <p className="font-body">[Email Address]</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto text-white mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">Visit Us</h3>
              <p className="font-body">[Clinic Address]</p>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-white hover:bg-white/90 text-[#4e54c8] px-8 py-6 text-lg font-medium transition-all duration-300 rounded-xl">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4e54c8] font-heading">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-none rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#4e54c8] font-heading mb-3">{faq.question}</h3>
                  <p className="text-gray-700 font-body">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Kynexa Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 font-body">
              Kynexa Advanced Physiotherapy and Manual Therapy Clinic - Empowering you to heal, move, and thrive.
            </p>
            <div className="mt-4">
              <Link href="/services" className="inline-flex items-center text-[#4e54c8] font-medium hover:underline">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to all services
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
