import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
;


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>},

  {
    path: "*",
    element: <h2> Error</h2>,
  },
]);

export default router;

