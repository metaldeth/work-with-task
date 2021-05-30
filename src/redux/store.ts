import { createStore, StoreEnhancer, applyMiddleware } from 'redux';
import { rootReducer, ApplicationState as ApplicationStateInner } from "./reducers";
import * as middlewares from './middlewares'

export type ApplicationState = ApplicationStateInner;

type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
    }

const isReduxDevtoolsExtenstionExist = (arg: Window | WindowWithDevTools): arg is WindowWithDevTools  => {
    return  '__REDUX_DEVTOOLS_EXTENSION__' in arg;
}

const enhancer = isReduxDevtoolsExtenstionExist(window) ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined

export const store = createStore(rootReducer, enhancer as any, applyMiddleware(...Object.values(middlewares)));