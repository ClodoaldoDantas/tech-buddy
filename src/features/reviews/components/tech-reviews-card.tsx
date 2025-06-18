import { Stars } from '@/components/stars'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Review } from '@/types/review'
import { MessageCircleIcon } from 'lucide-react'

export function TechReviewsCard({ reviews }: { reviews: Review[] }) {
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
            <div className="flex items-center gap-4 pb-5 mb-5" key={review.id}>
              <Avatar className="size-10 rounded-full">
                <AvatarImage
                  src={review.user.image ?? ''}
                  alt={review.user?.name ?? ''}
                />
                <AvatarFallback className="rounded-full">
                  {review.user.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div>
                <strong className="text-zinc-900 font-medium">
                  {review.user.name}
                </strong>

                <div className="flex items-center gap-2">
                  <Stars value={review.rating} showValue={false} />
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.updatedAt).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <p className="text-muted-foreground mt-1">{review.comment}</p>
              </div>
            </div>
          ))}
        </section>
      </CardContent>
    </Card>
  )
}
