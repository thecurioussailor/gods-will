"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Tabs } from "@/components/ui/tabs";

export const personalProjects = [
  {
    title: "thPilot",
    shortDescription: "SaaS to monetize Telegram channels.",
    description:
      "An ongoing SaaS project for Telegram channel monetization. Influencers can monetize their Telegram channels by allowing followers to pay and join through a unique subscription link. Includes channel analytics and management features.",
    link: "https://stripe.com",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "SocketTalk",
    shortDescription: "Full-stack real-time chat app.",
    description:
      "A full-stack real-time chat application using React, Express, WebSockets, Prisma, and PostgreSQL. Includes features like friend requests, real-time messaging, Redis pub/sub, Redis queues, and is built with TypeScript.",
    link: "https://github.com/thecurioussailor/socket-talk",
    tags: ["React", "Tailwind", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "TypeScript"],
  },
  {
    title: "Probo",
    shortDescription: "Opinion trading backend system.",
    description:
      "A backend-only project simulating a prediction market where users can trade on opinions. Built with Express, WebSockets, Prisma, Redis pub/sub, Redis queues, and written in TypeScript.",
    link: "https://github.com/thecurioussailor/probo-v2",
    tags: ["Express", "WebSocket", "Prisma", "Redis", "TypeScript"],
  },
  {
    title: "Metaverse",
    shortDescription: "2D metaverse multiplayer backend.",
    description:
      "Backend architecture for a 2D metaverse game. Users join rooms with avatars and interact in real-time. Built with Express, WebSockets, and TypeScript with test coverage.",
    link: "https://github.com/thecurioussailor/metaverse-2d",
    tags: ["Express", "WebSocket", "TypeScript", "Testing"],
  },
  {
    title: "t-Sizzle",
    shortDescription: "T-shirt e-commerce web app.",
    description:
      "An e-commerce full-stack project built with React and Express for selling t-shirts online. Includes product listing, cart, and order management.",
    link: "https://github.com/thecurioussailor/tsizzle",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Thanos",
    shortDescription: "Solana wallet manager app.",
    description:
      "A Solana-based wallet app built in Next.js that allows users to generate, delete, and manage wallets for sending/receiving SOL.",
    link: "https://github.com/thecurioussailor/thanos",
    tags: ["Next.js", "Solana", "Tailwind", "TypeScript"],
  },
];

export const clientProjects = [
  {
    title: "Tinywallet",
    shortDescription: "SaaS for selling, monetizing, linking.",
    description:
      "A full-stack SaaS platform developed from scratch that enables Telegram channel monetization, digital product selling, and link shortening. Built with payment gateway integration via Cashfree.",
    link: "https://tinywallet.in",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Ice Skating",
    shortDescription: "Client landing page from Figma.",
    description:
      "A pixel-perfect landing page developed in Next.js based on Figma designs provided by the client.",
    link: "https://ice-skating.vercel.app/",
    tags: ["Next.js", "Tailwind", "Responsive Design"],
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
    // flex flex-col justify-start items-start gap-2 w-full md:max-w-2xl lg:max-w-3xl mx-auto px-6 md:px-0
    <div className="flex flex-col justify-start items-start w-full md:max-w-2xl lg:max-w-3xl px-6 md:px-0 ">
        <h1 className="text-4xl font-bold text-[#1dd79b]">Projects</h1>
        <div className="h-[73rem] md:h-[37rem] lg:h-[29rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
            <Tabs tabs={tabs} />
        </div>
    </div>
  )
}

export default Projects