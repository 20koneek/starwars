import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { router } from './router'
import { Layout } from './layout'
import { queryClient } from './queryClient'

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <Layout>
        <RouterProvider router={router}/>
      </Layout>
    </ThemeProvider>
  </QueryClientProvider>
)
