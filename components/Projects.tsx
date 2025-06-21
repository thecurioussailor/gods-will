"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Tabs } from "@/components/ui/tabs";

export const personalProjects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds",
      link: "https://stripe.com",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variet.",
      link: "https://netflix.com",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in",
      link: "https://google.com",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on ",
      link: "https://meta.com",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce,",
      link: "https://amazon.com",
      tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that .",
      link: "https://microsoft.com",
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
      },
      {
        title: "Dice Game",
        description:
          "A technology company that builds",
        link: "https://dicegame.com",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      },
      {
        title: "Online Store",
        description:
          "A technology company that builds",
        link: "https://onlinestore.com",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      },
      {
        title: "Portfolio",
        description:
          "A technology company that builds",
        link: "https://portfolio.com",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      },
      {
        title: "HeroCare",
        description:
          "A technology company that builds",
        link: "https://herocare.com",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      },
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
    <div className="flex flex-col justify-start items-start w-3xl">
        <h1 className="text-4xl font-bold text-[#1dd79b]">Projects</h1>
        <div className="h-[20rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
            <Tabs tabs={tabs} />
        </div>
    </div>
  )
}

export default Projects