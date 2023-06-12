import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllInstructors from "../pages/Instructors/AllInstructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/Student/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import AllClasses from "../pages/Dashboard/Instructor/AllClasses/AllClasses";
import UpdateClass from "../pages/Dashboard/Instructor/AddClass/UpdateClass";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/Allusers";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import ErrorPage from "../pages/Error/ErrorPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: 'payment', 
        element: <Payment/>,
      },
      
      {
        path: 'all-users', 
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: 'manage-classes', 
        element: <AdminRoute><ManageClasses /></AdminRoute>
      },
      {
        path: 'add-class', 
        element: <InstructorRoute><AddClass /></InstructorRoute>
      },
      {
        path: 'all-classes', 
        element: <InstructorRoute><AllClasses /></InstructorRoute>
      },
      {
        path: 'update-classes/:id', 
        element: <InstructorRoute><UpdateClass /></InstructorRoute>
      },

      
    ]
  }
]);

export default router;
