"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Tabs } from "@/components/ui/tabs";

export const personalProjects = [
    {
      title: "thPilot",
      description:
        "A technology company that builds",
      link: "https://stripe.com",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "SocketTalk",
      description:
        "A streaming service that offers a wide variet.",
      link: "https://github.com/thecurioussailor/socket-talk",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Probo",
      description:
        "A multinational technology company that specializes in",
      link: "https://github.com/thecurioussailor/probo-v2",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Metaverse",
      description:
        "A technology company that focuses on ",
      link: "https://github.com/thecurioussailor/metaverse-2d",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "t-Sizzle",
      description:
        "A multinational technology company focusing on e-commerce,",
      link: "https://github.com/thecurioussailor/tsizzle",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Thanos",
      description:
        "A Solana wallet that allows you to create your own wallet and send and receive SOL.",
      link: "https://github.com/thecurioussailor/thanos",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
  ];

  export const clientProjects = [
    {
      title: "Tinywallet",
      description:
        "A technology company that builds",
      link: "https://tinywallet.in",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
        title: "Ice Skating",
        description:
          "A technology company that builds",
        link: "https://ice-skating.vercel.app/",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      }
  ];
  const tabs = [
    {
      title: "Personal",
      value: "personal",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-transparent">
            <HoverEffect items={personalProjects} className="w-full" />
        </div>
      ),
      contentClassName: "bg-white",
    },
    {
      title: "Client",
      value: "client",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl font-bold text-white bg-transparent">
            <HoverEffect items={clientProjects} className="w-full" />
        </div>
      ),
    }
  ];
  
const Projects = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full md:min-w-2xl lg:min-w-3xl px-6 md:px-0 ">
        <h1 className="text-4xl font-bold text-[#1dd79b]">Projects</h1>
        <div className="h-[73rem] md:h-[37rem] lg:h-[29rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
            <Tabs tabs={tabs} />
        </div>
    </div>
  )
}

export default Projects