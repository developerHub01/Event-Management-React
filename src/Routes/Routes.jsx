import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import ProfilePage from "../Pages/ProfilePage";
import PrivateRoute from "../Components/PrivateRoute";
import ServicePage from "../Pages/ServicePage";
import AboutPage from "../Pages/AboutPage";
import MyEventPage from "../Pages/MyEventPage";
import EventPage from "../Pages/EventPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/event",
        element: <EventPage />,
      },
      {
        path: "/myevent",
        element: (
          <PrivateRoute>
            <MyEventPage />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServicePage />,
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
