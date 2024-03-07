import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Content from './Content'
import MentionsLegales from './content/MentionsLegales'
import PolitiqueCookies from './content/PolitiqueCookies'

const router = createHashRouter([
  {
    path: '',
    element: <Content />
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />
  },
  {
    path: '/cookies',
    element: <PolitiqueCookies />
  }
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
