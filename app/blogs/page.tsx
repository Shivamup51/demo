"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowLeft, Search, Calendar, Clock, User, Tag, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const router = useRouter()

  const blogPosts = [
    {
      id: 1,
      title: "Exercise and Fitness: Smart Movement for Sustainable Wellness",
      excerpt: "Discover how physiotherapy-guided exercise ensures safe, effective, and sustainable fitness tailored to your unique needs.",
      content: "Fitness",
      author: "Kynexa Team",
      date: "2025-07-27",
      readTime: "8 min read",
      category: "Exercise & Fitness",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "Pelvic Floor Health: Empowering Men and Women from the Inside Out",
      excerpt: "Learn how targeted physiotherapy can address pelvic floor dysfunction and restore control, function, and confidence.",
      content: "PelvicFloor",
      author: "Kynexa Team",
      date: "2025-07-27",
      readTime: "7 min read",
      category: "Pelvic Health",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 3,
      title: "Pain Management: Healing Through Movement, Not Medication",
      excerpt: "Explore how physiotherapy offers sustainable, drug-free pain relief by addressing the root causes of discomfort.",
      content: "PainManagement",
      author: "Kynexa Team",
      date: "2025-07-27",
      readTime: "6 min read",
      category: "Pain Management",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 4,
      title: "Geriatric Rehabilitation: Reclaiming Strength, Confidence, and Independence in Aging",
      excerpt: "Understand how geriatric physiotherapy restores mobility and independence for seniors through tailored care.",
      content: "GeriatricRehab",
      author: "Kynexa Team",
      date: "2025-07-27",
      readTime: "7 min read",
      category: "Geriatric Rehabilitation",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 5,
      title: "Injury Prevention and Treatment: Restoring Strength Before It Breaks",
      excerpt: "Discover strategies for preventing injuries and effective treatments for full recovery with physiotherapy.",
      content: "InjuryPrevention",
      author: "Kynexa Team",
      date: "2025-07-27",
      readTime: "6 min read",
      category: "Injury Prevention",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 6,
      title: "The Importance of Physiotherapy: The Role of Physiotherapy in Today’s Life",
      excerpt: "Learn why physiotherapy is essential for holistic wellness, from injury recovery to preventive care.",
      content: "Physiotherapy",
      author: "Kynexa Team",
      date: "2025-07-27",
      readTime: "5 min read",
      category: "Physiotherapy",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-[#A259FF]/10 text-[#A259FF] border-[#A259FF]/20">Health & Wellness Blog</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] font-heading leading-tight">
              KYNEXA PHYSIO Health Insights
            </h1>
            <p className="text-xl text-[#6B7280] font-body max-w-2xl mx-auto">
              Expert advice, treatment insights, and wellness tips from our experienced physiotherapy team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-[#111827] font-heading">Featured Articles</h2>
              <p className="text-lg text-[#6B7280] font-body">
                Our most popular and impactful health and wellness content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
                >
                  <div className="relative overflow-hidden cursor-pointer">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      onClick={() => router.push(`/blogs/${post.content}`)}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#A259FF] text-white">Featured</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-[#2E3A59]">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-[#6B7280]">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] font-heading line-clamp-2">{post.title}</h3>
                    <p className="text-[#6B7280] font-body leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blogs/${post.content}`}>
                      <Button
                        variant="ghost"
                        className="text-[#A259FF] hover:text-[#2E3A59] p-0 h-auto font-medium group"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}