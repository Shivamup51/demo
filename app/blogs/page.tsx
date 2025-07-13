"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowLeft, Search, Calendar, Clock, User, Tag, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Pain Management", "Exercise & Fitness", "Injury Prevention", "Recovery Tips", "Wellness"]

  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Dry Needling: How It Works and Why It's Effective",
      excerpt:
        "Discover the mechanisms behind dry needling therapy and why it's become one of the most effective treatments for muscle pain and trigger points.",
      content:
        "Dry needling has gained significant recognition in the physiotherapy world as an effective treatment for muscle pain, trigger points, and various musculoskeletal conditions...",
      author: "Dr. Michael Smith",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Pain Management",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "5 Essential Exercises for Lower Back Pain Relief",
      excerpt:
        "Learn simple yet effective exercises that can help alleviate lower back pain and prevent future episodes.",
      content:
        "Lower back pain affects millions of people worldwide. These evidence-based exercises can provide significant relief when performed correctly...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Exercise & Fitness",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 3,
      title: "Home Visit Physiotherapy: The Future of Personalized Healthcare",
      excerpt: "Explore how home visit physiotherapy is revolutionizing patient care and improving treatment outcomes.",
      content:
        "The healthcare landscape is evolving, and home visit physiotherapy represents a significant shift towards more personalized, convenient care...",
      author: "Dr. David Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Wellness",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 4,
      title: "Understanding Cupping Therapy: Ancient Wisdom Meets Modern Science",
      excerpt: "Delve into the history and modern applications of cupping therapy in physiotherapy treatment.",
      content:
        "Cupping therapy has been used for thousands of years, but modern research is now validating its effectiveness for various conditions...",
      author: "Dr. Michael Smith",
      date: "2024-01-08",
      readTime: "5 min read",
      category: "Pain Management",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 5,
      title: "Preventing Sports Injuries: A Comprehensive Guide for Athletes",
      excerpt:
        "Essential strategies and techniques to help athletes prevent common sports injuries and maintain peak performance.",
      content:
        "Sports injuries can derail an athlete's career and cause long-term health issues. Prevention is always better than treatment...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Injury Prevention",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "The Role of Manual Therapy in Modern Physiotherapy",
      excerpt:
        "Understand how hands-on treatment techniques continue to play a crucial role in effective physiotherapy.",
      content:
        "Manual therapy remains one of the most effective treatment modalities in physiotherapy, combining skilled touch with scientific knowledge...",
      author: "Dr. David Chen",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Pain Management",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 7,
      title: "Post-Surgical Rehabilitation: What to Expect and How to Prepare",
      excerpt:
        "A comprehensive guide to post-surgical rehabilitation, including timelines, expectations, and preparation tips.",
      content:
        "Post-surgical rehabilitation is crucial for optimal recovery. Understanding what to expect can help patients prepare mentally and physically...",
      author: "Dr. Michael Smith",
      date: "2024-01-01",
      readTime: "12 min read",
      category: "Recovery Tips",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 8,
      title: "Ergonomics at Work: Preventing Workplace Injuries",
      excerpt:
        "Learn how proper ergonomics can prevent workplace injuries and improve your overall health and productivity.",
      content:
        "Poor workplace ergonomics is a leading cause of musculoskeletal disorders. Simple adjustments can make a significant difference...",
      author: "Dr. Sarah Johnson",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Injury Prevention",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
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
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-200 focus:border-[#A259FF] focus:ring-[#A259FF]"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-md focus:border-[#A259FF] focus:ring-[#A259FF] focus:outline-none bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
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
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
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
                    <Button
                      variant="ghost"
                      className="text-[#A259FF] hover:text-[#2E3A59] p-0 h-auto font-medium group"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#111827] font-heading">
              {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
            </h2>
            <div className="text-[#6B7280]">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-[#6B7280] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#111827] mb-2">No articles found</h3>
              <p className="text-[#6B7280]">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" && !searchTerm ? regularPosts : filteredPosts).map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
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
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] font-heading line-clamp-2">{post.title}</h3>
                    <p className="text-[#6B7280] font-body leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">{new Date(post.date).toLocaleDateString()}</span>
                      <Button
                        variant="ghost"
                        className="text-[#A259FF] hover:text-[#2E3A59] p-0 h-auto font-medium group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2E3A59] to-[#A259FF]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Stay Updated</h2>
            <p className="text-xl text-white/90 font-body">
              Subscribe to our newsletter for the latest health tips, treatment insights, and wellness advice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-[#2E3A59] hover:bg-gray-100 px-6 py-2 font-medium">Subscribe</Button>
          </div>

          <p className="text-sm text-white/70">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-[#111827] font-heading">Browse by Category</h2>
            <p className="text-lg text-[#6B7280] font-body">
              Find articles that match your specific interests and health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => {
              const categoryPosts = blogPosts.filter((post) => post.category === category)
              return (
                <Card
                  key={category}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-[#F9FAFB] to-white cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E3A59] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform">
                      <Tag className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] font-heading">{category}</h3>
                    <p className="text-[#6B7280] font-body">
                      {categoryPosts.length} article{categoryPosts.length !== 1 ? "s" : ""}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
