import { getUserReviews } from '../actions/get-user-reviews'
import { UserReviewItem } from './user-review-item'

export async function UserReviewList() {
  const { reviews } = await getUserReviews()

  return (
    <section className="space-y-4">
      {reviews.map((review) => (
        <UserReviewItem key={review.id} review={review} />
      ))}
    </section>
  )
}
