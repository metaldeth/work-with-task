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

export const singUpUser = (singUpData: SingUpUser): Promise<void> => {
    return request<SingUpUser,undefined>('/auth/singUp', Method.POST, singUpData);
}

export const singInUser = (singInData: SingInUser): Promise<void> => {
    return request<SingInUser, TokenPair>('/auth/singIn', Method.POST, singInData)
        .then((tokenPair) => {
            localStorage.setItem(ACCESS_TOKEN, tokenPair.accessToken);
        });
}