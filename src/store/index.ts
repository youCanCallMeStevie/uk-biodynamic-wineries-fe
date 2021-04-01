import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import vineyardReducer from "./reducers/vineyardReducer";
import alertReducer from "./reducers/alertReducer";
import userReducer from "./reducers/userReducer";
import modalReducer from "./reducers/modalReducer";
import nightModeReducer from "./reducers/nightModeReducer";
import moonReducer from "./reducers/moonReducer";
import mapReducer from "./reducers/mapReducer";

const rootReducer= combineReducers({
    vineyard: vineyardReducer,
    user: userReducer,
    moon: moonReducer,
    modal: modalReducer,
    alert: alertReducer,
    nightMode: nightModeReducer,
    map: mapReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState= ReturnType<typeof rootReducer>;

export default store;