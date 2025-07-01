'use client'

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { useQueryParams } from '@/hooks/use-query-params'
import { Button } from './ui/button'

interface PaginationProps {
  page: number
  totalCount: number
  perPage: number
}

export function Pagination({ page, totalCount, perPage }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  const { setParams } = useQueryParams()

  function handlePageChange(newPage: number) {
    setParams({ page: newPage.toString() })
  }

  return (
    <div className="w-full flex items-center justify-between">
      <span className="hidden sm:block text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="ml-auto sm:ml-0 flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {page} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => handlePageChange(1)}
            disabled={page === 1}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>

          <Button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button
            onClick={() => handlePageChange(page + 1)}
            disabled={pages <= page}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button
            onClick={() => handlePageChange(pages)}
            disabled={pages <= page}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
