"use client"

import Image from "next/image";
import Link from "next/link";
import FormDialog from "@/components/formDialog";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { 
  Calendar, Heart, Award, Users, CheckCircle, ArrowRight, Star, Phone, MapPin, Clock,
  Activity, Waves, Bandage, Zap, Dumbbell, Brain, Bone, Accessibility, Stethoscope,
  Thermometer,
  Syringe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

// You'll need to install framer-motion: npm install framer-motion
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeConditionCategory, setActiveConditionCategory] = useState("All");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stats = [
    { icon: <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-[#6c2c8b]" />, value: "10+", label: "Years of Experience" },
    { icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#6c2c8b]" />, value: "10K", label: "Lives Transformed" },
    { icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#6c2c8b]" />, value: "15+", label: "Certifications" },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Expert Therapists",
      desc: "Certified professionals skilled in manual therapy & advanced rehab",
    },
    {
      icon: <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Personalized Treatment",
      desc: "Every plan tailored to your body, goals & recovery",
    },
    {
      icon: <Heart className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Modern Setup",
      desc: "State-of-the-art tools in a calm healing space",
    },
    {
      icon: <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Clear Progress",
      desc: "Transparent tracking with measurable outcomes",
    },
  ];

  const Services = [
    { name: "Dry Needling", desc: "Relieves muscle tension and triggers natural healing using targeted needle points", href: "/services/DryNeedling", icon: <Syringe className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Cupping Therapy", desc: "Boosts circulation and eases pain through gentle suction-based decompression technique", href: "/services/cupping-therapy", icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Kinesio Taping", desc: "Supports injured areas and improves movement without restricting active mobility or flow", href: "/services/KinesioTapingTherapy", icon: <Bandage className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Laser Therapy", desc: "Promotes deep tissue recovery using focused light energy for pain relief and repair", href: "/services/LaserTherapy", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Manual Therapy", desc: "Hands-on techniques including myofascial release to improve mobility and reduce stiffness", href: "/services/ManualTherapy", icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Electro Therapy", desc: "Stimulates healing with modalities like shockwave to treat chronic pain zones", href: "/services/Electrotherapy", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Sports Physiotherapy", desc: "Performance-based rehab for athletes recovering from injuries or movement imbalances", href: "/services/SportsPhysiotherapy", icon: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Pre & Post Natal Care", desc: "Specialized therapy to support women through pregnancy changes and recovery", href: "/services/PreAndPostNatalPhysiotherapy", icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Cardio & Pulmonary Rehab", desc: "Restores endurance and lung capacity after illness, surgery or inactivity", href: "/services/CardioPulmonaryRehab", icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Neuro Rehabilitation", desc: "Enhances mobility and control after stroke, nerve injury or neurological disorders", href: "/services/NeuroRehabilitation", icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Chiropractic", desc: "Realigns spine and joints using precision adjustments to reduce pain and improve function", href: "/services/ChiropracticCare", icon: <Bone className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Geriatric Rehabilitation", desc: "Rebuilds strength, balance, and gait for safer movement in aging bodies", href: "/services/GeriatricRehabilitation", icon: <Accessibility className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Post Surgical Rehabilitation", desc: "Guided recovery plans to regain strength and prevent long-term complications", href: "/services/PostSurgicalRehabilitation", icon: <Thermometer className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Spine Alignment", desc: "Relieves body stiffness by correcting posture and improving spinal mechanics holistically", href: "/services/SpineAlignmentTherapy", icon: <Bone className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> }
  ]

  const conditionCategories = [
    "All", 
    "Spine & Joint", 
    "Neurological", 
    "Post-Surgical", 
    "Common Pain"
  ];

  const conditions = [
    { name: "Back Pain", category: "Spine & Joint" },
    { name: "Cervical Pain", category: "Spine & Joint" },
    { name: "Migraine", category: "Neurological" },
    { name: "Shoulder Pain", category: "Spine & Joint" },
    { name: "Knee Pain", category: "Spine & Joint" },
    { name: "Hip Pain", category: "Spine & Joint" },
    { name: "Joint Stiffness", category: "Spine & Joint" },
    { name: "Headaches", category: "Neurological" },
    { name: "Pain from Sedentary Lifestyle", category: "Common Pain" },
    { name: "Post-Surgical Discomfort", category: "Post-Surgical" },
    { name: "Muscle Imbalance", category: "Common Pain" },
    { name: "Sprain", category: "Common Pain" },
  ];

  const filteredConditions = activeConditionCategory === "All" 
    ? conditions 
    : conditions.filter(condition => condition.category === activeConditionCategory);

  // Duplicate services for the marquee effect
  const marqueeServices = [...Services, ...Services];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar subServices={[]} />

      {/* Hero Section - Updated with Animations */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0f7fa] to-white text-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center lg:text-left lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="bg-[#eaf5fb] text-[#6c2c8b] border-none mb-4 text-xs sm:text-sm">Your Health, Our Priority</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-[#6c2c8b]">
              Recover. Rebuild. <span className="text-[#6c2c8b]">Return Stronger.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 font-body max-w-lg mx-auto lg:mx-0">
              Accelerate your healing with expert physiotherapy and manual therapy designed for lasting results.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-[#6c2c8b] hover:bg-[#6c2c8b]/80 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-medium rounded-xl shadow-lg w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Your Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-[#6c2c8b] text-[#6c2c8b] hover:bg-[#eaf5fb] px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-medium rounded-xl w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                ))}
                <span className="ml-2 text-xs sm:text-sm text-gray-600">5.0 (200+ Reviews)</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
              <Image
                src="/home/main.jpg"
                alt="Doctor with patient"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <motion.section 
        className="py-6 sm:py-8 px-4 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, title: "Working Hours", lines: ["Mon-Sat: 8am - 8pm"] },
            { icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white " />, title: "Contact Us", lines: ["+91 8868879387","info@kynexa.com"] },
            { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, title: "Our Location", lines: ["D 16, Basement, Hauz Khas , New Delhi-110016"] }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-[#6c2c8b]/80 p-4 sm:p-6 rounded-xl flex items-center gap-3 sm:gap-4 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#6c2c8b] p-2 sm:p-3 rounded-full flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-white text-sm sm:text-base">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-xs sm:text-sm text-white truncate">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Numbers That Matter */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-[#6c2c8b]/80 text-white border-none px-3 sm:px-4 py-1.5 mb-4 text-xs sm:text-sm">Your Progress, Our Promise</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6c2c8b] font-heading mb-4 sm:mb-6">Our Experience By The Numbers</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Trust your health to our experienced team with a proven track record of success and patient satisfaction.
          </p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-[#6c2c8b]/80 rounded-xl overflow-hidden">
                  <CardContent className="p-6 sm:p-8 flex flex-col items-center">
                    <motion.div 
                      className="bg-white p-3 sm:p-4 rounded-full mb-4 text-white"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.p 
                      className="text-3xl sm:text-5xl font-bold text-white mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-white font-medium text-sm sm:text-base text-center">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="bg-[#6c2c8b]/80 text-white border-none px-3 sm:px-4 py-1.5 mb-4 text-xs sm:text-sm">Expert Care</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#6c2c8b] font-heading">Why Choose Kynexa</h2>
            <p className="text-sm sm:text-lg text-gray-700 font-body mt-4 max-w-2xl mx-auto px-4">
              Care That Moves You – Advanced therapy, personalized plans, and results-driven support.
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="border-none rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-[#6c2c8b]/80 h-full">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <motion.div 
                      className="bg-[#6c2c8b]/80 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-white font-body text-sm sm:text-base flex-grow">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services - Infinite Marquee */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="bg-[#f3eaf8] text-[#6c2c8b] border-none px-3 sm:px-4 py-1.5 mb-4 text-xs sm:text-sm">Specialized Care</Badge>
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-[#6c2c8b] font-heading mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Medical Services
            </motion.h2>
            <p className="text-sm sm:text-lg text-gray-700 font-body max-w-2xl mx-auto px-4">
              Comprehensive therapeutic solutions delivered by experienced healthcare professionals.
            </p>
          </div>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden w-full py-6 sm:py-8">
            {/* First Marquee Row */}
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {/* Duplicate the content for seamless looping */}
              {[...marqueeServices, ...marqueeServices].map((service, index) => (
                <Link 
                  key={index} 
                  href={service.href}
                  className="mx-2 sm:mx-3 min-w-[240px] sm:min-w-[280px] no-underline group"
                >
                  <Card className="border-none rounded-xl shadow-md group-hover:shadow-lg transition-shadow overflow-hidden h-full bg-[#6c2c8b]/80">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="bg-[#6c2c8b]/80 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300">
                        <div className="text-white transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 transition-colors">{service.name}</h3>
                      <p className="text-white font-body text-sm sm:text-base flex-grow leading-relaxed">{service.desc}</p>
                      <div className="mt-3 sm:mt-4 flex items-center text-white font-medium text-sm sm:text-base">
                        Learn more 
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:ml-3 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#6c2c8b] to-[#6c2c8b] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 relative overflow-hidden">
          <motion.div 
            className="absolute -top-24 -left-24 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-24 -right-24 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2
            }}
          ></motion.div>
          <Badge className="bg-white/20 text-white border-none px-3 sm:px-4 py-1.5 mb-4 text-xs sm:text-sm">Schedule Today</Badge>
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold font-heading relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Start Your Healing Journey
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-lg font-body max-w-2xl mx-auto relative z-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your path to healing starts with a single step—and we're here to walk it with you. Whether you're struggling with pain, planning your recovery, or just exploring options, Kynexa's team is standing by.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-white text-[#6c2c8b] hover:bg-white/90 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-medium rounded-xl shadow-lg relative z-10"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Book Your Consultation
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Placeholder */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-[#6c2c8b]/80 text-white border-none px-3 sm:px-4 py-1.5 mb-4 text-xs sm:text-sm">Patient Stories</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6c2c8b] font-heading mb-6 sm:mb-8">What Our Patients Say</h2>
          <motion.div 
            className="bg-[#6c2c8b]/80 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white font-body italic mb-4 sm:mb-6 text-sm sm:text-base">Testimonials to be provided by the client.</p>
            <div className="w-12 sm:w-16 h-1 bg-white mx-auto"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Kynexa */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="absolute -z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#eaf5fb] left-0 top-0 transform -translate-x-1/4 -translate-y-1/4"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              ></motion.div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/home/About.jpg"
                  alt="Medical team"
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div 
                className="absolute -z-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[#f3eaf8] right-0 bottom-0 transform translate-x-1/4 translate-y-1/4"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 3
                }}
              ></motion.div>
            </motion.div>
            <motion.div 
              className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-[#f3eaf8] text-[#6c2c8b] border-none px-3 sm:px-4 py-1.5 text-xs sm:text-sm">Our Story</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6c2c8b] font-heading">About Kynexa</h2>
              <p className="text-sm sm:text-lg text-gray-700 font-body">
              At Kynexa Advanced Physiotherapy and Manual Therapy Clinic, we believe healing is not just about recovery—it’s about rediscovering strength, restoring confidence, and reclaiming your life. Located in the heart of Delhi, our clinic offers a sanctuary for those seeking comprehensive, compassionate, and cutting-edge physiotherapy solutions.
Whether you're navigating post-surgical rehabilitation, managing chronic pain, or recovering from sports injuries, our expert team combines advanced manual therapy with evidence-based techniques to create customized treatment plans tailored to your goals.
With a strong emphasis on patient education, proactive care, and long-term wellness, we help you move better, feel stronger, and live pain-free , so you can return to the lifestyle you love with confidence and ease.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center lg:justify-start"
              >
                <Link href="/about">
                  <Button className="bg-[#6c2c8b] hover:bg-[#6c2c8b]/80 text-white px-4 sm:px-6 py-3 rounded-xl shadow-md text-sm sm:text-base">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Conditions We Treat - Improved */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="bg-[#6c2c8b]/80 text-white border-none px-3 sm:px-4 py-1.5 mb-4 text-xs sm:text-sm">Comprehensive Care</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#6c2c8b] font-heading mb-4">Conditions We Treat</h2>
            <p className="text-sm sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Our medical professionals are experienced in treating a wide range of conditions.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
              {conditionCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveConditionCategory(category)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeConditionCategory === category
                      ? 'bg-[#6c2c8b] text-white shadow-md'
                      : 'bg-[#f8f9fa] text-gray-700 hover:bg-[#f3eaf8]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {filteredConditions.map((condition, index) => (
                <motion.div
                  key={condition.name}
                  variants={fadeInUp}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <div className="bg-[#6c2c8b]/80 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm h-full">
                    <div className="bg-[#6c2c8b]/80 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="text-white font-medium text-sm sm:text-base mb-2">{condition.name}</p>
                    <Badge className="bg-[#6c2c8b]/80 text-white border-none text-xs">
                      {condition.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      <FormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
    </div>
  );
}