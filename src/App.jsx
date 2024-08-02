// src/App.jsx
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/router/index";
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default App;
