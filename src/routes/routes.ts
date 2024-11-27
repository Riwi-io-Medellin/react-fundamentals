import { createBrowserRouter } from "react-router";
import { Layout } from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Container from "../pages/container/Container";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "home", Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "form", Component: Container },
      { 
        path: "prueba",
        Component: Login,
        children: [
          {path: "test", Component: Register}
        ]
      },

    ],
  },
])