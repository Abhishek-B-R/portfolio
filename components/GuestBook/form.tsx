// components/GuestbookForm.tsx
"use client"

import React, { useState, useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Send, Loader2, Smile } from "lucide-react"
import { toast } from "sonner"
import type { EmojiClickData } from "emoji-picker-react"
import { Theme } from "emoji-picker-react"

// Dynamically import the Picker so it only runs client-side
const EmojiPicker = dynamic(
  () => import("emoji-picker-react").then((mod) => mod.default),
  { ssr: false }
)

interface GuestbookFormProps {
  onMessageAdded: () => void
}

export default function GuestbookForm({
  onMessageAdded,
}: GuestbookFormProps) {
  const { data: session } = useSession()
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const emojiPickerRef = useRef<HTMLDivElement>(null)

  // Close picker if you click outside
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(e.target as Node)
      ) {
        setShowEmojiPicker(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => {
      document.removeEventListener("mousedown", onClickOutside)
    }
  }, [])

  function handleEmojiClick(emojiData: EmojiClickData) {
    setMessage((prev) => prev + emojiData.emoji)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = message.trim()
    if (!trimmed) {
      toast.error("Please enter a message")
      return
    }
    if (trimmed.length > 1000) {
      toast.error("Message is too long (max 1000 chars)")
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to submit")
      }
      setMessage("")
      onMessageAdded()
      toast.success("Signed guestbook! 🎉")
    } catch (err) {
      console.error(err)
      toast.error(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!session) return null

  return (
    <Card className="mb-8 bg-white/20 dark:bg-gray-800/40
                     backdrop-blur-md border border-border/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>👋</span>
          Sign my guestbook, {session.user?.name}!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Share your thoughts, feedback, or just say hi! 😊"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px] resize-none"
            maxLength={1000}
          />

          <div className="flex justify-between items-center relative">
            <span className="text-sm text-muted-foreground">
              {message.length}/1000
            </span>

            <div className="flex items-center gap-2">
              {/* Emoji Picker Trigger */}
              <div ref={emojiPickerRef} className="relative">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowEmojiPicker((v) => !v)}
                >
                  <Smile className="w-4 h-4" />
                </Button>

                {showEmojiPicker && (
                    <div
                    className="
                      absolute bottom-full mb-2 right-0 z-50
                      shadow-lg rounded-lg overflow-hidden
                    "
                    >
                    <EmojiPicker
                      onEmojiClick={handleEmojiClick}
                      theme={document?.querySelector('html')?.className === 'dark'  ? Theme.DARK : Theme.LIGHT}
                      lazyLoadEmojis={true}
                    />
                    </div>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !message.trim()}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Sign
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}