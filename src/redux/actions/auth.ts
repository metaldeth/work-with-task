import * as AuthInterfaces from "../../types/server/auth";
import * as constants from "../constans/auth";
import * as ActionType from './authTypes';

export const singInReq = (payload: AuthInterfaces.SingInUser): ActionType.SingInReqAction => ({
    type: constants.SING_IN_REQ,
    payload
});

export const singInRes = (): ActionType.SingInResAction => ({
    type: constants.SING_IN_RES,
});

export const singUpReq = (payload: AuthInterfaces.SingUpUser): ActionType.SingUpReqAction => ({
    type: constants.SING_UP_REQ,
    payload
});

export const singUpRes = (): ActionType.SingUpResAction => ({
    type: constants.SING_UP_RES
})

export const fetchMainUserDataReq = (): ActionType.FetchMainUserDataReqAction => ({
    type: constants.FETCH_MAIN_USER_DATA_REQ
})

export const fetchMainUserDataRes = (payload: AuthInterfaces.MainUserData): ActionType.FetchMainUserDataResAction => ({
    type: constants.FETCH_MAIN_USER_DATA_RES,
    payload
})