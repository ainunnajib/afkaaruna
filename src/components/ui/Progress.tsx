'use client';

import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'warning';
}

export function Progress({ value, max, className, showLabel = false, variant = 'default' }: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const variants = {
    default: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-secondary',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted">{value} / {max}</span>
          <span className="font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-500 ease-out', variants[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
