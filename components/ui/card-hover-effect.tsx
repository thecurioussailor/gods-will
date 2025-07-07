"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          target="_blank"
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#1dd79b]/10 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { duration: 0.9 }
                }}
                exit={{ 
                  opacity: 0,
                  transition: { duration: 0.9 }
                }}
              />
            )}
          </AnimatePresence>
          <Card className="bg-[#121212] border-zinc-800">
            <div 

            className={cn("flex flex-row gap-2 justify-between items-center")}>
              <CardTitle className={cn("text-xl animate-all duration-300", hoveredIndex === idx && "text-[#1dd79b]")}>{item.title}</CardTitle>
              <button
                onClick={() => {}}
                
                className={cn("flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-black dark:bg-neutral-800", hoveredIndex === idx && "bg-[#1dd79b]")}
              >
                <IconArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-45 dark:text-neutral-400" />
              </button>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
