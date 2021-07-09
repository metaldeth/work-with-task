import { useSelector } from "react-redux" 
import { Task } from "../task";
import './taskList.scss'
import { selectTasksByTaskList } from "../../../redux/selectors/selectTasks";
import { selectTaskList, selectTaskListId } from "../../../redux/selectors/selectTaskList";
import { TaskAdd } from "../task/parts/taskAdd";
import { memo } from "react";

export const TaskList = memo(() => {
    const taskListId = useSelector(selectTaskListId);
    const listOfTask = useSelector(selectTasksByTaskList(taskListId));
    const taskList = useSelector(selectTaskList(taskListId));


    if (!taskListId) return null

    return (
        <div className='content'>
            <div className='taskList__head'>
                <div className='taskList__name'>{taskList?.caption}</div>
            </div>
            {listOfTask.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    taskListid={taskListId}
                />
            ))}
            <TaskAdd
                taskListId={taskListId}
            />
        </div>
    )
})