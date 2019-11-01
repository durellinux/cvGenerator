import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, RootState } from "./reducers";

export const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(reduxThunk, router);

export function configureStore(initialState?: RootState) {
    return createStore(rootReducer, initialState, enhancer);
}
