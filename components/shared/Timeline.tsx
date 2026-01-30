"use client";

import React, { useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
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
    
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    if (timelineItems) {
      timelineItems.forEach((item) => {
        observer.observe(item);
      });
    }
    
    return () => {
      if (timelineItems) {
        timelineItems.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);
  
  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-0.5 bg-mauve/30"></div>
      
      {/* Timeline items */}
      {items.map((item, index) => (
        <div 
          key={index}
          className={`timeline-item opacity-0 relative flex flex-col md:flex-row gap-4 md:gap-0 mb-8 md:mb-0 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Content */}
          <div className="md:w-1/2 p-4 md:p-6">
            <div 
              className={`bg-purple-navy/30 backdrop-blur-sm p-4 rounded-lg border border-mauve/20 ${
                index % 2 === 0 ? 'md:ml-8' : 'md:mr-8' 
              }`}
            >
              <span className="text-mauve font-fira">{item.year}</span>
              <h3 className="text-xl text-seashell font-medium mb-2">{item.title}</h3>
              <p className="text-slate">{item.description}</p>
            </div>
          </div>
          
          {/* Center dot */}
          <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 w-4 h-4 bg-mauve rounded-full border-4 border-deep-purple"></div>
          
          {/* Empty space */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
