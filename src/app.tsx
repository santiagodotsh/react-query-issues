import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <div className='container m-auto max-w-7xl mt-3'>
      <h1>Git <small>Issue tracking</small></h1>
      
      <Outlet />
    </div>
  )
}
