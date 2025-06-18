import { Button } from '@/components/ui/button'
import { TechReviewsCard } from '@/features/reviews/components/tech-reviews-card'
import { getTechnologyWithReviews } from '@/features/technologies/actions/get-technology'
import { TechCardDetails } from '@/features/technologies/components/tech-card-details'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { technology } = await getTechnologyWithReviews(slug)

  if (!technology) {
    notFound()
  }

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

      <TechCardDetails data={technology} />
      <TechReviewsCard reviews={technology.reviews} />
    </main>
  )
}
