'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { FormEvent } from 'react'

export function SearchForm() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchTerm = formData.get('search') as string
    const params = new URLSearchParams(searchParams)

    if (searchTerm) {
      params.set('search', searchTerm)
    } else {
      params.delete('search')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSearch} className="flex items-center gap-4">
          <Input
            type="search"
            name="search"
            placeholder="Digite o nome da tecnologia. Ex: React"
            className="w-full h-10"
            defaultValue={searchParams.get('search')?.toString()}
          />

          <Button type="submit" size="lg">
            <SearchIcon className="size-5" />
            Buscar tecnologia
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
