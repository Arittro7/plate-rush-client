import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([

  

  {
    path: "/",
    element: <Root />,
    error: <h1>404 Not Found</h1>,
    children:([
      {
        path: "/",
        element: <Home />
      }
    ])
  },
]);

export default router;