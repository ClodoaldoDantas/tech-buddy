import { prisma } from '@/lib/prisma'

export async function getTechnologies(term?: string) {
  const result = await prisma.$transaction(async (tx) => {
    const dbReviews = await tx.review.groupBy({
      by: ['technologyId'],
      _count: {
        _all: true,
      },
      _avg: {
        rating: true,
      },
      where: {
        technology: {
          name: {
            contains: term,
          },
        },
      },
    })

    const dbTechnologies = await tx.technology.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
      },
      where: {
        name: {
          contains: term,
        },
      },
    })

    const technologies = dbTechnologies.map((tech) => {
      const review = dbReviews.find((review) => review.technologyId === tech.id)

      return {
        ...tech,
        reviewsCount: review?._count._all || 0,
        averageRating: review?._avg.rating || 0,
      }
    })

    return { technologies }
  })

  return result
}
