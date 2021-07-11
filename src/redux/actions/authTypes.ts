import * as constants from "../constans/auth";
import * as AuthInterfaces from "../../types/server/auth";
import {RequestErrorAction} from "./system";

export type SingInReqAction = {
    type: typeof constants.SING_IN_REQ,
    payload: AuthInterfaces.SingInUser
}

export type SingInResAction = {
    type: typeof constants.SING_IN_RES,
}

export type SingUpReqAction = {
    type: typeof constants.SING_UP_REQ,
    payload: AuthInterfaces.SingUpUser
}

export type SingUpResAction = {
    type: typeof constants.SING_UP_RES
}

export type FetchMainUserDataReqAction = {
    type: typeof constants.FETCH_MAIN_USER_DATA_REQ
}

export type FetchMainUserDataResAction = {
    type: typeof constants.FETCH_MAIN_USER_DATA_RES,
    payload: AuthInterfaces.MainUserData
}

export type LogOutAction = {
    type: typeof constants.LOG_OUT
}

export type Union = 
    SingInReqAction
    | SingInResAction
    | SingUpReqAction
    | SingUpResAction
    | FetchMainUserDataReqAction
    | FetchMainUserDataResAction
    | RequestErrorAction
    | LogOutAction