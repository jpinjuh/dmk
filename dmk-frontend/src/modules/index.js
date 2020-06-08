// Redux
import { combineReducers } from "redux";

// Units
import auth from "Modules/units/Auth";
import users from "Modules/units/Users";
import cities from "Modules/units/Cities";
import districts from "Modules/units/Districts";
import states from "Modules/units/States";
import permissions from "Modules/units/Permissions";
import privileges from "Modules/units/Privileges";
import roles from "Modules/units/Roles";
import archdioceses from "Modules/units/Archdioceses";
import persons from "Modules/units/Persons";
import baptized from "Modules/units/Baptized";
import validation from "Modules/units/Validation";

export default combineReducers({
  auth,
  users,
  cities,
  districts,
  states,
  permissions,
  privileges,
  roles,
  archdioceses,
  persons,
  baptized,
  validation
});
