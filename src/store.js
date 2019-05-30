import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";

const initialState = {
  loading: false,
  loaded: false,
  posts: [],
  error: null
};

const middleWare = applyMiddleware(thunk, logger);
const store = createStore(reducer, initialState, middleWare);

export default store;
