"use client"

import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GuestbookForm from "@/components/GuestBook/form"
import GuestbookMessages from "@/components/GuestBook/messages"
import { LogOut } from "lucide-react"
import Google from "../icons/Google"

export default function GuestbookPage() {
  const { data: session, status } = useSession()
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleMessageAdded = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen py-12 px-4 mt-36">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-8 items-center">
          <div className={`text-center mb-12 ${session ? "col-span-6 xl:col-span-7" : "col-span-8"}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">Hi {session?.user?.name || ""} 👋<br />Welcome to my Guestbook</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leave a message, drop your thoughts, or just say hello.
            </p>
          </div>
          {session?.user?.email && (
            <Button variant="outline" onClick={() => signOut()} className="gap-2 col-span-2 xl:col-span-1">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          )}
        </div>

        {/* Authentication Section */}
        {status === "loading" ? (
          <Card className="mb-8 bg-background/80 border border-border/40">
            <CardContent className="p-8 text-center">
              <div className="animate-pulse">Loading...</div>
            </CardContent>
          </Card>
        ) : !session ? (
          <Card className="mb-8 bg-background/80 border border-border/40">
            <CardHeader>
              <CardTitle className="text-center">Sign in to leave a message</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Sign in with Google to share your thoughts and join the conversation!
              </p>
              <Button onClick={() => signIn("google")} size="lg" className="gap-4 bg-gray-900 hover:bg-gray-700 cursor-pointer">
                <Google className="scale-200" />
                Sign in with Google
              </Button>
            </CardContent>
          </Card>
        ) : (
            <GuestbookForm onMessageAdded={handleMessageAdded} />
        )}

        {/* Messages Section */}
        <GuestbookMessages refreshTrigger={refreshTrigger} />
      </div>
    </div>
  )
}
