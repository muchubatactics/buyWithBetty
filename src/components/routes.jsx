import { createBrowserRouter } from "react-router-dom";

import Homepage from "./homepage.jsx";
import Shop from "./shop.jsx";
import ErrorPage from "./errorpage.jsx";
import Games from "./games.jsx";

const routes = [
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
    children: [
      {
        path: 'games/:gamesId',
        element: <Games />
      },
    ],
  }
];

const router = createBrowserRouter(routes, {
  basename: '/buyWithBetty',
});

export default router;