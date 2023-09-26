import { useNavigate } from 'react-router-dom'
import { usePage } from './use-page'

export const usePageNavigate = () => {
  const page = usePage()
  const navigate = useNavigate()
  const nextPage = (newPage: number) => {
    navigate({
      search: `?page=${newPage}`,
    })
  }

  return [
    page,
    nextPage,
  ] as const
}
