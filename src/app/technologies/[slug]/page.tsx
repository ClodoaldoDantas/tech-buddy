import { Button } from '@/components/ui/button'
import { getReviews } from '@/features/reviews/actions/get-reviews'
import { TechReviewList } from '@/features/reviews/components/tech-review-list'
import { getTechnologyWithReviews } from '@/features/technologies/actions/get-technology'
import { TechCardDetails } from '@/features/technologies/components/tech-card-details'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function TechnologyPage(props: {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ page?: string }>
}) {
  const { slug } = await props.params
  const { technology } = await getTechnologyWithReviews(slug)

  if (!technology) {
    notFound()
  }

  const searchParams = await props.searchParams
  const page = Number(searchParams?.page) || 1
  const { reviews, totalCount } = await getReviews(technology.id, page)

  return (
    <main className="max-w-4xl w-full mx-auto px-4 py-8 space-y-4">
      <Button
        className="font-normal text-base text-zinc-600"
        variant="ghost"
        asChild
      >
        <Link href="/">
          <ChevronLeftIcon className="size-5" />
          Voltar para a lista de tecnologias
        </Link>
      </Button>

      <TechCardDetails technology={technology} />

      <TechReviewList
        reviews={reviews}
        currentPage={page}
        totalCount={totalCount}
      />
    </main>
  )
}
