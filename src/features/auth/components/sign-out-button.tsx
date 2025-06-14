'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  const handleSignOut = async () => {
    signOut({
      redirectTo: '/',
    })
  }

  return (
    <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
      <LogOutIcon />
      Sair da Conta
    </DropdownMenuItem>
  )
}
