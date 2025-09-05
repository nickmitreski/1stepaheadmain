"use client"
import { Heart, Users, BookOpen, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    name: "Our Mission",
    description:
      "1 Step Ahead empowers youth aged 16–24 through psychology, financial literacy, and real-life skills. We build confidence by helping young people understand their mindset, values, and habits.",
    icon: Target,
  },
  {
    name: "Who We Are",
    description:
      "We're a team of financial professionals and mental health practitioners. Our unique approach combines practical knowledge with psychological insights to help the next generation thrive.",
    icon: Users,
  },
  {
    name: "What We Offer",
    description:
      "We provide interactive, tailored workshops for schools, community groups, and youth services. Topics cover budgeting, SMART goals, money mindsets, and values-based decision-making, customized via pre-surveys.",
    icon: BookOpen,
  },
  {
    name: "Why It Matters",
    description:
      "Young people face big decisions without the right tools. We bridge the gap with financial literacy and wellbeing, equipping them with knowledge and confidence to stay one step ahead.",
    icon: Heart,
  },
]

export default function Features() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".feature-card")
      
      gsap.fromTo(cards, 
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mb-4">About Us</h2>
          <p className="text-gray-600 text-lg">
            Discover how 1 Step Ahead transforms young lives through financial education and psychological insights.
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.name} className="feature-card group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                  {feature.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
