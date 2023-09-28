import { useEffect, useRef, useState } from 'react'
import { useQuerySearch } from './use-query-search'

export const useCache = <T>(value: T, isLoading: boolean) => {
  const [search] = useQuerySearch()
  const [cachedValue, setCachedValue] = useState(value)
  const cachedSearch = useRef(search)

  useEffect(() => {
    if (!isLoading && value) setCachedValue( value)
  }, [value, isLoading])

  useEffect(() => {
    if (!isLoading) cachedSearch.current = search
  }, [search, isLoading])

  if (cachedSearch.current === search) {
    return cachedValue
  }

  return value
}
