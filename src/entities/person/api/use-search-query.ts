import { useSearchParams } from 'react-router-dom'
import { useRef } from 'react'

export const useSearchQuery = () => {
  const cacheSearch = useRef<string | null>('')
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  let page = searchParams.get('page')

  if (search !== cacheSearch.current) page = null
  cacheSearch.current = search

  const result = new URLSearchParams()
  if (search) result.set('search', search)
  if (page) result.set('page', page)

  return result.toString()
}