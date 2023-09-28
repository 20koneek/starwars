import { PropsWithChildren } from 'react'
import { List, Pagination } from '@mui/material'
import { useQueryPage } from '../../hooks'

const PER_PAGE = 10

export const PaginationTable = ({ count, children }: PropsWithChildren<{ count: number }>) => {
  const [page, setPage] = useQueryPage()
  const pages = Math.ceil(count / PER_PAGE)

  return (
    <div>
      <List>
        {children}
      </List>

      <Pagination
        count={pages}
        page={page}
        color="primary"
        onChange={(_, newPage) => {
          setPage(newPage)
        }}
      />
    </div>
  )
}