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
      <header className="py-8 leading-relaxed">
        <h1 className="text-2xl text-zinc-900 font-bold">Minhas Avaliações</h1>
        <p className="text-muted-foreground text-lg">
          Gerencie todas as suas avaliações de tecnologias
        </p>
      </header>

      <UserReviewList />
    </main>
  )
}
