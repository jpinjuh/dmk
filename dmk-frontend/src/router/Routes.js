/* eslint-disable import/no-unresolved */
// React
import { lazy } from "react";

// Routes (Non splitted)
import LoginLayout from "Layouts/LoginLayout";
import MainLayout from "Layouts/MainLayout";

// Routes (Code splitting)
const Users = lazy(() => import("Pages/users/index.js"));
const Roles = lazy(() => import("Pages/roles/index.js"));
const Permissions = lazy(() => import("Pages/permissions/index.js"));
const Privileges = lazy(() => import("Pages/privileges/index.js"));
const Districts = lazy(() => import("Pages/districts/index.js"));
const Cities = lazy(() => import("Pages/cities/index.js"));
const States = lazy(() => import("Pages/states/index.js"));
const Archdioceses = lazy(() => import("Pages/archdioceses/index.js"));
const Persons = lazy(() => import("Pages/persons/index.js"));
const PersonDetails = lazy(() => import("Pages/persons/personDetails.js"));
const Baptized = lazy(() => import("Pages/baptized/index.js"));
const Deceased = lazy(() => import("Pages/deceased/index.js"));
const Marriages = lazy(() => import("Pages/marriages/index.js"));
const Chrisms = lazy(() => import("Pages/chrisms/index.js"));

/**
|--------------------------------------------------
| PUBLIC ROUTES
|--------------------------------------------------
*/

export const publicRoutes = [
  {
    id: "login",
    title: "Prijava",
    description: "Log in section",
    path: "",
    exact: true,
    component: LoginLayout
  }
];

/**
|--------------------------------------------------
| PRIVATE ROUTES
|--------------------------------------------------
*/

export const privateRoutes = [
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
    path: "župe",
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
    path: "države",
    component: States
  },
  {
    id: "archdioceses",
    title: "Biskupije",
    description: "Archdioceses section",
    path: "biskupije",
    component: Archdioceses
  },
  {
    id: "persons",
    title: "Osobe",
    description: "persons section",
    path: "osobe",
    exact: true,
    component: Persons
  },
  {
    id: "personsDetails",
    title: "Detalji osobe",
    description: "person details section",
    path: "osobe/:personId",
    component: PersonDetails
  },
  {
    id: "baptized",
    title: "Krsni",
    description: "Baptized section",
    path: "krsni",
    component: Baptized
  },
  {
    id: "deceased",
    title: "Smrtni",
    description: "Deceased section",
    path: "smrtni",
    component: Deceased
  },
  {
    id: "marriages",
    title: "Vjenčani",
    description: "Marriages section",
    path: "vjenčani",
    component: Marriages
  },
  {
    id: "chrisms",
    title: "Krizmena cedulja",
    description: "Chrisms section",
    path: "krizmena",
    component: Chrisms
  }
];
