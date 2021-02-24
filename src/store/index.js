import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
// Actions
import { fetchClass } from "./actions/classActions";
import { fetchGym } from "./actions/gymActions";
import { checkForToken } from "./actions/authActions";
import { fetchType } from "./actions/typeActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchGym());
store.dispatch(fetchClass());
store.dispatch(fetchType());
store.dispatch(checkForToken());
export default store;
