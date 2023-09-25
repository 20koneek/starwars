import { List, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PersonComponent } from '../../../entities/person'
import { Person } from '../../api'
import { usePage } from '../../hooks'

export const PaginationTable = ({ count, items }: { count: number, items: unknown[] }) => {
  const page = usePage()
  const navigate = useNavigate()

  return (
    <div>
      <List>
        {items.map((data) => (
          // @ts-ignore
          <PersonComponent key={data.url} person={data as Person}/>
        ))}
      </List>

      <Pagination
        count={Math.ceil(count / items.length)}
        page={page}
        color="primary"
        onChange={(e, p) => {
          navigate({
            search: `?page=${p}`,
          })
        }}
      />
    </div>
  )
}