import { PropsWithChildren } from 'react'
import { List, Pagination } from '@mui/material'
import { usePageNavigate } from '../../hooks/use-page-navigate'

const PER_PAGE = 10

export const PaginationTable = ({ count, children }: PropsWithChildren<{ count: number }>) => {
  const [page, nextPage] = usePageNavigate()
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
          nextPage(newPage)
        }}
      />
    </div>
  )
}