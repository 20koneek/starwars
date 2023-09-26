import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { router } from './router'
import { Layout } from './layout'
import { queryClient } from './queryClient'
import { Header } from '../shared/ui'

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <Layout
        header={<Header/>}
      >
        <RouterProvider router={router}/>
      </Layout>
    </ThemeProvider>
  </QueryClientProvider>
)
