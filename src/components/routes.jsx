import { createBrowserRouter } from "react-router-dom";

import Homepage from "./homepage.jsx";
import Shop from "./shop.jsx";
import ErrorPage from "./errorpage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
  }
]);

export default router;