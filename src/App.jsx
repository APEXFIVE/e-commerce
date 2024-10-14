import Home from './pages/home'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './pages/about'
function App() {
  
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  // {
  //   path:"/about",
  //   element: <About/>
  // }
  {
    path:"/about",
    element: <About/>
  }
])
  return (
    <RouterProvider router={router} />
  
  )
}

export default App
