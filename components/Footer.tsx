import { IconBrandGithub, IconBrandTwitter, IconMail } from "@tabler/icons-react"
import { IconBrandLinkedin } from "@tabler/icons-react"

const Footer = () => {
  return (
    <div className="flex w-3xl justify-between items-center py-10">
        <h1 className="text-[#1dd79b] font-semibold">Ashutosh Sagar</h1>
        <div className="flex justify-start items-start gap-4">
            <h1 className="text-sm text-[#1dd79b]"><IconBrandGithub/></h1>
            <h1 className="text-sm text-[#1dd79b]"><IconBrandTwitter/></h1>  
            <h1 className="text-sm text-[#1dd79b]"><IconBrandLinkedin/></h1>  
            <h1 className="text-sm text-[#1dd79b]"><IconMail/></h1>  
        </div>
    </div>
  )
}

export default Footer