import { request, Method } from "../utils/request";
import { ACCESS_TOKEN } from '../constants/system'
import {
    MainUserData,
    SingInUser,
    SingUpUser,
    TokenPair
} from "../types/server/auth";

export const fetchMainUserData = (): Promise<MainUserData> => {
    return request<undefined, MainUserData>('/auth', Method.GET);
}

export const singUpUser = (signUpData: SingUpUser): Promise<void> => {
    return request<SingUpUser,undefined>('/auth/signUp', Method.POST, signUpData);
}

export const singInUser = (signInData: SingInUser): Promise<void> => {
    return request<SingInUser, TokenPair>('/auth/signIn', Method.POST, signInData)
        .then((tokenPair) => {
            localStorage.setItem(ACCESS_TOKEN, tokenPair.accessToken);
        });
}