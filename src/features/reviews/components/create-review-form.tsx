'use client'

import { StarsSelect } from '@/components/stars-select'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useQueryParams } from '@/hooks/use-query-params'
import { NotebookPenIcon } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { createReview } from '../actions/create-review'

type CreateReviewFormProps = {
  technologyId: string
  technologySlug: string
}

export function CreateReviewForm({
  technologyId,
  technologySlug,
}: CreateReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const { setParams } = useQueryParams()

  const resetForm = () => {
    setRating(0)
    setComment('')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = await createReview({
      rating,
      comment,
      technologyId,
      technologySlug,
    })

    if (result.success) {
      toast.success(result.message)
      setParams({ page: null })
      resetForm()
    } else {
      toast.error(result.message)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="sm:ml-auto">
          <NotebookPenIcon />
          Escrever uma avaliação
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escreva uma avaliação</DialogTitle>
          <DialogDescription>
            Avalie a tecnologia e deixe sua opinião para ajudar outros
            desenvolvedores.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <StarsSelect value={rating} onChange={(value) => setRating(value)} />

          <div className="space-y-2 mb-4">
            <Label htmlFor="comment">
              Seu comentário <span className="text-red-400">*</span>
            </Label>

            <Textarea
              id="comment"
              placeholder="Deixe seu comentário..."
              className="min-h-36"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>

            <Button type="submit">Salvar avaliação</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
