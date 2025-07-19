"use client"

import NavBar, { useNavbarWidth } from "@/components/NavBar"

export default function Page() {
  const { navbarWidth } = useNavbarWidth()

  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Dynamic margin based on actual navbar width */}
      <main
        className="pb-16 md:pb-0 p-8 transition-all duration-300"
        style={{
          marginLeft: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
          <p className="text-lg text-muted-foreground mb-4">
            This is the main content area. The navigation width decreases smoothly as the window gets smaller.
          </p>
          <p className="text-sm text-muted-foreground">Current navbar width: {navbarWidth}px</p>
        </div>
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