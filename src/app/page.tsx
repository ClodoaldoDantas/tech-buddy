import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth'

export default function Home() {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <form
        action={async () => {
          'use server'
          await signIn('github')
        }}
      >
        <Button type="submit" size="lg">
          Entrar com Github
        </Button>
      </form>
    </div>
  )
}
