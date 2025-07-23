"use client"

import BlogPage from "@/components/Blog"
import { useNavbarWidth } from "@/components/NavBar"

export default function Page() {
  const { navbarWidth } = useNavbarWidth()

  return (
    <div className="min-h-screen overflow-hidden">
      <main
        className="pb-16 md:pb-0 transition-all duration-300"
        style={{
          marginLeft: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
          marginRight: navbarWidth > 0 ? `${9 * navbarWidth / 10}px` : "0px",
        }}
      >
        <BlogPage />
      </main>
    </div>
  )
}