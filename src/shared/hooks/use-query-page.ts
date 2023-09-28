import { useSearchParams } from 'react-router-dom'
import { useCallback } from 'react'

export const useQueryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let page = 1

  try {
    page = Number(searchParams.get('page')) || 1
  } catch {
  }

  const setPage = useCallback((newPage: number) => {
    setSearchParams((prevSearchParams) => {
      const result = new URLSearchParams(prevSearchParams)
      result.set('page', newPage.toString())
      return result
    })
  }, [setSearchParams])

  return [page, setPage] as const
}
