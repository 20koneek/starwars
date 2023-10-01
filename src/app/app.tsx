import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { router } from './router'
import { queryClient } from './queryClient'

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline/>

        <RouterProvider router={router}/>
      </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>
)
