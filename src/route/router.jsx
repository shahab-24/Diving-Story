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
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/adventureDetails/:id",
        element: <AdventureDetails></AdventureDetails>,
        loader: async ({ params }) => {
          const res = await fetch('/Adventures.json');
          const adventures = await res.json();
          return adventures.find((card) => card.id === parseInt(params.id));
        },
      },
    ],
  },
  {
    path: "*",
    element: <h2>Error</h2>,
  },
]);

export default router;
