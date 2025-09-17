"use client"
import { useState } from "react"
import GooeyNav from './GooeyNav'
import Client from "./Client";
import FullStack from "./FullStack";

// update with your own items
const items = [
  { label: "Personal", component: <FullStack /> },
  { label: "Client", component: <Client /> },
];


const Projects = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="flex flex-col justify-start items-start w-full md:max-w-2xl lg:max-w-5xl px-6 md:px-0 gap-10">
          <h1 className="text-3xl font-bold tracking-wider text-purple-400">Projects</h1>
          <div>
            <GooeyNav
                items={items}
                setActiveIndex={setActiveIndex}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                activeIndex={activeIndex}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
        </div>
        {items[activeIndex].component}
    </div>
  )
}

export default Projects