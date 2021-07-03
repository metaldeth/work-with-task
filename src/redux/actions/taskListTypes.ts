import * as constants from "../constans/taskList";
import * as TaskListInterfaces from "../../types/server/taskList";
import {RequestErrorAction} from "./system";

export type TaskListReqAction = {
    type: typeof constants.TASK_LIST_REQ,
}

export type TaskListResAction = {
    type: typeof constants.TASK_LIST_RES,
    payload: TaskListInterfaces.FetchTaskList[]
}

export type CreateTaskListReqAction = {
    type: typeof constants.CREATE_TASK_LIST_REQ,
    payload: TaskListInterfaces.CreateTaskList
}

export type CreateTaskListResAction = {
    type: typeof constants.CREATE_TASK_LIST_RES,
    payload: TaskListInterfaces.FetchTaskList
}

export type EditTaskListReqAction = {
    type: typeof constants.EDIT_TASK_LIST_REQ,
    payload: TaskListInterfaces.EditTaskList,
    id: number
}

export type EditTaskListResAction = {
    type: typeof constants.EDIT_TASK_LIST_RES,
    payload: TaskListInterfaces.FetchTaskList
}

export type RemoveTaskListReqAction = {
    type: typeof constants.REMOVE_TASK_LIST_REQ,
    id: number
}

export type RemoveTaskListResAction = {
    type: typeof constants.REMOVE_TASK_LIST_RES,
    id: number
}

export type SelectTaskListAction = {
    type: typeof constants.SELECT_TASK_LIST,
    id: number
}

export type Union = 
    TaskListReqAction
    |TaskListResAction
    |CreateTaskListReqAction
    |CreateTaskListResAction
    |EditTaskListReqAction
    |EditTaskListResAction
    |RemoveTaskListReqAction
    |RemoveTaskListResAction
    |RequestErrorAction
    |SelectTaskListAction