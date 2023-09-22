import { RouterProvider } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { router } from './router'
import { Layout } from './layout'

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>

    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  </ThemeProvider>
)
