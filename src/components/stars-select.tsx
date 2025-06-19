'use client'

import { StarIcon } from 'lucide-react'
import { useState } from 'react'

type StarsSelectProps = {
  value: number
  onChange: (value: number) => void
}

export function StarsSelect({ value, onChange }: StarsSelectProps) {
  const [hoveredRating, setHoveredRating] = useState(0)

  return (
    <div className="mb-4">
      <span className="block text-sm font-medium text-gray-700 mb-2">
        Avaliação <span className="text-red-400">*</span>
      </span>

      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <button
            key={String(i)}
            type="button"
            className="focus:outline-none"
            onMouseEnter={() => setHoveredRating(i + 1)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => onChange(i + 1)}
          >
            <StarIcon
              className={`h-6 w-6 ${
                i < (hoveredRating || value)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}

        <span className="ml-2 text-sm text-gray-600">
          {value > 0 && `${value} de 5 estrelas`}
        </span>
      </div>
    </div>
  )
}
