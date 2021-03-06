import { ApplicationState } from "../store"


export const selectTaskList = (taskListId: number | null) => (state: ApplicationState) => {
    if (taskListId === null) return null;
    return state.taskList.list.find(item => item.id === taskListId)
}

export const selectTaskListId = (state: ApplicationState) => {
    if (!!state.taskList.selectId) return state.taskList.selectId
    return null
}

export const selectListOfTaskList = () => (state: ApplicationState) => {
    return state.taskList.list
}