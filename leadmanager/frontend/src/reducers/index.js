// Reducer is basically a function that takes in an action and evaluates it and it
// sends down a certain state depending on what that action does

import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  leads,
  errors,
  messages,
  auth
});
