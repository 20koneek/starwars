import { useSearchParams } from 'react-router-dom'

export const usePage = () => {
  const [searchParams] = useSearchParams()

  try {
    return Number(searchParams.get('page'))
  } catch {
    return 0
  }
}
