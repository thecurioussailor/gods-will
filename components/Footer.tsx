import { IconBrandGithub, IconBrandTwitter, IconMail } from "@tabler/icons-react"
import { IconBrandLinkedin } from "@tabler/icons-react"
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="flex w-full md:max-w-2xl lg:max-w-5xl justify-between items-center py-10 border-t border-zinc-800 px-6 md:px-0">
        <h1 className="text-purple-400 font-semibold">Ashutosh Sagar</h1>
        <div className="flex justify-start items-start gap-4">
            <Link href={"https://github.com/thecurioussailor"} target="_blank"><h1 className="text-purple-400 hover:text-purple-300 cursor-pointer"><IconBrandGithub className="w-4 h-4 md:w-5 md:h-5"/></h1></Link>
            <Link href={"https://x.com/sagar11ashutosh"} target="_blank"><h1 className="text-purple-400 hover:text-purple-300 cursor-pointer"><IconBrandTwitter className="w-4 h-4 md:w-5 md:h-5"/></h1></Link>
            <Link href={"https://www.linkedin.com/in/ashutosh-sagar-4b2612185/"} target="_blank"><h1 className="text-purple-400 hover:text-purple-300 cursor-pointer"><IconBrandLinkedin className="w-4 h-4 md:w-5 md:h-5"/></h1></Link> 
            <Link href={"mailto:ashu.sagar111@gmail.com"} target="_blank"><h1 className="text-purple-400 hover:text-purple-300 cursor-pointer"><IconMail className="w-4 h-4 md:w-5 md:h-5"/></h1></Link>
        </div>
    </div>
  )
}

export default Footer