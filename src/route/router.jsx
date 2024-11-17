import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import About from "../components/About";
import Login from "../components/Login";
import Signup from "../components/Signup";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";
import Services from "../components/Services";
;


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children : [
          {
        path: "",
        element: <Navigate to="/"></Navigate>
      },
      {
        path: "/about",
        element: <About></About>
      } ,
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
     
    ]
},

  {
    path: "*",
    element: <h2> Error</h2>,
  },
]);

export default router;

