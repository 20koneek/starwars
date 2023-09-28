import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@mui/material'
import { PaginationTable } from '../../../shared/ui'
import { PersonComponent, usePeople } from '../../../entities/person'
import { Search } from '../../../features/search/ui/search'

export const PeoplePage = () => {
  const [search, setSearch] = useState('')
  const { data, isLoading } = usePeople(search)

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(search)
    }, 250)
    return () => clearTimeout(timeout)
  }, [search])

  // console.log({ data, isLoading })
  if (!data) return <div></div>

  return (
    <Card>
      <CardHeader
        title="People"
        action={
          <Search/>
        }
      />

      <CardContent>
        <PaginationTable count={data.count}>
          {data.results.map((person) => (
            <PersonComponent
              key={person.url}
              person={person}
            />
          ))}
        </PaginationTable>
      </CardContent>
    </Card>
  )
}

