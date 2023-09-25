import { PaginationTable } from '../../shared/ui'
import { usePeople } from './api/use-people'

export const PeoplePage = () => {
  const { data } = usePeople()
  // if (isLoading) return <div>Loading...</div>
  return (
    <div>
      {data?.toString()}

      <PaginationTable
        count={10}
        items={[]}
      />
    </div>
  )
}

