import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <main className="max-w-7xl w-full mx-auto px-4">
      <h1>Perfil do Usuário</h1>
    </main>
  )
}
