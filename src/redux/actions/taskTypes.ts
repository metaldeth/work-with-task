import * as constants from "../constans/task";
import * as TaskInterfaces from "../../types/server/task";
import {RequestErrorAction} from "./system";

export type FetchTaskByListReqAction = {
    type: typeof constants.FETCH_TASK_BY_LIST_REQ,
    taskListId: number
}

export type FetchTaskByListResAction = {
    type: typeof constants.FETCH_TASK_BY_LIST_RES,
    payload: TaskInterfaces.FetchTask[],
    taskListId: number
}

export type CreateTaskReqAction = {
    type: typeof constants.CREATE_TASK_REQ,
    payload: TaskInterfaces.CreateTask,
    taskListId: number
}

export type CreateTaskResAction = {
    type: typeof constants.CREATE_TASK_RES,
    payload: TaskInterfaces.FetchTask,
    taskListId: number
}

export type EditTaskReqAction = {
    type: typeof constants.EDIT_TASK_REQ,
    payload: TaskInterfaces.EditTask,
    taskId: number,
    taskListId: number
}

export type EditTaskResAction = {
    type: typeof constants.EDIT_TASK_RES,
    payload: TaskInterfaces.FetchTask,
    taskListId: number
}

export type RemoveTaskReqAction = {
    type: typeof constants.REMOVE_TASK_REQ,
    taskId: number,
    taskListId: number
}

export type RemoveTaskResAction = {
    type: typeof constants.REMOVE_TASK_RES,
    taskId: number,
    taskListId: number
}

export type SelectTaskAction = {
    type: typeof constants.SELECT_TASK,
    taskId: number | null
}

// export type FetchCollectionTask = {
//     type: typeof constants.FETCH_COLLECTION_TASK,
//     taskListId: number
// }

export type Union = 
FetchTaskByListReqAction
|FetchTaskByListResAction
|CreateTaskReqAction
|CreateTaskResAction
|EditTaskReqAction
|EditTaskResAction
|RemoveTaskReqAction
|RemoveTaskResAction
|RequestErrorAction
|SelectTaskAction
// |FetchCollectionTask