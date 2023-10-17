import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Donations from "../pages/Donations/Donations";
import Statistics from "../pages/Statistics/Statistics";
import CardDetails from "../components/CardDetails/CardDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          loader: () => fetch('/data.json'),
          element: <Home></Home>
        },
        {
          path: "/donation",
          element: <Donations></Donations>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: () => fetch('/data.json')
        },
        {
          path: "/details/:id",
          element: <CardDetails></CardDetails>,
          loader: () => fetch('/data.json')
        }
      ]
    },
  ]);

  export default router;