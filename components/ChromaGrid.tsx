"use client"
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { GlowingEffect } from './ui/glowing-effect';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  // Add new fields for dialog content
  description?: string;
  technologies?: string[];
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  
  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ChromaItem | null>(null);

  const demo: ChromaItem[] = [
    {
      image: '/public/metaverse.png',
      title: 'Metaverse 2D',
      subtitle: 'Full Stack Developer',
      handle: 'Github',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/',
      description: 'A immersive 2D metaverse experience built with modern web technologies. Users can create avatars, interact with others, and explore virtual worlds.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Three.js', 'MongoDB'],
      features: [
        'Real-time multiplayer interactions',
        'Avatar customization system',
        'Virtual world exploration',
        'Chat and voice communication',
        'NFT marketplace integration'
      ],
      demoUrl: 'https://metaverse-demo.com',
      githubUrl: 'https://github.com/thecurioussailor/metaverse-2d'
    },
    {
      image: '/metaverse.png',
      title: 'DevOps Pipeline',
      subtitle: 'DevOps Engineer',
      handle: 'Github',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/',
      description: 'Automated CI/CD pipeline with Docker containerization, Kubernetes orchestration, and monitoring solutions.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'],
      features: [
        'Automated deployment pipeline',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring and alerting',
        'Auto-scaling capabilities'
      ],
      demoUrl: 'https://pipeline-demo.com',
      githubUrl: 'https://github.com/thecurioussailor/devops-pipeline'
    },
    {
      image: '/metaverse.png',
      title: 'E-Commerce Platform',
      subtitle: 'Full Stack Developer',
      handle: 'Github',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://dribbble.com/',
      description: 'Modern e-commerce platform with advanced features like AI recommendations, real-time inventory, and seamless payment processing.',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'AI-powered product recommendations',
        'Real-time inventory management',
        'Multi-payment gateway integration',
        'Advanced analytics dashboard',
        'Mobile-responsive design'
      ],
      demoUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/thecurioussailor/ecommerce-platform'
    }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = (project: ChromaItem) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <div
        ref={rootRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={`relative w-full h-full flex flex-wrap justify-center items-start gap-3 ${className}`}
        style={
          {
            '--r': `${radius}px`,
            '--x': '50%',
            '--y': '50%'
          } as React.CSSProperties
        }
      >
        {data.map((c, i) => (
          <article
            key={i}
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c)}
            className="group relative flex flex-col w-[500px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
            style={
              {
                '--card-border': c.borderColor || 'transparent',
                background: c.gradient,
                '--spotlight-color': 'rgba(255,255,255,0.3)'
              } as React.CSSProperties
            }
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
              }}
            />
            <div className="relative z-10 flex-1 p-[10px] box-border">
              <Image src={`${c.image}`} 
                alt={c.title} 
                loading="lazy" 
                className="w-full h-[200px] object-cover rounded-[10px]" 
                width={500}
                height={200}
              />
            </div>
            <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
              <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
              {c.handle && <span className="text-[0.95rem] opacity-80 text-right">{c.handle}</span>}
              <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
              {c.location && <span className="text-[0.85rem] opacity-85 text-right">{c.location}</span>}
            </footer>
          </article>
        ))}
        
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            backdropFilter: 'grayscale(1) brightness(0.78)',
            WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
            background: 'rgba(0,0,0,0.001)',
            maskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
            WebkitMaskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
          }}
        />
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
          style={{
            backdropFilter: 'grayscale(1) brightness(0.78)',
            WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
            background: 'rgba(0,0,0,0.001)',
            maskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
            opacity: 1
          }}
        />
      </div>

      {/* Custom Dialog with GlowingEffect */}
      {isDialogOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={closeDialog}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Dialog Content with GlowingEffect */}
          <div 
            className="relative bg-black border border-gray-700 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Add GlowingEffect */}
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />

            {/* Close Button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-300 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {selectedProject && (
              <div className="p-6 relative z-20">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1 relative z-20">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 text-base relative z-20">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Description */}
                  {selectedProject.description && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 relative z-20">Description</h3>
                      <p className="text-gray-300 leading-relaxed relative z-20">
                        {selectedProject.description}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 relative z-20">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-blue-300 hover:border-purple-500 hover:text-purple-300 transition-colors duration-300 relative z-20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 relative z-20">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300 relative z-20">
                            <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {selectedProject.demoUrl && (
                      <button
                        onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                        className="px-4 py-2 bg-slate-700/50 border border-slate-600 hover:border-purple-500 text-white rounded-lg transition-colors font-medium relative z-20"
                      >
                        View Demo
                      </button>
                    )}
                    {selectedProject.githubUrl && (
                      <button
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                        className="px-4 py-2 bg-slate-700/50 border border-slate-600 hover:border-purple-500 text-white rounded-lg transition-colors font-medium relative z-20"
                      >
                        View Code
                      </button>
                    )}
                    {selectedProject.url && (
                      <button
                        onClick={() => window.open(selectedProject.url, '_blank')}
                        className="px-4 py-2 bg-slate-700/50 border border-slate-600 hover:border-purple-500 text-white rounded-lg transition-colors font-medium relative z-20"
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChromaGrid;