import { PropsWithChildren } from 'react'
import { Box } from '@mui/material'
import { Header } from '../shared/ui'

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header/>
    <Box component="main" sx={{ padding: 2 }}>
      {children}
    </Box>
  </>
)
