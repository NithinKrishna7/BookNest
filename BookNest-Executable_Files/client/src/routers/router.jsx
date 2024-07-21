import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Confirmation from "../pages/Confirmation/Confirmation";
import Payment from "../pages/Payment/Payment";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import { DashboardLayout_admin } from "../Dashboard/DashboardLayout_admin";
import Dashboard_admin from "../Dashboard/Dashboard_admin";
import Dashboard_seller from "../Dashboard/Dashboard_seller";

import { DashboardLayout_seller } from "../Dashboard/DashboardLayout_seller";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import SignleBook from "../pages/shared/SignleBook";
import UploadBook from "../Dashboard/UploadBook";
import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/confirmation/:id",
        element: <Confirmation />,
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
      {
        path: "/book/:id",
        element: <SignleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },

  {
    path: "/admin/dashboard_admin",
    element: (
      <PrivateRoute>
        <DashboardLayout_admin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard_admin",
        element: (
          <PrivateRoute>
            <Dashboard_admin />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard_admin/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard_admin/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },

  {
    path: "/admin/dashboard_seller",
    element: (
      <PrivateRoute>
        <DashboardLayout_seller />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard_seller",
        element: (
          <PrivateRoute>
            <Dashboard_seller />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard_seller/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard_seller/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-user",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
