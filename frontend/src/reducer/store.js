import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as coinReducer } from "./coin/reducer";

const rootReducer = combineReducers({
    coinReducer
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
