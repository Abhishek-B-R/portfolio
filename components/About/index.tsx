"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Github,
  Twitter,
  Zap,
  Heart,
  Rocket,
  Brain,
  Pizza,
  Gamepad2,
  Headphones,
  Camera,
  Mail,
  PenTool,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
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
    "Github Actions",
    "Docker",
    "Tailwind",
    "Git",
    "tRPC"
  ]

  const funFacts = [
    "💻 Started building full-stack apps solo before anyone told me it needed a team.",
    "🧠 Learned blockchain by doing, not watching.",
    "☕ Night owl productivity mode is undefeated.",
    "🎮 Game breaks = debugging therapy.",
    "🧪 I experiment with everything from infra to UI animations.",
    "📚 Always in the middle of 3 learning tracks at once."
  ]

  const currentlyLearning = ["Rust", "Solana Dev", "Golang", "AI Agents","Kubernetes","Three.js"]

  return (
    <div className="min-h-screen py-12 px-4 mt-50">
      <div className="max-w-4xl mx-auto">
        {/* Casual Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hey there! 👋
          </h1>
          <p className="text-xl text-muted-foreground">
            I&apos;m a developer who loves building fast, smart, and scalable web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 items-center justify-center gap-8 mb-12 min-h-[80vh]">
          {/* Personal Card */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden border-dashed border border-muted">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-1">Abhishek B.R</h2>
                <p className="text-primary font-medium mb-2">Full-Stack & Web3 Developer</p>
                <div className="flex items-center justify-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">India</span>
                </div>

                <div className="flex justify-center space-x-2 mb-4">
                  <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => window.open("https://github.com/Abhishek-B-R","_blank")}>
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => window.open("https://x.com/abhi__br","_blank")}>
                    <Twitter className="w-4 h-4 mr-1" />
                    Twitter
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground space-y-1">
                  <div>☕ Fueled by code & caffeine</div>
                  <div>📦 Loves building tools that people actually use</div>
                  <div>🧠 Obsessed with learning & creating</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardContent className="px-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Rocket className="w-6 h-6 mr-2 text-purple-600" />
                  About Me
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I enjoy building full-stack apps, especially those enhanced by blockchain or AI. I&apos;ve built many stuffs from basic browser automations via Puppeteer to uptime monitors for decentralized web.
                  </p>
                  <p>
                    Most of my work revolves around making developer tools, productivity hacks, and solving real-world problems through automation. I’m a solo builder by default, but love collaborating with smart folks.
                  </p>
                  <p>
                    Want to see what I’ve built recently? Head over to the <strong>Projects</strong> section - I&apos;ve built a mix of devtools, AI experiments, and decentralized systems.
                  </p>
                  <p>  
                    I am open for any internships, freelance gigs or full-time roles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          
        <div className="lg:col-span-3 space-y-6">
            {/* Tech Stack */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                  What I Use
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  If there&apos;s something I don&apos;t know, I pick it up fast. Google, ChatGPT and docs are my co-founders.
                </p>
              </CardContent>
            </Card>

            {/* Currently Learning */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  Currently Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentlyLearning.map((item, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fun Facts */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <Heart className="w-6 h-6 mr-2 text-red-500" />
              Random Developer Things
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-muted rounded-lg"
                >
                  <span className="text-muted-foreground">{fact}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hobbies */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-center">When I&apos;m Not Coding</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <Pizza className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <span className="text-sm font-medium">Trying weird pizzas</span>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <span className="text-sm font-medium">Gaming breaks</span>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <Headphones className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <span className="text-sm font-medium">Lo-fi vibes</span>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <Camera className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <span className="text-sm font-medium">Casual photography</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let’s Connect 👇</h3>
            <p className="mb-6 max-w-2xl mx-auto text-purple-100">
              Interested in my work, or have a cool idea? You can either drop me a message or sign my guestbook!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 cursor-pointer" onClick={() => window.open("/contact","_self")}>
                <Mail className="w-5 h-5 mr-2" />
                Start a convo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black dark:text-white cursor-pointer" onClick={() => window.open("/guestbook","_self")}>
                <PenTool className="w-5 h-5 mr-2" />
                Say hi in my guestbook
              </Button>
            </div>
            <p className="text-sm text-purple-200 mt-4">
              I usually reply within a day — unless I’m deep in a Solana smart contracts 😄
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
