'use client'

import Link from "next/link"
import { ThemeToggle } from "./themeToggle"
import { Button } from "@/components/ui/button"
import { PenTool, Heart } from "lucide-react"

export default function TopButtons() {
  return (
    <div className="fixed top-0 left-0 z-100 bg-background w-full h-18">
      <div className="fixed top-4 xl:right-[350px] lg:right-80 md:right-40 sm:right-20 right-3 z-100 flex space-x-3 mt-2">
        <ThemeToggle />
        <Link href="/guestbook">
          <Button size="sm" className="bg-blue-600 cursor-pointer hover:bg-blue-800 text-white">
            <PenTool className="w-4 h-4" /> Sign my Guestbook
          </Button>
        </Link>
        <Link href="https://github.com/sponsors/Abhishek-B-R" target="_blank" className="cursor-pointer">
          <Button
            size="sm"
            className="bg-pink-600 hover:bg-pink-700 text-white"
          >
            <Heart className="w-4 h-4" /> Sponsor Me 💖
          </Button>
        </Link>
      </div>
    </div>
  )
}
