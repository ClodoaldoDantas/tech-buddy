import { Stars } from '@/components/stars'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BotIcon } from 'lucide-react'
import Link from 'next/link'

type TechCardProps = {
  data: {
    id: string
    name: string
    slug: string
    description: string
    reviewsCount: number
    averageRating: number
  }
}

export function TechCard({ data }: TechCardProps) {
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

          <div className="text-zinc-500 flex items-center gap-2">
            <BotIcon className="size-5" />

            {data.reviewsCount === 1 ? (
              <span>{data.reviewsCount} avaliação</span>
            ) : (
              <span>{data.reviewsCount} avaliações</span>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
