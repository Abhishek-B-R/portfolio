// components/AboutSection.tsx
"use client"

import Link from "next/link"
import {
  Mail,
  PenTool,
  Github,
  Twitter,
  MapPin,
  Rocket,
  Zap,
  Brain,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Python",
  "Solidity",
  "Ethereum",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "GitHub Actions",
  "Docker",
  "Tailwind",
  "Git",
  "tRPC",
]

const learning = [
  "Rust",
  "Solana Dev",
  "Golang",
  "AI Agents",
  "Kubernetes",
  "Three.js",
]

const funFacts = [
  "💻 Built my first full-stack app solo before I knew it was a thing.",
  "🧠 Learned blockchain by doing, not just reading.",
  "☕ Peak productivity happens after dark.",
  "🎮 Gaming breaks double as debugging therapy.",
  "🧪 I experiment end-to-end—from infra to UI flourishes.",
  "📚 Always juggling at least three learning paths.",
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 text-gray-800 dark:text-gray-200 xl:ml-10 mt-30"
    >
      {/* Intro */}
      <header className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          Under the Hood
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          The tools I wield, the skills I’m honing, and the quirks I embrace
          as a hands-on developer.
        </p>
      </header>

      <div className="mt-16 max-w-5xl mx-auto space-y-20 grid grid-rows-1">
        {/* Profile + About */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Profile Card */}
          <article
            className="
              flex-1
              backdrop-blur-lg
              bg-white/60 border border-gray-200
              dark:bg-gray-900/40 dark:border-gray-700
              rounded-2xl p-8 text-center
              shadow-lg
            "
          >
            <h3 className="text-2xl font-semibold">Abhishek B.R</h3>
            <p className="mt-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
              Full Stack & Web3 Developer
            </p>
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
          <article
            className="
              flex-2
              backdrop-blur-lg
              bg-white/60 border border-gray-200
              dark:bg-gray-900/40 dark:border-gray-700
              rounded-2xl p-8
              shadow-lg
              py-20
            "
          >
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <Rocket className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
              About Me
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
              <p>
                I design and develop robust full-stack applications,
                intuitive developer tools, and automated pipelines—
                leveraging blockchain and AI to solve real problems.
                From browser automations to decentralized monitors,
                I deliver clean, performant solutions at speed.
              </p>
              <p>
                While I excel as a solo builder, I thrive collaborating
                with driven teams. I champion originality, thoughtful UI,
                and maintainable code.
              </p>
              <p>
                Ready to build something impactful together? Let’s connect!
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
            {techStack.map((tech) => (
              <Badge
                key={tech}
                className="
                  bg-gray-100 text-gray-800 border-gray-200
                  dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700
                  text-sm
                "
              >
                {tech}
              </Badge>
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
            {learning.map((item) => (
              <Badge
                key={item}
                className="
                  bg-blue-100 text-blue-800 border-blue-200
                  dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700
                  text-sm
                "
              >
                {item}
              </Badge>
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
                className="
                  bg-white/60 border border-gray-200
                  dark:bg-gray-900/40 dark:border-gray-700
                  backdrop-blur p-4 rounded-lg text-sm
                  text-gray-700 dark:text-gray-300
                "
              >
                {fact}
              </li>
            ))}
          </ul>
        </section>

        <section className="relative rounded-2xl p-10 text-center shadow-xl bg-background/60 backdrop-blur-md border border-border overflow-hidden">
          {/* Subtle light tint */}
          <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-primary/5" />

          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Ready to collaborate?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
            Have an idea, a challenge, or just want to say hi? Drop me a line
            or sign my guestbook — I usually reply within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
              <Link href="/contact" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Start a convo
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted/60 transition-colors duration-200"
            >
              <Link href="/guestbook" className="flex items-center">
                <PenTool className="w-5 h-5 mr-2" /> Sign the Guestbook
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </section>
  )
}