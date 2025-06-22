'use client'

import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import { toast } from 'sonner'
import { deleteUserReview } from '../actions/delete-user-review'

export function DeleteUserReviewButton({ reviewId }: { reviewId: string }) {
  const handleDeleteReview = async () => {
    if (!confirm('Tem certeza que deseja remover esta avaliação?')) {
      return
    }

    const result = await deleteUserReview(reviewId)

    if (result.success) {
      toast.success(result.message)
    } else {
      toast.error(result.message)
    }
  }

  return (
    <Button onClick={handleDeleteReview} variant="destructive">
      <TrashIcon className="size-5" />
      Remover
    </Button>
  )
}
