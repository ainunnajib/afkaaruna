'use client';

import { cn } from '@/lib/utils';

interface StarsProps {
  count: 0 | 1 | 2 | 3;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function Stars({ count, size = 'md', animated = false }: StarsProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((star) => (
        <svg
          key={star}
          className={cn(
            sizes[size],
            'transition-all duration-300',
            star <= count ? 'text-secondary fill-secondary' : 'text-zinc-300 fill-zinc-300',
            animated && star <= count && 'animate-bounce-in'
          )}
          style={animated && star <= count ? { animationDelay: `${star * 0.1}s` } : undefined}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
