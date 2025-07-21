"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const projects = [
  {
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application that uses machine learning to prioritize tasks, predict completion times, and suggest optimal work schedules. Built with Next.js, TypeScript, and OpenAI API integration.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h3 className="text-2xl font-bold mb-2">Smart AI Assistant</h3>
          <p className="text-lg opacity-90">Intelligent task prioritization</p>
        </div>
      </div>
    ),
  },
  {
    title: "DeFi Trading Dashboard",
    description:
      "A comprehensive decentralized finance dashboard for tracking portfolios, analyzing market trends, and executing trades across multiple DEXs. Features real-time data, advanced charting, and automated trading strategies.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">📈</div>
          <h3 className="text-2xl font-bold mb-2">DeFi Analytics</h3>
          <p className="text-lg opacity-90">Real-time trading insights</p>
        </div>
      </div>
    ),
  },
  {
    title: "Cloud Infrastructure Automation",
    description:
      "DevOps automation platform that streamlines deployment pipelines, manages infrastructure as code, and provides comprehensive monitoring. Built with Terraform, Docker, Kubernetes, and AWS services.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">☁️</div>
          <h3 className="text-2xl font-bold mb-2">Cloud Automation</h3>
          <p className="text-lg opacity-90">Scalable infrastructure</p>
        </div>
      </div>
    ),
  },
  {
    title: "Real-time Collaboration Platform",
    description:
      "A modern collaboration tool with real-time document editing, video conferencing, and project management features. Implements WebRTC for peer-to-peer communication and WebSockets for instant updates.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">Team Collaboration</h3>
          <p className="text-lg opacity-90">Real-time connectivity</p>
        </div>
      </div>
    ),
  },
  {
    title: "Blockchain Identity Verification",
    description:
      "A decentralized identity verification system using blockchain technology to provide secure, privacy-preserving authentication. Implements zero-knowledge proofs and smart contracts for trustless verification.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h3 className="text-2xl font-bold mb-2">Secure Identity</h3>
          <p className="text-lg opacity-90">Blockchain verification</p>
        </div>
      </div>
    ),
  },
]

export default function ProjectsShowcase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions I&apos;ve built, from AI-powered applications to decentralized systems. Each
            project represents a unique challenge and creative solution.
          </p>
        </div>
        <StickyScroll content={projects} />
      </div>
    </section>
  )
}
