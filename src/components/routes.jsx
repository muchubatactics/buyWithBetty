import { createBrowserRouter } from "react-router-dom";

import Homepage from "./homepage.jsx";
import Shop from "./shop.jsx";

const router = createBrowserRouter([
  {
    path: '/BuyWithBetty',
    element: <Homepage />,
  },
  {
    path: 'shop',
    element: <Shop />,
  }
]);

export default router;