import { Card, CardContent, CardHeader, LinearProgress } from '@mui/material'
import { PaginationTable } from '../../../shared/ui'
import { PersonComponent, usePeople } from '../../../entities/person'
import { Search } from '../../../features/search/ui/search'
import { useCache } from '../../../shared/hooks'

export const PeoplePage = () => {
  const { data, isLoading } = usePeople()

  const cashedCount = useCache(data?.count, isLoading)

  return (
    <Card>
      <CardHeader
        title="People"
        action={
          <Search/>
        }
      />

      <CardContent>
        {isLoading && (
          <LinearProgress/>
        )}
        {cashedCount && (
          <PaginationTable count={cashedCount}>
            {data?.results.map((person) => (
              <PersonComponent
                key={person.url}
                person={person}
              />
            ))}
          </PaginationTable>
        )}
      </CardContent>
    </Card>
  )
}

