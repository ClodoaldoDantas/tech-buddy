'use server'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteUserReview(reviewId: string) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      success: false,
      message: 'Usuário não autenticado. Por favor, faça login para continuar.',
    }
  }

  const review = await prisma.review.findFirst({
    where: {
      id: reviewId,
    },
  })

  if (!review) {
    return {
      success: false,
      message: 'Avaliação não encontrada.',
    }
  }

  if (review.userId !== session.user.id) {
    return {
      success: false,
      message: 'Você não tem permissão para excluir esta avaliação.',
    }
  }

  try {
    await prisma.review.delete({
      where: {
        id: reviewId,
      },
    })
  } catch (err) {
    console.error('Erro ao excluir avaliação:', err)

    return {
      success: false,
      message:
        'Ocorreu um erro ao excluir a avaliação. Por favor, tente novamente mais tarde.',
    }
  }

  revalidatePath('/profile')

  return {
    success: true,
    message: 'Avaliação excluída com sucesso.',
  }
}
