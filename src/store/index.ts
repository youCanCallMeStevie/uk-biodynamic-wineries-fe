import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

// import vineyardReducer from "./reducers/vineyardReducer";
import alertReducer from "./reducers/alertReducer";
import userReducer from "./reducers/userReducer";

const rootReducer= combineReducers({
    // vineyard: vineyardReducer,
    alert: alertReducer,
    user: userReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState= ReturnType<typeof rootReducer>;

export default store;