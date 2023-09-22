import { createBrowserRouter, defer } from 'react-router-dom'
import { PersonPage } from '../pages/person'
import { PeoplePage } from '../pages/people'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PeoplePage/>,
    loader: async ({ request, params }) => (
      defer({
        data: fetch(
          `https://swapi.dev/api/people`,
          { signal: request.signal },
        ),
      })
    ),
  },
  {
    path: '/people/:peopleId',
    element: <PersonPage/>,
  },
])