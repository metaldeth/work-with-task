import { useSelector } from "react-redux" 
import { ApplicationState, store } from "../../../redux/store";
import { Task } from "../task";
import { useDispatch } from "react-redux";
import './taskList.scss'
import { selectTasksByTaskList } from "../../../redux/selectors/tasks";
import { selectTaskList } from "../../../redux/selectors/selectTaskList";

export const TaskList = () => {
    const taskListId = useSelector((state: ApplicationState) => state.taskList.selectId);
    const listOfTask = useSelector(selectTasksByTaskList(taskListId));
    const taskListName = useSelector(selectTaskList(taskListId));
    const dispatch = useDispatch();

    return (
        <div className='content'>
            <h3>{taskListName}</h3>
            {listOfTask.map((task) => {
                return(
                    <Task
                        key={task.id}
                        task={task}
                    />
                )
            })}
            
        </div>
    )
}