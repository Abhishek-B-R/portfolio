"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  CalendarIcon,
  Mail,
  Send,
  Clock,
  Github,
  Linkedin,
  Twitter,
  User,
  MessageSquare,
  Globe,
  Phone,
  Coffee,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import { toast } from "sonner"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const countryCodes = [
  { code: "+1 (US)", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+1 (CA)", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
]

const meetingTypes = [
  {
    id: "quick-chat",
    title: "Quick Chat",
    description: "Casual conversation, networking, or quick questions",
    icon: <Coffee className="h-6 w-6" />,
    duration: "15",
    color: "bg-green-500/10 border-green-500/20 hover:bg-green-500/20",
  },
  {
    id: "guidance",
    title: "Guidance & Mentorship",
    description: "Career advice, project guidance, or technical mentorship",
    icon: <GraduationCap className="h-6 w-6" />,
    duration: "30",
    color: "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20",
  },
  {
    id: "interview",
    title: "Interview Discussion",
    description: "Job opportunities, technical interviews, or collaboration",
    icon: <Briefcase className="h-6 w-6" />,
    duration: "45",
    color: "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20",
  },
]

export default function ContactSection() {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [meetingForm, setMeetingForm] = useState({
    name: "",
    email: "",
    date: undefined as Date | undefined,
    time: "",
    duration: "30",
    message: "",
    timezone: "IST",
    location: "google-meet",
    countryCode: "+91",
    phoneNumber: "",
    meetingType: "",
  })

  const [emailLoading, setEmailLoading] = useState(false)
  const [meetingLoading, setMeetingLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("message")
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [meetingStep, setMeetingStep] = useState(1) // 1: Type, 2: Schedule, 3: Confirm

  const timezones = [
    { value: "IST", label: "IST (Indian Standard Time)", offset: "+05:30" },
    { value: "UTC", label: "UTC (Coordinated Universal Time)", offset: "+00:00" },
    { value: "EST", label: "EST (Eastern Standard Time)", offset: "-05:00" },
    { value: "PST", label: "PST (Pacific Standard Time)", offset: "-08:00" },
    { value: "GMT", label: "GMT (Greenwich Mean Time)", offset: "+00:00" },
    { value: "CET", label: "CET (Central European Time)", offset: "+01:00" },
    { value: "JST", label: "JST (Japan Standard Time)", offset: "+09:00" },
    { value: "AEST", label: "AEST (Australian Eastern Time)", offset: "+10:00" },
  ]

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
        setEmailForm({ name: "", email: "", message: "" })
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

    if (meetingForm.location === "phone" && !meetingForm.phoneNumber.trim()) {
      toast.error("Please enter your phone number.")
      return
    }

    setMeetingLoading(true)

    try {
      const selectedMeetingType = meetingTypes.find((type) => type.id === meetingForm.meetingType)
      const response = await fetch("/api/contact/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...meetingForm,
          date: meetingForm.date?.toISOString().split("T")[0],
          fullPhoneNumber:
            meetingForm.location === "phone" ? `${meetingForm.countryCode}${meetingForm.phoneNumber}` : null,
          meetingTypeTitle: selectedMeetingType?.title,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Meeting request sent! I'll confirm the details via email.")
        setMeetingForm({
          name: "",
          email: "",
          date: undefined,
          time: "",
          duration: "30",
          message: "",
          timezone: "IST",
          location: "google-meet",
          countryCode: "+91",
          phoneNumber: "",
          meetingType: "",
        })
        setShowConfirmDialog(false)
        setMeetingStep(1)
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

  const handleDateSelect = (date: Date | undefined) => {
    setMeetingForm({ ...meetingForm, date })
    setIsCalendarOpen(false)
  }

  const handleMeetingTypeSelect = (typeId: string) => {
    const selectedType = meetingTypes.find((type) => type.id === typeId)
    setMeetingForm({
      ...meetingForm,
      meetingType: typeId,
      duration: selectedType?.duration || "30",
    })
    setMeetingStep(2)
  }

  const handleProceedToConfirm = () => {
    if (!meetingForm.date || !meetingForm.time) {
      toast.error("Please select both date and time before proceeding.")
      return
    }
    setShowConfirmDialog(true)
  }

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  const formatTimeWithTimezone = (time: string, timezone: string) => {
    if (!time) return ""
    const selectedTimezone = timezones.find((tz) => tz.value === timezone)
    return `${time} ${selectedTimezone?.value || "IST"}`
  }

  const formatDateTimeForConfirm = () => {
    if (!meetingForm.date || !meetingForm.time) return ""
    const dateStr = format(meetingForm.date, "EEEE, MMMM d, yyyy")
    const timeStr = formatTimeWithTimezone(meetingForm.time, meetingForm.timezone)
    return `${dateStr}, ${timeStr}`
  }

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const selectedCountry = countryCodes.find((c) => c.code === meetingForm.countryCode)
  const selectedMeetingType = meetingTypes.find((type) => type.id === meetingForm.meetingType)

  return (
    <section className="py-20 bg-background max-h-[700px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I&apos;m always open to exploring new collaborations and exciting opportunities. Whether it&apos;s a project idea, a
              job opportunity, or simply a chance to connect, feel free to reach out!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/Abhishek-B-R"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/abhi-br"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://twitter.com/abhi__br"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-105"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="message" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Send Message
              </TabsTrigger>
              <TabsTrigger value="meeting" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Schedule Meeting
              </TabsTrigger>
            </TabsList>

            {/* Send Message Tab */}
            <TabsContent value="message" className="space-y-6">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={emailForm.name}
                        onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                        required
                        className="pl-10 bg-muted/50 border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        required
                        className="pl-10 bg-muted/50 border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        rows={6}
                        value={emailForm.message}
                        onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                        required
                        className="pl-10 bg-muted/50 border-border resize-none"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={emailLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-medium"
                >
                  {emailLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* Schedule Meeting Tab */}
            <TabsContent value="meeting" className="space-y-6">
              {/* Step 1: Meeting Type Selection */}
              {meetingStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">What type of meeting would you like?</h3>
                    <p className="text-muted-foreground">Choose the option that best describes your needs</p>
                  </div>

                  <div className="grid gap-4">
                    {meetingTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleMeetingTypeSelect(type.id)}
                        className={cn(
                          "p-6 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02]",
                          type.color,
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-background/50">{type.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">{type.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>Suggested duration: {type.duration} minutes</span>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Schedule Selection */}
              {meetingStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMeetingStep(1)}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted/50">{selectedMeetingType?.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground">{selectedMeetingType?.title}</h3>
                        <p className="text-sm text-muted-foreground">{selectedMeetingType?.duration} minutes meeting</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">Select Date</label>
                      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-muted/50 border-border h-12",
                              !meetingForm.date && "text-muted-foreground",
                            )}
                            onClick={() => setIsCalendarOpen(true)}
                          >
                            <CalendarIcon className="mr-3 h-4 w-4" />
                            {meetingForm.date ? format(meetingForm.date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={meetingForm.date}
                            onSelect={handleDateSelect}
                            disabled={isDateDisabled}
                            initialFocus
                            className="rounded-md border"
                            classNames={{
                              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                              month: "space-y-4",
                              caption: "flex justify-center pt-1 relative items-center",
                              caption_label: "text-sm font-medium",
                              nav: "space-x-1 flex items-center",
                              nav_button: cn(
                                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border border-border rounded-md hover:bg-muted",
                              ),
                              nav_button_previous: "absolute left-1",
                              nav_button_next: "absolute right-1",
                              table: "w-full border-collapse space-y-1",
                              head_row: "flex",
                              head_cell: "text-muted-foreground rounded-md w-12 font-normal text-[0.8rem] py-2",
                              row: "flex w-full mt-2",
                              cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
                              day: cn(
                                "h-12 w-12 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-muted/70 transition-colors",
                                "focus:bg-accent focus:text-accent-foreground",
                              ),
                              day_range_end: "day-range-end",
                              day_selected:
                                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                              day_today: "bg-accent text-accent-foreground font-semibold",
                              day_outside:
                                "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                              day_disabled: "text-muted-foreground opacity-30 cursor-not-allowed bg-muted/20",
                              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                              day_hidden: "invisible",
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">Select Time</label>
                      <Select
                        value={meetingForm.time}
                        onValueChange={(time) => setMeetingForm({ ...meetingForm, time })}
                      >
                        <SelectTrigger className="bg-muted/50 border-border h-12">
                          <Clock className="mr-3 h-4 w-4" />
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {formatTimeWithTimezone(time, meetingForm.timezone)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">Timezone</label>
                      <Select
                        value={meetingForm.timezone}
                        onValueChange={(timezone) => setMeetingForm({ ...meetingForm, timezone })}
                      >
                        <SelectTrigger className="bg-muted/50 border-border h-12">
                          <Globe className="mr-3 h-4 w-4" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {timezones.map((tz) => (
                            <SelectItem key={tz.value} value={tz.value}>
                              {tz.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">Duration</label>
                      <Select
                        value={meetingForm.duration}
                        onValueChange={(duration) => setMeetingForm({ ...meetingForm, duration })}
                      >
                        <SelectTrigger className="bg-muted/50 border-border h-12">
                          <Clock className="mr-3 h-4 w-4" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    onClick={handleProceedToConfirm}
                    disabled={!meetingForm.date || !meetingForm.time}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium h-12"
                  >
                    Continue to Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Alternative Contact */}
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              or mail me at{" "}
              <a
                href="mailto:abhishek.br.work@gmail.com"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                abhishek.br.work@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">Confirm your details</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Meeting Summary */}
            <div className="p-4 bg-muted/30 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-background/50">{selectedMeetingType?.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{selectedMeetingType?.title}</h4>
                  <p className="text-sm text-muted-foreground">{formatDateTimeForConfirm()}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                  <Clock className="inline h-3 w-3 mr-1" />
                  {meetingForm.duration}m
                </div>
              </div>
            </div>

            <form onSubmit={handleMeetingSubmit} className="space-y-4">
              <div>
                <label htmlFor="confirm-name" className="block text-sm font-medium text-foreground mb-2">
                  Your name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="confirm-name"
                  type="text"
                  value={meetingForm.name}
                  onChange={(e) => setMeetingForm({ ...meetingForm, name: e.target.value })}
                  required
                  className="bg-muted/50 border-border"
                />
              </div>

              <div>
                <label htmlFor="confirm-email" className="block text-sm font-medium text-foreground mb-2">
                  Email address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="confirm-email"
                  type="email"
                  value={meetingForm.email}
                  onChange={(e) => setMeetingForm({ ...meetingForm, email: e.target.value })}
                  required
                  className="bg-muted/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Location</label>
                <RadioGroup
                  value={meetingForm.location}
                  onValueChange={(location) => setMeetingForm({ ...meetingForm, location })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="google-meet" id="google-meet" />
                    <Label htmlFor="google-meet" className="text-sm font-medium">
                      Google Meet
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone" />
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Attendee Phone Number
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Phone Number Input */}
              {meetingForm.location === "phone" && (
                <div>
                  <label htmlFor="phone-number" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <Select
                      value={meetingForm.countryCode}
                      onValueChange={(countryCode) => setMeetingForm({ ...meetingForm, countryCode })}
                    >
                      <SelectTrigger className="w-32 bg-muted/50 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((country) => (
                          <SelectItem key={`${country.code}-${country.country}`} value={country.code}>
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm">{country.code}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex-1 relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone-number"
                        type="tel"
                        placeholder="Enter phone number"
                        value={meetingForm.phoneNumber}
                        onChange={(e) => setMeetingForm({ ...meetingForm, phoneNumber: e.target.value })}
                        className="pl-10 bg-muted/50 border-border"
                        required={meetingForm.location === "phone"}
                      />
                    </div>
                  </div>
                  {selectedCountry && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedCountry.flag} {selectedCountry.name} ({selectedCountry.code})
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="confirm-message" className="block text-sm font-medium text-foreground mb-2">
                  What would you like to discuss? (Optional)
                </label>
                <Textarea
                  id="confirm-message"
                  placeholder="Brief description..."
                  rows={3}
                  value={meetingForm.message}
                  onChange={(e) => setMeetingForm({ ...meetingForm, message: e.target.value })}
                  className="bg-muted/50 border-border resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowConfirmDialog(false)} className="flex-1">
                  Back
                </Button>
                <Button type="submit" disabled={meetingLoading} className="flex-1 bg-primary hover:bg-primary/90">
                  {meetingLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Booking...
                    </>
                  ) : (
                    "Confirm Meeting"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
