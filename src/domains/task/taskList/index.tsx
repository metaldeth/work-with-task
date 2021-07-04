import { useSelector } from "react-redux" 
import { ApplicationState } from "../../../redux/store";
import { Task } from "../task";
import './taskList.scss'
import { selectTasksByTaskList } from "../../../redux/selectors/tasks";
import { selectTaskList } from "../../../redux/selectors/selectTaskList";
import { TaskAdd } from "../task/taskAdd";

export const TaskList = () => {
    const taskListId = useSelector((state: ApplicationState) => state.taskList.selectId);
    const listOfTask = useSelector(selectTasksByTaskList(taskListId));
    const taskListName = useSelector(selectTaskList(taskListId));

    if (!taskListId) return null

    return (
        <div className='content'>
            <div className='taskList__head'>
                <div className='taskList__name'>{taskListName}</div>
            </div>
            {listOfTask.map((task) => {
                return(
                    <Task
                        key={task.id}
                        task={task}
                    />
                )
            })}
            <TaskAdd
                taskListId={taskListId}
            />
        </div>
    )
}