import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SectionHeading = ({ icon, title, className, size = 'md' }: SectionHeadingProps) => {
  const sizeClasses = {
    sm: 'text-xl mb-6',
    md: 'text-2xl mb-8',
    lg: 'text-3xl mb-10'
  };

  return (
    <h3 className={cn(
      'font-bold text-seashell flex items-center',
      sizeClasses[size],
      className
    )}>
      <span className="mr-2 text-mauve">{icon}</span>
      {title}
    </h3>
  );
};

export default SectionHeading;

