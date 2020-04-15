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
const Roles = lazy(() => import("Pages/roles/index.js"));
const Permissions = lazy(() => import("Pages/permissions/index.js"));
const Privileges = lazy(() => import("Pages/privileges/index.js"));
const Districts = lazy(() => import("Pages/districts/index.js"));
const Cities = lazy(() => import("Pages/cities/index.js"));
const States = lazy(() => import("Pages/states/index.js"));

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
    id: "reset",
    title: "Promjena Lozinke",
    description: "Password reset section",
    path: "reset",
    component: PasswordResetLayout
  },
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
  },
  {
    id: "users",
    title: "Users",
    description: "Users desc",
    path: "korisnici",
    component: Users
  },
  {
    id: "role",
    title: "Role",
    description: "Roles section",
    path: "role",
    component: Roles,
  },
  {
    id: "prava",
    title: "Permisije",
    description: "Permissions section",
    path: "prava",
    component: Permissions,
  },
  {
    id: "privileges",
    title: "Privilegije",
    description: "Privileges section",
    path: "privilegije",
    component: Privileges,
  },
  {
    id: "zupe",
    title: "Župe",
    description: "Districts section",
    path: "zupe",
    component: Districts
  },
  {
    id: "cities",
    title: "Gradovi",
    description: "Cities section",
    path: "gradovi",
    component: Cities
  },
  {
    id: "states",
    title: "Države",
    description: "States section",
    path: "drzave",
    component: States
  }
];
