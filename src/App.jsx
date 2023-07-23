import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Controller from './Controller'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Controller></Controller>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
