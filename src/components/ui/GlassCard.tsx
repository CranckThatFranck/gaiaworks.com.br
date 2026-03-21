import React from 'react';
import type { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn'; // Note: let's create a clx utility

export interface GlassCardProps extends ComponentProps<typeof motion.div> {
  className?: string;
  glowOnHover?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, glowOnHover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300',
          glowOnHover && 'hover:shadow-[0_0_30px_rgba(29,78,216,0.15)] hover:border-white/10 hover:-translate-y-1',
          className
        )}
        {...props}
      >
        <div className="relative z-10">{children as React.ReactNode}</div>
      </motion.div>
    );
  }
);
GlassCard.displayName = 'GlassCard';
