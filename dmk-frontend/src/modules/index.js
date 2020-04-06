// Redux
import { combineReducers } from "redux";

// Units
import auth from "Modules/units/Auth";
import users from "Modules/units/Users";

export default combineReducers({
  auth,
  users
});
