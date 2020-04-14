/* eslint-disable import/no-unresolved */
// React
import { lazy } from "react";

// Routes (Non splitted)
import LoginLayout from "Layouts/LoginLayout";
import PasswordResetLayout from "Layouts/PasswordResetLayout";
import MainLayout from "Layouts/MainLayout";

// Routes (Code splitting)
const Home = lazy(() => import("Pages/home/index.js"));
const Admin = lazy(() => import("Pages/admin/index.js"));
const Users = lazy(() => import("Pages/users/index.js"));
const Posts = lazy(() => import("Pages/posts/index.js"));
const Roles = lazy(() => import("Pages/roles/index.js"));
const Permissions = lazy(() => import("Pages/permissions/index.js"));
const Privileges = lazy(() => import("Pages/privileges/index.js"));

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
    title: "Prijava",
    description: "Log in section",
    path: "login",
    component: LoginLayout
  },
  {
    id: "role",
    title: "Roles",
    description: "Roles section",
    path: "role",
    component: Roles,
  },
  {
    id: "prava",
    title: "Permissions",
    description: "Permissions section",
    path: "prava",
    component: Permissions,
  },
  {
    id: "privileges",
    title: "Privileges",
    description: "Privileges section",
    path: "privilegije",
    component: Privileges,
  },
  {
    id: "reset",
    title: "Promjena Lozinke",
    description: "Password reset section",
    path: "reset",
    component: PasswordResetLayout
  },
  {
    id: "users",
    title: "Users",
    description: "Users desc",
    path: "users",
    component: Users
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
