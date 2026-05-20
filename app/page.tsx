"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { OurChoiceSection } from "@/components/our-choice-section"
import { RatingSection } from "@/components/rating-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { InfoSections } from "@/components/info-sections"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RatingSection />
      <HowItWorksSection />
      <InfoSections />
      <OurChoiceSection />
    </div>
  )
}
