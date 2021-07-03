import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { taskListReqAction, selectTaskListAction } from "../../../redux/actions/taskList";
import { fetchTaskReqAction } from "../../../redux/actions/task";
import { FC } from "react"

type TaskListProps = {
    caption: string,
    id: number
}

export const TaskListDirectoryItem: FC<TaskListProps> = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const selectTaskList = (id: number) => {
        dispatch(selectTaskListAction(id))
        dispatch(fetchTaskReqAction(id))
        history.push(`/taskList`)
    }

    return(
        <button className='taskList-button' onClick={() => selectTaskList(props.id)}>
            <div>
                {props.caption}
            </div>
        </button>
    )
}