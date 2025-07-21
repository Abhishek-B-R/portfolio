"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "../ui/button"
import { ContainerTextFlip } from "../ui/container-text-flip"
import Social from "./socials"
import { Spotlight } from "../ui/spotlight"

export default function Hero() {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Make sure to add your resume.pdf to the public folder
    link.download = "Abhishek_BR_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative min-h-screen overflow-visible">
      <Spotlight
        className="-top-[250px] md:-top-[280px] lg:-top-[380px] w-[450px] left-1/2 -translate-x-1/2 -z-10 opacity-60"
        fill="white"
      />
      <Spotlight
        className="-top-[200px] md:-top-[250px] lg:-top-[300px] w-[400px] left-[80%] -z-10 opacity-50"
        fill="purple"
      />
      <Spotlight
        className="-top-[180px] md:-top-[220px] lg:-top-[280px] w-[380px] left-[20%] -z-10 opacity-50"
        fill="blue"
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:px-16 lg:px-24 min-h-screen">
        <div className="h-[100px]"></div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-2">
          Hi, I&apos;m <span className="text-primary font-bold">Abhishek BR</span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
          I <span className="text-blue-600 font-medium">build</span>,
          <span className="text-blue-600 font-medium"> learn</span>, and
          <span className="text-blue-600 font-medium"> create</span> things that matter.
        </h2>

        <ContainerTextFlip
          words={["Full Stack Developer", "DevOps Enthusiast", "Web3 Builder", "AI Engineer", "Software Engineer"]}
          className="shadow-md w-[900px] mb-6 bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-md rounded-lg border border-slate-700"
        />

        <div className={`mb-8 transition-all duration-1000 delay-500 opacity-100 translate-y-0`}>
          <div className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            20 y/o passionate about turning complex ideas into{" "}
            <span className="text-primary font-medium">clean code</span>. I create things that blend{" "}
            <span className="text-blue-600 font-semibold">speed</span> with
            <span className="text-blue-600 font-semibold"> purpose</span>, from
            <span className="relative px-1">
              AI-driven interfaces
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
            </span>{" "}
            to
            <span className="relative px-1">
              decentralized systems
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </span>
            . I value <span className="text-foreground font-medium">curiosity</span>,
            <span className="text-foreground font-medium"> focus</span>, and
            <span className="text-foreground font-medium"> originality</span>.
          </div>
        </div>

        {/* Call to Action */}
        <div className="-mt-2">
          <p className="text-lg md:text-xl text-foreground mb-6 font-medium">
            If you&apos;re building something <span className="text-primary font-bold">real</span>, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="group bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              Let&apos;s Connect
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/projects")}
              className="px-8 py-3 text-base font-semibold cursor-pointer rounded-lg border hover:bg-muted/50 transition-all duration-200 bg-transparent"
            >
              View My Work
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={handleDownloadResume}
              className="group px-8 py-3 text-base font-semibold cursor-pointer rounded-lg text-black dark:text-white bg-muted hover:bg-muted/80 transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <Social />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Quick Resume Preview */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Want a quick overview?{" "}
            <button
              onClick={handleDownloadResume}
              className="text-primary hover:text-primary/80 cursor-pointer underline underline-offset-2 font-medium transition-colors"
            >
              Get my resume
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
