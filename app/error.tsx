"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Spotlight className="top-[10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[500px] opacity-40" fill="white" />
        <Spotlight className="top-[5%] left-[60%] w-[350px] md:w-[400px] opacity-30" fill="red" />
        <Spotlight className="top-[15%] left-[25%] w-[300px] md:w-[350px] opacity-35" fill="orange" />
        <Spotlight className="top-[40%] left-[70%] w-[250px] md:w-[300px] opacity-25" fill="yellow" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-destructive" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Something went wrong!</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              An unexpected error occurred. Don't worry, it's not your fault. Let's try to fix this.
            </p>
          </div>

          {error.message && (
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-4">
                <p className="text-sm text-destructive font-mono">{error.message}</p>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={reset} size="lg" className="group">
              <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
          </div>

          <Card className="mt-8 bg-muted/20 backdrop-blur-sm border-0">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Need help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If this error persists, please let me know and I'll fix it as soon as possible.
              </p>
              <Button asChild variant="ghost" size="sm">
                <Link
                  href="mailto:your.email@gmail.com"
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Report this error
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
