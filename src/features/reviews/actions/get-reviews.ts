import { REVIEWS_PER_PAGE } from '@/features/technologies/utils/constants'
import { prisma } from '@/lib/prisma'

export async function getReviews(technologyId: string, page: number) {
  const reviews = await prisma.review.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    where: {
      technologyId,
    },
    take: REVIEWS_PER_PAGE,
    skip: (page - 1) * REVIEWS_PER_PAGE,
    select: {
      id: true,
      rating: true,
      comment: true,
      updatedAt: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  })

  const totalCount = await prisma.review.count({
    where: {
      technologyId,
    },
  })

  return {
    reviews,
    totalCount,
  }
}
