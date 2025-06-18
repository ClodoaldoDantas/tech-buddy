'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export function useQueryParams() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const params = useMemo(() => {
    const params: Record<string, string | null> = {}

    searchParams.forEach((value, key) => {
      params[key] = value || null
    })

    return params
  }, [searchParams])

  const setParams = (newParams: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams)

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === '') {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    params,
    setParams,
  }
}
