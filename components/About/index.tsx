"use client"

import Link from "next/link"
import { Mail, PenTool, Github, Twitter, MapPin, Rocket, Zap, Brain, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spotlight } from "../ui/spotlight"
import { techStack, learning, funFacts } from "./data"
import {useScrollUpRedirect} from "../ScrollEvents/ScrollUpTrigger"

export default function AboutSection() {
  useScrollUpRedirect("/")
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fixed Background Spotlights - These stay in place when scrolling */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Main center spotlight */}
        <Spotlight className="top-[-10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[500px] opacity-60" fill="white" />
        <Spotlight className="top-[-10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[500px] opacity-60" fill="black" />
        <Spotlight className="top-[-5%] left-[60%] w-[350px] md:w-[400px] opacity-45" fill="purple" />
        <Spotlight className="top-[0%] left-[25%] w-[300px] md:w-[350px] opacity-60" fill="blue" />
        <Spotlight className="top-[40%] left-[70%] w-[250px] md:w-[300px] opacity-80" fill="indigo" />
        <Spotlight className="top-[60%] left-[20%] w-[280px] md:w-[320px] opacity-45" fill="violet" />
      </div>

      {/* Content */}
      <section id="about" className="relative w-full py-20 px-6 text-gray-800 dark:text-gray-200 xl:ml-10 mt-30">
        {/* Intro */}
        <header className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Under the Hood</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            The tools I wield, the skills I&apos;m honing, and the quirks I embrace as a hands-on developer.
          </p>
        </header>

        <div className="mt-16 max-w-5xl mx-auto space-y-20 grid grid-rows-1">
          {/* Profile + About */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Profile Card */}
            <article className="flex-1 backdrop-blur-lg bg-white/60 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-700 rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-semibold">Abhishek B.R</h3>
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400 font-medium">Full Stack & Web3 Developer</p>
              <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                <MapPin className="w-4 h-4 mr-1" /> India
              </div>

              <div className="flex justify-center gap-3 mt-6">
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="https://github.com/Abhishek-B-R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="https://x.com/abhi__br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Twitter className="w-4 h-4 mr-1" /> Twitter
                  </Link>
                </Button>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300 text-left">
                <li>☕ Fuelled by coffee & clean, readable code.</li>
                <li>📦 Crafting developer tools that delight users.</li>
                <li>🧠 Passionate about rapid prototyping & lifelong learning.</li>
              </ul>

              <p className="mt-6 text-sm text-gray-800 dark:text-gray-200">
                Currently open to freelance projects, internships, or full-time roles.
              </p>
            </article>

            {/* About Me Article */}
            <article className="flex-2 backdrop-blur-lg bg-white/60 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-700 rounded-2xl p-8 shadow-lg py-10">
              <h3 className="flex items-center text-2xl font-semibold mb-4">
                <Rocket className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                About Me
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                <p>
                  I&apos;m Abhishek — a full-stack & web3 developer who thrives on shipping fast, clean, and clever
                  solutions.
                </p>
                <p>
                  Whether it&apos;s automating the boring stuff, deploying smart contracts, or designing snappy UIs, I like
                  building things end-to-end — and sweating the details.
                </p>
                <p>
                  I&apos;ve solo-built tools, dashboards, AI-powered dev workflows, and decentralized monitors — and I&apos;m just
                  getting started.
                </p>
                <p>
                  Currently exploring Rust, Solana, and AI agents. Always up to collaborate on something that sparks
                  curiosity.
                </p>
              </div>
            </article>
          </div>

          {/* What I Use */}
          <section className="space-y-4">
            <h3 className="flex items-center text-xl font-semibold">
              <Zap className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
              What I Use
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 p-3 bg-muted/40 dark:bg-muted/20 border border-border rounded-lg"
                >
                  {icon}
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Currently Learning */}
          <section className="space-y-4">
            <h3 className="flex items-center text-xl font-semibold">
              <Brain className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {learning.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 p-3 bg-muted/40 dark:bg-muted/20 border border-border rounded-lg"
                >
                  {icon}
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Facts */}
          <section className="space-y-4">
            <h3 className="flex items-center text-xl font-semibold">
              <Heart className="w-5 h-5 mr-2 text-red-600 dark:text-red-400" />
              Random Dev Things
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {funFacts.map((fact) => (
                <li
                  key={fact}
                  className="bg-white/60 border border-gray-200 dark:bg-gray-900/40 dark:border-gray-700 backdrop-blur p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA Section */}
          <section className="relative rounded-2xl p-10 text-center shadow-xl bg-background/60 backdrop-blur-md border border-border overflow-hidden">
            {/* Subtle light tint */}
            <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-primary/5" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">Ready to collaborate?</h3>
            <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
              Have an idea, a challenge, or just want to say hi? Drop me a line or sign my guestbook — I usually reply
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                <Link href="/contact" className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" /> Start a convo
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted/60 transition-colors duration-200 bg-transparent"
              >
                <Link href="/guestbook" className="flex items-center">
                  <PenTool className="w-5 h-5 mr-2" /> Sign the Guestbook
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
