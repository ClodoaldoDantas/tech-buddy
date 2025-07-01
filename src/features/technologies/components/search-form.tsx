'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useQueryParams } from '@/hooks/use-query-params'
import { SearchIcon } from 'lucide-react'
import type { FormEvent } from 'react'

export function SearchForm() {
  const { params, setParams } = useQueryParams()

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchTerm = formData.get('search') as string

    setParams({ search: searchTerm ?? null, page: '1' })
  }

  return (
    <Card>
      <CardContent>
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Input
            type="search"
            name="search"
            placeholder="Digite o nome da tecnologia"
            className="w-full h-10"
            defaultValue={params.search ?? ''}
          />

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            <SearchIcon className="size-5" />
            Buscar tecnologia
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
