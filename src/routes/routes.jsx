import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Registration />,
  },
]);
