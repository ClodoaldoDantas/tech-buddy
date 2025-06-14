'use client'

import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { DropdownMenuItem } from '../ui/dropdown-menu'

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
