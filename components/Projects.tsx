"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "motion/react";

export const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variet.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on ",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce,",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that .",
      link: "https://microsoft.com",
    },
  ];

const Projects = () => {
  return (
    <div className="flex flex-col justify-start items-start max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1dd79b]">Projects</h1>
        <div className="flex flex-row gap-2 pt-10">
            <motion.button className="border-b-2 border-transparent hover:border-teal-500 transition-all duration-300">Personal</motion.button>
            <motion.button className="border-b-2 border-transparent hover:border-teal-500 transition-all duration-300">Client</motion.button>
        </div>
        <div className="flex flex-col items-start justify-center">
            <HoverEffect items={projects} className="w-full" />
        </div>
    </div>
  )
}

export default Projects