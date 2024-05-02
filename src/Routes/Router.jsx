import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/SIgnup/Signup";
import Signin from "../Pages/Signin";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout></Layout>,
          children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/signup',
                element : <Signup></Signup>
            },
            {
                path : '/signin',
                element : <Signin></Signin>
            }
        ]
        },
]);      


export default router;