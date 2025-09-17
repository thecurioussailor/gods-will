import ChromaGrid, { ChromaItem } from './ChromaGrid' 
const items: ChromaItem[] = [
    {
      image: "/tinywallet.png",
      title: "TinyWallet",
      subtitle: "Telegram + Digital Products + Link Shortener",
      description:
        "TinyWallet is a fullstack SaaS project built for a client that bundles three major features: (1) Telegram channel management with subscription gating and automated bot control, (2) digital product selling for items like PDFs, videos, or photos, and (3) a link shortener.",
      technologies: ["React.js", "Node.js", "Telegram API", "PostgreSQL", "Cashfree"],
      features: [
        "Telegram channel subscription management",
        "Telegram bot for invite handling and subscription expiry removal",
        "Digital product selling (PDFs, videos, photos, etc.)",
        "Payment gateway integration with Cashfree",
        "Link shortener feature",
        "Admin panel for monitoring users and payouts",
      ],
      handle: 'React.js, Node.js',
      demoUrl: "", // add if deployed
      githubUrl: "https://github.com/thecurioussailor/projectX", // add if public
      url: "", // client project, keep empty if private
      borderColor: "#EF4444",
      gradient: "linear-gradient(230deg, #EF4444, #000)",
    },
    {
        image: '/commandhive.png',
        title: "Command Hive",
        subtitle: "MCP Server Development Tool",
        description:
          "CommandHive is a developer tool similar to Cursor, designed for creating MCP servers. I contributed to the frontend, building key pages like the chat page, terminal component, MCP servers listing page, and AI chat interface. This was a bounty gig completed through Superteam India.",
        technologies: ["Next.js", "TailwindCSS", "TypeScript"],
        features: [
          "Frontend for MCP server management",
          "Chat page with AI assistant integration",
          "Terminal component for live server interaction",
          "MCP servers listing and management",
          "AI chat page for enhanced developer experience",
        ],
        handle: 'Next.js',
        demoUrl: "https://cammand-hive.vercel.app/", // add if you have a link
        githubUrl: "https://github.com/thecurioussailor/command-hive", // if open-sourced
        url: "", // client/bounty work, leave blank if private
        borderColor: "#9333EA",
        gradient: "linear-gradient(240deg, #9333EA, #000)",
    },
    {
      image: "/coinbuzz.png",
      title: "CoinBuzz",
      subtitle: "Crypto Price Dashboard",
      description:
        "CoinBuzz is a lightweight dashboard for tracking Solana (SOL/USD) and Bonk (BONK/USD) prices in real time. The app also integrates wallet connectivity, enabling users to connect their Solana wallet directly within the dashboard.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Solana Wallet Adapter"],
      features: [
        "Live price tracking for SOL/USD and BONK/USD",
        "Simple and intuitive dashboard UI",
        "Wallet integration for Solana accounts",
        "Lightweight and fast frontend implementation",
      ],
      handle: 'Next.js',
      demoUrl: "", // add if deployed
      githubUrl: "https://github.com/thecurioussailor/coinbuzz", // update if correct
      url: "https://github.com/thecurioussailor/coinbuzz",
      borderColor: "#10B981",
      gradient: "linear-gradient(250deg, #10B981, #000)",
    },
    {
      image: "/rishi.png",
      title: "Portfolio Website",
      subtitle: "Client Portfolio in Next.js",
      description:
        "A personal one-page portfolio website built with Next.js and Framer Motion. It showcases my projects, skills, and experience with smooth animations and a modern UI design. The site serves as a central hub to highlight my work and connect with potential collaborators or recruiters.",
      technologies: ["Next.js", "Framer Motion", "TailwindCSS"],
      features: [
        "One-page responsive portfolio",
        "Smooth animations using Framer Motion",
        "Modern design with TailwindCSS",
        "Projects showcase with interactive components",
        "Contact and social links integration",
      ],
      handle: 'Next.js, Framer Motion',
      demoUrl: "https://my-portfolio-xi-silk-89.vercel.app/", // update if deployed under this or another domain
      githubUrl: "https://github.com/Rishi15987/my-portfolio", // update if correct
      url: "https://github.com/Rishi15987/my-portfolio",
      borderColor: "#6366F1",
      gradient: "linear-gradient(270deg, #6366F1, #000)",
    },

    {
      image: "/icestaking.png",
      title: "IceStaking",
      subtitle: "Landing Page (Figma to Code)",
      description:
        "IceStaking was a Figma-to-code project where I converted a design into a responsive landing page. Built using Next.js and Tailwind CSS, the page delivers a clean UI with modern styling, optimized for performance and responsiveness.",
      technologies: ["Next.js", "TailwindCSS"],
      features: [
        "Pixel-perfect implementation from Figma design",
        "Responsive layout for all devices",
        "Modern UI components built with Tailwind CSS",
        "Optimized and lightweight Next.js setup",
      ],
      handle: 'Next.js',
      demoUrl: "https://ice-skating.vercel.app/", // add deployed link if you have it
      githubUrl: "https://github.com/thecurioussailor/ice-staking", // add repo link if available
      url: "", // leave blank if private client work
      borderColor: "#3B82F6",
      gradient: "linear-gradient(260deg, #3B82F6, #000)",
    },
  ];
const Client = () => {
  return (
    <div>
        <ChromaGrid items={items} />
    </div>
  )
}

export default Client