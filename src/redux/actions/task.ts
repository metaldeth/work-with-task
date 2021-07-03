import * as TaskInterfaces from "../../types/server/task";
import * as constants from "../constans/task";
import * as ActionType from './taskTypes';

export const fetchTaskReqAction = (taskListId: number):ActionType.FetchTaskByListReqAction => ({
    type: constants.FETCH_TASK_BY_LIST_REQ,
    taskListId
})

export const fecthTaskResAction = (payload: TaskInterfaces.FetchTask[], taskListId: number): ActionType.FetchTaskByListResAction => ({
    type: constants.FETCH_TASK_BY_LIST_RES,
    payload,
    taskListId
})

export const createTaskReqAction = (payload: TaskInterfaces.CreateTask, taskListId: number): ActionType.CreateTaskReqAction => ({
    type: constants.CREATE_TASK_REQ,
    payload,
    taskListId
})

export const createTaskResAction = (payload: TaskInterfaces.FetchTask, taskListId: number): ActionType.CreateTaskResAction => ({
    type: constants.CREATE_TASK_RES,
    payload,
    taskListId
})

export const editTaskReqAction = (payload: TaskInterfaces.EditTask, taskId: number, taskListId: number): ActionType.EditTaskReqAction => ({
    type: constants.EDIT_TASK_REQ,
    payload,
    taskId,
    taskListId
})

export const editTaskResAction = (payload: TaskInterfaces.FetchTask, taskListId: number): ActionType.EditTaskResAction => ({
    type: constants.EDIT_TASK_RES,
    payload,
    taskListId
})

export const removeTaskReqAction = (taskId: number, taskListId: number): ActionType.RemoveTaskReqAction => ({
    type: constants.REMOVE_TASK_REQ,
    taskId,
    taskListId
})

export const removeTaskResAction = (taskListId: number, taskId: number): ActionType.RemoveTaskResAction => ({
    type: constants.REMOVE_TASK_RES,
    taskId,
    taskListId
})

// export const fectchCollectionTask = (taskListId: number):ActionType.FetchCollectionTask => ({
//     type: constants.FETCH_COLLECTION_TASK,
//     taskListId
// })