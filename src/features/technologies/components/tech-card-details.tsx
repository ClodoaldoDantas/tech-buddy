import { Stars } from '@/components/stars'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Technology } from '@/types/technology'
import { NotebookPenIcon } from 'lucide-react'
import { TotalRatings } from './total-ratings'

export function TechCardDetails({ data }: { data: Technology }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{data.name}</CardTitle>
        <CardDescription className="min-h-14 text-lg">
          {data.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center gap-6">
        <Stars value={data.averageRating} />
        <TotalRatings total={data.reviewsCount} />

        <Button className="ml-auto">
          <NotebookPenIcon />
          Escrever uma avaliação
        </Button>
      </CardFooter>
    </Card>
  )
}
