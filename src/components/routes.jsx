import { createBrowserRouter } from "react-router-dom";

import Homepage from "./homepage.jsx";
import Shop from "./shop.jsx";
import ErrorPage from "./errorpage.jsx";

const routes = [
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
  }
];

const router = createBrowserRouter(routes, {
  basename: '/buyWithBetty',
});

export default router;