import { useSearchParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export const useSearchQuery = () => {
  const cacheSearch = useRef<string | null>('')
  const [mounted, setMounted] = useState(false)

  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  let page = searchParams.get('page')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted && search !== cacheSearch.current) page = null
  cacheSearch.current = search

  const result = new URLSearchParams()
  if (search) result.append('search', search)
  if (page) result.append('page', page)

  return result.toString()
}