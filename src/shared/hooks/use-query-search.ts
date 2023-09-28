import { useSearchParams } from 'react-router-dom'
import { useCallback } from 'react'

export const useQuerySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const setSearch = useCallback((search: string) => {
    setSearchParams(search ? { search } : {})
  }, [setSearchParams])

  return [searchParams.get('search') ?? '', setSearch] as const
}
