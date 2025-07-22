"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { MessageCircle, Loader2 } from "lucide-react"

interface Message {
  id: number
  name: string
  message: string
  createdAt: string
}

interface GuestbookMessagesProps {
  refreshTrigger: number
}

export default function GuestbookMessages({ refreshTrigger }: GuestbookMessagesProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/guestbook")
      if (response.ok) {
        const data = await response.json()
        setMessages(data)
      }
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [refreshTrigger])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <Card className="text-center py-12 bg-background/80 border border-border/40">
        <CardContent>
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
          <p className="text-muted-foreground">Be the first to leave a message!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Messages ({messages.length})</h2>
      {messages.map((message) => (
        <Card key={message.id} className="hover:shadow-md transition-shadow bg-background/80 border border-border/40">
          <CardContent>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{message.name}</h3>
              <span className="text-sm text-muted-foreground">
                {format(new Date(message.createdAt), "dd MMM yyyy")}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-1">{message.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
