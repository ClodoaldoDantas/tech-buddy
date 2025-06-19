import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function getUserReviews() {
  const session = await auth()

  if (!session?.user?.id) {
    throw new Error('User not authenticated')
  }

  const reviews = await prisma.review.findMany({
    where: {
      userId: session.user.id,
    },
    select: {
      id: true,
      comment: true,
      rating: true,
      updatedAt: true,
      technology: {
        select: {
          name: true,
        },
      },
    },
  })

  return { reviews }
}
