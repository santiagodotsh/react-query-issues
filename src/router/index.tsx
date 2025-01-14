import { createBrowserRouter, Navigate } from 'react-router-dom'
import { App } from '../app'
import { ListView } from '../issues/views/list-view'
import { IssueView } from '../issues/views/issue-view'

export const router = createBrowserRouter([
  {
    path: '/issues',
    element: <App />,
    children: [
      { path: 'list', element: <ListView /> },
      { path: 'issue/:number', element: <IssueView /> },
      { path: '*', element: <Navigate to='list' /> }
    ]
  },
  {
    path: '/',
    element: <Navigate to='issues/list' />
  },
  {
    path: '*',
    element: <h1>Not found</h1>
  }
])
