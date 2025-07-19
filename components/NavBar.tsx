import { BookOpenText, Code2Icon, FileText, HomeIcon, PenTool, User2Icon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./themeToggle";

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
        url:"/guestbook",
        icon: <PenTool />
    }
    ]
// {
//     url: "https://github.com/Abhishek-B-R",
//     icon: <Github />
// },{
//     url: "https://linkedin.com/in/abhi-br",
//     icon: <Linkedin />
// },{
//     url: "https://twitter.com/abhi__br",
//     icon: <Twitter />
// }

    return (
        <div className="flex flex-col justify-end items-end w-[400px]">
            <nav className="flex flex-col justify-center items-center p-4 h-screen max-w-40 border-r-1">
                <div className="container mx-auto flex flex-col justify-between items-center">
                    <ul className="flex flex-col space-y-4">
                        {icons.map(({ url, icon: Icon }, index) => (
                            <li key={index}>
                                <Link href={url} className="flex gap-2 mt-4 md:mr-6">
                                        {Icon}
                                </Link>
                            </li>
                        ))}
                        <li><ThemeToggle /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};  