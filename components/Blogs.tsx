"use client"
import { useState } from "react"
import Link from "next/link"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { LuExternalLink, LuCalendar, LuClock, LuHeart } from "react-icons/lu"

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  platform: 'medium' | 'twitter' | 'dev' | 'hashnode';
  url: string;
  publishedDate: string;
  readTime: string;
  likes?: number;
  tags: string[];
  featured?: boolean;
}

const Blogs = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'medium' | 'twitter' | 'dev' | 'hashnode'>('all');

  // Sample blog data - replace with your actual blogs
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js and TypeScript",
      excerpt: "Learn how to create robust, type-safe web applications using Next.js 14 and TypeScript. This comprehensive guide covers everything from setup to deployment.",
      platform: 'medium',
      url: 'https://medium.com/@yourusername/building-scalable-web-applications',
      publishedDate: '2024-01-15',
      readTime: '8 min read',
      likes: 42,
      tags: ['Next.js', 'TypeScript', 'Web Development'],
      featured: true
    },
    {
      id: 2,
      title: "The Future of Blockchain Development: A Developer's Perspective",
      excerpt: "Exploring the latest trends in blockchain technology and how developers can prepare for the next wave of decentralized applications.",
      platform: 'dev',
      url: 'https://dev.to/yourusername/future-of-blockchain-development',
      publishedDate: '2024-01-10',
      readTime: '12 min read',
      likes: 28,
      tags: ['Blockchain', 'Web3', 'Development'],
      featured: true
    },
    {
      id: 3,
      title: "Thread: 10 React Performance Tips Every Developer Should Know",
      excerpt: "A Twitter thread covering essential React performance optimization techniques that can significantly improve your application's speed and user experience.",
      platform: 'twitter',
      url: 'https://twitter.com/yourusername/status/1234567890',
      publishedDate: '2024-01-08',
      readTime: '5 min read',
      likes: 156,
      tags: ['React', 'Performance', 'JavaScript']
    },
    {
      id: 4,
      title: "Getting Started with Rust for Web Development",
      excerpt: "Why Rust is becoming increasingly popular for web development and how to get started with building web applications using this powerful language.",
      platform: 'hashnode',
      url: 'https://yourusername.hashnode.dev/getting-started-with-rust',
      publishedDate: '2024-01-05',
      readTime: '15 min read',
      likes: 35,
      tags: ['Rust', 'Web Development', 'Backend']
    },
    {
      id: 5,
      title: "Thread: My Journey from Java Developer to Full-Stack Engineer",
      excerpt: "Sharing my experience transitioning from backend Java development to becoming a full-stack engineer, including the challenges and lessons learned.",
      platform: 'twitter',
      url: 'https://twitter.com/yourusername/status/1234567891',
      publishedDate: '2024-01-03',
      readTime: '7 min read',
      likes: 89,
      tags: ['Career', 'Java', 'Full-Stack']
    }
  ];

  const platforms = [
    { key: 'all', label: 'All Posts', count: blogPosts.length },
    { key: 'medium', label: 'Medium', count: blogPosts.filter(post => post.platform === 'medium').length },
    { key: 'twitter', label: 'Twitter', count: blogPosts.filter(post => post.platform === 'twitter').length },
    { key: 'dev', label: 'Dev.to', count: blogPosts.filter(post => post.platform === 'dev').length },
    { key: 'hashnode', label: 'Hashnode', count: blogPosts.filter(post => post.platform === 'hashnode').length },
  ];

  const filteredPosts = selectedPlatform === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.platform === selectedPlatform);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'medium': return '📝';
      case 'twitter': return '🐦';
      case 'dev': return '💻';
      case 'hashnode': return '📚';
      default: return '📄';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'medium': return 'text-green-400';
      case 'twitter': return 'text-blue-400';
      case 'dev': return 'text-purple-400';
      case 'hashnode': return 'text-indigo-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="flex flex-col justify-start items-start w-full md:max-w-2xl lg:max-w-5xl px-6 md:px-0 gap-10">
      <h1 className="text-4xl font-bold text-purple-400 cosmic-glow">Blogs & Thoughts</h1>
      
      {/* Platform Filter */}
      <div className="flex flex-wrap gap-2 w-full">
        {platforms.map((platform) => (
          <button
            key={platform.key}
            onClick={() => setSelectedPlatform(platform.key as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              selectedPlatform === platform.key
                ? 'bg-purple-500/20 text-purple-300 border-purple-400 cosmic-glow'
                : 'bg-slate-800/50 text-gray-300 border-slate-600 hover:border-purple-500 hover:text-purple-300'
            }`}
          >
            {platform.label} ({platform.count})
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {filteredPosts.map((post) => (
          <CardSpotlight key={post.id} className="h-full rounded-3xl">
            <div className="relative h-full flex flex-col gap-4 p-6">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              
              {/* Platform Badge */}
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-600 ${getPlatformColor(post.platform)}`}>
                  <span className="text-sm">{getPlatformIcon(post.platform)}</span>
                  <span className="text-xs font-medium capitalize">{post.platform}</span>
                </div>
                {post.featured && (
                  <div className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30">
                    <span className="text-xs text-purple-300 font-medium">⭐ Featured</span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white leading-tight hover:text-purple-300 transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-full bg-slate-700/50 text-gray-300 text-xs border border-slate-600 hover:border-purple-500 hover:text-purple-300 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <LuCalendar size={14} />
                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LuClock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                {post.likes && (
                  <div className="flex items-center gap-1">
                    <LuHeart size={14} />
                    <span>{post.likes}</span>
                  </div>
                )}
              </div>

              {/* Read More Button */}
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 text-purple-300 hover:from-purple-600/30 hover:to-indigo-600/30 hover:border-purple-400/50 transition-all duration-300 cosmic-glow"
              >
                <span className="text-sm font-medium">Read More</span>
                <LuExternalLink size={14} />
              </Link>
            </div>
          </CardSpotlight>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="text-6xl mb-4">🌌</div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No posts found</h3>
          <p className="text-gray-400">No blog posts available for the selected platform.</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="w-full text-center py-8">
        <p className="text-gray-400 mb-4">Want to stay updated with my latest thoughts?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://medium.com/@yourusername"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 border border-green-500/30 text-green-300 hover:bg-green-600/30 hover:border-green-400/50 transition-all duration-300"
          >
            <span>📝</span>
            <span>Follow on Medium</span>
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300"
          >
            <span>🐦</span>
            <span>Follow on Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blogs