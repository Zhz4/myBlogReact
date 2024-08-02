import React from "react";
import Layout from "@/layout/index.jsx";
import Login from "@/views/login/index.jsx";
import dynamicRoutes from "./dynamicRoutes.jsx";
const router = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: dynamicRoutes,
  },
];

export default router;
