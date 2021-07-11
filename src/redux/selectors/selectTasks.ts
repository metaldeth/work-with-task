import { ApplicationState } from "../store"


export const selectTasksByTaskList = (taskListId: number | null) => (state: ApplicationState) => {
  if (!taskListId) return [];
  const list = state.taskList.listOfTaskByList[taskListId] ?? [];
  return list.map(id => state.task.mapOfTaskById[id]);
}


export const selectTaskNamesByTaskList = (taskListId: number | null) => (state: ApplicationState) => {
  const taskList = selectTasksByTaskList(taskListId)(state);
  return taskList.map(item => item.caption);
}

export const selectTask = (taskId: number | null) => (state: ApplicationState) => {
  if (!taskId) return null
  return state.task.mapOfTaskById[taskId]
}

export const selectTaskId = (state: ApplicationState) => {
  return state.task.selectTaskId
}