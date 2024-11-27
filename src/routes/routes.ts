import { createBrowserRouter } from "react-router";
import { Layout } from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "home", Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
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