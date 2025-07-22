"use client"
import HeroSection from "@/components/HeroSection"
import WhyChooseUsSection from "@/components/WhyChooseUs"
import Contact from "@/app/contact/page"
import Navbar from "@/components/navbar"
const HomePage = () => {
  return (
    <div className="bg-[#F2F5FA]/30">
      <Navbar subServices={[]} />
      <HeroSection />
      <div className="py-16 bg-white">
        <WhyChooseUsSection />
      </div>
      <div className="py-16 bg-[#F2F5FA]/50">
        <Contact/>
      </div>
    </div>
  )
}

export default HomePage
