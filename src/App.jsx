// import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from './pages/Home'
import SignupPage from './pages/Auth/Signup'
import LoginPage from './pages/Auth/Login'

function App() {

  const router = createBrowserRouter([
              {
                  path:"/",
                  element:<HomePage/>
              },
              {
                 path:"/signup",
                 element:<SignupPage/>
              },
              {
                path:"/login",
                element:<LoginPage/>
             }
  ])

  return (
    <>
       <RouterProvider router ={router}/>
    </>
  )
}

export default App
