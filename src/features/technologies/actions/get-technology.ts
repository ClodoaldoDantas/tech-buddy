import { prisma } from '@/lib/prisma'

export async function getTechnology(slug: string) {
  const tech = await prisma.technology.findUnique({
    where: {
      slug,
    },
  })

  if (!tech) {
    return {
      technology: null,
    }
  }

  const [review] = await prisma.review.groupBy({
    by: ['technologyId'],
    _avg: {
      rating: true,
    },
    _count: {
      _all: true,
    },
    where: {
      technologyId: tech.id,
    },
  })

  const technology = {
    ...tech,
    reviewsCount: review?._count._all || 0,
    averageRating: review?._avg.rating || 0,
  }

  return { technology }
}
