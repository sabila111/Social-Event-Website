import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './HomeComponent/Home.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Detail from './details/Detail.jsx';
import Login from './header/login/Login.jsx';
import Register from './header/register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './privaeteRpute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/event.json')
      },
      {
        path: "/detail/:id",
        element: <PrivateRoute><Detail></Detail></PrivateRoute>,
        loader: () => fetch('/event.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
