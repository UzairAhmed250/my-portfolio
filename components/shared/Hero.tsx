"use client";

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const titles = [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "Web Security Specialist"
  ];
  
  // Progress animation for the circular indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(85); // Set to 85% after component mounts
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (charIndex < titles[textIndex].length) {
      const typingTimer = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(typingTimer);
    } else {
      const nextTextTimer = setTimeout(() => {
        setTextIndex((textIndex + 1) % titles.length);
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(nextTextTimer);
    }
  }, [charIndex, textIndex, titles]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the progress circle parameters
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="min-h-screen flex items-center relative pt-16 overflow-hidden bg-gradient-to-br from-space-blue via-[#081426] to-[#050d1a]">
      {/* Futuristic elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 255, 218, 0.1) 1px, transparent 1px)',
               backgroundSize: '60px 60px'
             }}>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-electric-cyan opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
        
        {/* Digital circuit lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(100, 255, 218, 0.1)" strokeWidth="0.5" fill="none" 
                className="circuit-lines" />
          <path d="M0,30 Q40,80 80,20 T100,30" stroke="rgba(100, 255, 218, 0.05)" strokeWidth="0.5" fill="none" 
                className="circuit-lines" />
          <path d="M0,70 Q60,20 30,60 T100,70" stroke="rgba(100, 255, 218, 0.05)" strokeWidth="0.5" fill="none" 
                className="circuit-lines" />
        </svg>
      </div>

      <div className="section-container flex flex-col items-center lg:items-start lg:flex-row lg:justify-between z-10">
        <div className="lg:w-3/5 mb-12 lg:mb-0">
          <div className="opacity-0 animate-fade-in [animation-delay:300ms]">
            <p className="text-electric-cyan font-fira mb-6 text-lg tracking-wider">$ initialize_portfolio.sh</p>
          </div>
          
          <div className="opacity-0 animate-fade-in [animation-delay:600ms]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 font-playfair tracking-tight">
              Uzair Ahmed <span className="inline-block animate-float">🌍</span>
            </h1>
          </div>
          
          <div className="opacity-0 animate-fade-in [animation-delay:900ms]">
            <div className="relative h-12 mb-8 font-fira">
              <div className="absolute top-0 left-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl">
                  <span className="text-electric-cyan font-medium">{titles[textIndex].substring(0, charIndex)}</span>
                  <span className="animate-pulse">_</span>
                </h2>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in [animation-delay:1200ms] max-w-xl">
            <div className="p-4 bg-space-blue/70 rounded-md border-l-4 border-electric-cyan backdrop-blur-sm">
              <p className="text-slate mb-2 text-lg font-fira">
                <span className="text-electric-cyan">$</span> Full Stack Developer with <span className="text-electric-cyan">1.5+ years</span> of experience
              </p>
              <p className="text-slate text-lg font-fira">
                <span className="text-electric-cyan">$</span> Specializing in <span className="text-white">React</span>, <span className="text-white">Node.js</span>, and <span className="text-white">MongoDB</span>
              </p>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in [animation-delay:1500ms] flex flex-wrap gap-5 mt-8">
            <a href="#projects" className="relative overflow-hidden group button-glow bg-transparent backdrop-blur-sm border border-electric-cyan text-electric-cyan hover:text-space-blue hover:bg-electric-cyan transition-all duration-500">
              <span className="relative z-10">Explore Projects</span>
              <span className="absolute inset-0 bg-electric-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
            <a href="#contact" className="relative overflow-hidden group border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-md text-white hover:border-electric-cyan transition-colors duration-300">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-electric-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>
        </div>

        <div className="lg:w-2/5 flex justify-center opacity-0 animate-fade-in [animation-delay:1800ms]">
          <div className="relative">
            <div className="bg-space-blue/40 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(100,255,218,0.15)] transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="mr-4 relative">
                  <svg className="w-16 h-16" viewBox="0 0 70 70">
                    <circle 
                      cx="35" 
                      cy="35" 
                      r={radius} 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      fill="none" 
                      className="text-white/10" 
                    />
                    <circle 
                      cx="35" 
                      cy="35" 
                      r={radius} 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      fill="none" 
                      strokeDasharray={circumference} 
                      strokeDashoffset={strokeDashoffset} 
                      className="text-electric-cyan progress-ring-circle" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-electric-cyan font-fira font-medium text-lg">{progress}%</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-electric-cyan font-fira text-xl">Turbo Donate</h3>
                  <p className="text-light-slate text-sm">Fundraising Platform</p>
                </div>
              </div>
              
              {/* Terminal-like interface */}
              <div className="bg-[#0d1423] rounded-md mb-5 overflow-hidden border border-white/10">
                <div className="bg-[#1a2332] px-4 py-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-slate">turbo-donate-project</div>
                </div>
                <div className="p-4 font-fira text-sm">
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-slate">npm run deploy</span>
                  </div>
                  <div className="text-slate/70 mt-1">Building secure payment gateway...</div>
                  <div className="text-slate/70">Encrypting user data...</div>
                  <div className="text-green-400 mt-1">✓ Deployment successful!</div>
                  <div className="flex items-center mt-2">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-slate animate-pulse">_</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge bg-transparent border border-electric-cyan/30 text-electric-cyan">React</span>
                <span className="tech-badge bg-transparent border border-electric-cyan/30 text-electric-cyan">Node.js</span>
                <span className="tech-badge bg-transparent border border-electric-cyan/30 text-electric-cyan">MongoDB</span>
                <span className="tech-badge bg-transparent border border-electric-cyan/30 text-electric-cyan">JWT Auth</span>
              </div>
              <a href="#projects" className="mt-4 text-electric-cyan text-sm flex items-center hover:opacity-80 transition-opacity group">
                View project details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transform group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            {/* Floating tech icons with glow effect */}
            <div className="absolute -top-8 -right-8 bg-electric-cyan/5 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center animate-float shadow-[0_0_15px_rgba(100,255,218,0.3)] border border-electric-cyan/20">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-electric-cyan/5 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center animate-float [animation-delay:1s] shadow-[0_0_15px_rgba(100,255,218,0.2)] border border-electric-cyan/20">
              <span className="text-xl">🔒</span>
            </div>
            <div className="absolute top-1/2 -right-10 bg-electric-cyan/5 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center animate-float [animation-delay:2s] shadow-[0_0_15px_rgba(100,255,218,0.25)] border border-electric-cyan/20">
              <span className="text-lg">🚀</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-electric-cyan animate-bounce">
        <a href="#about" aria-label="Scroll down" className="hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
