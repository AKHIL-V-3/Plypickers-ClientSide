// import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from './pages/Home'
import SignupPage from './pages/Auth/Signup'
import LoginPage from './pages/Auth/Signin'
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import UserDashboard from "./pages/Home/Dashboard/UserDashboard";
import AdminDashboard from "./pages/Home/Dashboard/AdminDashboard";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children:[
            {
              path:"/",
              element:<UserDashboard/>
            },
            {
              path:"admin",
              element:<AdminDashboard/>
            }
      ]

    },
    {
      path: "/signup",
      element: <SignupPage />
    },
    {
      path: "/signin",
      element: <LoginPage />
    }
  ])

  return (
    <>

      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  )
}

export default App
