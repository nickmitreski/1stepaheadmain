"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && heroRef.current) {
      const heading = heroRef.current.querySelector("h1")
      const subtitle = heroRef.current.querySelector("p")
      const button = heroRef.current.querySelector("button")
      
      gsap.fromTo(heading,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      )
      
      gsap.fromTo(subtitle,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.6 }
      )
      
      gsap.fromTo(button,
        { y: 30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.9 }
      )
    }
  }, [])

  return (
    <section className="relative bg-[url('/images/hero.webp')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/35" />
      <div className="container relative z-10 max-w-screen-2xl pt-24 md:pt-28 pb-4 md:pb-8">
        <div className="flex justify-center items-start min-h-[calc(100vh-12rem)] pt-16 md:pt-24 pb-0">
          <div ref={heroRef} className="max-w-4xl space-y-6 text-center">
            <h1 className="text-white">Building Brighter Futures.</h1>
            <p className="text-xl text-white/90 sm:text-2xl leading-relaxed">Transforming young lives through financial education and psychological insights</p>
            <div className="pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/programs">Find out more</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
