import { request, Method } from "../utils/request";
import {
    CreateTaskList,
    FetchTaskList,
    EditTaskList
} from "../types/server/taskList";

export const fetchTaskList = (): Promise<FetchTaskList[]> => {
    return request<undefined, FetchTaskList[]>('/task', Method.GET);
}

export const createTaskList = (createTaskListData: CreateTaskList): Promise<FetchTaskList> => {
    return request<CreateTaskList, FetchTaskList>('/task', Method.POST, createTaskListData);
}

export const editTaskList = (taskListId: number, editTaskListData: EditTaskList): Promise<FetchTaskList> => {
    return request<EditTaskList, FetchTaskList>(`/task/${taskListId}`, Method.PUT, editTaskListData);
}

export const removeTaskList = (taskListId: number):Promise<void> => {
    return request<undefined, undefined>(`/task/${taskListId}`, Method.DELETE);
}