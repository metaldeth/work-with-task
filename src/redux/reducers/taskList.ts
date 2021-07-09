import { FetchTaskList } from "../../types/server/taskList";
import * as ActionTypesTaskList from "../actions/taskListTypes";
import * as ActionTypesTask from "../actions/taskTypes";
import * as typesTaskList from "../constans/taskList";
import * as typesTask from "../constans/task";


export type TaskListState = {
    list: FetchTaskList[],
    isLoaded: boolean,
    selectId: number | null,
    listOfTaskByList: Record<number, number[]>;
}

const initState: TaskListState = {
    list:[],
    isLoaded: false,
    selectId: null,
    listOfTaskByList: {},
}

export const taskListReducer = (
    state: TaskListState = initState,
    actions: ActionTypesTaskList.Union | ActionTypesTask.Union
): TaskListState => {
    switch (actions.type) {
        case typesTaskList.TASK_LIST_RES: {
            return {
                ...state,
                list: actions.payload,
                isLoaded: true
            }
        }
        case typesTaskList.CREATE_TASK_LIST_RES: {
            return {
                ...state,
                list: [...state.list, actions.payload]
            }
        }
        case typesTaskList.EDIT_TASK_LIST_RES: {
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
        case typesTaskList.REMOVE_TASK_LIST_RES: {
            const { id } = actions

            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            };
            
        }
        case typesTaskList.SELECT_TASK_LIST: {
            const { id } = actions

            return{
                ...state,
                selectId: id
            }
        }
        case typesTask.FETCH_TASK_BY_LIST_RES: {
            const { payload, taskListId } = actions;
            const listOfTaskId: number[] = [];
            payload.forEach(item => {
                listOfTaskId.push(item.id);
            })
            return{
                ...state,
                listOfTaskByList: {
                    ...state.listOfTaskByList,
                    [taskListId]: listOfTaskId
                },
            }
        }
        case typesTask.CREATE_TASK_RES: {
            const { payload, taskListId } = actions
            return {
                ...state,
                listOfTaskByList: {
                    ...state.listOfTaskByList,
                    [taskListId]: [
                        ...state.listOfTaskByList[taskListId],
                        payload.id
                    ]
                }
            }
        }
        case typesTask.REMOVE_TASK_RES: {
            const { taskListId, taskId } = actions
            return{
                ...state,
                listOfTaskByList: {
                    ...state.listOfTaskByList,
                    [taskListId]: state.listOfTaskByList[taskListId].filter(item => item !== taskId)
                }
            }
        }
        default:
            return state;
    }
}