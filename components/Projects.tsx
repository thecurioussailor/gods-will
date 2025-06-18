import { HoverEffect } from "@/components/ui/card-hover-effect";

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
        <div className="flex flex-col items-start justify-center">
            <HoverEffect items={projects} className="w-full" />
        </div>
    </div>
  )
}

export default Projects