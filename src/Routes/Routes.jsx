import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllInstructors from "../pages/Instructors/AllInstructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/Allusers";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import AllClasses from "../pages/Dashboard/Instructor/AllClasses/AllClasses";
import UpdateClass from "../pages/Dashboard/Instructor/AddClass/UpdateClass";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <AllInstructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>, 
    children: [
      {
        path: 'my-cart', 
        element: <MyCart/>,
      },
      {
        path: 'all-users', 
        element: <AllUsers />
      },
      {
        path: 'add-class', 
        element: <InstructorRoute><AddClass /></InstructorRoute>
      },
      {
        path: 'manage-class', 
        element: <InstructorRoute><AllClasses /></InstructorRoute>
      },
      {
        path: 'manage-class/:id', 
        element: <InstructorRoute><UpdateClass /></InstructorRoute>
      },
    ]
  }
]);

export default router;
