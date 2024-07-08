import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css';

import router from './routes.jsx';

import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
