'use client'

import Link from "next/link"
import { ThemeToggle } from "./themeToggle"
import { Button } from "@/components/ui/button"
import { PenTool } from "lucide-react"

export default function TopButtons() {
  return (
    <div className="fixed top-4 xl:right-[400px] lg:right-80 md:right-40 sm:right-20 right-10 z-50 flex space-x-3">
      <ThemeToggle />
      <Link href="/guestbook">
        <Button size="sm" className="bg-blue-600 cursor-pointer hover:bg-blue-800 text-white">
          <PenTool /> Sign my Guestbook
        </Button>
      </Link>
    </div>
  )
}
