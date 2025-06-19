import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getFirstLetter, getFirstName } from '@/utils/strings'
import { StarIcon } from 'lucide-react'
import type { User } from 'next-auth'
import Link from 'next/link'
import { SignOutButton } from './sign-out-button'

export function Profile({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 cursor-pointer">
        <Avatar className="size-8 rounded-full">
          <AvatarImage src={user.image ?? ''} alt={user?.name ?? ''} />
          <AvatarFallback className="rounded-full">
            {getFirstLetter(user.name)}
          </AvatarFallback>
        </Avatar>

        <span>Olá, {getFirstName(user.name)}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="px-1 py-1.5 text-left text-sm">
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-sm">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/profile">
            <StarIcon />
            Minhas Avaliações
          </Link>
        </DropdownMenuItem>

        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
