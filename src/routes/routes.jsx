import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/dashboard/Cart";
import Wishlist from "../pages/dashboard/Wishlist";
import Users from "../pages/dashboard/Users";

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
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "users",
        element: <Users />,
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
