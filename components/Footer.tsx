import { IconBrandGithub, IconBrandTwitter, IconMail } from "@tabler/icons-react"
import { IconBrandLinkedin } from "@tabler/icons-react"

const Footer = () => {
  return (
    <div className="flex w-full md:max-w-2xl lg:max-w-3xl justify-between items-center py-10 border-t border-zinc-800 px-6 md:px-0">
        <h1 className="text-[#1dd79b] font-semibold">Ashutosh Sagar</h1>
        <div className="flex justify-start items-start gap-4">
            <h1 className="text-[#1dd79b] cursor-pointer"><IconBrandGithub className="w-4 h-4 md:w-5 md:h-5"/></h1>
            <h1 className="text-[#1dd79b] cursor-pointer"><IconBrandTwitter className="w-4 h-4 md:w-5 md:h-5"/></h1>  
            <h1 className="text-[#1dd79b] cursor-pointer"><IconBrandLinkedin className="w-4 h-4 md:w-5 md:h-5"/></h1>  
            <h1 className="text-[#1dd79b] cursor-pointer"><IconMail className="w-4 h-4 md:w-5 md:h-5"/></h1>  
        </div>
    </div>
  )
}

export default Footer