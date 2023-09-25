import { createBrowserRouter } from 'react-router-dom'
import { PeoplePage } from '../pages/people'
import { PersonPage } from '../pages/person'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PeoplePage/>,
  },
  {
    path: '/people/:peopleId',
    element: <PersonPage/>,
  },
])