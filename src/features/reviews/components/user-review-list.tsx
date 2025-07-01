import { AlertCircleIcon } from 'lucide-react'
import { getUserReviews } from '../actions/get-user-reviews'
import { UserReviewItem } from './user-review-item'

export async function UserReviewList() {
  const { reviews } = await getUserReviews()

  return (
    <section className="space-y-4 pb-8">
      {reviews.length === 0 && (
        <div className="flex items-center gap-2">
          <AlertCircleIcon className="size-6 text-blue-400" />
          <p className="text-muted-foreground">
            Você ainda não avaliou nenhuma tecnologia. Avalie uma tecnologia
            para aparecer aqui.
          </p>
        </div>
      )}

      {reviews.map((review) => (
        <UserReviewItem key={review.id} review={review} />
      ))}
    </section>
  )
}
