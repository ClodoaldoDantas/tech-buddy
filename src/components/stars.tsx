import { StarIcon } from 'lucide-react'

export function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon
            key={i.toString()}
            className={`size-4 ${i < Math.floor(value) ? 'text-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>

      <strong className="font-medium">{value}</strong>
    </div>
  )
}
