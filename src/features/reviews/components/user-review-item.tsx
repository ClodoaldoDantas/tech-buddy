import { Stars } from '@/components/stars'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatDate } from '@/utils/date'
import { CalendarIcon } from 'lucide-react'
import type { Review } from '../types'
import { DeleteUserReviewButton } from './delete-user-review-button'

export function UserReviewItem({ review }: { review: Review }) {
  return (
    <Card className="relative gap-4" key={review.id}>
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          {review.technology?.name}
        </CardTitle>

        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-5">
          <Stars value={review.rating} />

          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarIcon className="size-4" />
            <span>{formatDate(review.updatedAt)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p>{review.comment}</p>
      </CardContent>

      <CardFooter className="absolute px-0 top-4 right-4 flex items-center gap-4">
        <DeleteUserReviewButton reviewId={review.id} />
      </CardFooter>
    </Card>
  )
}
