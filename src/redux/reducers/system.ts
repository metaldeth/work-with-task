import { FetchTask } from "../../types/server/task";
import * as ActionTypes from "../actions/system";
import * as types from "../constans/system";
import { REQUEST_ERROR } from "../constans/system";

export type SystemState = {
    hasError: boolean;
}

const initState: SystemState = {
    hasError: false,
}

export const systemReducer = (
    state: SystemState = initState,
    actions: ActionTypes.RequestErrorAction
): SystemState => {
    switch (actions.type) {
        case types.REQUEST_ERROR: {
            return {
                ...state,
                hasError: true
            }
        }
        default:
            return {
              ...state,
              hasError: false
            };
    }
};