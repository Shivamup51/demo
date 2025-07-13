"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Phone, Activity, Heart, Dumbbell, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  // Featured services from the services directory
  const featuredServices = [
    {
      icon: <Activity className="w-8 h-8 text-[#6c2c8b]" />,
      title: "Dry Needling Therapy",
      description: "Precision treatment for muscle trigger points and pain relief",
      link: "/services/DryNiddle"
    },
    {
      icon: <Heart className="w-8 h-8 text-[#6c2c8b]" />,
      title: "Cardio & Pulmonary Rehab",
      description: "Specialized rehabilitation for heart and lung conditions",
      link: "/services/CardioPulmonaryRehab"
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-[#6c2c8b]" />,
      title: "Sports Physiotherapy",
      description: "Targeted recovery and performance optimization for athletes",
      link: "/services/SportsPhysiotherapy"
    }
  ]

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f9f4fc] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#f0e6f6] text-[#6c2c8b] border-none hover:bg-[#e5d3f3] px-4 py-1.5">
                Advanced Physiotherapy & Manual Therapy
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                Professional Care for Your Physical Recovery Journey
              </h1>
              <p className="text-gray-600 font-body max-w-lg">
                We provide exceptional physiotherapy and rehabilitation services with advanced techniques and compassionate healthcare professionals—personalized care that delivers results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#6c2c8b] hover:bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white px-8 py-6 rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" className="border-[#6c2c8b] text-[#6c2c8b] hover:bg-[#6c2c8b] hover:text-white px-8 py-6 rounded-xl">
                Our Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="flex flex-row gap-8 mt-8">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#f0e6f6] border-2 border-white flex items-center justify-center text-[#6c2c8b] font-semibold">K</div>
                  <div className="w-10 h-10 rounded-full bg-[#f0e6f6] border-2 border-white flex items-center justify-center text-[#6c2c8b] font-semibold">Y</div>
                  <div className="w-10 h-10 rounded-full bg-[#f0e6f6] border-2 border-white flex items-center justify-center text-[#6c2c8b] font-semibold">N</div>
                </div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500">Trusted Care</p>
                  <p className="text-sm font-medium text-gray-700">1000+ patients</p>
                </div>
              </div>
              <div className="flex items-center border border-gray-200 rounded-lg px-4 py-2 bg-white shadow-sm">
                <div className="mr-3">
                  <Phone className="w-5 h-5 text-[#6c2c8b]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call/Text</p>
                  <p className="text-sm font-medium text-gray-700">+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#9d4ed8] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#6c2c8b] rounded-full opacity-10"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/placeholder.jpg"
                alt="Physiotherapy Treatment"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Showcase Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Specialized Physiotherapy Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive rehabilitation treatments tailored to your individual needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-[#f9f4fc] rounded-xl group-hover:bg-gradient-to-r from-[#6c2c8b]/10 to-[#9d4ed8]/10 transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#6c2c8b] mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <div className="text-center">
                <Link 
                  href={service.link} 
                  className="text-[#6c2c8b] font-medium hover:text-[#9d4ed8] transition-colors duration-300 inline-flex items-center"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="inline-block">
            <Button variant="outline" className="border-[#6c2c8b] text-[#6c2c8b] hover:bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] hover:text-white transition-all duration-300">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}