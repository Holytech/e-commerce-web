import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import About from "../pages/about";
import Contact from "../pages/contact";
import AppLayout from "../components/AppContainer";
import SingleProductCard from "../components/common/single-product-card/single-product-card";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <SingleProductCard /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };
