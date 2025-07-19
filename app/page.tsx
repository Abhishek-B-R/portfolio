import NavBar from "@/components/NavBar"

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Desktop: Add left margin to account for fixed sidebar */}
      {/* Mobile: Add bottom padding to account for fixed bottom nav */}
      <main className="md:ml-20 pb-16 md:pb-0 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            This is the main content area. The navigation adapts to screen size - vertical sidebar on desktop and
            horizontal bottom bar on mobile.
          </p>
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