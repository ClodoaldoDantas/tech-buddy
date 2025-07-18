import { Pagination } from '@/components/pagination'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Review } from '@/features/reviews/types'
import { REVIEWS_PER_PAGE } from '@/utils/constants'
import { MessageCircleIcon } from 'lucide-react'
import { TechReviewItem } from './tech-review-item'

type TechReviewListProps = {
  reviews: Review[]
  currentPage: number
  totalCount: number
}

export async function TechReviewList({
  reviews,
  currentPage,
  totalCount,
}: TechReviewListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Reviews</CardTitle>
      </CardHeader>

      <CardContent>
        {reviews.length === 0 && (
          <div className="text-center py-8">
            <MessageCircleIcon className="size-12 text-zinc-400 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Nenhum review encontrado para esta tecnologia.
            </p>
          </div>
        )}

        <section className="divide-y divide-zinc-200">
          {reviews.map((review) => (
            <TechReviewItem key={review.id} review={review} />
          ))}
        </section>
      </CardContent>

      {reviews.length > 0 && (
        <CardFooter>
          <Pagination
            page={currentPage}
            totalCount={totalCount}
            perPage={REVIEWS_PER_PAGE}
          />
        </CardFooter>
      )}
    </Card>
  )
}
