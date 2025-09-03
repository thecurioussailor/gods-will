import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Experience from "@/components/Experience";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Projects2 from "@/components/Projects2";

export default function Home() {
  return (
<div className="relative min-h-screen bg-black">
      Grid Background
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#161B19] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Your content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-16 md:pt-32 gap-10">
        <Hero />
        <Experience />
        <Projects2 />
        <Footer />
      </div>
    </div>
  );
}