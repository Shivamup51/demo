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

export const metadata: Metadata = {
  title: "Kynexa Physio",
  description: "Physiotherapy and rehabilitation services",
  generator: "v0.dev",
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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Navbar subServices={services} />
        {children}
      </body>
    </html>
  )
}
