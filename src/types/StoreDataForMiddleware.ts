import { MiddlewareAPI, Dispatch } from 'redux'
import { ApplicationState } from '../redux/store';

export type StoreDataForMiddleware = MiddlewareAPI<Dispatch, ApplicationState>;