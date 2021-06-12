import { request, Method } from "../utils/request";
import {
    CreateTask,
    EditTask,
    FetchTask

} from "../types/server/task";

export const fetchTask = (taskListId: number): Promise<FetchTask[]> => {
    return request<undefined, FetchTask[]>(`/task/${taskListId}/list`, Method.GET);
}

export const createTask = (taskListId: number, createTaskData: CreateTask): Promise<FetchTask> => {
    return request<CreateTask, FetchTask>(`/task/${taskListId}/list`, Method.POST, createTaskData);
}

export const editTask = (taskListId: number, taskId: number, editTaskData: EditTask): Promise<FetchTask> => {
    return request<EditTask, FetchTask>(`/task/${taskListId}/list/${taskId}`, Method.PUT, editTaskData);
}

export const removeTask = (taskListId: number, taskId: number): Promise<void> => {
    return request<undefined, undefined>(`/task/${taskListId}/list/${taskId}`,)
}