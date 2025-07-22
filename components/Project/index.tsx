"use client"

import { useEffect, useState } from "react"
import { FaGithub, FaLocationArrow } from "react-icons/fa6"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { PinContainer } from "@/components/ui/3d-pin"
import Image from "next/image"
import { Loader2 } from "lucide-react"
import techIconMap from "./techIconMap"
import { useDarkModeWatcher } from "./darkModeWatcher"

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

export default function RecentProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const isDarkMode = useDarkModeWatcher()

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
    
    const getThumbnail = (url: string, isDarkMode: boolean): string => {
      if (!url.includes(".")) return url; // fallback safety
  
      const lastDotIndex = url.lastIndexOf(".");
      const base = url.slice(0, lastDotIndex);
      const ext = url.slice(lastDotIndex);
  
      return isDarkMode ? url : `${base}-light${ext}`;
    };

  if (isLoading) {
    return (
      <section className="py-20" id="projects">
        <div className="flex justify-center items-center mt-16">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20" id="projects">
        <div className="text-center mt-16">
          <p className="text-red-500">Error loading projects: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20" id="projects">
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-14 mt-16">
        <div className="grid grid-cols-2">
          {projects.map((item) => {
            const techItems = item.technologies.map((tech, idx) => ({
              id: idx,
              name: tech,
              designation: "",
              image: techIconMap[tech]?.icon ?? "github",
              bg: techIconMap[tech]?.bg ?? "#ffffff"
          }))
          return (
            <div key={item.id} className="col-span-2 2xl:col-span-1 mx-10 items-center sm:w-[570px] w-[85vw]" onClick={()=> window.open(item.liveUrl ?? "#", "_blank")}>
              <PinContainer title={item.liveUrl ?? "Project Preview"} href={item.liveUrl ?? "#"}>
                <div className="flex flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] sm:w-[30rem] 2xl:w-[34rem] h-[12rem] 2xl:h-[15rem] ">
                  {item.thumbnail && (
                    <Image
                      src={getThumbnail(item.thumbnail, isDarkMode)}
                      alt={item.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Hide broken image and show fallback
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                      }}
                    />
                  )}

                  {/* Live badge */}
                  {item.liveUrl && (
                    <div className="absolute bottom-3 right-3 flex items-center text-sm text-purple-400 font-medium bg-black/60 px-3 py-1 rounded-full pointer-events-none">
                      Live Website <FaLocationArrow className="ml-2" />
                    </div>
                  )}
                </div>
              </PinContainer>

              <div className="mt-6 p-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">{item.name}</h2>
                {item.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                )}

                <div className="mb-4 flex justify-start">
                  <AnimatedTooltip items={techItems} />
                </div>

                {item.repoUrl && (
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-purple-600 border border-border px-3 py-1 rounded-md transition-colors"
                  >
                    <FaGithub /> GitHub Repo
                  </a>
                )}
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}
