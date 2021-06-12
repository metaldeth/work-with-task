import * as TaskListInterfaces from "../../types/server/taskList";
import * as constants from "../constans/taskList";
import * as ActionType from './taskListTypes';

export const taskListReqAction = ():ActionType.TaskListReqAction => ({
    type: constants.TASK_LIST_REQ
})

export const taskListResAction = (payload:TaskListInterfaces.FetchTaskList[]):ActionType.TaskListResAction => ({
    type: constants.TASK_LIST_RES,
    payload
})

export const createTaskListReqAction = (payload: TaskListInterfaces.CreateTaskList): ActionType.CreateTaskListReqAction => ({
    type: constants.CREATE_TASK_LIST_REQ,
    payload
})

export const createTaskListResAction = (payload: TaskListInterfaces.FetchTaskList): ActionType.CreateTaskListResAction => ({
    type: constants.CREATE_TASK_LIST_RES,
    payload
})

export const editTaskListReqAction = (payload: TaskListInterfaces.EditTaskList, id: number): ActionType.EditTaskListReqAction => ({
    type: constants.EDIT_TASK_LIST_REQ,
    payload,
    id
})

export const editTaskListResAction = (payload: TaskListInterfaces.FetchTaskList): ActionType.EditTaskListResAction => ({
    type: constants.EDIT_TASK_LIST_RES,
    payload
})

export const removeTaskListReqAction = (id: number): ActionType.RemoveTaskListReqAction => ({
    type: constants.REMOVE_TASK_LIST_REQ,
    id
})

export const removeTaskListResAction = (id: number): ActionType.RemoveTaskListResAction => ({
    type: constants.REMOVE_TASK_LIST_RES,
    id
})



