import { FetchTask } from "../../types/server/task";
import * as ActionTypes from "../actions/taskTypes";
import * as types from "../constans/task";

export type TaskState = {
    // Мапа всех тасков хранимая по id
    mapOfTaskById: Record<number, FetchTask>;
    // Мапа статуса загрузки по taskListId
    loadStatusByList: Record<number, boolean>;
    // isLoaded: boolean
}

const initState: TaskState = {
    mapOfTaskById: {},
    loadStatusByList: {}
}

export const taskReducer = (
    state: TaskState = initState,
    actions: ActionTypes.Union
): TaskState => {
    switch (actions.type) {
        case types.FETCH_TASK_BY_LIST_REQ: {
            const { taskListId } = actions;
            return {
                ...state,
                loadStatusByList: {
                    ...state.loadStatusByList,
                    [taskListId]: false
                }
            }
        }
        case types.FETCH_TASK_BY_LIST_RES: {
            const { payload, taskListId } = actions;
            const updateMapOfTaskById = { ...state.mapOfTaskById };
            const listOfTaskId: number[] = [];
            payload.forEach(item => {
                updateMapOfTaskById[item.id] = item;
                listOfTaskId.push(item.id);
            })

            return {
                ...state,
                mapOfTaskById: updateMapOfTaskById,
                loadStatusByList: {
                    ...state.loadStatusByList,
                    [taskListId]: true
                }
            }
        }
        case types.CREATE_TASK_RES: {
            const { payload } = actions
            
            return{
                ...state,
                mapOfTaskById: {
                    ...state.mapOfTaskById,
                    [payload.id]: payload
                }
            }
        }
        case types.EDIT_TASK_RES: {
            const { payload } = actions

            return{
                ...state,
                mapOfTaskById: {
                    ...state.mapOfTaskById,
                    [payload.id]: payload
                }
            }
        }
        case types.REMOVE_TASK_RES: {
            const { taskId } = actions

            const updateMapOfTaskById = { ...state.mapOfTaskById };
            delete updateMapOfTaskById[taskId];

            return{
                ...state,
                mapOfTaskById: updateMapOfTaskById,
            }
        }
        default:
            return state;
    }
};