import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => (
  <Box sx={{ padding: 2 }}>
    {children}
  </Box>
)
