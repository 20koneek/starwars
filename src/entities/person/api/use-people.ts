import { getUrl, ListQuery, type Person } from '../../../shared/api'
import { useSearchQuery } from '../../../shared/hooks'
import { selectorFamily, useRecoilValue } from 'recoil'
import { updatedPersonsState } from '../model/updated-persons.state'

// let abort: AbortController | undefined = undefined

const userNameQuery = selectorFamily({
  key: 'UserName3',
  get: (query: string) => async (): Promise<ListQuery<Person>> => {
    // abort?.abort()
    // abort = new AbortController()

    const response = await fetch(
      getUrl({ path: 'people', query }),
      // { signal: abort.signal },
    )

    return response.json() as any
  },
})

const testtt = selectorFamily({
  key: 'FilteredTodoList2',
  get: (query: string) => ({ get }) => {
    const people = get(userNameQuery(query))
    const updatedPersons = get(updatedPersonsState)
    // const updatedPerson = updatedPersons[person.url] ?? {}

    return people
    // return {
    //   ...person,
    //   ...updatedPerson,
    // }
  },
})
export const usePeople = () => {
  // const { peopleId } = useParams() as { peopleId: string }
  const query = useSearchQuery()
//
//   return useQuery({
//     queryKey: [query],
//     queryFn: async ({ signal }): Promise<ListQuery<Person>> => {
//       const response = await fetch(
//         getUrl({ path: 'people', query }),
//         { signal },
//       )
//
//       return response.json() as any
//     },
//   })
  return useRecoilValue(testtt(query))
}
//
// return useQuery({
//   queryKey: [peopleId],
//   queryFn:
// })
// }

// export const usePerson = () => {
//   const { peopleId } = useParams() as { peopleId: string }
//
//   return useQuery({
//     queryKey: [peopleId],
//     queryFn: async ({ signal }): Promise<Person> => {
//       const response = await fetch(
//         getUrl({ path: `people/${peopleId}` }),
//         { signal },
//       )
//
//       return response.json() as any
//     },
//   })
// }
//
// export const usePeople = () => {
//   const query = useSearchQuery()
//
//   return useQuery({
//     queryKey: [query],
//     queryFn: async ({ signal }): Promise<ListQuery<Person>> => {
//       const response = await fetch(
//         getUrl({ path: 'people', query }),
//         { signal },
//       )
//
//       return response.json() as any
//     },
//   })
// }