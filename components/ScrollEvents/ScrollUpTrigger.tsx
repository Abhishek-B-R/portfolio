"use client"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function useScrollUpRedirect(prevPath: string) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        if (pathname !== prevPath) {
          router.push(prevPath)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevPath, pathname, router])
}
