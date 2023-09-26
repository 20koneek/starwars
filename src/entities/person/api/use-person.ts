import { useQuery } from '@tanstack/react-query'
import { getUrl, type Person } from '../../../shared/api'

export const usePerson = (personId: string) => {
  return useQuery({
    queryKey: [personId],
    queryFn: async ({ signal }): Promise<Person> => {
      const response = await fetch(
        getUrl(`people/${personId}`),
        { signal },
      )

      return response.json() as any
    },
  })
}
