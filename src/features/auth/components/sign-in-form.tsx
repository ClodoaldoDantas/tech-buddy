import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'

import { signIn } from '@/lib/auth'

export function SignInForm() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github')
      }}
    >
      <Button type="submit" size="lg">
        <FaGithub />
        Entrar com Github
      </Button>
    </form>
  )
}
