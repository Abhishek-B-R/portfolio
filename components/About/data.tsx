import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiSolidity,
  SiTailwindcss,
  SiDocker,
  SiEthereum,
  SiMongodb,
  SiGithub,
  SiGit,
  SiTrpc,
  SiRust,
  SiGo,
  SiKubernetes,
  SiThreedotjs,
  SiSupabase,
  SiPrisma,
} from "react-icons/si"
import { FaNodeJs, FaAws } from "react-icons/fa6"
import { GiArtificialIntelligence } from "react-icons/gi"
import Solana from "../icons/Solana"
import Python from "../icons/python"
import Java from "../icons/Java"

export const techStack = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 bg-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 bg-white" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Java", icon: <Java className="h-5 w-5" /> },
  { name: "Python", icon: <Python className="h-5 w-4" /> },
  { name: "Solidity", icon: <SiSolidity className="text-gray-600" /> },
  { name: "Ethereum", icon: <SiEthereum className="text-gray-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#008bb9]" /> },
  { name: "Prisma", icon: <SiPrisma className="text-[#5A67D8]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "AWS", icon: <FaAws className="text-white bg-black h-6 w-9" /> },
  { name: "GitHub Actions", icon: <SiGithub className="text-gray-600" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "tRPC", icon: <SiTrpc className="text-blue-600" /> },
]

export const learning = [
  { name: "Rust", icon: <SiRust className="text-amber-900" /> },
  { name: "Solana Dev", icon: <Solana className="h-5 w-3.5" /> },
  { name: "Golang", icon: <SiGo className="text-[#00ADD8]" /> },
  { name: "AI Agents", icon: <GiArtificialIntelligence className="text-amber-200" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
  { name: "Three.js", icon: <SiThreedotjs className="text-white hidden dark:block" /> },
]

export const funFacts = [
  "💻 Built my first full-stack app solo before I knew it was a thing.",
  "🧠 Learned blockchain by doing, not just reading.",
  "☕ Peak productivity happens after dark.",
  "🎮 Gaming breaks double as debugging therapy.",
  "🧪 I experiment end-to-end—from infra to UI flourishes.",
  "📚 Always juggling at least three learning paths.",
]
