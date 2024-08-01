// src/router/index.js
import React from "react";
import Login from "@/views/login/index.jsx";
import Home from "@/views/home/index.jsx";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/home", element: Home },
];

export default routes;
