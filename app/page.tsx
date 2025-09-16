import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Experience from "@/components/Experience";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950">
      {/* Cosmic Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)]"
        )}
      />
      
      {/* Nebula gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/20 to-indigo-900/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Floating stars effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large stars */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full star-twinkle opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full star-twinkle opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-300 rounded-full star-twinkle opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-indigo-300 rounded-full star-twinkle opacity-30" style={{animationDelay: '0.5s'}}></div>
        
        {/* Medium stars */}
        <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-white rounded-full star-twinkle opacity-40" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-purple-200 rounded-full star-twinkle opacity-60" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/6 left-1/2 w-0.5 h-0.5 bg-blue-200 rounded-full star-twinkle opacity-50" style={{animationDelay: '2.5s'}}></div>
        
        {/* Small stars */}
        <div className="absolute top-1/6 right-1/2 w-0.5 h-0.5 bg-white rounded-full star-twinkle opacity-30" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-0.5 h-0.5 bg-indigo-200 rounded-full star-twinkle opacity-40" style={{animationDelay: '1.8s'}}></div>
        
        {/* Nebula clouds */}
        <div className="absolute top-1/5 left-1/5 w-32 h-32 bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full nebula-drift blur-xl"></div>
        <div className="absolute bottom-1/5 right-1/5 w-24 h-24 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent rounded-full nebula-drift blur-xl" style={{animationDelay: '10s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-20 h-20 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full nebula-drift blur-xl" style={{animationDelay: '15s'}}></div>
      </div>
      
      {/* Your content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-16 md:pt-32 gap-10">
        <Hero />
        <Experience />
        <Projects />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}