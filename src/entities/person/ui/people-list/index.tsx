import { PaginationTable } from '../../../../shared/ui'
import { PersonComponent } from '../person'
import { usePeople } from '../../api/use-people'

export const PeopleList = () => {
  const data = usePeople()

  return (
    <PaginationTable count={100}>
      {data?.results.map((person) => (
        <PersonComponent
          key={person.url}
          person={person}
        />
      ))}
    </PaginationTable>
  )
}