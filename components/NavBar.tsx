"use client"

import { BookOpenText, Code2Icon, HomeIcon, Mail, PenTool, User2Icon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import labels from "./labels"
import { usePathname } from "next/navigation"

const icons = [
  { url: "/", icon: <HomeIcon /> },
  { url: "/about", icon: <User2Icon /> },
  { url: "/projects", icon: <Code2Icon /> },
  { url: "/blogs", icon: <BookOpenText /> },
  { url: "/contact", icon: <Mail /> },
  { url: "/guestbook", icon: <PenTool /> },
]
// add on hover text rendering
export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [navbarWidth, setNavbarWidth] = useState<number>(0)
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  useEffect(() => {
    const calculateNavbarWidth = () => {
      const width = window.innerWidth
      setWindowWidth(width)

      if (width < 768) {
        setNavbarWidth(0)
      } else {
        // Desktop: calculate navbar width based on window width
        const maxNavbarWidth = 400
        const minNavbarWidth = 80 
        const maxWindowWidth = 1920 
        const minWindowWidth = 768 

        if (width >= maxWindowWidth) {
          setNavbarWidth(maxNavbarWidth)
        } else if (width <= minWindowWidth) {
          setNavbarWidth(minNavbarWidth)
        } else {
          const ratio = (width - minWindowWidth) / (maxWindowWidth - minWindowWidth)
          const calculatedWidth = minNavbarWidth + (maxNavbarWidth - minNavbarWidth) * ratio
          setNavbarWidth(Math.round(calculatedWidth))
        }
      }
    }

    calculateNavbarWidth()
    window.addEventListener("resize", calculateNavbarWidth)

    return () => window.removeEventListener("resize", calculateNavbarWidth)
  }, [])

  if (windowWidth < 768) {
    // Mobile: Bottom horizontal navbar
    return (
      <nav className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <ul className="flex flex-row space-x-6">
          {icons.map(({ url, icon }, index) => (
            <li key={index}>
              <Link
                href={url}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(url);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  // Desktop: Left side vertical navbar with dynamic width
  return (
    <nav
      className="fixed left-0 top-0 h-screen flex flex-col items-end justify-center border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300"
      style={{ width: `${navbarWidth}px` }}
    >
      <ul className="flex flex-col space-y-6">
        {icons.map(({ url, icon }, index) => (
          <li key={index}>
            {(() => {
              return (
                <Link
                  href={url}
                  aria-label={labels[url]}
                  onClick={(e) => {
                    setActiveTab(url);
                  }}
                  className="group flex items-center justify-start rounded-lg px-2 py-1 overflow-hidden"
                >
                  <span className={`flex items-center justify-center w-12 h-12 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors ${activeTab === url ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
                    {icon}
                  </span>
                  <span
                    className="ml-3 text-sm font-medium opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap"
                  >
                    {labels[url]}
                  </span>
                </Link>
              )
            })()}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function useNavbarWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [navbarWidth, setNavbarWidth] = useState<number>(0)

  useEffect(() => {
    const calculateNavbarWidth = () => {
      const width = window.innerWidth
      setWindowWidth(width)

      if (width < 768) {
        setNavbarWidth(0)
      } else {
        const maxNavbarWidth = 400
        const minNavbarWidth = 80
        const maxWindowWidth = 1920
        const minWindowWidth = 768

        if (width >= maxWindowWidth) {
          setNavbarWidth(maxNavbarWidth)
        } else if (width <= minWindowWidth) {
          setNavbarWidth(minNavbarWidth)
        } else {
          const ratio = (width - minWindowWidth) / (maxWindowWidth - minWindowWidth)
          const calculatedWidth = minNavbarWidth + (maxNavbarWidth - minNavbarWidth) * ratio
          setNavbarWidth(Math.round(calculatedWidth))
        }
      }
    }

    calculateNavbarWidth()
    window.addEventListener("resize", calculateNavbarWidth)
    return () => window.removeEventListener("resize", calculateNavbarWidth)
  }, [])

  return { navbarWidth, windowWidth }
}
