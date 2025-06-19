import { Stars } from '@/components/stars'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { auth } from '@/lib/auth'
import type { Technology } from '@/types/technology'
import { CreateReviewForm } from './create-review-form'
import { TotalRatings } from './total-ratings'

type TechCardDetailsProps = {
  technology: Technology
}

export async function TechCardDetails({ technology }: TechCardDetailsProps) {
  const session = await auth()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{technology.name}</CardTitle>
        <CardDescription className="min-h-14 text-lg">
          {technology.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center gap-6">
        <Stars value={technology.averageRating} />
        <TotalRatings total={technology.reviewsCount} />

        {session?.user && <CreateReviewForm />}
      </CardFooter>
    </Card>
  )
}
