import { FetchTask } from "../../types/server/task";
import * as ActionTypes from "../actions/taskTypes";
import * as types from "../constans/task";
import { REQUEST_ERROR } from "../constans/system";

export type TaskState = {
    // Мапа всех тасков хранимая по id
    mapOfTaskById: Record<number, FetchTask>;
    // Мапа статуса загрузки по taskListId
    loadStatusByList: Record<number, boolean>;
    // Мапа списка id тасков по taskListId
    listOfTaskByList: Record<number, number[]>;
}

const initState: TaskState = {
    mapOfTaskById: {},
    loadStatusByList: {},
    listOfTaskByList: {}
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
                listOfTaskByList: {
                    ...state.listOfTaskByList,
                    [taskListId]: listOfTaskId
                },
                loadStatusByList: {
                    ...state.loadStatusByList,
                    [taskListId]: true
                }
            }
        }
        case types.CREATE_TASK_RES: {
            const { payload, taskListId } = actions
            
            return{
                ...state,
                mapOfTaskById: {
                    ...state.mapOfTaskById,
                    [payload.id]: payload
                },
                listOfTaskByList: {
                    ...state.listOfTaskByList,
                    [taskListId]: [
                        ...state.listOfTaskByList[taskListId],
                        payload.id
                    ]
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
            const { taskListId, taskId } = actions

            const updateMapOfTaskById = { ...state.mapOfTaskById };
            delete updateMapOfTaskById[taskId];

            return{
                ...state,
                mapOfTaskById: updateMapOfTaskById,
                listOfTaskByList: {
                    ...state.listOfTaskByList,
                    [taskListId]: state.listOfTaskByList[taskListId].filter(item => item !== taskId)
                }
            }
        }
        default:
            return state;
    }
};