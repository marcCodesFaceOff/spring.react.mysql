import { combineReducers } from "redux";
import rosterReducer from "./table/rosterReducer";

const rootReducer = combineReducers({
  roster: rosterReducer,
});

export default rootReducer;