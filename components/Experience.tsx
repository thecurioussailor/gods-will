import { Timeline } from "@/components/ui/timeline";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";

const Experience = () => {
    const data = [
        {
          title: "Oct 2025 - Present",
          content: (
            <div className="relative h-full flex flex-col gap-4 p-10 bg-black rounded-3xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
                <p className="text-xl font-bold relative z-20 text-white">
                    Solana Mobile Engineer <span className="text-neutral-300 font-normal hover:text-purple-400 transition-all duration-300"><Link href="https://www.beunboxed.com/" target="_blank">@Unboxed</Link></span>
                </p>
                <p className="text-neutral-400 z-20 text-sm">
                    Full Time
                </p>
                <div className="text-neutral-200 relative z-20">
                <ul className="text-neutral-200 relative z-20 list-disc pl-4 space-y-2">
                <li>
                  Solana Mobile & Full-Stack engineer building a fantasy sports tournament app for Super Phoenix DAO.
                </li>
                <li>
                  Shipped production brackets with on-chain USDC entry payments, including wallet connections, transaction signing, and payout logic for the first live tournament at Solana Breakpoint.
                </li>
                <li>
                  Designed the backend with Supabase (Postgres, Auth, Storage, Edge Functions) including tournament state & payment verification via queues, webhooks, and scheduled cron jobs.
                </li>
                <li>
                  Published the app on the Solana dApp Store and provided a web browser version for Android users without Seeker devices.
                </li>
                <li>
                  Android Browser version: <Link href="https://clashoftitans.superphoenixdao.com/" target="_blank" className="hover:underline hover:text-purple-400 transition-all duration-300">clashoftitans.superphoenixdao.com</Link>
                </li>
              </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">React Native</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Expo</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Solana Mobile Stack</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Typescript</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Solana USDC Payments</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Supabase Backend</span>
                    </button>
                </div>
            </div>
          ),
        },
        {
            title: "Jul 2025 - Sep 2025",
            content: (
              <div className="relative h-full flex flex-col gap-4 p-6 md:p-10 bg-black rounded-3xl">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                  <p className="text-xl font-bold relative z-20 text-white">
                      Solana Fellowship <span className="text-neutral-300 font-normal hover:text-purple-400 transition-all duration-300"><Link href="https://www.superdev.fun/" target="_blank">@Superdev Fellowship by SuperteamInd</Link></span>
                  </p>
                  <div className="text-neutral-200 relative z-20">
                      <ul className="text-neutral-200 relative z-20 list-disc pl-4 space-y-2">
                        <li>
                            Fellowship by SuperteamIND & Kirat focused on Solana + Rust.
                        </li>
                        <li>
                            Explored advanced concepts: indexing via Yellowstone Geyser, MPC/TSS signing, custody infra, Anchor vs Pinocchio.
                        </li>
                      </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                      <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                          <span className="relative z-20">Rust</span>
                      </button>
                      <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                          <span className="relative z-20">Solana</span>
                      </button>
                      <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                          <span className="relative z-20">Anchor</span>
                      </button>
                      <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                          <span className="relative z-20">Pinnochio</span>
                      </button>
                  </div>
              </div>
            ),
          },
        {
          title: "Feb 2024 - Jun 2025",
          content: (
            <div className="relative h-full flex flex-col gap-4 p-10 bg-black rounded-3xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
                <p className="text-xl font-bold relative z-20 text-white">
                    Full Stack Developer <span className="text-neutral-300 font-normal hover:text-purple-400 transition-all duration-300"><Link href="https://ionfirm.com" target="_blank">@Ionfirm</Link></span>
                </p>
                <p className="text-neutral-400 z-20 text-sm">
                    Full Time
                </p>
                <div className="text-neutral-200 relative z-20">
                    <ul className="text-neutral-200 relative z-20 list-disc pl-4 space-y-2">
                      <li>
                      Led full-stack development of client projects & internal SaaS tools.
                      </li>
                      <li>
                      Architected & deployed scalable apps with Next.js, Node.js, PostgreSQL, AWS.
                      </li>
                      <li>
                      Owned product lifecycle: from design → backend APIs → frontend UI → cloud deployment.
                      </li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Next.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Typescript</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Node.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">React.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">AWS</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">DevOps</span>
                    </button>
                </div>
            </div>
          ),
        },
        {
          title: "March 2023 - Jan 2024",
          content: (
            <div className="relative h-full flex flex-col gap-4 p-10 bg-black rounded-3xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
                <p className="text-xl font-bold relative z-20 text-white">
                    Software Engineer <span className="text-neutral-300 font-normal hover:underline hover:text-purple-400 transition-all duration-300"><Link href="https://vecv.in" target="_blank">@Volvo and Eicher Commercial Vehicles</Link></span>
                </p>
                <p className="text-neutral-400 z-20 text-sm">
                    Full Time
                </p>
                <div className="text-neutral-200 relative z-20">
                    <ul className="text-neutral-200 relative z-20 list-disc pl-4 space-y-2">
                      <li>
                        Built business-critical backend services in Spring Boot.
                      </li>
                      <li>
                        Developed React dashboards to visualize manufacturing & logistics data.
                      </li>
                      <li>
                        Automated CI/CD pipelines & deployed on AWS.
                      </li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Java</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Spring Boot</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">React</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Microservices</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">DevOps</span>
                    </button>
                </div>
            </div>
          ),
        },
        {
          title: "March 2022 - Feb 2023",
          content: (
            <div className="relative h-full flex flex-col gap-4 p-10 bg-black rounded-3xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
                <p className="text-xl font-bold relative z-20 text-white">
                    Software Engineer Intern <span className="text-neutral-300 font-normal hover:text-purple-400 transition-all duration-300"><Link href="https://vecv.in" target="_blank">@Volvo and Eicher Commercial Vehicles</Link></span>
                </p>
                <p className="text-neutral-400 z-20 text-sm">
                    Internship
                </p>
                <div className="text-neutral-200 relative z-20">
                    <ul className="text-neutral-200 relative z-20 list-disc pl-4 space-y-2">
                      <li>
                        Contributed to internal tooling using React + Spring Boot.
                      </li>
                      <li>
                        Enhanced API reliability through automated testing & monitoring.
                      </li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Java</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Spring Boot</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">React</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Microservices</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">DevOps</span>
                    </button>
                </div>
            </div>
          ),
        },
        {
            title: "March 2022 - Feb 2023",
            content: (
              <div className="relative h-full flex flex-col gap-4 p-10 bg-black rounded-3xl">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                  <p className="text-xl font-bold relative z-20 text-white">
                      Frontend Intern <span className="text-neutral-300 font-normal hover:text-purple-400 transition-all duration-300"><Link href="https://artbeatentertainment.com" target="_blank">@Artbeat Entertainment</Link></span>
                  </p>
                  <p className="text-neutral-400 z-20 text-sm">
                      Internship
                  </p>
                  <div className="text-neutral-200 relative z-20">
                      <ul className="text-neutral-200 relative z-20 list-disc pl-4 space-y-2">
                      <li>
                        Converted Figma designs into pixel-perfect responsive websites.
                      </li>
                      <li>
                      Implemented animations & interactions for better UX.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">React.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Tailwind CSS</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">Node.js</span>
                    </button>
                    <button className="px-2 py-1 rounded-full relative bg-slate-700/50 text-white text-xs tracking-wide border border-slate-600 hover:border-purple-500 hover:shadow-purple-500/[0.1] transition-colors duration-300">
                        <span className="relative z-20">API Integration</span>
                    </button>
                </div>
              </div>
            ),
          },
      ];
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full md:max-w-2xl lg:max-w-5xl mx-auto px-6 md:px-0">
        <h1 className="text-3xl font-bold tracking-wider text-purple-400">Experience</h1>
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
  