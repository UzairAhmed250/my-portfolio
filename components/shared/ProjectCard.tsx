"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  demoLink: string;
  repoLink: string;
  technologies: string[];
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  repoLink,
  technologies,
  featured = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative group overflow-hidden rounded-xl border-0",
        featured ? "md:col-span-2" : "",
        "backdrop-blur-md transition-all duration-500 transform hover:-translate-y-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-mauve/5 to-pale-dogwood/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-mauve/30 via-pale-dogwood/10 to-purple-navy/20 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
      
      <div className="relative bg-deep-purple/60 backdrop-blur-md h-full p-6 rounded-xl border border-white/10 group-hover:border-mauve/50 transition-colors duration-500 z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-mauve">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
            
            {featured && (
              <span className="text-xs uppercase tracking-wider bg-mauve/10 text-mauve px-2 py-1 rounded-full ml-2 border border-mauve/30">
                Featured
              </span>
            )}
            
            {/* Security badge */}
            <div className="ml-2 flex items-center bg-gradient-to-r from-pale-dogwood/10 to-purple-navy/10 px-3 py-1 rounded-full overflow-hidden border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve mr-1">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-xs text-mauve">Secure</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <a 
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-mauve transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-mauve transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Live Demo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-seashell mb-2 group-hover:text-mauve transition-colors">{title}</h3>
        <p className="text-slate mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge bg-white/5 border border-white/10 text-slate group-hover:border-mauve/30 group-hover:text-mauve transition-all">
              {tech}
            </span>
          ))}
        </div>
        
        <div>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group bg-gradient-to-r from-mauve/20 to-pale-dogwood/20 backdrop-blur-md px-6 py-3 rounded-full text-seashell border border-white/10 inline-flex items-center hover:border-mauve/50 transition-colors"
          >
            <span className="relative z-10 group-hover:text-mauve transition-colors">View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-mauve transform group-hover:translate-x-1 transition-transform">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" x2="21" y1="14" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Pipeline visualization */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 backdrop-blur-md p-3 transform transition-transform duration-500",
        isHovered ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="flex items-center justify-between text-xs">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-mauve/10 flex items-center justify-center mb-1 border border-mauve/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                <path d="M16 18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"></path>
                <path d="M15 12V9a2 2 0 0 0-2-2H6"></path>
                <path d="m15 9 3 3-3 3"></path>
              </svg>
            </div>
            <span className="text-slate">Code</span>
          </div>
          
          <div className="h-0.5 w-full max-w-[50px] bg-gradient-to-r from-mauve to-transparent mx-1"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-mauve/10 flex items-center justify-center mb-1 border border-mauve/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                <rect width="18" height="10" x="3" y="3" rx="2"></rect>
                <circle cx="12" cy="8" r="1"></circle>
                <path d="M12 16v-3"></path>
                <path d="M9 17h6"></path>
              </svg>
            </div>
            <span className="text-slate">Build</span>
          </div>
          
          <div className="h-0.5 w-full max-w-[50px] bg-gradient-to-r from-mauve to-transparent mx-1"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-mauve/10 flex items-center justify-center mb-1 border border-mauve/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-4a2 2 0 0 0 -2 2v2"></path>
                <path d="M12 12v.01"></path>
                <path d="M3 13a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9z"></path>
              </svg>
            </div>
            <span className="text-slate">Test</span>
          </div>
          
          <div className="h-0.5 w-full max-w-[50px] bg-gradient-to-r from-mauve to-transparent mx-1"></div>
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-mauve/10 flex items-center justify-center mb-1 border border-mauve/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                <path d="M22 12a10.06 10.06 0 0 0-1.8-5.83"></path>
                <path d="M4 12a10.06 10.06 0 0 0 1.8 5.83"></path>
                <path d="M12 2v7"></path>
                <path d="M10 4.5a20.82 20.82 0 0 0-4 3.34"></path>
                <path d="M14 4.5a20.82 20.82 0 0 1 4 3.34"></path>
                <path d="M12 22v-7"></path>
                <path d="M10 19.5a20.82 20.82 0 0 1-4-3.34"></path>
                <path d="M14 19.5a20.82 20.82 0 0 0 4-3.34"></path>
              </svg>
            </div>
            <span className="text-slate">Deploy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
