import { createStore, compose, StoreEnhancer, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";
import * as middlewares from './middlewares'

export type ApplicationState = ReturnType<typeof rootReducer>

type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: () => StoreEnhancer<unknown, {}>
    }

const isReduxDevtoolsExtenstionExist = (arg: Window | WindowWithDevTools): arg is WindowWithDevTools  => {
    return  '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in arg;
}

const enhancer: any = isReduxDevtoolsExtenstionExist(window) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;


export const store = createStore(rootReducer, enhancer(applyMiddleware(...Object.values(middlewares))));
