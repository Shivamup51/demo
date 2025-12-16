"use client"

import { useState } from "react"
import { PhoneCall, Menu, X, ChevronDown, Heart, Brain, Activity, Dumbbell, Home, Syringe, Waves, Zap, Bone, Bandage, Accessibility } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NavbarProps {
  subServices: Array<{
    icon: React.ReactNode
    title: string
    description: string
    link: string
  }>
}

export default function Navbar({ subServices }: NavbarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const allServices = [
    { name: "Dry Needling Therapy", href: "/services/DryNeedling", icon: <Syringe className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Cupping Therapy", href: "/services/cupping-therapy", icon: <Waves className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Kinesio Taping", href: "/services/KinesioTapingTherapy", icon: <Bandage className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Laser Therapy", href: "/services/LaserTherapy", icon: <Zap className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Manual Therapy", href: "/services/ManualTherapy", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Electrotherapy", href: "/services/Electrotherapy", icon: <Zap className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Sports Physiotherapy", href: "/services/SportsPhysiotherapy", icon: <Dumbbell className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Cardio & Pulmonary Rehab", href: "/services/CardioPulmonaryRehab", icon: <Heart className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Chiropractic Care", href: "/services/ChiropracticCare", icon: <Bone className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Geriatric Rehabilitation", href: "/services/GeriatricRehabilitation", icon: <Accessibility className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Post Surgical Rehabilitation", href: "/services/PostSurgicalRehabilitation", icon: <Activity className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Spine Alignment Therapy", href: "/services/SpineAlignmentTherapy", icon: <Bone className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Neuro Rehabilitation", href: "/services/NeuroRehabilitation", icon: <Brain className="w-4 h-4 mr-2 text-[#6c2c8b]" /> },
    { name: "Pre & Post Natal Physiotherapy", href: "/services/PreAndPostNatalPhysiotherapy", icon: <Heart className="w-4 h-4 mr-2 text-[#6c2c8b]" /> }
  ]

  const primaryLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex items-center">
            <Link href="/" aria-label="Kynexa Home" className="flex items-center">
              <Image src="/logo.png" alt="Kynexa Logo" width={120} height={30} className="h-10 w-auto sm:h-12" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {primaryLinks.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-700 hover:text-[#6c2c8b] font-medium relative group py-2"
              >
                {l.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center text-gray-700 hover:text-[#6c2c8b] font-medium focus:outline-none relative group py-2"
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-full max-w-[900px] bg-white shadow-xl p-6 rounded-xl mt-4 border border-gray-100 lg:block hidden"
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <ScrollArea className="max-h-[60vh] pr-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {allServices.map((service, i) => (
                      <DropdownMenuItem key={i} asChild className="p-0">
                        <Link
                          href={service.href}
                          className="flex items-center w-full rounded-lg px-3 py-2 text-gray-700 hover:text-[#6c2c8b] hover:bg-gray-50 transition-colors text-sm"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.icon}
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>

            {primaryLinks.slice(2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-700 hover:text-[#6c2c8b] font-medium relative group py-2"
              >
                {l.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-[#6c2c8b] text-[#6c2c8b] hover:bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] hover:text-white rounded-lg transition-colors px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base" asChild>
              <a href="tel:+918868879387" aria-label="Call +91 8868879387">
                <PhoneCall className="w-4 h-4 mr-2" />
                +91 8868879387
              </a>
            </Button>
            <Link href="/home-visit">
              <Button className="bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white hover:opacity-90 rounded-lg text-sm py-2.5">
                <Home className="w-4 h-4 mr-2" />
                Home Visit
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  {isSheetOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[90vw] max-w-[360px] p-0 flex flex-col">
                <div className="px-4 py-4 border-b border-gray-100">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Image src="/logo.png" alt="Kynexa Logo" width={110} height={28} className="h-8 w-auto" />
                    </SheetTitle>
                  </SheetHeader>
                </div>
                <ScrollArea className="flex-1">
                  <div className="px-4 py-4 space-y-2">
                    {primaryLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block text-gray-700 hover:text-[#6c2c8b] hover:bg-[#6c2c8b]/5 transition-colors font-medium px-3 py-2 rounded-md"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {l.name}
                      </Link>
                    ))}

                    <Accordion type="single" collapsible className="w-full pt-1">
                      <AccordionItem value="services" className="border-none">
                        <AccordionTrigger className="text-gray-700 hover:text-[#6c2c8b] font-medium px-3 rounded-md">
                          Services
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-1 pl-1 max-h-[55vh] overflow-y-auto pr-2">
                            {allServices.map((service, i) => (
                              <Link
                                key={i}
                                href={service.href}
                                className="flex items-center text-gray-700 hover:text-[#6c2c8b] transition-colors text-sm py-2 rounded-md px-3"
                                onClick={() => setIsSheetOpen(false)}
                              >
                                {service.icon}
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="pt-6 flex flex-col gap-3">
                      <Button variant="outline" className="w-full border-[#6c2c8b] text-[#6c2c8b] hover:bg-[#6c2c8b]/5 rounded-lg text-sm py-2.5" asChild>
                        <a href="tel:+918868879387" aria-label="Call +91 8868879387">
                          <PhoneCall className="w-4 h-4 mr-2" />
                          +91 8868879387
                        </a>
                      </Button>
                      <Link href="/home-visit" onClick={() => setIsSheetOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-[#6c2c8b] to-[#9d4ed8] text-white hover:opacity-90 rounded-lg text-sm py-2.5">
                          <Home className="w-4 h-4 mr-2" />
                          Home Visit
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}