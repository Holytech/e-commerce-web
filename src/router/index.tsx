import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import About from "../pages/about";
import Contact from "../pages/contact";
import AppLayout from "../components/AppContainer";
import LogIn from "../pages/login";
import SignUp from "../pages/signUp";
import AuthContainer from "../components/auth/AuthContainer";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthContainer />,
    children: [
      { path: "/auth/login", element: <LogIn /> },
      { path: "/auth/signup", element: <SignUp /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };
