import { ApplicationState } from "../store"


export const selectTaskList = (taskListId: number | null) => (state: ApplicationState) => {
    if (taskListId === null) return null;
    return state.taskList.list.find(item => item.id === taskListId)?.caption
}