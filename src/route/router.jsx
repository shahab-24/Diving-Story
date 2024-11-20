import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import About from "../components/About";
import Login from "../components/Login";
import Signup from "../components/Signup";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";
import Services from "../components/Services";
import Home from "../components/Home";
import AdventureDetails from "../components/AdventureDetails";
import ErrorPage from "../components/ErrorPage";
import Gallery from "../components/Gallery";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: "/userProfile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
      },
    
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/adventureDetails/:id",
        element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch('/Adventures.json');
          const adventures = await res.json();
          
          const adventure = adventures.find((card) => card.id === parseInt(params.id));
          return adventure || null; 
        },
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },

]);

export default router;
