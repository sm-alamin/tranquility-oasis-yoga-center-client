import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllInstructors from "../pages/Instructors/AllInstructors";
import Classes from "../pages/Classes/Classes";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
        {
            path: '/instructors',
            element: <AllInstructors />,
        },
        {
            path: '/classes',
            element: <Classes />,
        }
      ]
    },
  ]);

  export default router;