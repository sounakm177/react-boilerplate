import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RequireAuth from "../components/RequireAuth";
import Guest from "../components/Guest";
import NoFound from "../pages/NoFound";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const Dashboard = lazy(() => import("../pages/Dashboard"));

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <Guest>
        <PublicLayout />
      </Guest>
    ),
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        path: "dashboard",
        element: (
          <Suspense fallback={<Loader/>}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NoFound />,
  },
]);
