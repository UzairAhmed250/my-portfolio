"use client";

import React, { useState, useRef, useEffect } from 'react';

interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
  description: string;
}

const techItems: TechItem[] = [
  { 
    name: 'React', 
    icon: '⚛️', 
    category: 'frontend',
    description: 'Building interactive UIs with component-based architecture'
  },
  { 
    name: 'Next.js', 
    icon: '▲', 
    category: 'frontend',
    description: 'Server-side rendering and static site generation'
  },
  { 
    name: 'Tailwind CSS', 
    icon: '🎨', 
    category: 'frontend',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  { 
    name: 'TypeScript', 
    icon: '🔷', 
    category: 'frontend',
    description: 'Static typing for enhanced code quality'
  },
  { 
    name: 'Node.js', 
    icon: '🟢', 
    category: 'backend',
    description: 'JavaScript runtime for server-side applications'
  },
  { 
    name: 'Express', 
    icon: '⚡', 
    category: 'backend',
    description: 'Fast, unopinionated web framework for Node.js'
  },
  { 
    name: 'GraphQL', 
    icon: '◢', 
    category: 'backend',
    description: 'Query language for APIs with precise data fetching'
  },
  { 
    name: 'REST APIs', 
    icon: '🔌', 
    category: 'backend',
    description: 'Building standard RESTful interfaces'
  },
  { 
    name: 'MongoDB', 
    icon: '🍃', 
    category: 'database',
    description: 'NoSQL database for flexible document storage'
  },
  { 
    name: 'Firebase', 
    icon: '🔥', 
    category: 'database',
    description: 'App development platform with integrated database'
  },
  { 
    name: 'Supabase', 
    icon: '⚡', 
    category: 'database',
    description: 'Open source Firebase alternative with PostgreSQL'
  },
  { 
    name: 'JWT Auth', 
    icon: '🔒', 
    category: 'other',
    description: 'Secure authentication with JSON Web Tokens'
  },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
  const techGridRef = useRef<HTMLDivElement>(null);
  
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };

  const handleTechHover = (tech: TechItem) => {
    setHoveredTech(tech);
  };
  
  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      techItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [activeCategory]);
  
  const filteredItems = activeCategory 
    ? techItems.filter(item => item.category === activeCategory)
    : techItems;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'from-purple-navy to-mauve';
      case 'backend':
        return 'from-deep-purple to-purple-navy';
      case 'database':
        return 'from-mauve to-pale-dogwood';
      default:
        return 'from-pale-dogwood to-seashell';
    }
  };
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <h2 className="section-title pb-2">Tech Stack</h2>
        <p className="mb-8 text-lg max-w-3xl">
          My toolkit includes modern technologies for building secure, scalable, and performant web applications.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              activeCategory === null 
                ? 'bg-mauve text-deep-purple font-medium' 
                : 'bg-purple-navy/50 text-seashell hover:bg-mauve/20'
            }`}
          >
            All
          </button>
          {['frontend', 'backend', 'database', 'other'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-mauve text-deep-purple font-medium' 
                  : 'bg-purple-navy/50 text-seashell hover:bg-mauve/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Tech Grid */}
          <div 
            ref={techGridRef}
            className="lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {filteredItems.map((tech, index) => (
              <div 
                key={tech.name}
                className="tech-item opacity-0 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-deep-purple/30 to-purple-navy/60 backdrop-blur-sm rounded-lg border border-mauve/20 cursor-pointer hover:border-mauve/50 hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => handleTechHover(tech)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="text-center font-medium text-seashell">{tech.name}</h3>
                  <div className="w-12 h-0.5 my-2 bg-gradient-to-r from-mauve to-transparent"></div>
                  <span className="text-xs text-mauve uppercase">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Details */}
          <div className="lg:w-2/5">
            <div className="sticky top-24">
              {hoveredTech ? (
                <div className="tech-details animate-fade-in">
                  <div className={`bg-gradient-to-r ${getCategoryColor(hoveredTech.category)} p-1 rounded-t-lg w-32`}>
                    <p className="text-xs uppercase tracking-wider text-deep-purple text-center font-bold">
                      {hoveredTech.category}
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-deep-purple/40 to-purple-navy/80 backdrop-blur-sm rounded-lg rounded-tl-none border border-mauve/30">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mauve/20 to-purple-navy/30 rounded-full border border-mauve/20 mr-4">
                        <span className="text-4xl">{hoveredTech.icon}</span>
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-seashell">{hoveredTech.name}</h3>
                    </div>
                    <p className="text-slate mb-6">{hoveredTech.description}</p>
                    
                    <div className="mt-6 space-y-3">
                      {/* Experience Bar */}
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-slate">Experience</span>
                          <span className="text-sm text-mauve">Advanced</span>
                        </div>
                        <div className="h-2 bg-deep-purple rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-mauve to-pale-dogwood rounded-full transition-all duration-1000"
                            style={{ width: '85%' }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Project Usage Bar */}
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-slate">Project Usage</span>
                          <span className="text-sm text-mauve">Frequent</span>
                        </div>
                        <div className="h-2 bg-deep-purple rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-mauve to-pale-dogwood rounded-full transition-all duration-1000"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col justify-center">
                  <div className="p-8 bg-gradient-to-br from-deep-purple/40 to-purple-navy/80 backdrop-blur-sm rounded-lg border border-mauve/30 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-mauve/30 to-deep-purple/20 flex items-center justify-center border border-mauve/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-seashell mb-4">Explore My Tech Stack</h3>
                    <p className="text-slate mb-6">
                      Hover over any technology to view details about my experience and how I implement it in projects.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-deep-purple/80 text-mauve border border-mauve/30">Fullstack Development</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-deep-purple/80 text-mauve border border-mauve/30">Modern JavaScript</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-deep-purple/80 text-mauve border border-mauve/30">Web Security</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-mauve/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-navy/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TechStack;
