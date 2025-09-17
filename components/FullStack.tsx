import ChromaGrid, { ChromaItem } from './ChromaGrid' 
const items: ChromaItem[] = [
    {
      image: "/bonfire.png", // replace with actual image path
      title: "Bonfire",
      subtitle: "Web-based MPC Wallet with Swap",
      description:
        "Bonfire is a TipLink-style wallet clone built on Solana. It’s a secure web-based MPC wallet that enables token transfers and swaps directly in the browser, while using MPC TSS across 3 servers for transaction signing.",
      technologies: ["Rust", "Next.js", "Solana", "Actix Web", "SQLx"],
      features: [
        "Send SOL and tokens",
        "Swap on Solana via Jupiter API",
        "MPC + TSS private key management with 3 servers for secure signing",
      ],
      handle: 'Rust',
      demoUrl: "https://bonfire.ashutoshsagar.com/",
      githubUrl: "https://github.com/thecurioussailor/bonfire", // replace with actual repo
      url: "",
      borderColor: "#FF7F50",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
    },
    {
      image: "/trueman.png",
      title: "Trueman CEX",
      subtitle: "Centralized Exchange with CLOB",
      description:
        "Trueman is a centralized trading web platform featuring a Central Limit Order Book (CLOB). Users can trade SOL, BTC, and ETH with market or limit orders, cancel trades, and view real-time order book and ticker updates via WebSockets. It also includes a simulator that generates bot-driven trades to give a real exchange-like experience.",
      technologies: ["Rust", "Next.js", "Redis", "WebSocket", "Actix Web","Diesel", "CLOB"],
      features: [
        "Centralized Exchange with CLOB",
        "Supports SOL, BTC, and ETH trading",
        "Market/Limit order placement and cancellation",
        "Real-time order book and ticker updates via WebSockets",
        "Simulator with bot users to mimic real trading environment",
      ],
      handle: 'Rust',
      demoUrl: "https://trueman.ashutoshsagar.com/",
      githubUrl: "https://github.com/thecurioussailor/trueman2",
      url: "https://github.com/thecurioussailor/trueman2",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    },
    {
        image: '/metaverse.jpg',
        title: 'SocketTalk',
        subtitle: "Web-based Chat Application",
        description: "SocketTalk is a web-based chat platform where users can connect, send and accept friend requests, and chat in real time once connected. The application uses WebSockets for seamless, live communication. Users can also create and customize their profiles.",
        technologies: ["Next.js", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
        features: [
          "Send and accept friend requests",
          "Real-time chat using WebSockets",
          "User profile creation and customization",
          "Persistent friend and chat data stored in database",
        ],
        handle: 'Node.js',
        demoUrl: "", // Add demo link if you deploy it
        githubUrl: "https://github.com/thecurioussailor/socket-talk",
        url: "https://github.com/thecurioussailor/socket-talk",
        borderColor: "#4F46E5",
        gradient: "linear-gradient(210deg, #10B981, #000)",
      },
      {
        image: '/metaverse.jpg',
        title: 'Metaverse 2D',
        subtitle: "Web-based Chat Application",
        description: "Metaverse 2D is a web-based chat platform where users can connect, send and accept friend requests, and chat in real time once connected. The application uses WebSockets for seamless, live communication. Users can also create and customize their profiles.",
        technologies: ["Next.js", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
        features: [
          "Send and accept friend requests",
          "Real-time chat using WebSockets",
          "User profile creation and customization",
          "Persistent friend and chat data stored in database",
        ],
        handle: 'Node.js',
        demoUrl: "", // Add demo link if you deploy it
        githubUrl: "https://github.com/thecurioussailor/socket-talk",
        url: "https://github.com/thecurioussailor/socket-talk",
        borderColor: "#4F46E5",
        gradient: "linear-gradient(210deg, #10B981, #000)",
      },
      {
        image: '/metaverse.jpg',
        title: 'Probo - Opinion Market',
        subtitle: "Web-based Chat Application",
        description: "Probo is a web-based opinion market platform where users can create and trade on opinion markets. The application uses WebSockets for seamless, live communication. Users can also create and customize their profiles.",
        technologies: ["Next.js", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
        features: [
          "Send and accept friend requests",
          "Real-time chat using WebSockets",
          "User profile creation and customization",
          "Persistent friend and chat data stored in database",
        ],
        handle: 'Node.js',
        demoUrl: "", // Add demo link if you deploy it
        githubUrl: "https://github.com/thecurioussailor/socket-talk",
        url: "https://github.com/thecurioussailor/socket-talk",
        borderColor: "#4F46E5",
        gradient: "linear-gradient(210deg, #10B981, #000)",
      },
  ];
const FullStack = () => {
  return (
    <div>
        <ChromaGrid items={items} />
    </div>
  )
}

export default FullStack