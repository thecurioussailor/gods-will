"use client"
import { useState } from "react"
import Link from "next/link"
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
      title: "The Mysterious Case of Actix Web’s Json<T> Clone: A Lesson in Rust’s Deref Coercion",
      excerpt: "Sometimes the best debugging sessions are the ones where you discover there was never a bug to begin with. This journey from confusion to understanding reinforced why I love Rust: the language is designed with such care that even “surprising” behavior usually turns out to be elegant design.",
      platform: 'medium',
      url: 'https://medium.com/@ashu.sagar111/the-mysterious-case-of-actix-webs-json-t-clone-a-lesson-in-rust-s-deref-coercion-8bf2cca15afa',
      publishedDate: '2025-06-30',
      readTime: '3 min read',
      likes: 9,
      tags: ['Rust', 'Debugging'],
      featured: true
    },
  ];

  const platforms = [
    { key: 'all', label: 'All Posts', count: blogPosts.length },
    { key: 'medium', label: 'Medium', count: blogPosts.filter(post => post.platform === 'medium').length },
    { key: 'twitter', label: 'Twitter', count: blogPosts.filter(post => post.platform === 'twitter').length },
  ];

  const filteredPosts = selectedPlatform === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.platform === selectedPlatform);

  return (
    <div className="flex flex-col justify-start items-start w-full md:max-w-2xl lg:max-w-5xl px-6 md:px-0 gap-10">
      <h1 className="text-3xl font-bold tracking-wider text-purple-400">Blogs</h1>
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
      <div className="grid grid-cols-1 gap-6 w-full">
        {filteredPosts.map((post) => (
            <div key={post.id} className="relative h-full flex flex-col gap-4 p-6 bg-black rounded-3xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />

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
                    <span>{new Date(post.publishedDate).toLocaleDateString( 'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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