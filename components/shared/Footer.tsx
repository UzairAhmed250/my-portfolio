
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pine-900 py-12 border-t border-pine-300/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-sun-500 font-fira font-bold text-2xl">
              AZ<span className="text-on-dark-high">.</span>
            </a>
          </div>
          
          <div className="mb-6 md:mb-0">
            <nav className="flex flex-wrap justify-center gap-8">
              <a href="#about" className="text-pine-200 hover:text-sun-500 transition-colors">About</a>
              <a href="#projects" className="text-pine-200 hover:text-sun-500 transition-colors">Projects</a>
              <a href="#skills" className="text-pine-200 hover:text-sun-500 transition-colors">Skills</a>
              <a href="#contact" className="text-pine-200 hover:text-sun-500 transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/UzairAhmed250" target="_blank" rel="noopener noreferrer" className="text-pine-200 hover:text-sun-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/uzair-ahmed-547644244/" target="_blank" rel="noopener noreferrer" className="text-pine-200 hover:text-sun-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-pine-300/10 text-center">
          <p className="text-pine-200 text-sm">
            &copy; {currentYear} Uzair Ahmed. All rights reserved.
          </p>
          
          <div className="mt-4 text-sm text-pine-200/70 flex flex-wrap justify-center gap-x-6">
            <span>Designed & Built with 💙</span>
            <span>Frontend: React.js & Tailwind CSS</span>
            <span>MERN Stack Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
