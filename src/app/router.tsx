import { createBrowserRouter } from 'react-router-dom'
import { PeoplePage } from '../pages/people'
import { PersonPage } from '../pages/person'
import { Layout } from './layout'
import { Header } from '../shared/ui'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout header={<Header/>}>
        <PeoplePage/>
      </Layout>
    ),
  },
  {
    path: '/people/:peopleId',
    element: (
      <Layout header={<Header/>}>
        <PersonPage/>
      </Layout>
    ),
  },
])