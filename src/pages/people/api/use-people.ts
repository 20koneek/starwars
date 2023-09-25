import { useQuery } from '@tanstack/react-query'
import { usePage } from '../../../shared/hooks'
import { getUrl, type PeopleQuery, type Person } from '../../../shared/api'

export const usePeople = () => {
  const page = usePage()

  return useQuery({
    queryKey: [page],
    queryFn: async ({ signal }): Promise<PeopleQuery<Person>> => {
      const response = await fetch(
        getUrl('people', page),
        { signal },
      )

      return response.json() as any
    },
  })
}