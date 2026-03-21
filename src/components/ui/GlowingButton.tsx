import React from 'react';
import type { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface GlowingButtonProps extends ComponentProps<typeof motion.button> {
  href?: string;
  className?: string;
}

export const GlowingButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, GlowingButtonProps>(
  ({ className, children, href, ...props }, ref) => {
    
    const baseClasses = cn(
      "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full",
      "bg-gradient-to-r from-blue-700 to-blue-500",
      "shadow-[0_0_20px_rgba(29,78,216,0.5)] hover:shadow-[0_0_40px_rgba(29,78,216,0.8)]",
      "hover:-translate-y-1 overflow-hidden group",
      className
    );

    const innerGlow = (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
    );

    if (href) {
      return (
        <motion.a
          ref={ref as any}
          href={href}
          className={baseClasses}
          {...(props as any)}
        >
          {innerGlow}
          <span className="relative z-10">{children as React.ReactNode}</span>
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as any}
        className={baseClasses}
        {...(props as any)}
      >
        {innerGlow}
        <span className="relative z-10">{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);
GlowingButton.displayName = 'GlowingButton';
