import { prisma } from '@/lib/prisma'

export async function getTechnologies(term?: string) {
  const technologies = await prisma.technology.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      name: {
        contains: term,
      },
    },
  })

  return { technologies }
}
