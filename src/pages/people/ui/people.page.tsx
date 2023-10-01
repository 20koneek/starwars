import { Card, CardContent, CardHeader, LinearProgress } from '@mui/material'
import { Search } from '../../../features/search/ui/search'
import { Suspense } from 'react'
import { PeopleList } from '../../../entities/person/ui/people-list'

export const PeoplePage = () => {
  // const { data, isLoading } = usePeople()

  // const cashedCount = useCache(data?.count, isLoading)

  return (
    <Card>
      <CardHeader
        title="People"
        action={
          <Search/>
        }
      />

      <CardContent>
        <Suspense fallback={<LinearProgress/>}>
          <PeopleList/>
        </Suspense>
      </CardContent>
    </Card>
  )
}

