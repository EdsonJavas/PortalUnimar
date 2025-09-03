import React from 'react';
import { cn } from '@/react-app/lib/utils';
import { GraduationCap } from 'lucide-react';

interface LogoIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 'md', 
  className 
}) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={cn('bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg', sizes[size], className)}>
      <GraduationCap className="h-full w-full text-white" />
    </div>
  );
};

export default LogoIcon;
