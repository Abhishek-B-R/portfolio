"use client"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function useScrollDownRedirect(nextPath: string) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.body.scrollHeight

      if (scrollY + windowHeight >= fullHeight - 10) {
        if (pathname !== nextPath) {
          router.push(nextPath)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [nextPath, pathname, router])
}
