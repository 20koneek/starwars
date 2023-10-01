import { getUrl, ListQuery, type Person } from '../../../shared/api'
import { useQueryPage, useQuerySearch, useSearchQuery } from '../../../shared/hooks'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { updatedPersonsState } from '../model/updated-persons.state'
import { PER_PAGE } from '../../../shared/ui'
import { useMemo } from 'react'

const sortPerson = (p1: Person, p2: Person) => {
  if (p1.url > p2.url) return 1
  if (p1.url < p2.url) return -1
  return 0
}

export const usePeople = () => {
  const query = useSearchQuery()
  const updatedPersons = useRecoilValue(updatedPersonsState)
  const [search] = useQuerySearch()
  const [page] = useQueryPage()

  const { data, isLoading } = useQuery({
    queryKey: [query],
    queryFn: async ({ signal }): Promise<ListQuery<Person>> => {
      const response = await fetch(
        getUrl({ path: 'people', query }),
        { signal },
      )

      return response.json() as any
    },
  })

  const dataMemo = useMemo(()=>{
    const searchLowerCase = search.toLowerCase()

    let addUrls = Object.keys(updatedPersons).filter((url) => {
      const updatedValue = updatedPersons[url]

      return (
        !updatedValue.originalName.toLowerCase().includes(searchLowerCase) &&
        updatedValue.value.name.toLowerCase().includes(searchLowerCase)
      )
    })

    const removeUrls = Object.keys(updatedPersons).filter((url) => {
      const updatedValue = updatedPersons[url]
      return (
        updatedValue.originalName.toLowerCase().includes(searchLowerCase) &&
        !updatedValue.value.name.toLowerCase().includes(searchLowerCase)
      )
    })

    let updatedPeople = data && {
      ...data,
    }

    if (updatedPeople && data) {
      updatedPeople.results = updatedPeople.results.map((person) => {
        const updatedPerson = updatedPersons[person.url]?.value ?? {}

        return {
          ...person,
          ...updatedPerson,
        }
      }).filter((person) => (
        !removeUrls.some((url) => person.url === url)
      ))

      if (addUrls.length) {
        if (updatedPeople.results.length) {
          if (updatedPeople.count > 10) {
            if (page !== 1) {
              const firstPersonUrl = updatedPeople.results[0]
              addUrls = addUrls.filter((url) => url > firstPersonUrl.url)
            }
            if (page !== Math.ceil(updatedPeople.count / PER_PAGE)) {
              const lastPersonUrl = updatedPeople.results[updatedPeople.results.length - 1]
              addUrls = addUrls.filter((url) => url < lastPersonUrl.url)
            }
          }

          updatedPeople.results = [
            ...data.results,
            ...addUrls.map((url) => updatedPersons[url].value),
          ].sort((p1, p2) => {
            if (p1.url > p2.url) return 1
            if (p1.url < p2.url) return -1
            return 0
          })
        } else {
          updatedPeople.results = [
            ...addUrls.map((url) => updatedPersons[url].value),
          ]
        }

        updatedPeople.results.sort(sortPerson)
      }
    }
    return updatedPeople
  },[data, page, search, updatedPersons])

  return {
    data: dataMemo,
    isLoading,
  }
}