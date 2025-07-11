import { Stars } from '@/components/stars'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Technology } from '@/features/technologies/types'
import { auth } from '@/lib/auth'
import { CreateReviewForm } from '../../reviews/components/create-review-form'
import { TotalRatings } from './total-ratings'

type TechCardDetailsProps = {
  technology: Technology
}

export async function TechCardDetails({ technology }: TechCardDetailsProps) {
  const session = await auth()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl font-bold">
          {technology.name}
        </CardTitle>
        <CardDescription className="min-h-14 text-base sm:text-lg">
          {technology.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
        <Stars value={technology.averageRating} />
        <TotalRatings total={technology.reviewsCount} />

        {session?.user && (
          <CreateReviewForm
            technologyId={technology.id}
            technologySlug={technology.slug}
          />
        )}
      </CardFooter>
    </Card>
  )
}
