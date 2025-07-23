"use client"

import ProjectsShowcase from "@/components/Project"
import { useNavbarWidth } from "@/components/NavBar"
import { useEffect, useState } from "react"
import SkeletonProject from "@/components/Project/SkeletonProject"

interface Project {
  id: string
  name: string
  description?: string
  thumbnail?: string
  liveUrl?: string
  repoUrl?: string
  technologies: string[]
  createdAt: string
  updatedAt: string
  order?: number
  duration?: string
}

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { navbarWidth } = useNavbarWidth()

  useEffect(() => {
  fetch("/api/projects")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch projects")
        return res.json()
    })
    .then((data) => {
      setProjects(data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.error("Error fetching projects:", err)
      setError(err.message)
      setIsLoading(false)
    })
  }, [])
    

  if (isLoading) {
    return (
      <section className="px-80 pl-[480px] mt-20" id="projects">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">Loading projects...</h2>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-x-24 gap-y-14 mt-10">
          {[...Array(4)].map((_, idx) => (
            <SkeletonProject key={idx} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen">
      <main
        className="pb-16 md:pb-0 transition-all duration-300"
        style={{
          marginLeft: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
          marginRight: navbarWidth > 0 ? `${navbarWidth/2}px` : "0px",
        }}
      >
        <ProjectsShowcase projects={projects} error={error} />
      </main>
    </div>
  )
}