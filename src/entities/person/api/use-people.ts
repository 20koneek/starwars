import { useQuery } from '@tanstack/react-query'
import { getUrl, type ListQuery, type Person } from '../../../shared/api'
import { useSearchQuery } from './use-search-query'

export const usePeople = (search: string) => {
  const query = useSearchQuery()

  return useQuery({
    queryKey: [query],
    queryFn: async ({ signal }): Promise<ListQuery<Person>> => {
      const response = await fetch(
        getUrl({ path: 'people', query }),
        { signal },
      )

      return response.json() as any
    },
  })
}