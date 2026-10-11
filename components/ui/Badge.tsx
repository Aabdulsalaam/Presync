import type { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 text-slate-700',
        secondary: 'bg-brand-100 text-brand-700',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'secondary';
  className?: string;
}

export function Badge({ children, variant, className }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
}
