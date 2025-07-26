"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, Mail } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import Github from "@/components/icons/Github"
import Twitter from "@/components/icons/Twitter"

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden mt-20">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Spotlight className="top-[10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[500px] opacity-40" fill="white" />
        <Spotlight className="top-[5%] left-[60%] w-[350px] md:w-[400px] opacity-30" fill="purple" />
        <Spotlight className="top-[15%] left-[25%] w-[300px] md:w-[350px] opacity-35" fill="blue" />
        <Spotlight className="top-[40%] left-[70%] w-[250px] md:w-[300px] opacity-25" fill="indigo" />
        <Spotlight className="top-[60%] left-[20%] w-[280px] md:w-[320px] opacity-30" fill="violet" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-green-300 to-blue-600 bg-clip-text text-transparent select-none">
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-primary/10 blur-sm select-none">
              404
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Oops! Page not found</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
              <CardContent className="p-6">
                <Link href="/" className="block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Go Home
                      </h3>
                      <p className="text-sm text-muted-foreground">Back to the main page</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
              <CardContent className="p-6">
                <Link href="/projects" className="block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                        Browse Projects
                      </h3>
                      <p className="text-sm text-muted-foreground">Check out my work</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="group">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/about" className="flex items-center">
                Learn More About Me
              </Link>
            </Button>
          </div>

          <Card className="mt-8 bg-muted/20 backdrop-blur-sm border-0">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Still need help?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="ghost" size="sm">
                  <Link
                    href="mailto:abhishek.br.work@gmail.com"
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send me an email
                  </Link>
                </Button>

                <Button asChild variant="ghost" size="sm">
                  <Link
                    href="https://github.com/Abhishek-B-R"
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>

                <Button asChild variant="ghost" size="sm">
                  <Link
                    href="https://x.com/abhi__br"
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="fixed top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      <div className="fixed top-40 right-20 w-1 h-1 bg-blue-500/40 rounded-full animate-pulse delay-1000" />
      <div className="fixed bottom-32 left-20 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-pulse delay-500" />
      <div className="fixed bottom-20 right-10 w-1 h-1 bg-pink-500/40 rounded-full animate-pulse delay-700" />
    </div>
  )
}
