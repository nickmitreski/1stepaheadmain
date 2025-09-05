"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuoteBreakSection from "@/components/quote-break-section"
import { CheckCircle, DollarSign, Brain, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const programs = [
  {
    title: "Financial literacy",
    description: "Budgeting, saving, tax, super, banking, payslips",
    icon: DollarSign,
  },
  {
    title: "Psychology & mindset tools", 
    description: "Values, habits, stress, gratitude, resilience",
    icon: Brain,
  },
  {
    title: "Real-world application",
    description: "Making financial decisions with confidence", 
    icon: Target,
  },
]

const outcomes = [
  "Practical money management skills",
  "Improved understanding of their money mindset", 
  "Strategies to set and achieve SMART goals",
  "Tools to reduce financial stress and improve wellbeing",
  "Greater confidence in navigating independence"
]

const topics = [
  "Understanding money profiles",
  "Budgeting and saving basics", 
  "Needs vs. wants",
  "SMART goals",
  "Tax, super & payslips",
  "Banking systems",
  "Money habits & mindset",
  "Gratitude & financial wellbeing",
  "Values-based decision making",
]

const organizations = [
  "High schools (Years 10–12)",
  "Youth organisations and shelters",
  "Community groups", 
  "TAFEs and training providers",
  "Family support services",
  "Local councils and youth hubs",
]

export default function ProgramsPage() {
  const programsRef = useRef<HTMLDivElement>(null)
  const topicsRef = useRef<HTMLDivElement>(null)
  const orgsRef = useRef<HTMLDivElement>(null)
  const deliveryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Program cards animation
      if (programsRef.current) {
        const cards = programsRef.current.querySelectorAll(".program-card")
        gsap.fromTo(cards, 
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: programsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Topics cards animation
      if (topicsRef.current) {
        const cards = topicsRef.current.querySelectorAll(".topic-card")
        gsap.fromTo(cards,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: topicsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Organizations animation
      if (orgsRef.current) {
        const items = orgsRef.current.querySelectorAll(".org-card")
        gsap.fromTo(items,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: orgsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Delivery cards animation
      if (deliveryRef.current) {
        const cards = deliveryRef.current.querySelectorAll(".delivery-card")
        gsap.fromTo(cards,
          { y: 60, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: deliveryRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }
  }, [])

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-[#69dfa6]">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-black">What We Offer</h1>
          <p className="text-black text-lg leading-relaxed">
            At 1 Step Ahead, we create practical, engaging, and psychology-informed financial education workshops designed
            specifically for young people aged 16–24. Our programs go beyond dollars and cents; they empower students with
            the knowledge, mindset, and confidence to stay one step ahead in life.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-black mb-6">Our Programs</h2>
          </div>
          <div ref={programsRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="program-card group hover:shadow-xl transition-all duration-500 bg-[#69dfa6] border-0 text-white">
                <CardHeader className="text-center">
                  <program.icon className="h-8 w-8 mx-auto mb-2 text-white" />
                  <CardTitle className="text-white text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
            Each workshop is tailored to your group through pre-program surveys, ensuring relevance and impact.
          </p>
        </div>
      </section>

      <QuoteBreakSection image="/images/break.png" quote="Programs that blend knowledge and mindset create lasting change." heightClassName="h-56 md:h-80" />

      {/* Who We Work With */}
      <section className="py-20 md:py-24 bg-[#69dfa6]">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-black mb-6">Who We Work With</h2>
          </div>
          <div ref={orgsRef} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((item) => (
              <Card key={item} className="org-card hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-gray-800">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Outcomes */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-black mb-8">Workshop Outcomes</h2>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /> 
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center" aria-label="Workshop outcomes image placeholder">
                <span className="text-gray-500 text-sm">Workshop Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteBreakSection image="/images/break_2.png" quote="Every session is tailored to your group for real-world impact." heightClassName="h-56 md:h-80" />

      {/* Flexible Delivery */}
      <section className="py-20 md:py-24 bg-[#69dfa6]">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-black mb-12">Flexible Delivery Options</h2>
          </div>
          <div ref={deliveryRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="delivery-card hover:shadow-xl transition-all duration-300 bg-white border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-black">Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">40–60</p>
                <p className="text-gray-600">minutes per session</p>
              </CardContent>
            </Card>
            <Card className="delivery-card hover:shadow-xl transition-all duration-300 bg-white border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-black">Format</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">One-off workshops or multi-part series</p>
              </CardContent>
            </Card>
            <Card className="delivery-card hover:shadow-xl transition-all duration-300 bg-white border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-black">Delivery</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">In-person (NSW & VIC) or virtual Australia-wide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-black mb-6">Topics We Cover</h2>
          </div>
          <div ref={topicsRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Card key={topic} className="topic-card hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-gray-800">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8">
              Enquire Now
            </Button>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  )
}


