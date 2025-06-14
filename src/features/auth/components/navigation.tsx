import { auth } from '@/lib/auth'
import { Profile } from './profile'
import { SignInForm } from './sign-in-form'

export async function Navigation() {
  const session = await auth()

  return (
    <nav>
      {session?.user ? <Profile user={session.user} /> : <SignInForm />}
    </nav>
  )
}
