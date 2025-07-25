'use client'

import Link from "next/link"
import { ThemeToggle } from "./themeToggle"
import { Button } from "@/components/ui/button"
import { PenTool } from "lucide-react"

export default function TopButtons() {
  return (
    <div className="fixed top-0 z-100 bg-background w-full h-18">
      <div className="fixed top-4 xl:right-[350px] lg:right-80 md:right-40 sm:right-20 right-10 z-100 flex space-x-3 mt-2">
        <ThemeToggle />
        <Link href="/guestbook">
          <Button size="sm" className="bg-blue-600 cursor-pointer hover:bg-blue-800 text-white">
            <PenTool /> Sign my Guestbook
          </Button>
        </Link>
      </div>
    </div>
  )
}
