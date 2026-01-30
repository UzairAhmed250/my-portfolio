import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  padding = 'lg',
  hover = false 
}: GlassCardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={cn(
        'bg-gradient-to-br from-deep-purple/30 to-purple-navy/60 backdrop-blur-sm rounded-lg border border-mauve/20',
        paddingClasses[padding],
        hover && 'hover:shadow-lg hover:shadow-mauve/5 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;

