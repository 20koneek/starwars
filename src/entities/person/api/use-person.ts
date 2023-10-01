import { getUrl, type Person } from '../../../shared/api'
import { selectorFamily, useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'
import { updatedPersonsState } from '../model/updated-persons.state'

let abort: AbortController | undefined = undefined

const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (peopleId: string) => async (): Promise<Person> => {
    // abort?.abort()
    // abort = new AbortController()

    const response = await fetch(
      getUrl({ path: `people/${peopleId}` }),
      // { signal: abort.signal },
    )

    return response.json() as any
  },
})

const testtt = selectorFamily({
  key: 'FilteredTodoList',
  get: (peopleId: string) => ({ get }) => {
    const person = get(userNameQuery(peopleId))
    const updatedPersons = get(updatedPersonsState)
    const updatedPerson = updatedPersons[person.url] ?? {}

    return {
      ...person,
      ...updatedPerson,
    }
  },
})
export const usePerson = () => {
  const { peopleId } = useParams() as { peopleId: string }

  return useRecoilValue(testtt(peopleId))
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
