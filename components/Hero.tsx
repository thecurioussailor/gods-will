"use client";
import Link from "next/link"
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words = "I design and develop digital experiences that are fast, intuitive, and impactful. I love turning raw ideas into polished products—be it a SaaS tool, a portfolio site, or a full-featured web app.";
const Hero = () => {
  return (
    <div className="text-white flex flex-col items-start justify-center gap-2 max-w-3xl mx-auto">
        <div className="flex items-end justify-end gap-6 w-full p-4">
            <Link href="https://github.com/thecurioussailor" target="_blank" className="text-[#1dd79b]"><LuGithub size={20}/></Link>
            <Link href="https://www.linkedin.com/in/ashutosh-sagar-4b2612185/" target="_blank" className="text-[#1dd79b]"><LuLinkedin size={20}/></Link>
            <Link href="https://x.com/sagar11ashutosh" target="_blank" className="text-[#1dd79b]"><LuTwitter size={20}/></Link>
        </div>
        <h1 className="text-4xl font-bold text-left">Hi, I'm Ashutosh,</h1>
        <h2 className="text-left">Full Stack Developer | Blockchain Enthusiast | Recent Build: <Link href="https://tinywallet.in" target="_blank" className="text-[#1dd79b]">TinyWallet</Link></h2>
        <TextGenerateEffect words={words} className="text-lg text-left w-5/6 text-white font-normal"/>
    </div>
  )
}

export default Hero