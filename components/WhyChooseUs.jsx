"use client"

import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Shield } from "lucide-react"

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "15+ Years Experience",
      description: "Extensive medical expertise with proven track record of successful treatments.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Personalized Treatment",
      description: "Customized therapy plans tailored to your specific needs and goals.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock medical support for urgent healthcare needs.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Modern Equipment",
      description: "State-of-the-art medical technology for accurate diagnosis and treatment.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-[#2E3A59]/10 text-[#2E3A59] border-[#2E3A59]/20">Why Choose Dr. Smith</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] font-heading">
            Excellence in Every Aspect of Care
          </h2>
          <p className="text-lg text-[#6B7280] font-body max-w-2xl mx-auto">
            Experience the difference that personalized, professional healthcare can make in your life and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#A259FF]/10 to-[#2E3A59]/10 rounded-3xl flex items-center justify-center mx-auto text-[#2E3A59] group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111827] font-heading">{benefit.title}</h3>
              <p className="text-[#6B7280] font-body leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}