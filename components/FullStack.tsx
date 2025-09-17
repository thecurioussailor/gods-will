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
        image: '/chat.jpg',
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
        image: "/metaverse.jpg",
        title: "Metaverse 2D Backend",
        subtitle: "Real-time Multiplayer Game Backend",
        description:
          "Backend infrastructure for a 2D Metaverse-style multiplayer game. Users can create avatars and interact inside an arena with real-time movement and interactions. Built to handle live updates using WebSockets and Redis for fast state management. Currently backend-only with no frontend client.",
        technologies: ["Node.js", "WebSocket", "Redis", "PostgreSQL"],
        features: [
          "User avatar creation",
          "Arena for player movement & interactions",
          "Real-time communication via WebSockets",
          "Redis for fast in-memory state sync",
          "Backend-only implementation (frontend pending)",
        ],
        handle: 'Node.js',
        demoUrl: "", // optional, if deployed
        githubUrl: "https://github.com/thecurioussailor/metaverse-2d",
        url: "https://github.com/thecurioussailor/metaverse-2d",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(200deg, #F59E0B, #000)",
      },
      {
        image: '/probo1.jpg',
        title: "Probo Backend",
        subtitle: "Opinion Trading Platform Backend",
        description:
          "Backend service for an opinion trading platform inspired by Probo. Users can trade opinions in 'Yes' or 'No' markets and win if their prediction is correct. Features a real-time order book powered by WebSockets and Redis, ensuring fast updates and scalability. PostgreSQL is used for persistent storage.",
        technologies: ["Node.js", "WebSocket", "Redis", "PostgreSQL"],
        features: [
          "Opinion trading with Yes/No markets",
          "Real-time order book updates via WebSockets",
          "Scalable architecture with Redis",
          "Persistent market and trade data in PostgreSQL",
          "Backend-only implementation (frontend pending)",
        ],
        demoUrl: "", // optional, if deployed
        githubUrl: "https://github.com/thecurioussailor/probo-backend", // update if different
        url: "https://github.com/thecurioussailor/probo-backend",
        borderColor: "#06B6D4",
        gradient: "linear-gradient(220deg, #06B6D4, #000)",
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