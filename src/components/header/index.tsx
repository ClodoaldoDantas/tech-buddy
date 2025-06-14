import { auth } from '@/lib/auth'
import { MessageCircleCodeIcon } from 'lucide-react'
import Link from 'next/link'
import { NavUser } from './nav-user'
import { SignInForm } from './sign-in-form'

export async function Header() {
  const session = await auth()

  return (
    <header className="border-b border-gray-200 bg-white h-16">
      <div className="h-full max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link href="/" className=" flex items-center gap-2">
          <MessageCircleCodeIcon className="size-6 text-orange-600" />
          <span className="text-xl text-zinc-900 font-bold">Tech Buddy</span>
        </Link>

        {session?.user ? <NavUser user={session.user} /> : <SignInForm />}
      </div>
    </header>
  )
}
