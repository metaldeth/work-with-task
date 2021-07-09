import { ApplicationState } from "../store";


export const listOfTaskList = () => (state: ApplicationState) => {
    return state.taskList.list
}