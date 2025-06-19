import { Stars } from '@/components/stars'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Review } from '@/types/review'

type TechReviewItemProps = {
  review: Review
}

export function TechReviewItem({ review }: TechReviewItemProps) {
  const formattedUpdatedAt = new Date(review.updatedAt).toLocaleDateString(
    'pt-BR',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  )

  return (
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
            {formattedUpdatedAt}
          </span>
        </div>

        <p className="text-muted-foreground mt-1">{review.comment}</p>
      </div>
    </div>
  )
}
