import { createBrowserRouter, Navigate } from "react-router-dom";

import Homepage from "./homepage.jsx";
import Shop from "./shop.jsx";
import ErrorPage from "./errorpage.jsx";
import Games from "./games.jsx";
import Game from "./game.jsx";
import MainShop from "./mainShop.jsx";

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
        index: true,
        element: <Navigate to='games' />
      },
      {
        path: 'games',
        element: <MainShop />,
        children: [
          {
            index: true,
            element: <Navigate to='All time top' />,
          },
          {
            path: ':gamesId',
            element: <Games />
          }
        ]
      },
      {
        path: 'game/:gameId',
        element: <Game />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  basename: '/buyWithBetty',
});

export default router;