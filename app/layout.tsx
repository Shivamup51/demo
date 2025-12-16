import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { 
  Zap, 
  LigatureIcon, 
  Target, 
  Hand, 
  Lightbulb, 
  Waves 
} from "lucide-react"
import Navbar from "@/components/navbar"
import { FaWhatsapp } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Kynexa Physio",
  description: "Physiotherapy and rehabilitation services",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const services = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Dry Needling",
      description: "Precision technique for trigger points & pain relief",
      link: "/services/dry-needling"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      title: "Cupping Therapy",
      description: "Traditional suction therapy for muscle relaxation",
      link: "/services/cupping-therapy"
    },
    {
      icon: <Hand className="w-5 h-5" />,
      title: "Manual Therapy",
      description: "Hands-on techniques for joints & soft tissue",
      link: "/services/manual-therapy"
    },
    {
      icon: <LigatureIcon className="w-5 h-5" />,
      title: "Kinesio Taping",
      description: "Therapeutic taping for support & recovery",
      link: "/services/kinesio-taping"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Laser Therapy",
      description: "Light-based treatment for pain & inflammation",
      link: "/services/laser-therapy"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Electro Therapy",
      description: "Electrical stimulation for pain & rehabilitation",
      link: "/services/electro-therapy"
    }
  ]

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className="font-sans antialiased overflow-x-hidden">
        <Navbar subServices={services} />
        {children}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918868879387?text=Hello%20I%20want%20to%20know%20more"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        >
          <FaWhatsapp size={30} color="white" />
        </a>
      </body>
    </html>
  )
}
