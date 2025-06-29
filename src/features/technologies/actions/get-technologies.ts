import { prisma } from '@/lib/prisma'
import { TECHNOLOGIES_PER_PAGE } from '../../../utils/constants'

type GetTechnologiesParams = {
  term?: string
  page: number
}

export async function getTechnologies(params: GetTechnologiesParams) {
  const dbTechnologies = await prisma.technology.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      name: {
        contains: params.term,
      },
    },
    take: TECHNOLOGIES_PER_PAGE,
    skip: (params.page - 1) * TECHNOLOGIES_PER_PAGE,
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      reviews: {
        select: {
          rating: true,
        },
      },
    },
  })

  const totalCount = await prisma.technology.count({
    where: {
      name: {
        contains: params.term,
      },
    },
  })

  const technologies = dbTechnologies.map((tech) => {
    const totalReviews = tech.reviews.length

    if (totalReviews === 0) {
      return {
        ...tech,
        reviewsCount: 0,
        averageRating: 0,
      }
    }

    const sumReviews = tech.reviews.reduce((acc, { rating }) => acc + rating, 0)
    const averageRating = sumReviews / totalReviews

    return {
      ...tech,
      reviewsCount: totalReviews,
      averageRating,
    }
  })

  return { technologies, totalCount }
}
