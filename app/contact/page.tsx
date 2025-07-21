"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, Send, Clock, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function ContactSection() {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [meetingForm, setMeetingForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    duration: "30",
    message: "",
  })
  const [emailLoading, setEmailLoading] = useState(false)
  const [meetingLoading, setMeetingLoading] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailLoading(true)

    try {
      const response = await fetch("/api/contact/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailForm),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        setEmailForm({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error(data.error || "Failed to send message. Please try again.")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setEmailLoading(false)
    }
  }

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMeetingLoading(true)

    try {
      const response = await fetch("/api/contact/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetingForm),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Meeting request sent! I'll confirm the details via email.")
        setMeetingForm({ name: "", email: "", date: "", time: "", duration: "30", message: "" })
      } else {
        toast.error(data.error || "Failed to book meeting. Please try again.")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setMeetingLoading(false)
    }
  }

  const today = new Date().toISOString().split("T")[0]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Contact Form */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
              <CardDescription>Drop me a line and I&apos;ll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={emailForm.name}
                      onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={emailForm.email}
                      onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={emailForm.subject}
                    onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    value={emailForm.message}
                    onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={emailLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {emailLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Meeting Booking Form */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Book a Meeting
              </CardTitle>
              <CardDescription>Schedule a call to discuss your project in detail.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleMeetingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="meeting-name" className="block text-sm font-medium text-foreground mb-1">
                      Name *
                    </label>
                    <Input
                      id="meeting-name"
                      type="text"
                      placeholder="Your name"
                      value={meetingForm.name}
                      onChange={(e) => setMeetingForm({ ...meetingForm, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="meeting-email" className="block text-sm font-medium text-foreground mb-1">
                      Email *
                    </label>
                    <Input
                      id="meeting-email"
                      type="email"
                      placeholder="your@email.com"
                      value={meetingForm.email}
                      onChange={(e) => setMeetingForm({ ...meetingForm, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">
                      Preferred Date *
                    </label>
                    <Input
                      id="date"
                      type="date"
                      min={today}
                      value={meetingForm.date}
                      onChange={(e) => setMeetingForm({ ...meetingForm, date: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1">
                      Preferred Time *
                    </label>
                    <Input
                      id="time"
                      type="time"
                      value={meetingForm.time}
                      onChange={(e) => setMeetingForm({ ...meetingForm, time: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-foreground mb-1">
                    Duration
                  </label>
                  <select
                    id="duration"
                    value={meetingForm.duration}
                    onChange={(e) => setMeetingForm({ ...meetingForm, duration: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="meeting-message" className="block text-sm font-medium text-foreground mb-1">
                    What would you like to discuss?
                  </label>
                  <Textarea
                    id="meeting-message"
                    placeholder="Brief description of what you'd like to talk about..."
                    rows={3}
                    value={meetingForm.message}
                    onChange={(e) => setMeetingForm({ ...meetingForm, message: e.target.value })}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={meetingLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {meetingLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Booking...
                    </>
                  ) : (
                    <>
                      <Clock className="mr-2 h-4 w-4" />
                      Book Meeting
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm text-muted-foreground">Usually responds within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}
