import { FetchTaskList } from "../../types/server/taskList";
import * as ActionTypes from "../actions/taskListTypes";
import * as types from "../constans/taskList";

export type TaskListState = {
    list: FetchTaskList[],
    isLoaded: boolean,
    selectId: number | null
}

const initState: TaskListState = {
    list:[],
    isLoaded: false,
    selectId: null
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
            if (index === null) return state;

            const updateList: FetchTaskList[] = [
                ...state.list.slice(0, index),
                payload,
                ...state.list.slice(index + 1),
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
        case types.SELECT_TASK_LIST: {
            const { id } = actions

            return{
                ...state,
                selectId: id
            }
        }
        default:
            return state;
    }
}