import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskListReqAction } from "../../../redux/actions/taskList";
import './taskListDirectory.scss'
import { TaskListDirectoryItem } from "./parts/taskListDirectoryItem";
import { TaskListAdd } from "./parts/taskListAdd";
import { selectListOfTaskList } from "../../../redux/selectors/selectTaskList";

export const TaskListDirectory = () => {    
    const taskList = useSelector(selectListOfTaskList())

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTaskListReqAction())
    },[dispatch])

    return(
        <div className='taskListDirectory'>
            {taskList.map((item) => {
                    return(
                        <TaskListDirectoryItem
                            key={item.id}
                            caption={item.caption}
                            id={item.id}
                        />
                    )
                }
            )}
            <TaskListAdd/>
        </div>
    )
}