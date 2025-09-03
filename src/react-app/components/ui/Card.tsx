import React from 'react';
import { cn } from '@/react-app/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = false
}) => {
  const baseClasses = 'rounded-3xl border transition-all duration-300';
  
  const variants = {
    default: 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50 shadow-xl',
    glass: 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50',
    elevated: 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow-2xl'
  };
  
  const hoverClasses = hover ? 'hover:shadow-2xl hover:scale-105' : '';

  return (
    <div className={cn(
      baseClasses,
      variants[variant],
      hoverClasses,
      className
    )}>
      {children}
    </div>
  );
};

export default Card;
