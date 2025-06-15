import { Skeleton } from '@/components/ui/skeleton'

export function TechListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton className="h-[140px]" key={index.toString()} />
      ))}
    </div>
  )
}
