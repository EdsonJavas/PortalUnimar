import React from 'react';
import { cn } from '@/react-app/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Títulos com Poppins
export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn('text-poppins-4xl font-bold tracking-tight', className)}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn('text-poppins-3xl font-semibold tracking-tight', className)}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn('text-poppins-2xl font-semibold tracking-tight', className)}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn('text-poppins-xl font-medium tracking-tight', className)}>
    {children}
  </h4>
);

export const H5: React.FC<TypographyProps> = ({ children, className }) => (
  <h5 className={cn('text-poppins-lg font-medium tracking-tight', className)}>
    {children}
  </h5>
);

export const H6: React.FC<TypographyProps> = ({ children, className }) => (
  <h6 className={cn('text-poppins-base font-medium tracking-tight', className)}>
    {children}
  </h6>
);

// Texto do corpo com Outfit
export const BodyText: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-outfit-base font-normal leading-normal', className)}>
    {children}
  </p>
);

export const SmallText: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={cn('text-outfit-sm font-medium', className)}>
    {children}
  </span>
);

export const CaptionText: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={cn('text-outfit-xs font-normal', className)}>
    {children}
  </span>
);

// Gradientes
export const GradientText: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={cn('bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent', className)}>
    {children}
  </span>
);
