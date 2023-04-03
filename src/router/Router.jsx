import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import QuemSou from "../pages/QuemSou";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    Children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
    ],
  },
]);
