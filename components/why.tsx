"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Why() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const heading = sectionRef.current.querySelector("h2")
      const paragraphs = sectionRef.current.querySelectorAll("p")
      
      gsap.fromTo(heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(paragraphs,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} id="why" className="py-20 md:py-24 bg-[#69dfa6]">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-black mb-8">
            Why is financial wellbeing important?
          </h2>
          <div className="space-y-6 text-black text-lg">
            <p className="leading-relaxed">
              With a rapidly increasing number of young Australians reporting that money worries affect their mental
              wellbeing, financial education isn't optional; it's essential. We help bridge the gap by combining
              financial literacy with psychology and wellbeing education, giving you the knowledge and confidence to
              stay one step ahead.
            </p>
            <p className="leading-relaxed">
              Building money skills early creates strong foundations for life. When young people learn to budget, save,
              and understand their money mindset, they gain more than financial literacy—they gain confidence,
              resilience, and independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


