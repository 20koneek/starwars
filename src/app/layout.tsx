import { PropsWithChildren, ReactNode } from 'react'
import { Box } from '@mui/material'

export const Layout = ({ header, children }: PropsWithChildren<{ header: ReactNode }>) => (
  <Box
    sx={{
      display: 'grid',
      gap: 2,
      gridTemplate: `
        "header header header" auto 
        ". main ." auto /
        auto 1fr auto
      `,
    }}
  >
    {header}

    <Box component="main" sx={{ width: '100%', gridArea: 'main' }}>
      {children}
    </Box>
  </Box>
)
