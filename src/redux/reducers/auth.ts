import { MainUserData } from "../../types/server/auth";
import * as ActionTypes from "../actions/authTypes";
import * as types from "../constans/auth";
import { REQUEST_ERROR } from "../constans/system";

export type AuthState = {
    user?: MainUserData;
    isAuth: boolean;
    isSingInProccess: boolean;
    isSingUpProccess: boolean;
}

const initState: AuthState = {
    isAuth:false,
    isSingInProccess: false,
    isSingUpProccess: false,
}

export const authReducer = (
    state: AuthState = initState,
    actions: ActionTypes.Union
): AuthState => {
    switch (actions.type) {
        case types.SING_IN_REQ: {
            return {
                ...state,
                isSingInProccess: true
            }
        }
        case types.SING_IN_RES: {
            return {
                ...state,
                isSingInProccess: false,
                isAuth: true
            }
        }
        case types.SING_UP_REQ: {
            return {
                ...state,
                isSingUpProccess: true
            }
        }
        case types.SING_UP_RES: {
            return {
                ...state,
                isSingUpProccess: false,
            }
        }
        case types.FETCH_MAIN_USER_DATA_RES: {
            return {
                ...state,
                user: actions.payload
            }
        }
        case REQUEST_ERROR: {
            return {
                ...state,
                isSingInProccess: false,
                isSingUpProccess: false,
            }
        }
        default:
            return state;
    }
}