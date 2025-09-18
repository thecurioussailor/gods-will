"use client";
import Link from "next/link"
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words = "I design and develop digital experiences that are fast, intuitive, and impactful. I love turning raw ideas into polished products—be it a SaaS tool, a portfolio site, or a full-featured web app.";
const Hero = () => {
  return (
    <div className="text-white flex flex-col items-start justify-center gap-2 w-full md:max-w-2xl lg:max-w-5xl mx-auto px-6 md:px-0">
        <div className="flex items-end justify-end gap-6 w-full p-4">
            <Link href="https://github.com/thecurioussailor" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 cosmic-glow"><LuGithub size={20}/></Link>
            <Link href="https://www.linkedin.com/in/ashutosh-sagar-4b2612185/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 cosmic-glow"><LuLinkedin size={20}/></Link>
            <Link href="https://x.com/sagar11ashutosh" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 cosmic-glow"><LuTwitter size={20}/></Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-left text-white">Hi, I'm Ashutosh,</h1>
        <h2 className="text-base text-left text-white/80 flex flex-wrap gap-2">Full Stack Developer | Blockchain Enthusiast | Recent Build:  
          <Link href="https://trueman.ashutoshsagar.com/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">Trueman CEX in Rust</Link> | <Link href="https://bonfire.ashutoshsagar.com/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">Bonfire - Web-based MPC Wallet</Link>
        </h2>
        <TextGenerateEffect words={words} className="text-lg text-left w-5/6 font-normal"/>
    </div>
  )
}

export default Hero