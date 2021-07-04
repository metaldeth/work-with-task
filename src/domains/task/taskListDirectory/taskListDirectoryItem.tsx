import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { fetchTaskListReqAction, selectTaskListAction, editTaskListReqAction, removeTaskListReqAction } from "../../../redux/actions/taskList";
import { fetchTaskReqAction } from "../../../redux/actions/task";
import { FC } from "react"
import { useState } from "react";

type TaskListProps = {
    caption: string,
    id: number
}

export const TaskListDirectoryItem: FC<TaskListProps> = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [caption, setCaption] = useState(props.caption)
    const [active, setActive] = useState(true)

    const selectTaskList = (id: number) => {
        dispatch(selectTaskListAction(id))
        dispatch(fetchTaskReqAction(id))
        history.push(`/taskList`)
    }

    const editTaskList = () => {
        const payload = {caption: caption}
        dispatch(editTaskListReqAction(payload, props.id))
        selectMode()
        // dispatch(fetchTaskListReqAction())
    }

    const removeTaskList = () => {
        dispatch(removeTaskListReqAction(props.id))
    }

    const selectMode = () => {
        setActive(!active)
        setCaption(props.caption)
    }

    return(
        <div className='taskListDirectury__item'>
            <div className='taskList'  onClick={() => selectTaskList(props.id)}>
                <input 
                    value={caption} 
                    type='text' 
                    className='taskList__input' 
                    disabled={active}
                    onChange={(e) => setCaption(e.target.value)}
                />
            </div>
            <button
                disabled={active}
                className='taskList__button'
                onClick={editTaskList}
            >save</button>
            <button
                className='taskList__button'
                onClick={selectMode}
            >{active ? 'edit' : 'cancel'}</button>
            <button
                className='taskList__button'
                onClick={removeTaskList}
            >del</button>
        </div>
    )
}