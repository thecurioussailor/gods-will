import { Timeline } from "@/components/ui/timeline";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Box } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";


const Experience = () => {
    const data = [
        {
          title: "Feb 2024 - Present",
          content: (
            <CardSpotlight className="md:h-96 lg:h-80 w-full rounded-3xl flex flex-col gap-2">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Full Stack Developer <span className="text-neutral-300 font-normal">@Ionfirm Corporation</span>
                </p>
                <p className="text-neutral-400 z-20 text-sm">
                    Current
                </p>
                <div className="text-neutral-200 relative z-20">
                    <p className="text-neutral-200 relative z-20">
                    I lead full-stack development for diverse client projects and internal products, from conception to deployment.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Next.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Typescript</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Node.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">React.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">AWS</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">DevOps</span>
                    </button>
                </div>
            </CardSpotlight>
          ),
        },
        {
          title: "March 2023 - Jan 2024",
          content: (
            <CardSpotlight className="md:h-96 lg:h-80 w-full rounded-3xl flex flex-col gap-2">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Software Engineer <span className="text-neutral-300 font-normal">@Volvo and Eicher Commercial Vehicles</span>
                </p>
                <p className="text-neutral-400 z-20 text-sm">
                    Full Time
                </p>
                <div className="text-neutral-200 relative z-20">
                    <p className="text-neutral-200 relative z-20">
                    Engineered backend services in Spring Boot and frontend in React for business-critical systems. Implemented DevOps practices and managed cloud deployments on AWS.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Java</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Spring Boot</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">React</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Microservices</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">DevOps</span>
                    </button>
                </div>
            </CardSpotlight>
          ),
        },
        {
          title: "March 2022 - Feb 2023",
          content: (
            <CardSpotlight className="md:h-96 lg:h-80 w-full rounded-3xl flex flex-col gap-2">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Software Engineer Intern <span className="text-neutral-300 font-normal">@Volvo and Eicher Commercial Vehicles</span>
                </p>
                <p className="text-neutral-400 z-20 text-sm">
                    Internship
                </p>
                <div className="text-neutral-200 relative z-20">
                    <p className="text-neutral-200 relative z-20">
                    Contributed to full-stack development using Spring Boot and React, and participated in API testing to support internal tools and services.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Java</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Spring Boot</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">React</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Microservices</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">DevOps</span>
                    </button>
                </div>
            </CardSpotlight>
          ),
        },
        {
            title: "March 2022 - Feb 2023",
            content: (
              <CardSpotlight className="md:h-96 lg:h-80 w-full rounded-3xl flex flex-col gap-2">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                      Frontend Intern <span className="text-neutral-300 font-normal">@Artbeat Entertainment</span>
                  </p>
                  <p className="text-neutral-400 z-20 text-sm">
                      Internship
                  </p>
                  <div className="text-neutral-200 relative z-20">
                      <p className="text-neutral-200 relative z-20">
                      Translated Figma designs into a fully functional, animated website with a focus on responsiveness and user interaction.
                      </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">React.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Tailwind CSS</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">Node.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-900 text-white text-xs tracking-wider hover:shadow-2xs hover:shadow-white/[0.1] transition duration-200 border border-slate-700">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">API Integration</span>
                    </button>
                </div>
              </CardSpotlight>
            ),
          },
      ];
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full md:max-w-2xl lg:max-w-3xl mx-auto px-6 md:px-0">
        <h1 className="text-3xl font-bold tracking-wider text-[#1dd79b]">Experience</h1>
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    </div>
  )
}

export default Experience

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  }
  
  const GridItem = ({ area, title, description }: GridItemProps) => {
    return (
      <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-black">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="space-y-3">
                <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                  {title}
                </h3>
                <h2 className="font-sans text-sm/[1.125rem] text-white md:text-base/[1.375rem]">
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  