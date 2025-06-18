import { prisma } from '@/lib/prisma'

export async function getReviews(technologyId: string, page: number) {
  const pageSize = 5

  const reviews = await prisma.review.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    where: {
      technologyId,
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
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

  const totalReviews = await prisma.review.count({
    where: {
      technologyId,
    },
  })

  return {
    reviews,
    totalReviews,
  }
}
