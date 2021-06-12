import { FetchTaskList } from "../../types/server/taskList";
import * as ActionTypes from "../actions/taskListTypes";
import * as types from "../constans/taskList";
import { REQUEST_ERROR } from "../constans/system";

export type TaskListState = {
    list: FetchTaskList[],
    isLoaded: boolean
}

const initState: TaskListState = {
    list:[],
    isLoaded: false
}

export const taskListReducer = (
    state: TaskListState = initState,
    actions: ActionTypes.Union
): TaskListState => {
    switch (actions.type) {
        case types.TASK_LIST_RES: {
            return {
                ...state,
                list: actions.payload,
                isLoaded: true
            }
        }
        case types.CREATE_TASK_LIST_RES: {
            return {
                ...state,
                list: [...state.list, actions.payload]
            }
        }
        case types.EDIT_TASK_LIST_RES: {
            const { payload } = actions

            const index = state.list.findIndex(item => item.id === payload.id);
            if (index === -1) return state;

            const updateList: FetchTaskList[] = [
                ...state.list.splice(0, index),
                payload,
                ...state.list.splice(index),
            ];

            return {
                ...state,
                list: updateList
            }
        }
        case types.REMOVE_TASK_LIST_RES: {
            const { id } = actions

            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            };
            
        }
        default:
            return state;
    }
}