import { compose, applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root.reducer";

//Root Reducer (for state Value)

const middleWare = [logger];

const composeEnchancers = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined, composeEnchancers)