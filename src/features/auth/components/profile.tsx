import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { StarIcon } from 'lucide-react'
import type { User } from 'next-auth'
import { SignOutButton } from './sign-out-button'

export function Profile({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 cursor-pointer">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user.image ?? ''} alt={user?.name ?? ''} />
          <AvatarFallback className="rounded-lg">
            {user.name?.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <span>Meu Perfil</span>
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

        <DropdownMenuItem>
          <StarIcon />
          Minhas Avaliações
        </DropdownMenuItem>

        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
