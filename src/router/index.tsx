import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import SignUp from "../pages/signUp";
import Login from "../pages/login"; 

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> }, 
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes);

export { router };
