/* eslint-disable import/no-unresolved */
// React
import { lazy } from "react";

// Routes (Non splitted)
import LoginLayout from "Layouts/LoginLayout";

// Routes (Code splitting)
const Home = lazy(() => import("Pages/home/index.js"));
const Admin = lazy(() => import("Pages/admin/index.js"));
const Users = lazy(() => import("Pages/users/index.js"));
const Hooks = lazy(() => import("Pages/hooks-example/index-function.js"));
const Posts = lazy(() => import("Pages/posts/index.js"));

/**
|--------------------------------------------------
| PUBLIC ROUTES
|--------------------------------------------------
*/

export const publicRoutes = [
  {
    id: "home",
    title: "Homepage",
    description: "Homepage section",
    path: "",
    exact: true,
    component: Home
  },
  {
    id: "login",
    title: "Log in",
    description: "Log in section",
    path: "login",
    component: LoginLayout
  },
  {
    id: "users",
    title: "Users",
    description: "Users desc",
    path: "users",
    component: Users
  },
  {
    id: "hooks",
    title: "Hooks",
    description: "Hooks desc",
    path: "hooks",
    component: Hooks
  },
  {
    id: "123",
    title: "Posts",
    description: "Posts desc",
    path: "posts",
    component: Posts
  }
];

/**
|--------------------------------------------------
| PRIVATE ROUTES
|--------------------------------------------------
*/

export const privateRoutes = [
  {
    id: "admin",
    title: "Dashboard",
    description: "Dashboard section",
    path: "admin",
    component: Admin
  }
];
