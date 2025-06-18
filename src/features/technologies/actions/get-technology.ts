import { prisma } from '@/lib/prisma'

export async function getTechnologyWithReviews(slug: string) {
  const result = await prisma.$transaction(async (tx) => {
    const tech = await tx.technology.findUnique({
      where: {
        slug,
      },
    })

    if (!tech) {
      return {
        technology: null,
      }
    }

    const [stats] = await tx.review.groupBy({
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
      reviewsCount: stats?._count._all || 0,
      averageRating: stats?._avg.rating || 0,
    }

    return { technology }
  })

  return result
}
