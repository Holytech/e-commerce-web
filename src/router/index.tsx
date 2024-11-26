import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes);

export { router };
