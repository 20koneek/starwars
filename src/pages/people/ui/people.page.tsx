import { Card, CardContent } from '@mui/material'
import { PaginationTable } from '../../../shared/ui'
import { PersonComponent, usePeople } from '../../../entities/person'

export const PeoplePage = () => {
  const { data } = usePeople()

  if (!data) return <div></div>

  return (
    <Card>
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

