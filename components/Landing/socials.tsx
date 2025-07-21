import Github from "../icons/Github"
import Twitter from "../icons/Twitter"
import LinkedIn from "../icons/LinkedIn"
import Discord from "../icons/Discord"
import Email from "../icons/Email"
import { FloatingDock } from "../ui/floating-dock"

const socials = [{
  title: "GitHub",
  href: "https://github.com/Abhishek-B-R",
  icon: <Github className="h-7 w-7" />
}, {
  title: "LinkedIn",
  href: "https://linkedin.com/in/abhi-br",
  icon: <LinkedIn className="h-7 w-7" />
}, {
  title: "Twitter",
  href: "https://twitter.com/abhi__br",
  icon: <Twitter className="h-7 w-7" />
},{
  title: "Discord",
  href: "https://discord.com/users/abhishekbr01",
  icon: <Discord className="h-7 w-7" />
},{
  title : "Email",
  href: "mailto:abhishek.br.work@gmail.com",
  icon: <Email className="h-7 w-7" />
}]

export default function Social() {
  return (
    <FloatingDock items={socials}/>
  )
};

export function SocialSimple(){
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {socials.map((social,index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-105"
          aria-label={social.title}
        >
          {social.icon}
        </a>
    ))}
    </div>
  )
}