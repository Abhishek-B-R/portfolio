import { BookOpenText, Code2Icon, FileText, Github, HomeIcon, Linkedin, Twitter, User2Icon } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    const icons=[{
        url:"/",
        icon: <HomeIcon />
    },{
        url: "/about",
        icon: <User2Icon />
    },{
        url: "/projects",
        icon: <Code2Icon />
    },{
        url: "/blog",
        icon: <BookOpenText />
    },{
        url: "/resume",
        icon: <FileText />
    },{
        url: "https://github.com/Abhishek-B-R",
        icon: <Github />
    },{
        url: "https://linkedin.com/in/abhi-br",
        icon: <Linkedin />
    },{
        url: "https://twitter.com/abhi__br",
        icon: <Twitter />
    }]

    return (
        <nav className="flex flex-col justify-center items-center bg-[#FDF6E3] p-4 h-screen max-w-40">
            <div className="container mx-auto flex flex-col justify-between items-center">
                <ul className="flex flex-col space-y-4">
                    {icons.map(({ url, icon: Icon }, index) => (
                        <li key={index}>
                            {url.startsWith("http") ? (
                                <Link href={url} target="_blank" className="text-[#586569] hover:text-gray-300 flex gap-2 mt-4">
                                    {Icon}
                                </Link>
                            ):(
                                <Link href={url} className="text-[#586569] hover:text-gray-300 flex gap-2 mt-4">
                                    {Icon}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
};  