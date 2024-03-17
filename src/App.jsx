// import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from './pages/Home'
import SignupPage from './pages/Auth/Signup'
import LoginPage from './pages/Auth/Signin'
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { MantineProvider } from "@mantine/core";
import UserDashboard from "./pages/Home/Dashboard/UserDashboard";
import AdminDashboard from "./pages/Home/Dashboard/AdminDashboard";
import UserViewProduct from "./pages/Viewproduct/UserViewproduct";
import AdminViewProduct from "./pages/Viewproduct/AdminViewproduct/index";
import AdminViewreviewProduct from "./pages/Viewproduct/AdminViewReviewProduct";
import UserSideRequests from "./pages/UsersideRequests";

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
            
      ]

    },
    {
      path:"/admin",
      element:<AdminDashboard/>,
    
    },
    {
      path: "/signup",
      element: <SignupPage />
    },
    {
      path: "/signin",
      element: <LoginPage />
    },
    {
      path: "/viewproduct",
      element: <UserViewProduct />
    },
    {
      path: "/admin/viewproduct",
      element: <AdminViewProduct />
    },
    {
      path: "/admin/viewreviewproduct",
      element: <AdminViewreviewProduct />
    },
    {
      path: "/requests",
      element: <UserSideRequests />
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
