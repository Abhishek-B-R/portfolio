"use client"

import HeroSection from "@/components/Hero"
import NavBar, { useNavbarWidth } from "@/components/NavBar"

export default function Page() {
  const { navbarWidth } = useNavbarWidth()

  return (
    <div className="min-h-screen">
      <NavBar />
      <main
        className="pb-16 md:pb-0 transition-all duration-300"
        style={{
          marginLeft: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
          marginRight: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
        }}
      >
        <HeroSection />
        <section className="min-h-screen flex items-center justify-center bg-muted/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">More Content Below</h2>
            <p className="text-muted-foreground">This is where your other sections would go...</p>
          </div>
        </section>
      </main>
    </div>
  )
}

// {
//     url: "https://github.com/Abhishek-B-R",
//     icon: <Github />
// },{
//     url: "https://linkedin.com/in/abhi-br",
//     icon: <Linkedin />
// },{
//     url: "https://twitter.com/abhi__br",
//     icon: <Twitter />
// }