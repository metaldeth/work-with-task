import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskListReqAction } from "../../../redux/actions/taskList";
import './taskListDirectory.scss'
import { TaskListDirectoryItem } from "./parts/taskListDirectoryItem";
import { TaskListAdd } from "./parts/taskListAdd";
import { selectListOfTaskList } from "../../../redux/selectors/selectTaskList";
import { selectTaskListAction, editTaskListReqAction, removeTaskListReqAction } from "../../../redux/actions/taskList";
import { fetchTaskReqAction } from "../../../redux/actions/task";

export const TaskListDirectory = () => {    
    const taskList = useSelector(selectListOfTaskList())

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTaskListReqAction())
    },[dispatch])

    const editTaskList = (caption: string, id: number) => {
        const payload = {caption: caption}
        dispatch(editTaskListReqAction(payload, id))
        // selectMode()
    } 

    return(
        <>
            {taskList.map((item) => {
                    return(
                        <TaskListDirectoryItem
                            key={item.id}
                            caption={item.caption}
                            id={item.id}
                            editTaskList={editTaskList}
                        />
                    )
                }
            )}
            <TaskListAdd/>
        </>
    )
}