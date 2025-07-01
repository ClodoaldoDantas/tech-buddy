import { PageHeader } from '@/components/page-header'
import { UserReviewList } from '@/features/reviews/components/user-review-list'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <main className="max-w-7xl w-full mx-auto px-4">
      <PageHeader
        title="Minhas Avaliações"
        description="Gerencie todas as suas avaliações de tecnologias"
      />

      <UserReviewList />
    </main>
  )
}
