"use client"

import HeroSection from "@/components/Landing/Hero"
import { useNavbarWidth } from "@/components/NavBar"

export default function Page() {
  const { navbarWidth } = useNavbarWidth()

  return (
    <div className="min-h-screen overflow-hidden">
      <main
        className="pb-16 md:pb-0 transition-all duration-300"
        style={{
          marginLeft: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
          marginRight: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
        }}
      >
        <HeroSection />
      </main>
    </div>
  )
}