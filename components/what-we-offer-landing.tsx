"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeDollarSign, Banknote, Target, Scale, PiggyBank, NotebookPen, LineChart, Handshake } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function WhatWeOfferLanding() {
  const cardsRef = useRef<HTMLDivElement>(null)

  const features = [
    { title: "Understanding money profiles", icon: BadgeDollarSign },
    { title: "Budgeting & saving", icon: PiggyBank },
    { title: "Needs vs. wants", icon: Scale },
    { title: "SMART goals", icon: Target },
    { title: "Banking & tax basics", icon: Banknote },
    { title: "Money habits & mindset", icon: LineChart },
    { title: "Values-based decision making", icon: NotebookPen },
    { title: "Good debt vs bad debt", icon: Scale },
    { title: "Financial wellbeing & gratitude", icon: Handshake },
  ]

  useEffect(() => {
    if (typeof window !== "undefined" && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".feature-card")
      
      gsap.fromTo(cards,
        { rotateY: 25, opacity: 0, z: -100 },
        {
          rotateY: 0,
          opacity: 1,
          z: 0,
          duration: 1.2,
          stagger: 0.1,
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
    <section id="what-we-offer-landing" className="py-20 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-black mb-6">What We Offer</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We design interactive, custom workshops for schools, community groups, and youth services. Every program
            includes a pre-survey so we can tailor the experience to meet your group's needs and measure growth.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="feature-card group hover:shadow-xl transition-all duration-500 bg-[#69dfa6] border-0 text-white">
              <CardContent className="p-8 text-center space-y-4">
                <feature.icon className="h-8 w-8 mx-auto text-white group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" className="text-lg px-8">Enquire About a Workshop</Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <a href="/programs">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


