import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./page/products/Products.jsx";
import AboutUs from "./page/about-us/AboutUs.jsx";
import Layout from "./Components/layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      }
    ]
  }
  // {
  //   path: "/products",
  //   element: <Products />
  // },
  // {
  //   path: "/about-us",
  //   element: <AboutUs />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
