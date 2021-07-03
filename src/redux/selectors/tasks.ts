import { ApplicationState } from "../store"


export const selectTasksByTaskList = (taskListId: number | null) => (state: ApplicationState) => {
  if (!taskListId) return [];
  const list = state.task.listOfTaskByList[taskListId] ?? [];
  return list.map(id => state.task.mapOfTaskById[id]);
}