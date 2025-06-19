import { Stars } from '@/components/stars'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatDate } from '@/utils/date'
import { CalendarIcon, EditIcon, TrashIcon } from 'lucide-react'
import { getUserReviews } from '../actions/get-user-reviews'

export async function UserReviews() {
  const { reviews } = await getUserReviews()

  return (
    <ul className="space-y-4">
      {reviews.map((review) => (
        <Card className="relative gap-4" key={review.id}>
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              {review.technology.name}
            </CardTitle>

            <div className="flex items-center gap-5">
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
            <Button variant="destructive">
              <TrashIcon className="size-5" />
              Remover
            </Button>

            <Button variant="outline">
              <EditIcon className="size-5" />
              Editar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </ul>
  )
}
