import { Stars } from '@/components/stars'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Technology } from '@/features/technologies/types'
import Link from 'next/link'
import { TotalRatings } from './total-ratings'

export function TechCard({ data }: { data: Technology }) {
  return (
    <Link className="group" href={`/technologies/${data.slug}`}>
      <Card className="group-hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{data.name}</CardTitle>
          <CardDescription className="min-h-14 text-lg">
            {data.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex items-center justify-between">
          <Stars value={data.averageRating} />
          <TotalRatings total={data.reviewsCount} />
        </CardFooter>
      </Card>
    </Link>
  )
}
