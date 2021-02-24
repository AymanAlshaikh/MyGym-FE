import { combineReducers } from "redux";
import gymReducer from "./gymReducer";
import classReducer from "./classReducer";
import authReducer from "./authReducer";
import typeReducer from "./typeReducer";

const rootReducer = combineReducers({
  gymReducer,
  classReducer,
  authReducer,
  typeReducer,
});

export default rootReducer;
