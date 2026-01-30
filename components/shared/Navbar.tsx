"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-500",
      isScrolled 
        ? "bg-deep-purple/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)]" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-mauve to-pale-dogwood rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-3 py-1 bg-deep-purple ring-1 ring-white/10 rounded-lg leading-none flex items-center">
            <span className="text-mauve font-fira font-bold text-xl">UA<span className="text-seashell">.</span></span>
          </div>
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-seashell hover:text-mauve transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="link-hover text-slate hover:text-seashell relative px-2 py-1 overflow-hidden group">
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mauve transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative text-slate group-hover:text-seashell transition-colors duration-300">01. <span className="text-mauve">About</span></span>
          </a>
          <a href="#projects" className="link-hover text-slate hover:text-seashell relative px-2 py-1 overflow-hidden group">
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mauve transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative text-slate group-hover:text-seashell transition-colors duration-300">02. <span className="text-mauve">Projects</span></span>
          </a>
          <a href="#skills" className="link-hover text-slate hover:text-seashell relative px-2 py-1 overflow-hidden group">
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mauve transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative text-slate group-hover:text-seashell transition-colors duration-300">03. <span className="text-mauve">Skills</span></span>
          </a>
          <a href="#contact" className="relative px-6 py-2 overflow-hidden group bg-transparent border border-mauve rounded-md text-mauve hover:text-deep-purple transition-colors duration-300">
            <span className="absolute inset-0 bg-mauve transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative">Contact</span>
          </a>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-deep-purple/95 backdrop-blur-xl py-6 px-4 border-t border-slate/10 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-slate hover:text-mauve py-2 px-4 rounded-md hover:bg-white/5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-mauve mr-2 font-fira text-sm">01.</span>About
              </a>
              <a href="#projects" className="text-slate hover:text-mauve py-2 px-4 rounded-md hover:bg-white/5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-mauve mr-2 font-fira text-sm">02.</span>Projects
              </a>
              <a href="#skills" className="text-slate hover:text-mauve py-2 px-4 rounded-md hover:bg-white/5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-mauve mr-2 font-fira text-sm">03.</span>Skills
              </a>
              <a href="#contact" className="mt-2 px-6 py-2 border border-mauve rounded-md text-mauve hover:bg-mauve/10 transition-colors duration-300 text-center" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
