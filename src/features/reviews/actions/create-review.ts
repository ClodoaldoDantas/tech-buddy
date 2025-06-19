'use server'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { validateFields } from '../../../utils/validate-fields'

type CreateReviewParams = {
  rating: number
  comment: string
  technologyId: string
  technologySlug: string
}

export async function createReview({
  rating,
  comment,
  technologyId,
  technologySlug,
}: CreateReviewParams) {
  const session = await auth()

  if (!session?.user || !session.user.id) {
    return {
      success: false,
      message: 'Usuário não autenticado. Por favor, faça login para continuar.',
    }
  }

  const userHasReviewed = await prisma.review.findFirst({
    where: {
      userId: session.user.id,
      technologyId,
    },
  })

  if (userHasReviewed) {
    return {
      success: false,
      message: 'Você já avaliou esta tecnologia.',
    }
  }

  const fieldsIsValid = validateFields({ rating, comment })

  if (!fieldsIsValid) {
    return {
      success: false,
      message: 'Por favor, preencha todos os campos corretamente.',
    }
  }

  try {
    await prisma.review.create({
      data: {
        rating,
        comment,
        technologyId,
        userId: session.user.id,
      },
    })
  } catch (err) {
    console.error('Erro ao criar avaliação:', err)

    return {
      success: false,
      message:
        'Ocorreu um erro ao criar a avaliação. Por favor, tente novamente mais tarde.',
    }
  }

  revalidatePath(`/technologies/${technologySlug}`)

  return {
    success: true,
    message: 'Avaliação criada com sucesso.',
  }
}
