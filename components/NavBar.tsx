"use client"

import { BookOpenText, Code2Icon, FileText, HomeIcon, PenTool, User2Icon } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./themeToggle"
import { useEffect, useState } from "react"

const icons = [
  { url: "/", icon: <HomeIcon /> },
  { url: "/about", icon: <User2Icon /> },
  { url: "/projects", icon: <Code2Icon /> },
  { url: "/blog", icon: <BookOpenText /> },
  { url: "/resume", icon: <FileText /> },
  { url: "/guestbook", icon: <PenTool /> },
]

export default function NavBar() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    // Set initial value
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  if (isDesktop) {
    // Desktop: Left side vertical navbar
    return (
      <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-center border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ul className="flex flex-col space-y-6">
          {icons.map(({ url, icon }, index) => (
            <li key={index}>
              <Link
                href={url}
                className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {icon}
              </Link>
            </li>
          ))}
          <li className="mt-8">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    )
  }

  // Mobile: Bottom horizontal navbar
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <ul className="flex flex-row space-x-6">
        {icons.map(({ url, icon }, index) => (
          <li key={index}>
            <Link
              href={url}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {icon}
            </Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}
