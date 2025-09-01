import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard = ({ className = '' }: SkeletonCardProps) => {
  return (
    <div className={`bg-card rounded-lg shadow-md overflow-hidden border ${className}`}>
      <div className="flex flex-col md:flex-row">
        <div className="p-6 flex items-center justify-center md:w-1/4">
          <Skeleton className="w-20 h-20 rounded-lg" />
        </div>
        <div className="p-6 md:w-3/4 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;